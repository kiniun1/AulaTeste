const Sequelize = require('sequelize');
require("dotenv").config();
const enverioment = process.env;
module.exports = new Sequelize(enverioment.DB,
enverioment.USER_DATABASE, enverioment.PASSWORD_DATABASE , {
    host: enverioment.HOST,
    dialect: enverioment.DIALECT,
    operatorsAliases: 0,
    pool: {
        max: parseInt(enverioment.POOL_MAX),
        min: parseInt(enverioment.POOL_MIN),
        acquire: parseInt(enverioment.POOL_ACQUIRE),
        idle: parseInt(enverioment.POOL_IDLE),
    },
});