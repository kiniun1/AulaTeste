const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const modelUser = require("../../database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;
const userRegistrationRepository = async() => {
    try {
        const returnQueryUser = await modelUser.findAll();
        return returnQueryUser;
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'userRegistrationRepository');
        return finalError;
    }
};
module.exports = userRegistrationRepository;