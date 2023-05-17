const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

let counter = 0;

cookie.onclick = function() {
  counter++;
  clickerCounter.textContent = counter;
  if (counter % 2 == 0) {
    cookie.width = 250;                  
    } else {
      cookie.width = 200;
    }
  }