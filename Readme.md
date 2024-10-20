
# AWS Elastic Beanstalk Deployment Project

This project demonstrates deploying a simple web application using AWS Elastic Beanstalk. The app consists of a frontend built with React (using Vite and JavaScript) and a backend using Node.js with Express.

## Project Structure

- **frontend/**: Contains the React app.
- **backend/**: Contains the Node.js backend with Express.

## Setup

### 1. Create Project Directories

```bash
mkdir frontend backend
```

### 2. Frontend Setup

In the `frontend` directory, create a React app using Vite:

```bash
cd frontend
npm create vite@latest
# Follow the prompts to set up with JavaScript
npm install
```

### 3. Backend Setup

In the `backend` directory, set up a basic Node.js server:

```bash
cd ../backend
npm init -y
npm install express cors nodemon
```

### 4. Build the React App

Build the frontend and copy the `dist` folder into `backend`:

```bash
cd frontend
npm run build
# Copy the 'dist' folder into 'backend'
cp -r dist ../backend
```

### 5. Backend `package.json` Adjustments

Update `backend/package.json` to include a start script:

```json
"scripts": {
  "start": "node app.js"
}
```

To set up environment variables in the backend, follow these steps:

### Install `dotenv`

In the `backend` directory, install the `dotenv` package:

```bash
npm install dotenv
```

### Include `dotenv` in `app.js`

At the top of `app.js`, add the following line to load environment variables:

```javascript
require('dotenv').config();
```

### Use `process.env.PORT` in `app.js`

Set up the server to use the port from the environment variables:

```javascript
const port = process.env.PORT || 8000;
```

This will ensure that the app listens on the port defined in the `.env` file, with a fallback to `8000` if no environment variable is set.

### 6. Deployment to AWS Elastic Beanstalk

1. **Rename** `index.js` to `app.js` .
2. **Compress the files**: In the `backend` directory, compress all files (except `node_modules`) into a zip file, including the `.env`.

```bash
# In the backend folder
zip -r backend-app.zip . -x "node_modules/*"
```

3. **Upload the zip**:
   - Go to the AWS Elastic Beanstalk console.
   - Create a new environment or use an existing one.
   - Upload the `backend-app.zip` as a new application version and deploy.

4. Follow the tutorial for more details on AWS Elastic Beanstalk setup: [AWS Elastic Beanstalk Tutorial](https://youtu.be/BYB9MQBgzLE?si=cAGY15rYJvxP0bDk).
