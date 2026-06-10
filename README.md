# PopX Educase React Assignment

Welcome to the **PopX** React application, developed for the Educase India ReactJS Developer assignment! This application focuses on delivering a beautiful, pixel-perfect UI with high reusability, smooth animations, and robust functionality, meeting top-tier industry standards.

![App Preview](https://via.placeholder.com/1000x400/6C38FF/FFFFFF?text=PopX+React+Application)

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Common Errors & Troubleshooting](#common-errors--troubleshooting)
- [Deployment](#deployment)

## 🚀 Overview

PopX is a fully responsive React web application that showcases modern user interface design with a focus on seamless interactions and pixel-perfection. The application mimics a digital platform's onboarding and user profile flow, specifically tailored for Educase India.

## ✨ Key Features

- **Pixel-Perfect Design:** Faithfully translates Adobe XD mockups into functional React components.
- **Tailwind CSS Styling:** Replaced all standard CSS with modern, utility-first Tailwind CSS for greater maintainability and scalability.
- **Reusable Components:** Features highly modular components (e.g., `Button`, `InputField`) that can be used universally across the application.
- **Smooth Animations:** Includes micro-interactions, hover states, fade-ins, and slide-up animations for a premium feel.
- **Responsive Layout:** Adapts flawlessly across different screen sizes, centering the mobile-view app container beautifully on larger desktop screens.
- **Form State Management:** Implements functional state handling for forms without relying heavily on third-party libraries.
- **Local Storage Integration:** Persists user data locally, mimicking a real backend connection for the profile page.

## 🛠 Tech Stack

- **ReactJS (v19)** - Frontend Library
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS (v3)** - Utility-First CSS Framework
- **React Router DOM (v7)** - Declarative Routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js (v18.0 or higher)
- npm or yarn or pnpm

## ⚙️ Setup Instructions

Follow these steps to get the project up and running locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Educase-India
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to `http://localhost:5173`.

## 📁 Folder Structure

```
src/
├── assets/         # Images, icons, and static assets
├── components/     # Reusable UI components (Button, InputField)
├── pages/          # Application routes/pages (Landing, Login, Register, Profile)
├── App.jsx         # Main application entry point and router setup
├── index.css       # Global styles and Tailwind directives
└── main.jsx        # React DOM rendering
```

## 🐛 Common Errors & Troubleshooting

### 1. `Command not found: vite` or `Command not found: tailwindcss`
**Solution:** Ensure all dependencies are correctly installed. Run `npm install` again. If the issue persists, clear the `node_modules` folder and `package-lock.json` and reinstall.

### 2. Styles not applying / Tailwind classes not working
**Solution:** Check that the development server is running (`npm run dev`). Tailwind compiles styles on demand. If adding a new class doesn't update, verify that your files are covered by the `content` array in `tailwind.config.js`.

### 3. Blank Screen on Load
**Solution:** Open the browser developer console (F12). Check for any routing issues or missing imports. Ensure React Router DOM is properly set up in `App.jsx`.

## 🌐 Deployment

The application is fully prepared to be hosted on Vercel, Netlify, or any similar hosting platform.

**Deploying to Vercel (Recommended):**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root directory.
3. Follow the CLI prompts to deploy.

Alternatively, you can connect your GitHub repository directly to Vercel or Netlify via their web dashboards for automatic deployments on push.
