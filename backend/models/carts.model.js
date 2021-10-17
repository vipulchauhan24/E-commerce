module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
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
    });
  
    return Cart;
  };