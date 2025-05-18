"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuestions = void 0;
// import question model
const Question_js_1 = __importDefault(require("../models/Question.js"));
// gets a set of random questions
const getRandomQuestions = async (_req, res) => {
    try {
        const questions = await Question_js_1.default.aggregate([
            { $sample: { size: 10 } },
            { $project: { __v: 0 } }
        ]);
        res.status(200).json(questions);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getRandomQuestions = getRandomQuestions;
