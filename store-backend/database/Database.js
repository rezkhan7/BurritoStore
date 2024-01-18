const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BurritoShop', 'postgres', 'admin', { //normally should use .env file to hide password
    host: 'localhost',
    port: 5434,
    dialect: 'postgres'
});

module.exports = sequelize;