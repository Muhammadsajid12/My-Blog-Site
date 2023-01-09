import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.1owdxkf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority `;

  const client = await MongoClient.connect(connectionString);

  return client;
}
// function insertOne element.....😎😎
export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}
