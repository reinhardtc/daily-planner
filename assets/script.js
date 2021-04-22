var currentDayEl = document.querySelector('#currentDay');
var saveBtnEl = document.querySelectorAll('.saveBtn');
var timeBlockEl = document.querySelectorAll('.time-block');
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

// parse hours into numbers and set text area to variable
var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

var hour10Am = document.querySelector('.time10').textContent;
hour10Am = parseInt(hour10Am[1]) + 10;
var text10am = document.querySelector('.hr10');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[1]) + 10;
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[2]) + 10;
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);
var text9am = document.querySelector('.hr9');

// function to update current day at top of the screen
function dateDisplay() {
  currentDayEl.textContent = moment().format('MMM Do YYYY');
}

// show time blocks in corresponding colors, if they are in the past, present, or future

// when save icon is clicked, event is saved to local storage

$('.btn9').on('click', function () {
  var taskContent = $('.hr9').val();
  localStorage.setItem('9:00 AM', taskContent);
});
$('.hr9').val(localStorage.getItem('9:00 AM'));

$('.btn10').on('click', function () {
  var taskContent = $('.hr10').val();
  localStorage.setItem('10:00 AM', taskContent);
});
$('.hr10').val(localStorage.getItem('10:00 AM'));

$('.btn11').on('click', function () {
  var taskContent = $('.hr11').val();
  localStorage.setItem('11:00', taskContent);
});
$('.hr11').val(localStorage.getItem('11:00 AM'));

$('.btn12').on('click', function () {
  var taskContent = $('.hr12 PM').val();
  localStorage.setItem('12:00 PM', taskContent);
});
$('.hr12').val(localStorage.getItem('12:00 PM'));

$('.btn1').on('click', function () {
  var taskContent = $('.hr1').val();
  localStorage.setItem('1:00 PM', taskContent);
});
$('.hr1').val(localStorage.getItem('1:00 PM'));

$('.btn2').on('click', function () {
  var taskContent = $('.hr2').val();
  localStorage.setItem('2:00 PM', taskContent);
});
$('.hr2').val(localStorage.getItem('2:00 PM'));

$('.btn3').on('click', function () {
  var taskContent = $('.hr3').val();
  localStorage.setItem('3:00 PM', taskContent);
});
$('.hr3').val(localStorage.getItem('3:00 PM'));

$('.btn4').on('click', function () {
  var taskContent = $('.hr4').val();
  localStorage.setItem('4:00 PM', taskContent);
});
$('.hr4').val(localStorage.getItem('4:00 PM'));

$('.btn5').on('click', function () {
  var taskContent = $('.hr5').val();
  localStorage.setItem('5:00 PM', taskContent);
});
$('.hr5').val(localStorage.getItem('5:00 PM'));

dateDisplay();

function showCurrentTime() {
  var now = moment().hour;
  console.log(now);
}
