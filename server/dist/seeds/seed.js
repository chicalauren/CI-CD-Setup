"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_js_1 = __importDefault(require("../config/connection.js"));
const Question_js_1 = __importDefault(require("../models/Question.js"));
const cleanDb_js_1 = __importDefault(require("./cleanDb.js"));
const pythonQuestions_json_1 = __importDefault(require("./pythonQuestions.json"));
connection_js_1.default.once('open', async () => {
    await (0, cleanDb_js_1.default)('Question', 'questions');
    await Question_js_1.default.insertMany(pythonQuestions_json_1.default);
    console.log('Questions seeded!');
    process.exit(0);
});
