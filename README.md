# TechQuiz App

A full-stack quiz application with automated testing and continuous deployment. This app automatically runs Cypress tests on every pull request to the `develop` branch and deploys to Render when merged into `main`.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Testing with Cypress](#testing-with-cypress)
5. [Dev Workflow](#dev-workflow)
6. [Links](#links)

## 🧠 Overview

- Quiz questions are stored and seeded into a MongoDB database.
- Users can take quizzes via a dynamic frontend UI.
- Automatically tracks score based on correct answers.
- Optimized for responsiveness across devices.

## 🛠 Tech Stack

- **Frontend:** React + TypeScript  
- **Backend:** Node.js + Express + TypeScript  
- **Database:** MongoDB Atlas  
- **CI/CD:** GitHub Actions  
- **Testing:** Cypress (Component Testing)

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/chicalauren/CI-CD-Setup
cd your-repo
npm install
npm run build
npm start
npm run seed
```

## 🧪 Testing with Cypress

- Cypress component tests run automatically when you push to the `develop` branch.
- Only merge to `main` after all tests pass.

## 🔄 Dev Workflow

1. Create new branches off `develop`.
2. Open pull requests targeting the `develop` branch.
3. GitHub Actions runs Cypress tests on the PR.
4. Once tests pass, merge to `main`.
5. Deployment to Render is triggered automatically.

## 🔗 Links

- **GitHub Repo:** [https://github.com/chicalauren/CI-CD-Setup](https://github.com/chicalauren/CI-CD-Setup)  
- **Live Site:** [https://ci-cd-setup2.onrender.com/](https://ci-cd-setup2.onrender.com/)
