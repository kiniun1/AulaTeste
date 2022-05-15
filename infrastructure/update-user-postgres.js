const httpStatusResponse = require("../commons/http-response/http-status-response");
const modelUser = require("./database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;

const updateUserPostgres = async(data) => {
    try {
        const id = data.id
        const newNameandBirthDay = { userName: data.userName, birthDay: data.birthDay }
        const resultUpdate = await modelUser.update(newNameandBirthDay, {
            where: {
              id,
            },
            returning: true,
          });
        return resultUpdate;
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'updateUser');
        return finalError;
    }
};
module.exports = updateUserPostgres;