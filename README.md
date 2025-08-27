This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Fact Check V2

## Introduction

Fact Check V2 is a modern web application designed to help users verify information, manage fact-checking workflows, and collaborate on content validation. Built with React, it provides a responsive and user-friendly interface for submitting claims, reviewing evidence, and publishing verdicts.

---

## ✨ Features

- **Claim Submission**
  - Users can submit claims for fact-checking.
  - Support for text, links, and attachments.

- **Evidence Management**
  - Add, edit, and organize supporting evidence.
  - Link sources and annotate findings.

- **Review Workflow**
  - Assign claims to reviewers.
  - Track claim status: pending, in review, verified, or debunked.

- **Collaboration**
  - Comment and discuss claims with other users.
  - Tag and categorize claims for easy searching.

- **Publishing**
  - Publish fact-check verdicts with detailed explanations.
  - Share results via public links.

- **Dashboard & Analytics**
  - Overview of claims, statuses, and reviewer activity.
  - Visualize trends and statistics.

- **User Authentication & Roles**
  - Secure login and registration.
  - Role-based access: submitter, reviewer, admin.

- **Responsive Frontend**
  - Mobile-friendly UI using React and CSS.
  - Intuitive navigation and interactive components.

---

## 🛠️ Tech Stack

- **Frontend**
  - **React**: Component-based UI library.
  - **JavaScript (ES6+)**: Application logic.
  - **CSS**: Styling and layout.
  - **Create React App**: Project scaffolding and build tools.
---

## 📝 Project Structure

- `fact-check-v2/`
  - `public/` — Static assets and HTML template.
  - `src/`
    - `components/` — Reusable React components.
    - `pages/` — Main application pages (Dashboard, Claim Submission, Review, etc.).
    - `services/` — API calls and business logic.
    - `utils/` — Utility functions and helpers.
    - `App.js` — Main application entry point.
    - `index.js` — React root rendering.
  - `README.md` — Project documentation.
  - `package.json` — Project dependencies and scripts.

---

## 🚀 How to Run

Follow these steps to set up and run Fact Check V2:

1. **Install Node.js**  
   Ensure Node.js (v14 or higher) and npm are installed.

2. **Install dependencies**  
   In the project directory, run:
   ```
   npm install
   ```

3. **Start the development server**  
   ```
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).
