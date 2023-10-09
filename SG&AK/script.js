let isColorChanged = false;

function toggleBackgroundColor() {
  if (!isColorChanged) {
    document.body.style.backgroundColor = 'black';
    isColorChanged = true;

  }
  else {
    document.body.style.backgroundColor = '#090B29';
    isColorChanged = false;
  }
}

// Clock

// creating a function 
function updateClock() {

  // creating a variable and assigning the in built 'new' date objects in JS

  let currentTime = new Date();

  /* get hours, mins, sec, actually extracting from the date object 'currentTime' 
    " aforementioned methods "
    */

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  /*   "0" + hours - If hours is less than 10, we concatenate ("add") a "0" before it.
  If hours is 10 or more, we do nothing and just keep the original value.
  
          ?: This is the ternary operator that checks the condition.
  */

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // The way its going to show when the numbers align "09:03:07"

  let clockString = hours + ":" + minutes + ":" + seconds;

  // Gets the HTML element by the id of clock

  document.getElementById("clock").innerText = clockString;

  // a function that call once the timer expires

  setTimeout(updateClock, 1000);
}

// THe clock starts when the website is loaded completly
window.onload = updateClock;
