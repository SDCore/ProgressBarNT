var secondProgressBar = document.getElementById('secondProgressBar');
var secondText = document.getElementById('secondText');

var minuteProgressBar = document.getElementById('minuteProgressBar');
var minuteText = document.getElementById('minuteText');

var hourProgressBar = document.getElementById('hourProgressBar');
var hourText = document.getElementById('hourText');

var weekProgressBar = document.getElementById('weekProgressBar');
var weekText = document.getElementById('weekText');

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

function pause(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

setInterval(async function () {
	currentSecond = new Date().getSeconds();
	currentMinute = new Date().getMinutes();
	currentHour = new Date().getHours();
	currentWeek = new Date().getDay();
	currentDay = new Date().getDate();
	currentMonth = new Date().getMonth();
	currentYear = new Date().getFullYear();

	const pauseLength = 100;

	const dayOfWeekNumber = [7, 1, 2, 3, 4, 5, 6];

	currentSecondPercentage = ((currentSecond + 1) / 60) * 100;
	currentMinutePercentage = ((currentMinute + 1) / 60) * 100;
	currentHourPercentage = ((currentHour + 1) / 24) * 100;
	currentWeekPercentage = (dayOfWeekNumber[currentWeek] / 7) * 100;
	currentDayPercentage = (currentDay / daysInThisMonth()) * 100;
	currentMonthPercentage = ((currentMonth + 1) / 12) * 100;
	currentDecadePercentage = ((currentYear % 10) / 10) * 100;
	currentCenturyPercentage = ((currentYear % 100) / 100) * 100;
	currentMillenniumPercentage = ((currentYear % 1000) / 1000) * 100;

	secondProgressBar.style.width = currentSecondPercentage + '%';
	secondText.innerHTML = currentSecond;

	await pause(pauseLength);

	minuteProgressBar.style.width = currentMinutePercentage + '%';
	minuteText.innerHTML = currentMinute;

	await pause(pauseLength);

	hourProgressBar.style.width = currentHourPercentage + '%';
	hourText.innerHTML = currentHour;

	await pause(pauseLength);

	weekProgressBar.style.width = currentWeekPercentage + '%';
	weekText.innerHTML = dayOfWeekNumber[currentWeek];

	await pause(pauseLength);

	dayProgressBar.style.width = currentDayPercentage + '%';
	dayText.innerHTML = currentDay;

	await pause(pauseLength);

	monthProgressBar.style.width = currentMonthPercentage + '%';
	monthText.innerHTML = currentMonth + 1;

	await pause(pauseLength);

	decadeProgressBar.style.width = currentDecadePercentage + '%';
	decadeText.innerHTML = currentYear % 10;

	await pause(pauseLength);

	centuryProgressBar.style.width = currentCenturyPercentage + '%';
	centuryText.innerHTML = currentYear % 100;

	await pause(pauseLength);

	millenniumProgressBar.style.width = currentMillenniumPercentage + '%';
	millenniumText.innerHTML = currentYear % 1000;
}, 1000);
