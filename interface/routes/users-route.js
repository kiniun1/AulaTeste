const express = require('express');
const router = express.Router();
const userGet = require('../../infrastructure/repository/user-repository/user-registration-respository');
const userSave = require('../../infrastructure/save-user');
 
router
.post("/users", async (req, res) => {
    try {
        console.log('Rota POST users');
        console.log(req.body);
        await userSave(req.body);
        res.status(200).send('Salvo com sucesso');
    } catch (error) {
        res.send(error)           
    }  
});

router
.get("/users", async (req, res) => {
    try {
        console.log('Rota GET users');
        const resultadoConsulta = await userGet();
        res.status(200).send(resultadoConsulta);
    } catch (error) {
        res.send(error)           
    }  
});
 
module.exports = router;