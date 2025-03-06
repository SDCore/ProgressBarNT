var secondProgressBar = document.getElementById('secondProgressBar');
var secondText = document.getElementById('secondText');

var minuteProgressBar = document.getElementById('minuteProgressBar');
var minuteText = document.getElementById('minuteText');

var hourProgressBar = document.getElementById('hourProgressBar');
var hourText = document.getElementById('hourText');

var dayProgressBar = document.getElementById('dayProgressBar');
var dayText = document.getElementById('dayText');

var monthProgressBar = document.getElementById('monthProgressBar');
var monthText = document.getElementById('monthText');

var decadeProgressBar = document.getElementById('decadeProgressBar');
var decadeText = document.getElementById('decadeText');

var centuryProgressBar = document.getElementById('centuryProgressBar');
var centuryText = document.getElementById('centuryText');

var millenniumProgressBar = document.getElementById('millenniumProgressBar');
var millenniumText = document.getElementById('millenniumText');

function daysInThisMonth() {
	var now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

setInterval(function () {
	currentSecond = new Date().getSeconds();
	currentMinute = new Date().getMinutes();
	currentHour = new Date().getHours();
	currentDay = new Date().getDate();
	currentMonth = new Date().getMonth();
	currentYear = new Date().getFullYear();

	currentSecondPercentage = ((currentSecond + 1) / 60) * 100;
	currentMinutePercentage = ((currentMinute + 1) / 60) * 100;
	currentHourPercentage = ((currentHour + 1) / 24) * 100;
	currentDayPercentage = (currentDay / daysInThisMonth()) * 100;
	currentMonthPercentage = ((currentMonth + 1) / 12) * 100;
	currentDecadePercentage = ((currentYear % 10) / 10) * 100;
	currentCenturyPercentage = ((currentYear % 100) / 100) * 100;
	currentMillenniumPercentage = ((currentYear % 1000) / 1000) * 100;

	secondProgressBar.style.width = currentSecondPercentage + '%';
	secondText.innerHTML = currentSecond;

	minuteProgressBar.style.width = currentMinutePercentage + '%';
	minuteText.innerHTML = currentMinute;

	hourProgressBar.style.width = currentHourPercentage + '%';
	hourText.innerHTML = currentHour;

	dayProgressBar.style.width = currentDayPercentage + '%';
	dayText.innerHTML = currentDay;

	monthProgressBar.style.width = currentMonthPercentage + '%';
	monthText.innerHTML = currentMonth + 1;

	decadeProgressBar.style.width = currentDecadePercentage + '%';
	decadeText.innerHTML = currentYear % 10;

	centuryProgressBar.style.width = currentCenturyPercentage + '%';
	centuryText.innerHTML = currentYear % 100;

	millenniumProgressBar.style.width = currentMillenniumPercentage + '%';
	millenniumText.innerHTML = currentYear % 1000;
}, 1000);
