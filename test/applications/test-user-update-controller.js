const { expect } = require('chai');
const { describe } = require('mocha');
const httpStatusResponse = require('../../commons/http-response/http-status-response');
const userDataEmptyCheck = require('../../applications/user-post-empty-check');

const userUpdateController = async(data, variableWithPropertyError)=>{
    try {
        const resultNameCheck = userDataEmptyCheck(data.userName);
        const resultIdCheck = userDataEmptyCheck(data.id);
        const resultBirthDayCheck = userDataEmptyCheck(data.birthDay);
        if(resultBirthDayCheck === 'Ok' && resultNameCheck === 'Ok' && resultIdCheck === 'Ok'){
            if(variableWithPropertyError.hasOwnProperty('statusCode')){
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



describe('Testing update controller', ()=>{
    it('1°: should return an error because of missing parameter', async()=>{
        const req = {
            body: {

            }
        }
        const resultController = await userUpdateController(req.body);
        expect(resultController.statusCode).to.equal(400);
        expect(resultController.body).to.equal('Missing parameter');
    })
    it("2°: should return an error of can't read properties of undefined property, because no object was passed to function", async()=>{
        const resultController = await userUpdateController();
        expect(resultController.statusCode).to.equal(500);
        expect(resultController.body).to.equal("Cannot read properties of undefined (reading 'userName')");
    })
    it('3°: should return an succesfully saved response given correct parameters', async()=>{
        const req = {
            body: {
                id: 1,
                userName: 'Teste',
                birthDay: '01/01/2000'
            }
        }
        const objectWithPropertyNoError = {
            empty: ''
        }
        const resultController = await userUpdateController(req.body, objectWithPropertyNoError);
        expect(resultController.statusCode).to.equal(200);
        expect(resultController.body).to.equal("Successfully updated");
    })
    it('4°: should return an internal error due to not saving data in the DB successfully', async()=>{
        const req = {
            body: {
                id: 1,
                userName: 'Teste',
                birthDay: '01/01/2000'
            }
        }
        const objectWithPropertyError = {
            statusCode: ''
        }
        const resultController = await userUpdateController(req.body, objectWithPropertyError);
        expect(resultController.statusCode).to.equal(500);
        expect(resultController.body).to.equal("Internal Error");
    })
});


/*describe('', ()=>{
    it('', ()=>{
    
    })
});
*/