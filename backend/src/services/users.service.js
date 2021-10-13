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
    sequelize.query(`SELECT * FROM users WHERE email='${data.email}'`).then((result)=>{
        if(result[0][0]){
            if(result[0][0].email === `${data.email}`){
                return callback(null, result[0][0].password);
            }
        } else {
            return callback("Email not found");
        }
    }).catch(err => {
        return callback(err);
    })
}