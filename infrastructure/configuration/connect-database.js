const Sequelize = require('sequelize');
require("dotenv").config();
const environment = process.env;
module.exports = new Sequelize(environment.DB,
environment.USER_DATABASE, environment.PASSWORD_DATABASE , {
    host: environment.HOST,
    dialect: environment.DIALECT,
    operatorsAliases: 0,
    pool: {
        max: parseInt(environment.POOL_MAX),
        min: parseInt(environment.POOL_MIN),
        acquire: parseInt(environment.POOL_ACQUIRE),
        idle: parseInt(environment.POOL_IDLE),
    },
});