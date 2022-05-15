const { expect } = require('chai');
const { describe } = require('mocha');
const userDataEmptyCheck = require('../../applications/user-post-empty-check');

describe('Testing function that checks if parameters passed on POST and PUT requests are null, empty or undefined', ()=>{
    it('function should return "null" as a null variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck(null);
        expect(resultFunctionCheck).to.equal('null');
    })
    it('function should return "undefined" as a undefined variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck();
        expect(resultFunctionCheck).to.equal('undefined');
    })
    it('function should return "empty" as a empty variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck('');
        expect(resultFunctionCheck).to.equal('empty');
    })
    it('function should return "Ok" as a valid variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck('asda');
        expect(resultFunctionCheck).to.equal('Ok');
    })
});


/*describe('', ()=>{
    it('', ()=>{
    
    })
});
*/