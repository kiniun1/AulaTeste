const userDataEmptyCheck = require('./user-post-empty-check');
const httpStatusResponse = require('../commons/http-response/http-status-response');
const userUpdatePostgres = require('../infrastructure/update-user-postgres');

const userUpdateController = async(data)=>{
    try {
        const resultNameCheck = userDataEmptyCheck(data.userName);
        const resultIdCheck = userDataEmptyCheck(data.id);
        const resultBirthDayCheck = userDataEmptyCheck(data.birthDay);
        if(resultBirthDayCheck === 'Ok' && resultNameCheck === 'Ok' && resultIdCheck === 'Ok'){
            const resultUpdatePostgres = await userUpdatePostgres(data);
            if(resultUpdatePostgres.hasOwnProperty('statusCode')){
                const DBSaveError = await httpStatusResponse(500, 'Internal Error', 'userUpdateController');
                return DBSaveError;
            }else {
                const sucessResponse = await httpStatusResponse(200, 'Successfully updated', 'userUpdateController');
                return sucessResponse;
            }
        } else {
            const missingParamError = await httpStatusResponse(400, 'Missing parameter', 'userUpdateController');
            return missingParamError;
        }
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'userUpdateController');
        return finalError;
    }
}

module.exports = userUpdateController;