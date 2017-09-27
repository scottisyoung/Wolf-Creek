require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      cors = require('cors'),
      Auth0strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch(err => console.log(err))


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

// SERVER PORT

const PORT = 3080;
app.listen(PORT, () => console.log(`listening on port:`, PORT));
