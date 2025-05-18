import models from "../models/index.js";
import db from "../config/connection.js";
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        if (!model || !model.db) {
            throw new Error(`Model or database connection for "${modelName}" is undefined.`);
        }
        const modelExists = (await model.db?.db
            ?.listCollections({
            name: collectionName,
        })
            ?.toArray()) || [];
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        console.error("Error cleaning database:", err);
    }
};
