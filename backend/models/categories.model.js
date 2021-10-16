module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
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
      }
    });
  
    return Categories;
  };