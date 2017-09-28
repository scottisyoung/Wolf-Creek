require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      cors = require('cors'),
      Auth0Strategy = require('passport-auth0');

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
    successRedirect: 'http://localhost:3000/#/Store_private/',
    failureRedirect: '/auth'
}))

app.get('/auth/user', (req,res) => {
    if(!req.user) {
        return res.status(404).send("User not found");
    } else {
        return res.status(202).json(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/store')
})

// SHOP ENDPOINTS

app.get('/api/all_products', (req, res) => {
    req.app.get('db').all_products().then(products => {
    res.status(200).send(products);
    })
})

app.get('/api/select_product', (req, res) =>{
    if(req.query.id) {
        req.app.get('db').select_product(+req.query.id).then(item => {
        res.status(200).send(item)
    })

    } else {
        req.app.get('db').select_product().then(items => {
            res.status(200).send(items)
        })
    }
})



