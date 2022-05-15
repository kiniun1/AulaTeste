const userDataEmptyCheck = require('./user-post-empty-check');
const userSavePostgres = require('../infrastructure/save-user-postgres');
const userSaveMongo = require('../infrastructure/save-user-mongo');
const httpStatusResponse = require('../commons/http-response/http-status-response')

const userSaveController = async(data)=>{
    try {
        const resultNameCheck = userDataEmptyCheck(data.userName);
        const resultBirthDayCheck = userDataEmptyCheck(data.birthDay);
        if(resultBirthDayCheck === 'Ok' && resultNameCheck === 'Ok'){
            const resultSavePostgres = await userSavePostgres(data);
            const resultSaveMongo = await userSaveMongo(data);
            if(!resultSaveMongo.hasOwnProperty('acknowledged') || !resultSavePostgres.hasOwnProperty('dataValues')){
                const DBSaveError = await httpStatusResponse(500, 'Internal Error', 'userSaveController');
                return DBSaveError;
            }else {
                const sucessResponse = await httpStatusResponse(200, 'Successfully saved', 'userSaveController');
                return sucessResponse;
            }
        } else {
            const missingParamError = await httpStatusResponse(400, 'Missing parameter', 'userSaveController');
            return missingParamError;
        }
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'userSaveController');
        return finalError;
    }
}

module.exports = userSaveController;