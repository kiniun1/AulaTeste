const express = require('express');
const app = express();
const Users = require('./infrastructure/repository/user-repository/user-registration-respository');
const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
const { route } = require('./infrastructure/routers/usuarios');
buildingDataBase.sequelize.sync();


app.get("/usuarios", async (req, res) => {
    try {
        console.log('Rota usuarios');
        const usuer = await Users();
        res.send(usuer);
    } catch (error) {
        res.send(error)           
    }  
});


app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));