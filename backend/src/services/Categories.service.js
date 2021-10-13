const DB = require('../../models/db.index');
const categories = DB.categories;

exports.addCategory = (data, callback) => {
    categories.create({
        category_name : data.category.toLowerCase(),
        image : data.image_url
    }).then(() =>{
        return callback(null, 'Category Added');
    }).catch(err => {
        return callback(err);
    });
};

exports.getCategory = (callback) => {
    sequelize.query('SELECT category_name, image_url FROM categories').then(( categories)=>{
        return callback(null, categories[0]);
    }).catch(err => {
        return callback(err);
    })
};