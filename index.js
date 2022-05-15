const express = require('express');
const app = express();
const router = require('./interface/routes/users-route');
const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
const MongoHelper = require('./infrastructure/helpers/mongo-helper');

buildingDataBase.sequelize.sync();
app.use(express.json());
app.use(router);
MongoHelper.connect()
.then(() => {
    app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));
})
.catch(console.error)

module.exports = app;