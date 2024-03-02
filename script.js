document.addEventListener("DOMContentLoaded", function() {
  let display = document.querySelector('.display');
  let increaseBtn = document.getElementById('increaseBtn');
  let decreaseBtn = document.getElementById('decreaseBtn');
  let startBtn = document.getElementById('startBtn');
  let pauseBtn = document.getElementById('pauseBtn');
  let alarm = document.getElementById('alarm');
  let timer;
  let minutes = 0;
  let seconds = 0;
  let isPaused = false;

  function formatTime(mins, secs) {
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function startTimer() {
    timer = setInterval(function() {
      if (!isPaused) {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          alarm.play();
          return;
        }
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        display.textContent = formatTime(minutes, seconds);
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  increaseBtn.addEventListener('click', function() {
    minutes++;
    display.textContent = formatTime(minutes, seconds);
  });

  decreaseBtn.addEventListener('click', function() {
    if (minutes > 0) {
      minutes--;
      display.textContent = formatTime(minutes, seconds);
    }
  });

  startBtn.addEventListener('click', function() {
    display.textContent = formatTime(minutes, seconds);
    startTimer();
  });

  pauseBtn.addEventListener('click', function() {
    if (!isPaused) {
      stopTimer();
    } else {
      startTimer();
    }
});

});

function startTimer() {
  timer = setInterval(function() {
    if (!isPaused) {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alarm.play(); // Riproduci il suono di sveglia
        return;
      }
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      display.textContent = formatTime(minutes, seconds);
    }
  }, 1000);
}
