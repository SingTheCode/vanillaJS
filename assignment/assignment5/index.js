// import "./style.css";

const clockContainer = document.querySelector(".js-clock"),
  clockTime = clockContainer.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const now = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  var distance = xmasDay - now;

  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  clockTime.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
