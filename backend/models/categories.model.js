module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
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
      }
    });
  
    return Categories;
  };