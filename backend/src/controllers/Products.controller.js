const productService = require('../services/Products.service');

exports.addProduct = (req, res) => {
    
    const val = req.body;
    switch(val){
        case !val:
            return res.status(400).send({success : 0, message: 'Request body cannot be empty!'});
        case !val.product_name:
            return res.status(400).send({success : 0, message: 'Empty product name'});
        case !val.product_image:
            return res.status(400).send({success : 0, message: 'Empty product image url'});
    }
    
    productService.getCategoryByName(val.category_name, (error, category) => {
        if(error){
            if(error === 'Category not found.'){
                return res.status(400).send({success : 0, message: 'Category not found.'});
            }
            return res.status(400).send({success : 0, message: 'Bad request!'});
        }        
        var data = {
            product_name : val.product_name,
            product_description : val.product_description,
            product_image : val.product_image,
            product_rating : val.product_rating,
            category_id : category[0].category_id,
            product_price : val.product_price
        };
        productService.addProduct(data, (error, message) => {
            if(error){
                if(error.parent.code === 'ER_DATA_TOO_LONG'){
                    return res.status(400).send({success : 0, message: 'Data too long!'});
                }
                if(error.parent.code === 'ER_DUP_ENTRY'){
                    return res.status(400).send({success : 0, message: val.product_name + ' is already added.'});
                } 
                return res.status(400).send({success : 0, message: 'Bad request'});

            }
            return res.status(201).send({success:1, message: message});
        });
    });
    
}

exports.getProducts = (req, res) =>{
    productService.getProducts((error, products)=>{
        if(error){
            return res.status(400).send({success : 0, message: 'Bad request'});
        }
        res.status(201).send({success:1, message: 'Successfully retrieved producs.', products:products});
    });
}

exports.getProductsByCategory = (req, res) =>{
    if(!req.body){
        return res.status(400).send({success:0, message:'Body cannot be empty!'})
    } else if(!req.body.category_name){
        return res.status(400).send({success:1, message:'Request does not have category name.'})
    }
    productService.getCategoryByName(req.body.category_name, (error, category) => {
        if(error){
            if(error === 'Category not found.'){
                return res.status(400).send({success : 0, message: 'Category not found.'});
            }
            return res.status(400).send({success : 0, message: 'Bad request!'});
        }
        var data = {
            category_id : category[0].category_id
        };
        productService.getProductsByCategory(data, (error, products)=>{
            if(error){
                return res.status(400).send({success : 0, message: 'Bad request'});
            }
            res.status(200).send({success:1, message: 'Successfully retrieved products.', products:products});
        });
    });   
}

exports.getProductById = (req, res) =>{
    if(!req.headers.product_id){
        return res.status(400).send({success:1, message:'Request headers does not have product id.'})
    }
    const data = {
        product_id : req.headers.product_id
    }
    productService.getProductById(data, (error, product) =>{
        if(error){
            if(error === 'Product not found.'){
                return res.status(400).send({success : 0, message: 'Product not found.'});
            }
            return res.status(400).send({success : 0, message: 'Bad request'});
        }
        res.status(200).send({success:1, message: 'Successfully retrieved products.', products:product});
    })
}