module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("product", {
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
    });
  
    return Products;
  };