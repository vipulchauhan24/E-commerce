const Sequelize = require('sequelize');

var sequelize = new Sequelize('e_comm', 'root', 'vipul', {
    host: 'localhost',
    dialect: 'mysql',
});

exports.getCategoryByName = (category_name, callback) => {
    sequelize.query('SELECT * FROM categories where category_name='+`"${category_name.toLowerCase()}"`).then((category)=>{
        return callback(null, category[0]);
    }).catch(err => {
        return callback(err);
    })
};

exports.addProduct = (data, callback) => {
    sequelize.query('INSERT INTO products(product_name, product_description, product_image, product_rating, category_id, product_price) VALUES'+'("'+`${data.product_name}`+'","' +`${data.product_description}` + '","' + `${data.product_image}` + '",' + `${data.product_rating}, ${data.category_id}, ${data.product_price}` + ')').then(()=>{
        return callback(null, 'Product Added');
    }).catch(err => {
        return callback(err);
    })
};

exports.getProducts = (callback) => {
    sequelize.query('SELECT * FROM products').then((products)=>{
        return callback(null, products[0]);
    }).catch(err => {
        return callback(err);
    })
};

exports.getProductsByCategory = (data,callback) => {
    sequelize.query('SELECT * FROM products where category_id="' + data.category_id + '"').then((products)=>{
        return callback(null, products[0]);
    }).catch(err => {
        return callback(err);
    })
}