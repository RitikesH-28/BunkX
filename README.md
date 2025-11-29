📌 BunkX

🎯 Smart Attendance Management & Bunk Planning Web App

BunkX is a modern and intuitive attendance calculator that helps students plan their bunks smartly without harming their attendance percentage. Using real-time calculations, history tracking, and Google login, BunkX ensures every student maintains attendance the smart way!

🌟 Features

✔ Google Sign-In Authentication
— Secure login using OAuth (keeps user profile stored in browser)


login

✔ Interactive Attendance Calculator
— Auto-fills missed classes + percentage validation


app

✔ Modern UI with Light/Dark Theme Toggle
— Theme saved in localStorage for consistency


app

✔ Visual Percentage Gauge
— Smooth animation for projected attendance


app

✔ History Save System
— View and track multiple attendance calculations


app

✔ College Datalist for Quick Selection


app

✔ Contact Form with EmailJS Integration


index

✔ Fully Responsive Glass-morphic UI
— Works smoothly on mobile and desktop


styles

🛠️ Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Authentication	Google Identity Services
Email Service	EmailJS
Storage	LocalStorage
Icons	RemixIcons, FontAwesome
UI Design	Glassmorphism, Responsive CSS Grid
📂 Project Structure
📦 BunkX
 ┣ 📜 index.html       # Main dashboard
 ┣ 📜 app.js           # Core logic: auth, calculation, history
 ┣ 📜 styles.css       # Global styles + themes + layout
 ┣ 📜 login.html       # Google Auth login page
 ┣ 📜 login.css        # Login page UI styling
 ┣ 📜 login.js         # Google login handling
 ┗ 📂 image/
      ┗ LOGO.png


(Referenced files:
)

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/yourusername/BunkX.git
cd BunkX

2️⃣ Setup Google Login

Replace the client ID inside login.html:

data-client_id="YOUR_CLIENT_ID_HERE.apps.googleusercontent.com"

3️⃣ Configure EmailJS (optional)

In index.html, update:


index

emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...})

4️⃣ Run Locally

Simply open index.html in browser
(Requires a local server for full login flow)

📸 Demo & Screenshots

Add screenshots/GIFs here
(loading screen, calculation, history view, light theme)

🔐 Security & Privacy

No backend: all data stays in your browser

Google login only collects basic profile

History saved locally, user-controlled

🧑‍💻 Author

Ritikesh Bhardwaj
👨‍💻 BCA Student | Web Developer
📌 Portfolio Coming Soon!

Connect with me:

Platform	Link
GitHub	https://github.com/RitikesH-28

LinkedIn	https://www.linkedin.com/in/ritikesh-bhardwaj-274a48254

Instagram	https://www.instagram.com/itz_.ritik_18_/

Twitter	https://x.com/xRiTiKesHx
⭐ Contribute

Pull requests & feedback are welcome!
If you like this project, please give it a ⭐ on GitHub 💙
