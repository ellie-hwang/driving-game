/* global data */
/* exported data */
var $racecar = document.querySelector('img');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.keyCode === 37) /* left */ {
    $racecar.className = 'west';
    data.orientation = 'west';
  } else if (event.keyCode === 38) /* up */ {
    $racecar.className = 'north';
    data.orientation = 'north';
  } else if (event.keyCode === 39) /* right */ {
    $racecar.className = 'east';
    data.orientation = 'east';
  } else if (event.keyCode === 40) /* down */ {
    $racecar.className = 'south';
    data.orientation = 'south';
  } else if (event.keyCode === 32) {
    setInterval(startCar, 16);
  }
}

var x = 0;
var y = 0;

function startCar() {
  if (data.orientation === 'east') {
    x += 5;
    $racecar.style.left = x + 'px';
    data.x = x;
  } else if (data.orientation === 'west') {
    x -= 5;
    $racecar.style.left = x + 'px';
    data.x = x;
  } else if (data.orientation === 'south') {
    y += 5;
    $racecar.style.top = y + 'px';
    data.y = y;
  } else if (data.orientation === 'north') {
    y -= 5;
    $racecar.style.top = y + 'px';
    data.y = y;
  }
}
