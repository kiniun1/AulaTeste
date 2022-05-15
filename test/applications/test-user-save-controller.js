const { expect } = require('chai');
const { describe } = require('mocha');
const httpStatusResponse = require('../../commons/http-response/http-status-response');
const userDataEmptyCheck = require('../../applications/user-post-empty-check');

const userSaveController = async(data, variableWithPropertyError)=>{
    try {
        const resultNameCheck = userDataEmptyCheck(data.userName);
        const resultBirthDayCheck = userDataEmptyCheck(data.birthDay);
        if(resultBirthDayCheck === 'Ok' && resultNameCheck === 'Ok'){
            if(!variableWithPropertyError.hasOwnProperty('acknowledged') || !variableWithPropertyError.hasOwnProperty('dataValues')){
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



describe('Testing save controller', ()=>{
    it('1°: should return an error because of missing parameter', async()=>{
        const req = {
            body: {

            }
        }
        const resultController = await userSaveController(req.body);
        expect(resultController.statusCode).to.equal(400);
        expect(resultController.body).to.equal('Missing parameter');
    })
    it("2°: should return an error of can't read properties of undefined property, because no object was passed to function", async()=>{
        const resultController = await userSaveController();
        expect(resultController.statusCode).to.equal(500);
        expect(resultController.body).to.equal("Cannot read properties of undefined (reading 'userName')");
    })
    it('3°: should return an succesfully saved response given correct parameters', async()=>{
        const req = {
            body: {
                userName: 'Teste',
                birthDay: '01/01/2000'
            }
        }
        const objectWithPropertyNoError = {
            acknowledged: true,
            dataValues: ''
        }
        const resultController = await userSaveController(req.body, objectWithPropertyNoError);
        expect(resultController.statusCode).to.equal(200);
        expect(resultController.body).to.equal("Successfully saved");
    })
    it('4°: should return an internal error due to not saving data in the DB successfully', async()=>{
        const req = {
            body: {
                userName: 'Teste',
                birthDay: '01/01/2000'
            }
        }
        const objectWithPropertyError = {
            empty: ''
        }
        const resultController = await userSaveController(req.body, objectWithPropertyError);
        expect(resultController.statusCode).to.equal(500);
        expect(resultController.body).to.equal("Internal Error");
    })
});


/*describe('', ()=>{
    it('', ()=>{
    
    })
});
*/