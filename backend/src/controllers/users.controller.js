const userService = require('../services/users.service');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
exports.register= (req, res, next)=>{
    var data;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        data = {
            email: req.body.email,
            password: hash
        }
        userService.register(data, (error, msg)=>{
            if(error){
                if(error.errors[0].type === 'unique violation' && error.errors[0].value === data.email){
                    return res.status(400).send({success : 0, message: data.email + ' is already registered'});
                } else {
                    return res.status(400).send({success : 0, message: 'Bad request'});
                }
            }
            var token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: {email: data.email}
              }, 'secret');
            return res.status(201).send({success: 1, message: msg, email: data.email, token: token});
        })
    });
};
exports.login= (req, res, next)=>{
    if(!req.body){
        return res.status(400).send({success: 0, message: 'Request body has no email and password'})
    } else if(!req.body.email){
        return res.status(400).send({success: 0, message: 'Request body has no email'})
    } else if(!req.body.password){
        return res.status(400).send({success: 0, message: 'Request body has no password'})
    }
    var data;
    data = {
        email: req.body.email,
        password: req.body.password
    }
    userService.login(data, (error, password)=>{
        if(error){
            if(error === "Email not found"){
                return res.status(400).send({success : 0, message: "Email not found"});
            } else {
                return res.status(400).send({success : 0, message: 'Bad request'});
            }
        }
        bcrypt.compare(req.body.password, password, function(err, result) {
            if(result){
                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: {email: data.email},
                    expiresIn: '2h'
                    }, 'secret');
                return res.status(201).send({success: 1, message: 'Login successful', email: data.email, token: token});
            }
            return res.status(400).send({success: 0, message: "Password incorrect"});
        });
    })
};
