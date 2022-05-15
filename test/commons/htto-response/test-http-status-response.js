const { expect } = require("chai");
const { describe } = require("mocha");
const httpStatusResponse = require("../../../commons/http-response/http-status-response");

describe('Testing http-response function', ()=>{
    it('1°: should return 500 status code and internal error', async()=>{
        const result = await httpStatusResponse(500, 'Internal Error', 'test-http');
        expect(result.statusCode).to.equal(500);
        expect(result.body).to.equal('Internal Error');
        expect(result.localization).to.equal('test-http');
    })
    it('2°: should return 200 status code and successfully saved', async()=>{
        const result = await httpStatusResponse(200, 'Successfully saved', 'test-http');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal('Successfully saved');
        expect(result.localization).to.equal('test-http');
    })
    it('3°: should return 400 status code and Missing parameter error', async()=>{
        const result = await httpStatusResponse(400, 'Missing parameter', 'test-http');
        expect(result.statusCode).to.equal(400);
        expect(result.body).to.equal('Missing parameter');
        expect(result.localization).to.equal('test-http');
    })
    it('4°: should catch error, and body of the function be the same as the error.message', async()=>{
        try {
            s
        } catch (error) {
            const result = await httpStatusResponse(500, (error.message), 'test-http');
            expect(result.body).to.equal('s is not defined');
        }
    })
})
