// script.js

function updateClock() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
  const timeLeft = newYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days-upper').textContent = String(days).padStart(2, '0');
  document.getElementById('hours-upper').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes-upper').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds-upper').textContent = String(seconds).padStart(2, '0');

  document.getElementById('days-lower').textContent = String(days).padStart(2, '0');
  document.getElementById('hours-lower').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes-lower').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds-lower').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateClock, 1000);
updateClock();
