// div containing the clock display
var clockDiv = document.getElementById("clock")

/**
 * Updates the clocks display in the div.
 */
function updateClock(){
	const now = new Date();
	let hours = now.getHours().toString().padStart(2, '0');
	let minutes = now.getMinutes().toString().padStart(2, '0');
	let seconds = now.getSeconds().toString().padStart(2, '0');
	clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call when the script is loaded
updateClock()

// Clock is updated once per second
setInterval(updateClock, 1000)
