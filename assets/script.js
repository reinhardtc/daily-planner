var currentDayEl = document.querySelector('#currentDay');
var saveBtnEl = document.querySelectorAll('.saveBtn');
var timeBlockEl = document.querySelectorAll('.time-block');
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

// parse hours into numbers
var hour9Am = document.querySelector('.time9').textContent;
hour9Am = parseInt(hour9Am[0]);

var hour10Am = document.querySelector('.time10').textContent;
hour10Am = parseInt(hour10Am[1]) + 10;

var hour11Am = document.querySelector('.time11').textContent;
hour11Am = parseInt(hour11Am[1]) + 10;

var hour12Pm = document.querySelector('.time12').textContent;
hour12Pm = parseInt(hour12Pm[1]) + 10;

var hour1Pm = document.querySelector('.time1').textContent;
hour1Pm = parseInt(hour1Pm[0]) + 12;

var hour2Pm = document.querySelector('.time2').textContent;
hour2Pm = parseInt(hour2Pm[0]) + 12;

var hour3Pm = document.querySelector('.time3').textContent;
hour3Pm = parseInt(hour3Pm[0]) + 12;

var hour4Pm = document.querySelector('.time4').textContent;
hour4Pm = parseInt(hour4Pm[0]) + 12;

var hour5Pm = document.querySelector('.time5').textContent;
hour5Pm = parseInt(hour5Pm[0]) + 12;

// function to update current day at top of the screen
function dateDisplay() {
  currentDayEl.textContent = moment().format('MMM Do YYYY');
}

// arrays to hold parsed hours and text areas
var hours = [hour9Am, hour10Am, hour11Am, hour12Pm, hour1Pm, hour2Pm, hour3Pm, hour4Pm, hour5Pm];
var textAreaArr = [
  { text9am: '.hr9' },
  { text10am: '.hr10' },
  { text11am: '.hr11' },
  { text12Pm: '.hr12' },
  { text1Pm: '.hr1' },
  { text2Pm: '.hr2' },
  { text3Pm: '.hr3' },
  { text4Pm: 'hr4' },
  { text5Pm: '.hr5' },
];

// show time blocks in corresponding colors, if they are in the past, present, or future by comparing current time to hours array

function setColor() {
  for (var i = 0; i < hours.length; i++) {
    if (currentTime < hours[i]) {
      timeBlockEl[i].classList.add('future');
    } else if (currentTime === hours[i]) {
      timeBlockEl[i].classList.add('present');
    } else {
      timeBlockEl[i].classList.add('past');
    }
  }
}
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
setColor();
