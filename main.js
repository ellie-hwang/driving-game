/* global data */
/* exported data */
var $racecar = document.querySelector('img');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.keyCode === 37) /* left */ {
    $racecar.className = 'west';
  } else if (event.keyCode === 38) /* up */ {
    $racecar.className = 'north';
  } else if (event.keyCode === 39) /* right */ {
    $racecar.className = 'east';
  } else if (event.keyCode === 40) /* down */ {
    $racecar.className = 'south';
  }
}
