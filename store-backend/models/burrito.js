const { DataTypes } = require('sequelize');
const sequelize = require('../database/Database');

const Burrito = sequelize.define('burrito', {
  name: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMERIC,
  },
}, {
  tableName: 'burrito',
  timestamps: false,
});

module.exports = Burrito;
