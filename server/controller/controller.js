module.exports = {

// Store Endpoints

    all_products:(req, res) => {
        req.app.get('db').all_products().then(products => {
        res.status(200).send(products);
        }).catch((err) => {console.log(err)})
    },

    select_product:(req, res) =>{
        if(req.query.id) {
            req.app.get('db').select_product(+req.query.id).then(item => {
            res.status(200).send(item)
        })
    
        } else {
            req.app.get('db').select_product().then(items => {
                res.status(200).send(items)
            })
        }
    },

    // order:(req,res) => {
    //     req.body.id = id;
    //     id++;
    //     order.push(req.body)
    //     res.json(order)
    // }



}


