
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true,
  });

  Category.associate = function(models) {
    Category.belongsToMany(models.Product, {
      through: 'ProductCategory',
      as: 'products',
      foreignKey: 'category_id',
    });
  };

  return Category;
};
