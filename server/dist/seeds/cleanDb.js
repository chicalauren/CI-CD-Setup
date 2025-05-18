"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../models/index.js"));
const connection_js_1 = __importDefault(require("../config/connection.js"));
exports.default = async (modelName, collectionName) => {
    try {
        let modelExists = await index_js_1.default[modelName].db.db.listCollections({
            name: collectionName
        }).toArray();
        if (modelExists.length) {
            await connection_js_1.default.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
