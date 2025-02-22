// Display the current time
function displayTime() {
	const timeElement = document.getElementById('time');
	const now = new Date();
	timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`;
}

// Call displayTime every second
setInterval(displayTime, 1000);

// Set up the search functionality (for example, Google search)
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		const query = searchBar.value;
		const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
		window.open(searchUrl, '_self'); // Open search results in the same tab
	}
});
