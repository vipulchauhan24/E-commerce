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

    await queryInterface.createTable('categories',
    {
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      image: {
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
    }).then(async ()=>{
      await queryInterface.createTable('products',
      {
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        product_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        product_description: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        product_image: {
          type: Sequelize.STRING,
          allowNull: false
        },
        product_rating: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue : 0,
          max: 5
        },
        product_price: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue : 0
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: { model: 'categories', key: 'category_id' }
        },
        createdAt: {
          type : Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type : Sequelize.DATE,
          defaultValue: Sequelize.NOW
        }
      }).then(()=>{
        queryInterface.createTable('carts',
        {
          cart_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
          },
          product_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              foreignKey: true,
              references: { model: 'products', key: 'product_id' }
          },
          product_name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          product_description: {
              type: Sequelize.STRING,
              allowNull: false
          },
          product_image: {
              type: Sequelize.STRING,
              allowNull: false
          },
          product_rating: {
              type: Sequelize.STRING,
              allowNull: false,
              defaultValue : 0,
              max: 5
          },
          product_price: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue : 0
          },
          category_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              foreignKey: true,
              references: { model: 'categories', key: 'category_id' }
          },
          createdAt: {
              type : Sequelize.DATE,
              defaultValue: Sequelize.NOW
          },
          updatedAt: {
              type : Sequelize.DATE,
              defaultValue: Sequelize.NOW
          },
          user_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              foreignKey: true,
              references: { model: 'users', key: 'user_id' }
          }
        })
      });
    })
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
