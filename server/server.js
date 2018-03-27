require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      cors = require('cors'),
      Auth0Strategy = require('passport-auth0'),
      controller = require('./controller/controller'),
      stripe = require('stripe') (process.env.STRIPE_SECRET);


// DATABASE

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
    const PORT = 3050;
    app.listen(PORT, () => console.log(`listening on port:`, PORT));
}).catch(err => console.log(err))

// AUTH0

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK},
    function(accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');  
        db.get_user([profile.identities[0].user_id]).then( res => {
            if(res[0]) {
               done(null, res[0].id)
            } else {
               db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id]).then (res => {
                   done(null, res[0].id)
               }) 
            }
        }).catch(err => console.log('err', err))
}))

passport.serializeUser(function(userId, done) {
    done(null, userId);
})

passport.deserializeUser( function(userId, done) {
    app.get('db').current_user([userId]).then(res => {
        done(null, res[0]);
    })
})

// AUTH0 ENDPOINTS

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: '/auth'
}))

app.get('/auth/user', (req,res) => {
    if(!req.user) {
        return res.status(404).send("User not found");
    } else {
        return res.status(202).json(req.user);
    }
})

app.get('/auth/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect(302, process.env.LOGOUT_REDIRECT)
})


// SHOP ENDPOINTS

app.get('/api/all_products', controller.all_products);
app.get('/api/select_product', controller.select_product);
app.post('/api/cart', controller.cart);

app.delete('/api/cart/:id', controller.deleteItems);


// STRIPE

app.post('/api/payment', function (req, res, next) {
console.log('yup this is it', req.body)
const amountArray = req.body.amount.toString().split('');
const pennies = [];
for (var i = 0; i < amountArray.length; i++) {
  if (amountArray[i] === ".") {
    if (typeof amountArray[i + 1] === "string") {
      pennies.push(amountArray[i + 1]);
    } else {
      pennies.push("0");
    }
    if (typeof amountArray[i + 2] === "string") {
      pennies.push(amountArray[i + 2]);
    } else {
      pennies.push("0");
    }
    break;
  } else {
    pennies.push(amountArray[i])
  }
}
const convertedAmt = parseInt(pennies.join(''));
const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function (err, charge) {
  if (err) return res.sendStatus(500)

}) 
})


// Hosting

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})
