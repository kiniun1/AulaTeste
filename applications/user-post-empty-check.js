const { MissingParamError,InvalidParamError } = require('../commons/errors/index');

const userDataEmptyCheck = (data)=>{
    const checkData = {
        null: "null",
        "": "empty",
        undefined: "undefined"
    };

    return checkData[data] ?? "Ok";
}

module.exports = userDataEmptyCheck;