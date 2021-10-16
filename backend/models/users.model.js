module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type : Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type : Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  
    return Users;
  };