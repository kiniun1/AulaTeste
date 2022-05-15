const httpStatusResponse = require("../commons/http-response/http-status-response");
const MongoHelper = require('./helpers/mongo-helper');

const saveUserMongo = async (data)=>{
    try {
        const MongoCollection = await MongoHelper.gettingCollections('Pessoas');
        const DBInsertReturn = await MongoCollection.insertOne(data);
        return DBInsertReturn;
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'save-user-mongo');
        return finalError;
    }
}
module.exports = saveUserMongo;