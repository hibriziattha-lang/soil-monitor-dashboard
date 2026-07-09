const values = {
  moisture: 72,
  temp: 24,
  ph: 6.8,
  water: 84,
};

const updateDashboard = () => {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });

  document.getElementById('moisture').textContent = `${values.moisture}%`;
  document.getElementById('temp').textContent = `${values.temp}°C`;
  document.getElementById('ph').textContent = values.ph.toFixed(1);
  document.getElementById('water').textContent = `${values.water}%`;

  document.querySelectorAll('.bar span').forEach((bar, index) => {
    const value = Object.values(values)[index];
    const percent = index === 2 ? value * 10 : value;
    bar.style.width = `${Math.min(percent, 100)}%`;
  });
};

window.addEventListener('load', updateDashboard);
setInterval(updateDashboard, 5000);
