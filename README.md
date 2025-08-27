# Fact Check V2

## Introduction

Fact Check V2 is a full-stack web application for verifying information, managing fact-checking workflows, and collaborating on content validation. The frontend is built with Next.js (React), while the backend uses Flask to provide advanced fact-checking and citation generation features, including YouTube transcript analysis and AI-powered classification.

---

## ✨ Features

- **Claim Submission**
  - Users can submit claims for fact-checking.
  - Support for text, links, and attachments.

- **Evidence Management**
  - Add, edit, and organize supporting evidence.
  - Link sources and annotate findings.

- **YouTube Transcript Fact-Checking**
  - Submit a YouTube video ID to extract and analyze its transcript.
  - Transcript is chunked and each chunk is checked for factual accuracy using AI.
  - Generates up to 3 MLA-format citations per chunk via web search.

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
  - Mobile-friendly UI using Next.js and CSS.
  - Intuitive navigation and interactive components.

---

## 🛠️ Tech Stack

- **Frontend**
  - **Next.js**: React-based framework for SSR and routing.
  - **React**: Component-based UI library.
  - **JavaScript (ES6+)**: Application logic.
  - **CSS**: Styling and layout.

- **Backend** - (see finalbranch)
  - **Python 3.x**
  - **Flask**: REST API for transcript analysis and fact-checking.
  - **Flask-CORS**: Cross-origin resource sharing for frontend-backend communication.
  - **Cohere API**: AI-powered chat for citation generation and fact classification.
  - **YouTube Transcript API**: Extracts transcripts from YouTube videos.
  - **Requests, pandas**: Data handling and HTTP requests.

- **Testing**
  - **Jest**: Unit and integration tests (frontend).
  - **React Testing Library**: Component testing.

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
  - `backend/`
    - `app.py` — Flask backend for transcript analysis and fact-checking.
  - `README.md` — Project documentation.
  - `package.json` — Project dependencies and scripts.

---

## 🚀 How to Run

### Frontend (Next.js)

1. **Install Node.js**  
   Ensure Node.js (v14 or higher) and npm are installed.

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Start the development server**  
   ```
   npm run dev
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

### Backend (Flask)

1. **Install Python 3.x**  
   Ensure Python 3.x is installed.

2. **Install dependencies**  
   ```
   pip install flask flask-cors cohere pandas youtube-transcript-api requests
   ```

3. **Run the Flask server**  
   ```
   python app.py
   ```
   The backend will run at [http://localhost:5000](http://localhost:5000).

---
