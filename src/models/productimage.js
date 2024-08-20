// src/models/image.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true,
  });

  Image.associate = function(models) {
    Image.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
    });
  };

  return Image;
};
