function updateTime() {
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  const date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
