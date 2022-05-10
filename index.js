const express = require('express');
const app = express();
const router = require('./interface/routes/users-route');
const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
buildingDataBase.sequelize.sync();

app.use(express.json())
app.use(router)


app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));
module.exports = app;