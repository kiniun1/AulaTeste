const { expect } = require('chai');
const { describe } = require('mocha');
const userDataEmptyCheck = require('../../applications/user-post-empty-check');

describe('Testing function that checks if parameters passed on POST and PUT requests are null, empty or undefined', ()=>{
    it('1°: function should return "null" as a null variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck(null);
        expect(resultFunctionCheck).to.equal('null');
    })
    it('2°: function should return "undefined" as a undefined variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck();
        expect(resultFunctionCheck).to.equal('undefined');
    })
    it('3°: function should return "empty" as a empty variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck('');
        expect(resultFunctionCheck).to.equal('empty');
    })
    it('4°: function should return "Ok" as a valid variable is passed to the function', ()=>{
        const resultFunctionCheck = userDataEmptyCheck('asda');
        expect(resultFunctionCheck).to.equal('Ok');
    })
});


/*describe('', ()=>{
    it('', ()=>{
    
    })
});
*/