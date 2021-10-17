const DB = require('../../models/db.index');
const cart = DB.cart;
const users = DB.users;

exports.addToCart = (data, callback) => {
    cart.create({
        product_id: data.product_id,
        product_name : data.product_name,
        product_description: data.product_description,
        product_image : data.product_image,
        product_rating : data.product_rating,
        category_id: data.category_id,
        product_price : data.product_price,
        user_id : data.user_id
    }).then(() =>{
        return callback(null, 'Added to cart');
    }).catch(err => {
        return callback(err);
    });
};

exports.getUserId = (email, callback) =>{
    users.findAll({
        where: {
            email: email
        }
    }).then((user)=>{
        if(user[0]){
            if(user[0].dataValues.email === `${email}`){
                return callback(null, user[0].dataValues.user_id);
            }
        } else {
            return callback("Email not found");
        }
    }).catch(err => {
        return callback(err);
    });
}

exports.loadCart = (id, callback) =>{
    cart.findAll({
        user_id : id
    }).then((cart)=>{
        if(cart[0]){
            return callback(null, cart);
        } else {
            return callback("Cart Empty");
        }
    }).catch(err => {
        return callback(err);
    });
}