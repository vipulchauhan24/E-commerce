'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('users', {
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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("users")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
