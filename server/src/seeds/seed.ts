import db from '../config/connection.js';
import Question from '../models/Question.js';
import cleanDB from './cleanDb.js';

import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Required to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Read JSON file manually — avoids import issues
const rawData = await readFile(path.join(__dirname, 'pythonQuestions.json'), 'utf-8');
const pythonQuestions = JSON.parse(rawData);

db.once('open', async () => {
  await cleanDB('Question', 'questions');
  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});