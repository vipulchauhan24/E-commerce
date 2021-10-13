module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: 1,
        unique: 1,
        autoIncrement: 1
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 1
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