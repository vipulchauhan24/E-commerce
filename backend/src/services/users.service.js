const DB = require('../../models/db.index');
const users = DB.users;
exports.register = (data, callback) =>{
    const today = new Date().toISOString().slice(0, 19).replace('T', ' ');
    users.create({
        email : data.email,
        password : data.password,
        createdAt: today,
        updatedAt : today
    }).then(() =>{
        return callback(null, 'Registration successful');
    }).catch(err => {
        return callback(err);
    });
}

exports.login = (data, callback) =>{
    users.findAll({
        where: {
            email: `${data.email}`
        }
    }).then((user)=>{
        if(user[0]){
            if(user[0].dataValues.email === `${data.email}`){
                return callback(null, user[0].dataValues.password);
            }
        } else {
            return callback("Email not found");
        }
    }).catch(err => {
        return callback(err);
    });
}