const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    port: 5432,
    database: 'records',
    logging: false
});

module.exports = { db, DataTypes };