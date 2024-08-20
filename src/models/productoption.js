
'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductOption = sequelize.define('ProductOption', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  ProductOption.associate = function(models) {
    ProductOption.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
    });
  };

  return ProductOption;
};
