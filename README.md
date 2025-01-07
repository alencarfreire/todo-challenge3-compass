# Task Manager App 🎯📝

## Introduction 🌟

This document outlines the objectives, business rules, and requirements for developing a Task Manager application (to-do). The project is divided into three main phases, as described below:

---

## Project Phases 🚀

1. **Front-End Development:** Create the application's interface using React Native.
2. **Cloud API Configuration:** Deploy the API to AWS ☁️.
3. **API Integration:** Connect the front-end to the API for real-time operations 🔄.
4. **Unit Testing (Bonus):** Implement unit tests for the application's components and features using Jest and React Testing Library 🧪.
   - **Minimum Coverage:** 50% of the main components.
   - **Goals:**
     1. Ensure code quality and robustness ✅.
     2. Validate component behavior in various scenarios 🔍.
   - **Example Tests:**
     1. Rendering verification for main components like Login and Main screens.
     2. Simulating user interactions, such as adding a task or searching for tasks.
     3. Testing error messages displayed during login failure or API communication issues.

---

## Final Product 🎉

A functional application that enables task management with authentication and CRUD (Create, Read, Update, Delete) operations.

---

## Objectives 🎯

- Develop a functional application allowing users to manage tasks.
- Provide students with practical experience in application development with API integration.
- Teach API consumption and integration with cloud services.

---

## Business Rules 📜

1. **User Authentication:**
   - Users must log in using predefined fixed credentials 🔐.
2. **Task Operations:**
   - Authenticated users can create, view, edit, and delete tasks 🗂️.
   - Tasks are identified by a unique ID 🆔.
3. **Error Validation:**
   - The application must display clear error messages for issues such as:
     - Invalid login ❌.
     - API communication failures 🚨.
     - Unauthorized operations (missing or invalid tokens) 🔒.
4. **Animations and User Experience:**
   - Show a loading animation during data fetching ⏳.
   - Replace the animation with the interface or corresponding messages upon completion or error.

---

## Project Requirements 🛠️

### Functional ✅

- Users should be able to:
  - Log in with validation.
  - View all registered tasks 📝.
  - Search tasks by title or description 🔍.
  - Create, update, and delete tasks.
  - Separate created tasks from completed tasks.
- Display loading animations during API interactions.
- Show error messages in case of API communication failures.

### Non-Functional ⚙️

- The application must use the following technologies:
  - React Native for front-end development 📱.
  - TypeScript for development 💻.
  - styled-components for styling 🎨.
  - axios for API consumption 🌐.
  - Expo – challenges not using Expo will be disqualified.
- The API must be configured and hosted on AWS ☁️.
- Unit tests implemented with Jest and React Testing Library as an additional resource to validate components and business rules 🧪.
  - **Minimum Coverage:** 50% of main components.

---

## API Structure 🌐

The API will be provided for project use.

### Endpoints

- **POST /login:** Authenticate user.  
  **Body:** `{username: <username>, password: <password>}`
- **GET /tarefas:** Retrieve all tasks.
- **POST /tarefas:** Create a new task.  
  **Body:** `{tarefa: <task text>}`
- **PUT /tarefas/{id}:** Update task by ID.  
  **Body:** `{tarefa: <task text>}`
- **DELETE /tarefas/{id}:** Delete task by ID.

### Details

- Fixed User Credentials:  
  `username: admin, password: password`

---

## Screen Requirements 📱

### Login Screen 🔐

#### Fields

- Email 📧
- Password 🔑

#### Features

- Validate credentials ✅.
- Redirect to the main screen upon successful login ➡️.
- Display error messages for login failures ❌.

### Main Screen 🗂️

#### Elements

- Search field for tasks 🔍.
- Button to add a new task ➕.
- Navigation to:
  - View created tasks 📄.
  - View completed tasks ✔️.

#### Features

- List all tasks 📝.
- Filter tasks by status (created/completed).

### Delivery

Challenge delivery video:
[Video in Loom](https://www.loom.com/share/f48b6c9a084349c9b31aa47681de4242?sid=70b30c43-51ea-4b39-afcf-ec30844eaa35)
