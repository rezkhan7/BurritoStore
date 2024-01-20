const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BurritoShop', 'postgres', 'admin', { //normally should use .env file to hide password
    host: 'postgres',
    port: 5432,
    dialect: 'postgres'
})

module.exports = sequelize;