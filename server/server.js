require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      cors = require('cors'),
      Auth0Strategy = require('passport-auth0');
      controller = require('./controller/controller');


// DATABASE

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
    const PORT = 3080;
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
    successRedirect: 'http://localhost:3000/#/Store/',
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
    res.redirect(302, 'https://scottyoung.auth0.com/v2/logout?federated?returnTo=http%3A%2F%2Fwww.example.com&client_id=67shXAGzWudTEpWyxI4B625W0FVR8FgJ')
})

// SHOP ENDPOINTS

app.get('/api/all_products', controller.all_products);
app.get('/api/select_product', controller.select_product);



// app.post('/api/addToCart', (req, res) => {
    
//     // products.push(req.body)
//     // res.json(products)
// })




