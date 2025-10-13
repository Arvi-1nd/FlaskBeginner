# ✅ Task Master — Flask To-Do App

Task Master is a simple, elegant task management web app built with Flask. It lets users add, view, update, and delete tasks — all wrapped in a clean UI with a scenic background and emoji-enhanced feedback.

---

## 📦 Features

- 📝 Add new tasks
- 📋 View tasks in a dynamic table
- ✏️ Update existing tasks
- ❌ Delete tasks
- 📅 Track task creation dates
- 🎨 Styled with custom CSS and background imagery
- 🧠 Modular Flask structure with Jinja2 templates

---

## 🛠️ Tech Stack

| Layer       | Tools Used               |
|-------------|--------------------------|
| Backend     | Python, Flask, SQLAlchemy |
| Frontend    | HTML, CSS, Jinja2         |
| Database    | SQLite (default)          |
| Environment | Virtualenv                |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-master.git
cd task-master
```
---

## Setup Virtual Environmeent
--python -m venv env
--source env/bin/activate  # or .\env\Scripts\activate on Windows


---

## Install dependencies

pip install -r requirements.txt

---

## Initialize the Database

from app import app, db

with app.app_context():
    db.create_all()

---


## Run the App

python app.py

---

## 🧠 Future Enhancements

-✅ Flash messages for task actions

-📅 Due dates and priority levels

-📱 Responsive layout for mobile

-🔍 Search/filter tasks

-☁️ Deploy to Heroku or Vercel

---

## 🤝 Contributing
Feel free to fork this repo, improve the app, and submit a pull request. Feedback and suggestions are always welcome!