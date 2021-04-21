var currentDayEl = document.querySelector('#currentDay');
var saveBtnEl = document.querySelector('.saveBtn');

// function to update current day
function dateDisplay() {
  currentDayEl.textContent = moment().format('MMM Do YYYY');
}

// show time blocks in corresponding colors, if they are in the past, present, or future

// make time block editable

// when save icon is clicked, event is saved to local storage

saveBtnEl.addEventListener('click', function () {
  console.log('the button was clicked');
});

dateDisplay();
