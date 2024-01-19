const { DataTypes } = require('sequelize');
const sequelize = require('../database/Database');

const OrderItem = sequelize.define('order_item', {
  quantity: {
    type: DataTypes.INTEGER,
  },
  
}, {
    tableName: 'order_item',
    timestamps: false,
  });

module.exports = OrderItem;
