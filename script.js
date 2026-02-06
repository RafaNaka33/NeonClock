const circle = document.querySelector('.progress');
const clock = document.getElementById('clock');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clock.textContent =
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0');

  // Barra representa os segundos do minuto
  const percent = seconds / 60;
  const offset = circumference - percent * circumference;

  circle.style.strokeDashoffset = offset;
}

setInterval(updateClock, 1000);
updateClock();

/* ============================= */
/* FULLSCREEN API INTEGRATION    */
/* ============================= */

function goFullScreen() {
  const docEl = document.documentElement;

  if (docEl.requestFullscreen) {
    docEl.requestFullscreen();
  } else if (docEl.mozRequestFullScreen) { /* Firefox */
    docEl.mozRequestFullScreen();
  } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
    docEl.webkitRequestFullscreen();
  } else if (docEl.msRequestFullscreen) { /* IE/Edge */
    docEl.msRequestFullscreen();
  }
}

// Opcional: detectar quando o usuário sai do full screen
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    console.log('Saiu do full screen');
  }
});

// BOTÃO para entrar em full screen
const fsBtn = document.createElement('button');
fsBtn.textContent = "Entrar em Full Screen";
fsBtn.style.position = "fixed";
fsBtn.style.top = "20px";
fsBtn.style.left = "20px";
fsBtn.style.padding = "10px 15px";
fsBtn.style.fontSize = "16px";
fsBtn.style.zIndex = "999";
fsBtn.style.cursor = "pointer";
fsBtn.style.background = "#8B5CF6";
fsBtn.style.color = "#fff";
fsBtn.style.border = "none";
fsBtn.style.borderRadius = "6px";
fsBtn.style.boxShadow = "0 0 10px #8B5CF6, 0 0 20px #7C3AED";
document.body.appendChild(fsBtn);

fsBtn.addEventListener('click', goFullScreen);
