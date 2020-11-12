var currentTime = setInterval(displayCurrentTime, 1000);
function displayCurrentTime() {

  var _date = new Date();
  document.getElementById("current-time").textContent = _date.toLocaleTimeString();
}
