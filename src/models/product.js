
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
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
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  Product.associate = function(models) {
    Product.belongsToMany(models.Category, {
      through: 'ProductCategory',
      as: 'categories',
      foreignKey: 'product_id',
    });
    Product.hasMany(models.Image, {
      as: 'images',
      foreignKey: 'product_id',
    });
  };

  return Product;
};
