// Логику менять не нужно — задача челленджа только в вёрстке/стилях (index.html, style.css).

// Обратный отсчёт до даты мероприятия
const EVENT_DATE = new Date("2026-12-15T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;
  const el = document.getElementById("countdown");

  if (diff <= 0) {
    el.textContent = "Конференция уже началась!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  el.textContent = `До начала: ${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Форма регистрации
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const ticket = document.getElementById("regTicket").value;

  if (!name || !email) return;

  document.getElementById("registerResult").textContent =
    `Спасибо, ${name}! Билет «${ticket}» зарезервирован, подтверждение придёт на ${email}.`;
  e.target.reset();
});
