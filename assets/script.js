var currentDayEl = document.querySelector('#currentDay');

// function to update current day
function dateDisplay() {
  currentDayEl.textContent = moment().format('MMM Do YYYY');
}

dateDisplay();
