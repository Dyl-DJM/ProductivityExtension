var clockDiv = document.getElementById("clock")

function updateClock(){
	const now = new Date();
	let hours = now.getHours().toString().padStart(2, '0');
	let minutes = now.getMinutes().toString().padStart(2, '0');
	let seconds = now.getSeconds().toString().padStart(2, '0');
	clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock()

setInterval(updateClock, 1000)
