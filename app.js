if (!localStorage.getItem("bunkUser")) {
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem("bunkUser"));
if (user) {
  const profileBox = document.getElementById("userProfile");
  if (profileBox) {
    profileBox.innerHTML = `
      <img src="${user.picture}" class="user-img">
      <span>${user.name}</span>
    `;
  }
}

const colleges = [
  "Shri Ramswaroop Memorial University",
  "University of Lucknow",
  "IIT Kanpur",
  "IET Lucknow",
  "Galgotias University",
  "AKTU",
  "Other College"
];

const collegeList = document.getElementById("collegeList");
colleges.forEach(c => {
  const option = document.createElement("option");
  option.value = c;
  collegeList.appendChild(option);
});

const root = document.documentElement;
const sunToggle = document.getElementById("sunToggle");

root.setAttribute("data-theme", localStorage.getItem("bunkTheme") || "dark");
updateSunIcon();

sunToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("bunkTheme", next);

  updateSunIcon();
});

function updateSunIcon() {
  const icon = document.querySelector("#sunToggle i");
  const theme = root.getAttribute("data-theme");

  if (theme === "light") {
    icon.classList.remove("ri-sun-line");
    icon.classList.add("ri-moon-line");
  } else {
    icon.classList.remove("ri-moon-line");
    icon.classList.add("ri-sun-line");
  }
}

const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const missedEl = document.getElementById("missed");

let userTypedMissed = false;
missedEl.addEventListener("input", () => userTypedMissed = true);

function tryAutofillMissed() {
  const total = parseInt(totalEl.value);         // INTEGER
  const current = parseFloat(currentEl.value);   // DECIMAL

  if (!userTypedMissed && total > 0 && current >= 0 && current <= 100) {
    const attended = (current / 100) * total;
    const missed = total - attended;

    missedEl.value = Math.round(missed); // auto-rounded integer
  }
}

currentEl.addEventListener("input", tryAutofillMissed);
totalEl.addEventListener("input", tryAutofillMissed);

const form = document.getElementById("calcForm");
const resultBox = document.getElementById("result");

form.addEventListener("submit", e => {
  e.preventDefault();

  const total = Number(totalEl.value);
  const missed = Number(missedEl.value);
  const bunk = Number(document.getElementById("bunk").value);

  if (!Number.isFinite(total) || total < 1) {
    alert("Enter a valid Total Classes (>= 1)");
    return;
  }
  if (!Number.isFinite(missed) || missed < 0) {
    alert("Enter a valid Missed Till Now (>= 0)");
    return;
  }
  if (missed > total) {
    alert("Missed classes cannot exceed Total classes.");
    return;
  }
  if (!Number.isFinite(bunk) || bunk < 0) {
    alert("Enter a valid Upcoming Bunks (>= 0)");
    return;
  }

  const attended = total - missed;
  const newTotal = total + bunk;
  const finalAttendance = (attended / newTotal) * 100;

  document.getElementById("projected").textContent =
    finalAttendance.toFixed(2) + "%";
    document.getElementById("percentText").setAttribute(
    "fill",
    document.documentElement.dataset.theme === "light" ? "#000" : "#fff"
);


  document.getElementById("details").innerHTML = `
    <strong>Calculation Breakdown:</strong><br><br>

    • You currently have <strong>${currentEl.value}% attendance</strong>.<br>
    • Out of <strong>${total}</strong> total classes, you attended 
      <strong>${attended}</strong> and missed <strong>${missed}</strong>.<br><br>

    • If you miss <strong>${bunk}</strong> more class(es):<br>
      - Total classes will become <strong>${newTotal}</strong>.<br>
      - Attended classes will remain <strong>${attended}</strong>.<br><br>

    ✔ Your new attendance will be <strong>${finalAttendance.toFixed(2)}%</strong>.
  `;

  animateGauge(finalAttendance);

  resultBox.classList.remove("hidden");
});

function animateGauge(percent) {
  const circle = document.getElementById("progressCircle");
  const text = document.getElementById("percentText");

  const dash = Math.max(0, Math.min(100, percent));
  circle.style.strokeDasharray = `${dash},100`;
  text.textContent = percent.toFixed(2) + "%";
}

let history = JSON.parse(localStorage.getItem("bunkHistory") || "[]");

const saveBtn = document.getElementById("saveBtn");
const viewHistory = document.getElementById("viewHistory");
const historySection = document.getElementById("historySection");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

saveBtn.addEventListener("click", () => {
  const data = {
    college: document.getElementById("college").value,
    course: document.getElementById("course").value,
    year: document.getElementById("year").value,
    sem: document.getElementById("sem").value,
    result: document.getElementById("projected").textContent,
    time: new Date().toLocaleString()
  };

  history.push(data);
  localStorage.setItem("bunkHistory", JSON.stringify(history));

  alert("Saved to history ✅");
});

viewHistory.addEventListener("click", () => {
  historySection.classList.remove("hidden");
  loadHistory();
});

function loadHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    const box = document.createElement("div");
    box.className = "history-item";
    box.innerHTML = `
      <strong>${item.result}</strong><br>
      ${item.course}, ${item.year} (${item.sem})<br>
      <span class="muted">${item.college}</span><br>
      <small class="muted">${item.time}</small>
    `;
    historyList.appendChild(box);
  });
}

clearHistory.addEventListener("click", () => {
  if (confirm("Clear all history?")) {
    history = [];
    localStorage.setItem("bunkHistory", "[]");
    historyList.innerHTML = "";
  }
});

function logout() {
  localStorage.removeItem("bunkUser");
  window.location.href = "login.html";
}
