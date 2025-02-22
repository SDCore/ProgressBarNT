var secondProgressBar = document.getElementById('secondProgressBar');
var minuteProgressBar = document.getElementById('minuteProgressBar');
var hourProgressBar = document.getElementById('hourProgressBar');
var dayProgressBar = document.getElementById('dayProgressBar');

function daysInThisMonth() {
	var now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

setInterval(function () {
	currentSecond = new Date().getSeconds();
	currentMinute = new Date().getMinutes();
	currentHour = new Date().getHours();
	currentDay = new Date().getDate();

	currentSecondPercentage = (currentSecond / 60) * 100 + 1;
	currentMinutePercentage = (currentMinute / 60) * 100 + 1;
	currentHourPercentage = (currentHour / 24) * 100;
	currentDayPercentage = (currentDay / daysInThisMonth()) * 100;

	// secondProgressBar.style.width = currentSecondPercentage + '%';
	secondProgressBar.style.width = currentSecondPercentage < 99 ? currentSecondPercentage + '%' : '100%';
	minuteProgressBar.style.width = currentMinutePercentage < 99 ? currentMinutePercentage + '%' : '100%';
	hourProgressBar.style.width = currentHourPercentage < 95 ? currentHourPercentage + '%' : '100%';
	dayProgressBar.style.width = currentDayPercentage + '%';
}, 1000);
