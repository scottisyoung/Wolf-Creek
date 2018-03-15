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

    checkuser:() => {
        const db = req.app.get('db');
        db.get_cart([req.user.id]).then((cart)=>{
          if(cart[0]){
            console.log('found cart!')
          } else{
              console.log('not found')
          } 
          
        })
    },

    cart:(req, res) => {
        const db = req.app.get('db');
        const {product_id} = req.body;
        db.get_cart([req.user.id]).then((cart)=>{
            if(cart[0]){
                db.check_duplicates([product_id, cart[0].id]).then((dup)=>{
                    if(dup[0]){
                        console.log(dup[0].qty)
                        db.update_quantity([dup[0].qty + 1, dup[0].product_id]).then(()=>{
                         db.return_cart([cart[0].id]).then((cartItems)=>{
                             res.send(cartItems)
                         })
                           
                        })
                        console.log("duplicate!")
                    } else {
                        db.add_to_cart([product_id, cart[0].id]).then(()=>{
                            db.return_cart([cart[0].id]).then((cartItems)=>{
                                res.send(cartItems)
                            })
                        })
                    }
                 })
                } else{
                    db.make_order([req.user.id]).then(()=>{
                        db.get_cart([req.user.id]).then((cart)=>{
                            db.add_to_cart([product_id, cart[0].id]).then(()=>{
                                db.return_cart([cart[0].id]).then((cartItems)=>{
                                    res.send(cartItems)
                                })
                            })
                        })
                    })
                } 
            })
        },

deleteItems:(req, res) => {
    req.app.get('db').get_cart([req.user.id]).then((order) => {
        // console.log(order[0].id, req.params.id)
    req.app.get('db').deleteItems([req.params.id, order[0].id]).then(() => {
        req.app.get('db').return_cart([order[0].id]).then((cartItems)=>{
            res.send(cartItems)
    });
    });
});
}

// quantityItems:(req, res) => {
//     db.get_cart([userid]).then((cart)=>{
//         if(cart[0]){
//             db.check_duplicates([product_id, cart[0].id]).then((dup)=>{
//                 if(dup[0]){
//                     console.log(dup[0].qty)
//                     db.update_quantity([dup[0].qty + 1, dup[0].product_id]).then(()=>{
//                      db.return_cart([cart[0].id]).then((cartItems)=>{
//                          res.send(cartItems)
//                      });
//                     });
//                 }
//             });
//         }
//     })
// }

}



