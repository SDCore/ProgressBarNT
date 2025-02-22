// get the current second of the current minute and translate that into a percentage of 60
var secondProgressBar = document.getElementById('secondProgressBar-Inner');
var hourProgressBar = document.getElementById('hourProgressBar-Inner');

// interate every second to update the progress bar and reset it to 0 when it reaches 100
setInterval(function () {
	currentSecond = new Date().getSeconds();
	currentSecondPercentage = (currentSecond / 60) * 100;
	secondProgressBar.style.width = currentSecondPercentage + '%';
}, 1000);

// interate every second to update the progress bar and reset it to 0 when it reaches 100
setInterval(function () {
	currentHour = new Date().getMinutes();
	currentHourPercentage = (currentHour / 60) * 100;
	hourProgressBar.style.width = currentHourPercentage + '%';
}, 1000);

// function progressBarTimer(name, increment, interval, duration) {
// 	var progress = 0;
// 	var progressBar = document.getElementById(name);

// 	var intervalId = setInterval(function () {
// 		progress += increment;
// 		progressBar.style.width = progress + '%';

// 		if (progress > 100) {
// 			progress = 0;
// 		}
// 	}, interval);
// }

// progressBarTimer('secondProgressBar-Inner', 100 / 60, 1000, 60000);
