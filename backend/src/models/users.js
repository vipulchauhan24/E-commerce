const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('user',{
    id : { 
        type : Sequelize.INTEGER, 
        allowNull: false, 
        unique: true, 
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    password : {
        type: Sequelize.STRING(500)
    }
})