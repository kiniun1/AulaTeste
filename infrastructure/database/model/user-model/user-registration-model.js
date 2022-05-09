const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/connect-database');
const USER_REGISTRATION_MODEL = sequelize.define('USER_REGISTRATION_MODEL', {
    id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    },
    nome_usuario: {
    type: DataTypes.STRING(165),
    unique: false,
    allowNull: false,
    comment: "Coluna destinado a registrar o nome do usuário."
    },
});

module.exports = {
 USER_REGISTRATION_MODEL
}