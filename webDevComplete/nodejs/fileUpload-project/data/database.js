const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://0.0.0.0:27017');
  database = client.db('file-demo');
}

function getDb() {
  if (!database) {
    throw { message: 'Database not connected!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
