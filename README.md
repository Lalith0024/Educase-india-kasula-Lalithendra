# PopX - Educase India Technical Assessment

This repository contains the PopX web application, developed as part of the Educase India ReactJS Developer assignment. The application focuses on delivering a modular, highly reusable, and performant frontend architecture utilizing modern React patterns and utility-first CSS.

## Table of Contents

- [Application Flow](#application-flow)
- [Architecture & Key Features](#architecture--key-features)
- [Technical Stack](#technical-stack)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Directory Structure](#directory-structure)
- [Troubleshooting & Common Errors](#troubleshooting--common-errors)
- [Deployment Guide](#deployment-guide)

## Application Flow

The PopX application implements a complete onboarding and user management flow consisting of the following key stages:

1. **Landing Screen (`/`)**: The entry point of the application. Presents the platform value proposition with clear Call-to-Action (CTA) buttons navigating to either the registration or login flows.
2. **Registration Page (`/register`)**: Captures detailed user data (Name, Phone, Email, Password, Company, Agency Status). Upon form submission, the data is validated and persisted to local storage, simulating a backend API post request. The user is then automatically routed to the profile view.
3. **Login Page (`/login`)**: A secure entry point for returning users. The form requires both an email and password to enable the submission action, demonstrating controlled input validation.
4. **Profile Page (`/profile`)**: A personalized dashboard that retrieves and displays the authenticated user's information from local storage. It features an interactive avatar component with an update-ready UI and smooth micro-animations.

## Architecture & Key Features

- **Component-Driven Architecture**: Core UI elements like inputs and buttons are completely abstracted into reusable components (`src/components`), ensuring UI consistency across the entire platform.
- **Utility-First Styling**: All styling is handled via Tailwind CSS, completely eliminating arbitrary CSS files. This approach guarantees zero specificity conflicts and highly maintainable stylesheets.
- **State & Data Persistence**: Implements React hooks (`useState`, `useEffect`) for localized state management, coupled with the Web Storage API (`localStorage`) for session persistence across page reloads.
- **Micro-Interactions & Animation**: Integrates sophisticated CSS transitions, fade-ins, and hardware-accelerated animations directly into the Tailwind configuration for a premium user experience without external animation libraries.
- **Mobile-First Responsive Design**: The application logic natively prioritizes the mobile viewport. On desktop viewports, the application renders inside a sophisticated mobile device frame with interactive background blurring to maintain design integrity.

## Technical Stack

- **Framework**: React.js (v19)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v3)
- **Routing**: React Router DOM (v7)

## Prerequisites

Ensure the following dependencies are installed on your local development environment:
- Node.js (v18.0 or higher recommended)
- Package Manager: npm, yarn, or pnpm

## Local Development Setup

Follow these commands to initialize and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Educase-India
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Navigate to `http://localhost:5173` in your preferred web browser.

## Directory Structure

```text
src/
├── assets/         # Static assets, branding, and imagery
├── components/     # Modular and reusable UI primitives (Button, InputField)
├── pages/          # Primary application views containing core business logic
├── App.jsx         # Root component containing routing definitions
├── index.css       # Tailwind configuration imports and base style resets
└── main.jsx        # DOM entry point and React StrictMode wrapper
```

## Troubleshooting & Common Errors

### Command not found: vite
**Issue:** The package manager failed to map binary dependencies.
**Resolution:** Delete the `node_modules` directory and `package-lock.json`, then execute a clean installation using `npm install`.

### Styles are not applying correctly
**Issue:** Tailwind CSS engine is not tracking the file for utility classes.
**Resolution:** Ensure that the `tailwind.config.js` file has the correct paths defined within the `content` array. Restart the development server (`npm run dev`) to clear the Vite cache.

### Blank screen upon navigation
**Issue:** React Router is failing to resolve the configured paths.
**Resolution:** Verify the routing map in `App.jsx`. Ensure that the `BrowserRouter` context properly wraps the route definitions.

## Deployment Guide

The application is statically generated and optimized for platforms like Vercel or Netlify.

**Vercel Deployment Procedure:**
1. Install the Vercel CLI globally: `npm i -g vercel`
2. Execute the `vercel` command from the root directory.
3. Follow the interactive prompts to provision and deploy the application.
