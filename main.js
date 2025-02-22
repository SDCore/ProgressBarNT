var secondProgressBar = document.getElementById('secondProgressBar');
var minuteProgressBar = document.getElementById('minuteProgressBar');
var hourProgressBar = document.getElementById('hourProgressBar');
var dayProgressBar = document.getElementById('dayProgressBar');
var monthProgressBar = document.getElementById('monthProgressBar');
var decadeProgressBar = document.getElementById('decadeProgressBar');
var centuryProgressBar = document.getElementById('centuryProgressBar');
var millenniumProgressBar = document.getElementById('millenniumProgressBar');

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
	minuteProgressBar.style.width = currentMinutePercentage + '%';
	hourProgressBar.style.width = currentHourPercentage + '%';
	dayProgressBar.style.width = currentDayPercentage + '%';
	monthProgressBar.style.width = currentMonthPercentage + '%';
	decadeProgressBar.style.width = currentDecadePercentage + '%';
	centuryProgressBar.style.width = currentCenturyPercentage + '%';
	millenniumProgressBar.style.width = currentMillenniumPercentage + '%';
}, 1000);
