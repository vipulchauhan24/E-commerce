const Sequelize = require('sequelize')
var sequelize = new Sequelize('e_comm', 'root', 'vipul', {
    host: 'localhost',
    dialect: 'mysql',
});

exports.addCategory = (data, callback) => {
    sequelize.query(`INSERT INTO categories(category_name, image_url) VALUES('${data.category.toLowerCase()}', "${data.image_url}")`).then(()=>{
        return callback(null, 'Category Added');
    }).catch(err => {
        return callback(err);
    })
};

exports.getCategory = (callback) => {
    sequelize.query('SELECT category_name, image_url FROM categories').then(( categories)=>{
        return callback(null, categories[0]);
    }).catch(err => {
        return callback(err);
    })
};