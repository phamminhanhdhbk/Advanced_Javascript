let countdownInterval;

function startCountdown() {
  const timeInput = document.getElementById('timeInput');
  let time = parseInt(timeInput.value);

  if (isNaN(time) || time <= 0) {
    alert('Please enter a valid number of seconds');
    return;
  }

  clearInterval(countdownInterval);

  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = formatTime(time);

  countdownInterval = setInterval(() => {
    time--;
    timerDisplay.innerText = formatTime(time);

    if (time <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.innerText = 'Time is up!';
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
