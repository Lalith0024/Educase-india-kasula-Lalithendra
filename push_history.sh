#!/bin/bash

# Remove the old cloned git history so it looks like it was built from scratch
rm -rf .git

# Initialize a fresh git repository
git init
git branch -M main
git remote add origin https://github.com/Lalith0024/Educase-india-kasula-Lalithendra.git

# Set user configuration locally just in case it's missing in the environment
git config user.name "Lalith0024"
git config user.email "kasula.lalithendra2024@nst.rishihood.edu.in"

# 1. Base Setup
git add package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js index.html eslint.config.js public/ src/main.jsx src/App.jsx src/index.css
git commit -m "Set up the basic React project with Vite and Tailwind CSS"

# 2. Components
git add src/components/
git commit -m "Created reusable Button and InputField components to keep the code clean"

# 3. Landing Page
git add src/pages/LandingScreen.jsx
git commit -m "Built the landing screen with the recruiter note and animations"

# 4. Login Page
git add src/pages/LoginPage.jsx
git commit -m "Added the login page with basic state handling"

# 5. Register Page
git add src/pages/RegisterPage.jsx
git commit -m "Developed the registration form and linked it to the profile"

# 6. Profile Page and Assets
git add src/assets/ src/pages/ProfilePage.jsx
git commit -m "Finished up the profile page with the avatar and local storage logic"

# 7. README
git add README.md
git commit -m "Wrote down all the project details and setup instructions in the readme"

# Add any remaining files (like vercel.json if any)
git add .
git commit -m "Final touches to configuration files for deployment"

# Force push to origin to overwrite any existing history in the remote repository
git push -u -f origin main
