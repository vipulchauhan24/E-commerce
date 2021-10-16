module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
        cart_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            unique: true,
            autoIncrement: true
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: { model: 'product', key: 'product_id' }
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
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue : false,
            max: 5
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            unique: true
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
  
    return Cart;
  };