const { MongoClient } = require('mongodb');
require("dotenv").config();
const environment = process.env;

module.exports = {
  async connect() {
    this.client = await MongoClient.connect(environment.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  async disconnect() {
    await this.client.close();
  },
  async gettingCollections(name) {
    this.db = this.client.db();
    this.collection = this.db.collection(name);

    return this.collection;
  },
}