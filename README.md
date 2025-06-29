# CI/CD Pipeline Project – Denilson
This project is a Node.js application using Express that implements a complete CI/CD pipeline with GitHub Actions and automatic deployment to Vercel.

---

## 📂 Project Structure

```
project/
├── .github/workflows/ci.yml
├── src/
│   ├── app.js
│   └── server.js
├── test/
│   ├── unit/
│   └── integration/
├── docs/
├── .env*
├── README.md
```

---

## 🚀 Main Features

✅ Express application with 3 endpoints:  
- `/ping`: Returns a dynamic message depending on the environment.  
- `/sum`: Adds two numbers provided as query parameters.  
- `/subtract`: Subtracts two numbers provided as query parameters.

✅ Environment management using `dotenv-flow`:  
- `.env`
- `.env.development`
- `.env.production`
- `.env.test`

✅ Unit and integration tests using Jest and Supertest.

✅ Linter configured with ESLint.

✅ CI/CD pipeline that includes:
- Multi-version Node.js (18, 20, 22)
- Automatic linting
- Automatic tests
- Build and artifacts
- Dependency caching
- Automatic notifications (success and failure) by creating Issues on GitHub
- Automatic deployment on the `main` branch

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/D-MQuispe/ci-cd-pipeline-Denilson.git
cd ci-cd-pipeline-Denilson
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Testing

Run all tests:

```bash
npm test
```

---

## ✨ Linting

Check code quality:

```bash
npm run lint
```

Automatically fix errors:

```bash
npm run lint:fix
```

---

## 🌐 Endpoints

Start the application locally:

```bash
npm start
```

By default available at `http://localhost:3000`

---

### **GET /ping**

Returns a message depending on the environment:

```json
{
  "message": "Hello from development"
}
```

---

### **GET /sum**

Parameters: `a`, `b`

Example:
```
/sum?a=5&b=3
```

Response:
```json
{
  "result": 8
}
```

---

### **GET /subtract**

Parameters: `a`, `b`

Example:
```
/subtract?a=10&b=4
```

Response:
```json
{
  "result": 6
}
```

---

## 🛠️ Environment Variables

For local configuration, use `.env` files depending on the environment:

Example `.env.development`:
```
PORT=3000
MESSAGE=Hello from development
```

In production, the `MESSAGE` variable is configured on the Vercel dashboard:

```
Settings > Environment Variables
```

---

## 🚀 Deployment

Deployment is automated via GitHub Actions for each push to `main`.

Application deployed to Vercel:

👉 [View the production deployment](https://ci-cd-pipeline-denilson.vercel.app/)

---

## 🟢 CI/CD Pipeline

**Main workflow steps:**

- Node.js matrix strategy:
  - Node.js 18.x
  - Node.js 20.x
  - Node.js 22.x
- Steps:
  - Repository checkout
  - Dependency cache
  - Install dependencies (`npm ci`)
  - Linting (`npm run lint`)
  - Testing (`npm test`)
  - Build artifacts
  - Upload artifacts
  - Deployment to Vercel (only on `main` branch)
  - Automatic notifications:
    - If failure: creates 🚨 Issue
    - If success: creates ✅ Issue

---

## 🧩 Artifacts

Each pipeline run generates build artifacts that can be downloaded from the **Actions** tab.

---

## 📝 Notes

- `.env*` files are ignored in `.gitignore` for security.
- Environment variables must be set accordingly.
- The project uses a Personal Access Token (PAT) stored as a secret `GH_PAT` to create notification Issues.

---

## ❤️ Author

Project developed by Denilson
GitHub: [https://github.com/D-MQuispe](https://github.com/D-MQuispe/)

---
