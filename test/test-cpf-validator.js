const { assert } = require('chai');
const CpfValidator = require('../commons/cpf-validator');
const { MissingParamError, InvalidParamError } = require('../commons/errors');

const makeSut = () => {
    return new CpfValidator();
}

describe('Cpf validator', ()=>{
    it('Deve retornar true se o validador retornar true', ()=>{
        const sut = makeSut();
        const isCpfValid = sut.isCpfValid('12345678909');
        assert.isTrue(isCpfValid);
    })

    it('Deve retornar false se o validador retornar false', () => {
        const sut = makeSut();
        const isCpfValid = sut.isCpfValid('00000000000');
        assert.isFalse(isCpfValid);
    })

    it('Deve fazer um throw se não for fornecido um cpf', () => {
    const sut = makeSut()
    const invalid = null
    const err = new MissingParamError('cpf').message
    assert.throws(() => { sut.isCpfValid(invalid)}, err);
    })

    it('Deve fazer um throw se o cpf fornecido for não numérico', () => {
    const sut = makeSut()
    const err = new InvalidParamError('cpf').message
    assert.throws(() => { sut.isCpfValid('any-non-number-cpf')}, err);
    })
})