
const DB = require('../../models/db.index');
const categories = DB.categories;
const products = DB.products;
exports.getCategoryByName = (category_name, callback) => {
    categories.findAll({
        where: {
            category_name: `${category_name.toLowerCase()}`
        }
    }).then((category)=>{
        if(category.length === 0){
            return callback('Category not found.', category);
        }
        return callback(null, category);
    }).catch(err => {
        return callback(err);
    });
};

exports.addProduct = (data, callback) => {
    products.create({
        product_name : data.product_name,
        product_description: data.product_description,
        product_image : data.product_image,
        product_rating : data.product_rating,
        category_id: data.category_id,
        product_price : data.product_price
    }).then(() =>{
        return callback(null, 'Product Added');
    }).catch(err => {
        return callback(err);
    });
};

exports.getProducts = (callback) => {
    products.findAll().then((products)=>{
        return callback(null, products);
    }).catch(err => {
        return callback(err);
    });
};

exports.getProductsByCategory = (data,callback) => {
    products.findAll({
        where: {
            category_id: data.category_id
        }
    }).then((products)=>{
        return callback(null, products);
    }).catch(err => {
        return callback(err);
    });
}

exports.getProductById = (data, callback) => {
    products.findAll({
        where: {
            product_id: data.product_id
        }
    }).then((product)=>{
        if(product.length === 0){
            return callback('Product not found.', product);
        }
        return callback(null, product);
    }).catch(err => {
        return callback(err);
    });
}