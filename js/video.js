var video;


//Load page
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

//Play button is clicked
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector('#player1');
	video.volume = document.querySelector('#slider').value/100;
	video.play();
	console.log("Volume is set to " + video.volume);
});

//Pause button is clicked
document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector('#player1');
	video.pause();
});

//Slow down button is clicked
document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Down Video");
	video = document.querySelector('#player1');
	video.playbackRate *= 0.9;
	console.log("Video Speed is set to " + video.playbackRate);
});

//Speed up button is clicked
document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed Up Video");
	video = document.querySelector('#player1');
	video.playbackRate /= 0.9;
	console.log("Video Speed is set to " + video.playbackRate);
});

//Skip ahead button is clicked
document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip Ahead");
	video = document.querySelector('#player1');
	video.currentTime += 10;
	if(video.currentTime == video.duration) {
		video.currentTime = 0;
	}
	console.log("Video Time is now " + video.currentTime);
});

//Mute button is clicked
document.querySelector('#mute').addEventListener("click", function() {
	if(document.querySelector('#mute').innerHTML == "Unmute") {
		console.log("Video Unmuted");
		document.querySelector('#mute').innerHTML = "Mute";
		video.muted = false;
	}
	else {
		console.log("Video Muted");
		document.querySelector('#mute').innerHTML = "Unmute";
		video.muted = true;
	}
});

//Volume Slider
document.querySelector('#volume').innerHTML = document.querySelector('#slider').value + "%";
document.querySelector('#slider').oninput = function() {
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value + "%";
	video.volume = document.querySelector('#slider').value/100;
};

//Old School
document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Old School Applied");
	video = document.querySelector('#player1');
	video.classList.add('oldSchool');
});

//Original
document.querySelector('#orig').addEventListener("click", function() {
	console.log("Old School Removed");
	video = document.querySelector('#player1');
	video.classList.remove('oldSchool');
})

