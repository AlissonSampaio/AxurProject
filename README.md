# Axur Project  

This repository was developed as part of a **technical challenge**, focusing on building a clean, scalable, and maintainable application using modern JavaScript tooling.  
It demonstrates architectural decisions, coding practices, and the ability to deliver reliable software under time constraints.  

---

## Tech Stack
- **Frontend**: React, TypeScript, Vite  
- **Backend**: Node.js, Express  
- **Testing**: Jest / React Testing Library  
- **Environment**: Docker, ESLint, Prettier  

---

## Features
- **Clean Architecture**: clear separation between layers (controllers, services, utils).  
- **Reusable Components**: modular React components for scalability.  
- **API Integration**: robust HTTP handling with type safety.  
- **Error Handling**: consistent strategy for backend and frontend.  
- **Testing**: unit and integration coverage using Jest & RTL.  
- **Containerization**: Docker support for easy setup and environment consistency.  
- **Code Quality**: linting, formatting, and conventions enforced via ESLint and Prettier.  

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 18  
- [Docker](https://www.docker.com/) (optional, for containerized setup)  

### Installation
```bash
# Clone repository
git clone https://github.com/AlissonSampaio/AxurProject.git

# Enter project folder
cd AxurProject

# Install dependencies
npm install
```

### Run (Development)
```bash
npm run dev
```

### Build (Production)
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Docker
```bash
# Build image
docker build -t axurproject .

# Run container
docker run -p 3000:3000 axurproject
```

---

## Project Structure
```
src/
 ┣ components/     → Reusable UI components  
 ┣ pages/          → Application pages and routing  
 ┣ services/       → API integration & business logic  
 ┣ utils/          → Shared helpers and utilities  
 ┗ tests/          → Unit and integration tests  
```

---

## Notes
- This project was built as part of a **selection process**.  
- The main goal was to showcase **code quality, architecture, and problem-solving** rather than deliver a production-ready product.  
- Despite time constraints, the project follows industry best practices such as **modularization, TDD principles, and clean code conventions**.  

---

## Author
**Alisson Alves**  
- [LinkedIn](https://www.linkedin.com/in/alissonsampaio/)  
- ✉️ alisson2012alves@gmail.com  
