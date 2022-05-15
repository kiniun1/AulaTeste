const express = require('express');
const router = express.Router();
const userSaveController = require('../../applications/user-save-controller');
const userUpdateController = require('../../applications/user-update-controller');
const userGetPostgres = require('../../infrastructure/repository/user-repository/user-registration-respository');
const httpStatusResponse = require('../../commons/http-response/http-status-response');
 
router
.post("/users", async (req, res) => {
    try {
        console.log('Rota POST users');
        const resultController = await userSaveController(req.body);
        res.status(resultController.statusCode).send(resultController.body);
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'usersRoute');
        res.status(finalError.statusCode).send(finalError.body);         
    }  
});

router
.get("/users", async (req, res) => {
    try {
        console.log('Rota GET users');
        const resultQuery = await userGetPostgres();
        res.status(200).send(resultQuery);
    } catch (error) {
        res.send(error)           
    }  
});

router
.put("/users", async (req, res) => {
    try {
        console.log('Rota PUT users');
        const resultController = await userUpdateController(req.body);
        res.status(resultController.statusCode).send(resultController.body);
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'usersRoute');
        res.status(finalError.statusCode).send(finalError.body);         
    }  
});
 
module.exports = router;