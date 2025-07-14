# 🧠 PROquiz

**PROquiz** is an AI-powered web platform designed to help midshipmen at the U.S. Naval Academy study and validate their professional knowledge curriculum. It integrates ChatGPT (or Gemini) to parse official PDFs, generate study guides, grade quiz responses, and provide personalized study assistance.

---

## 🚀 Features

- 📚 **PDF Curriculum Parsing** – Upload official ProKnow PDFs and extract learning material
- 📖 **AI-Generated Study Guides** – Auto-summarize chapters and generate review sheets
- 🧪 **Short-Answer Quiz Engine** – Type answers, get instant AI-powered feedback and scores
- 💬 **Chatbot Study Assistant** – Ask questions and get personalized help with citations
- 📈 **Progress Tracking** – Track quiz history, performance, and recommended review areas
- 👥 **User Accounts** – Save study progress and dashboard analytics

---

## 🛠 Tech Stack

| Layer         | Tools/Options                          |
|---------------|----------------------------------------|
| Frontend      | HTML/CSS/JS or React                   |
| Backend       | Supabase (auth + database) or Firebase |
| AI Integration| OpenAI (ChatGPT API) or Gemini         |
| Hosting       | Netlify, Vercel, or GitHub Pages       |
| PDF Parsing   | PyMuPDF / LangChain / pdfplumber       |

---

## 📅 Roadmap

### ✅ Phase 0: Project Setup
- [x] Create GitHub repo
- [ ] Define project scope and tools

### 🧾 Phase 1: Login & Auth
- [ ] Frontend + Supabase auth setup
- [ ] Store user data and progress

### 📄 Phase 2: PDF Parsing
- [ ] Upload PDFs (curriculum + objectives)
- [ ] Extract and structure content

### 🤖 Phase 3: AI Study Assistant
- [ ] Build chatbot interface
- [ ] Generate study guides per chapter
- [ ] Filter content by test/class

### 📝 Phase 4: Short Answer Quiz
- [ ] Input field + submit button
- [ ] GPT grading prompt (score + feedback)
- [ ] Reveal ideal answer if score ≥ 85

### 📊 Phase 5: User Dashboard
- [ ] View quiz history and scores
- [ ] Progress charts and summaries

### 🎨 Phase 6: Polish & Deploy
- [ ] Mobile-friendly styling
- [ ] Final testing + deployment

---

## 👨‍💻 Getting Started (Future Section)
_TODO: Add setup instructions here as each part is completed._

---

## 📌 Inspiration

Built by midshipmen, for midshipmen. Designed to make ProKnow less painful and more powerful — with AI at your side. ⚓

---

## 🧠 Naming Ideas for Internal Files/Folders
- `curriculum.pdf`, `objectives.pdf` → upload/parse
- `study-guide-generator.js` → GPT logic
- `quiz-grader.js` → GPT feedback & scoring
- `user-progress.json` → tracking file (if local dev)

---

## 🤝 Contributions
This is a student-led project. Contributions and suggestions are welcome!

---

## License
MIT License