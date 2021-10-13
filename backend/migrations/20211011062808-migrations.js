'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', 
     {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: 0,
        primaryKey: 1,
        unique: 1,
        autoIncrement: 1
      },
      email: {
        type: Sequelize.STRING,
        allowNull: 0,
        unique: 1
      },
      password: {
        type: Sequelize.STRING,
        allowNull: 0
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

    await queryInterface.createTable('categories',
    {
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: 0,
        primaryKey: 1,
        unique: 1,
        autoIncrement: 1
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: 0,
        unique: 1
      },
      image: {
        type: Sequelize.STRING,
        allowNull: 0
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
    await queryInterface.createTable('products',
    {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: 0,
        primaryKey: 1,
        unique: 1,
        autoIncrement: 1
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: 0,
        unique: 1
      },
      product_description: {
        type: Sequelize.STRING,
        allowNull: 0,
        unique: 1
      },
      product_image: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      product_rating: {
        type: Sequelize.STRING,
        allowNull: 0,
        defaultValue : 0,
        max: 5
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: 0,
        foreignKey: 1,
        unique: 1
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
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
