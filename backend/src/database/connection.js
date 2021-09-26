const Sequelize = require('sequelize');

const sequelize = new Sequelize("e_comm", "root", "vipul",{
    host: "localhost",
    dialect : "mysql"
} );

module.exports = sequelize;
global.sequelize= sequelize;