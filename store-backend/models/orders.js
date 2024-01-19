const { DataTypes } = require('sequelize');
const sequelize = require('../database/Database');

const Order = sequelize.define('orders', {
  total_cost: {
    type: DataTypes.NUMERIC,
  },
}, {
    tableName: 'orders',
    timestamps: false,
});

module.exports = Order;
