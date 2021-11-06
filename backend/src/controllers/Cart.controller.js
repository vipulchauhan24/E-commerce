const productService = require('../services/Products.service');
const cartService = require('../services/Cart.service');
const jwt = require("jsonwebtoken");

const retrieveUserId = (req,res, callback) => {
    const token =
    req.body.token || req.query.token || req.headers["authorization"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decode = jwt.decode(token);
        return callback(null, decode.data.email)
    } catch (err) {
        return callback('Invalid Token');
    }
}

exports.addToCart = (req, res) =>{
    if(!req.body){
        return res.status(400).send({success:0, message:'Body cannot be empty!'})
    } else if(!req.body.product_id){
        return res.status(400).send({success:0, message:'Request does not have product id.'})
    }
    retrieveUserId(req, res, (error, userEmail)=> {
        if(error === 'Invalid Token'){
            return res.status(400).send({success:0, message:'Invalid request.'});
        }
        cartService.getUserId(userEmail, (error, id)=>{
            if(error){
                    return res.status(400).send({success:0, message:'Bad request.'});
            }
            productService.getProductById(req.body, (error, product) =>{
                if(error){
                    if(error === 'Product not found.'){
                        return res.status(400).send({success : 0, message: 'Product not found.'});
                    }
                    return res.status(400).send({success : 0, message: 'Bad request'});
                }
                const data = {...product[0].dataValues, user_id : id}
                cartService.addToCart(data, (error, message) => {
                    if(error){
                        return res.status(400).send({success : 0, message: 'Bad request'});
                    }
                    res.status(201).send({success:1, message: message});
                })
            })
        });
    })
}

exports.loadCart = (req, res) =>{
    retrieveUserId(req, res, (error, userEmail)=> {
        if(error === 'Invalid Token'){
            return res.status(400).send({success:0, message:'Invalid request.'});
        }
        cartService.getUserId(userEmail, (error, id)=>{
            if(error){
                return res.status(400).send({success:0, message:'Bad request.'});
            }
            cartService.loadCart(id, (error, cart) => {
                if(error){
                    if(error === 'Cart Empty'){
                        return res.status(400).send({success : 0, message: error});
                    }
                    return res.status(400).send({success : 0, message: 'Bad request'});
                }
                return res.status(200).send({success:1, message: 'Cart retrieved', cart: cart});
            })
        });
    })
}