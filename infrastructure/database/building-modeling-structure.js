const Sequelize = require("sequelize");
const sequelize = require('../configuration/connect-database' );

const dataBase = {};

dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;

dataBase.cadastro_usuario = require("./model/user-model/user-registration-model" );

module.exports = dataBase;