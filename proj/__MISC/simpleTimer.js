let timerHtml = document.getElementById('timer');
let startButtonHtml = document.getElementById('start-timer');

startButtonHtml.addEventListener('click', startTimer);

function startTimer() {
  let time = 30;
  let interval = setInterval(function() {
    time = time - 1;
    timerHtml.innerHTML = time;
    if (time == 0) {
      clearInterval(interval);
      timerHtml.innerHTML = '30';
      time = 30;
    }
  }, 1000);
}
