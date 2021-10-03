const Sequelize = require('sequelize')
var sequelize = new Sequelize('e_comm', 'root', 'vipul', {
    host: 'localhost',
    dialect: 'mysql',
  });

exports.register = (data, callback) =>{
    sequelize.query(`INSERT INTO users(email, password, createdAt, updatedAt) VALUES('${data.email}', '${data.password}','${new Date().toISOString().slice(0, 19).replace('T', ' ')}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`).then(()=>{
        return callback(null, 'Registration successful');
    }).catch(err => {
        return callback(err);
    })
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