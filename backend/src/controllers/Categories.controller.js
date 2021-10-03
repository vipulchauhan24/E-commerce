const categoriesService = require('../services/Categories.service')
exports.addCategories = (req, res) => {
    if(!req.body.category && !req.body.image_url){
        return res.status(400).send({success : 0, message: 'No category and image url in the request body.'});
    } else if(!req.body.category){
        return res.status(400).send({success : 0, message: 'No category in the request body.'});
    } else if(!req.body.image_url){
        return res.status(400).send({success : 0, message: 'No image url in the request body.'});
    }

    categoriesService.addCategory(req.body, (error, message) => {
        if(error){
            if(error.errors[0].type === 'unique violation'){
                return res.status(400).send({success : 0, message: req.body.category + ' is already added'});
            } else {
                return res.status(400).send({success : 0, message: 'Bad request'});
            }
        }
        res.status(201).send({success:1, message: message});
    });
}

exports.getCategories = (req, res) => {
    categoriesService.getCategory((error, categories) => {
        if(error){
            return res.status(400).send({success : 0, message: 'Bad request'});
        }
        res.status(201).send({success:1, message: 'Successfully retrieved categories.', categories:categories});
    });
}
