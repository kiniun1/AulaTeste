const httpStatusResponse = require("../commons/http-response/http-status-response");
const modelUser = require("./database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;

const saveUser = async(data) => {
    try {
        const returnQueryUser = await modelUser.create(data);
        return returnQueryUser;
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'saveUser');
        return finalError;
    }
};
module.exports = saveUser;