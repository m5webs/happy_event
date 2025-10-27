


function _fade_audio(audioElement, maxVol, startDelay, fadeInTime, steps) {
	let i = 0;
	let interval = fadeInTime / steps;
	audioElement.volume = 0;
	audioElement.play();
	setTimeout(function () {
		let intervalId = setInterval(function () {
			let volume = (maxVol / steps) * i;
			audioElement.volume = volume;
			if (++i >= steps)
				clearInterval(intervalId);
		}, interval);
	}, startDelay);
}

function init() {
	console.log("Scenes initialized");

	// hide dialog box
	const dialog_box = document.getElementById("dialog-box");
	dialog_box.style.display = "none";

	// add event listeners
	const body = document.body;
	body.addEventListener("keypress", handle_keypress);
}


function start_scene(e) {
	console.log("Scene started");
	// hide title screen
	const title_text = document.getElementById("title-text");
	title_text.removeAttribute("onclick");
	// add fade-out class
	title_text.classList.add("fade-out");
	setTimeout(() => {
		title_text.style.display = "none";
		scene_2_init();
	}, 2000);
}


function scene_2_init() {
	console.log("Scene 2 initialized");
	// show dialog box
	const dialog_box = document.getElementById("dialog-box");
	dialog_box.style.display = "block";
	dialog_box.classList.add("fade-in");
	setTimeout(() => {
		// First dialog
		_show_next_dialog(dialog_box, 0, 40);
	}, 1000);

	// start audio
	const bgm = document.getElementById("bgm");
	_fade_audio(bgm, 0.8, 0, 14000, 100);
}


function hands_animation_1() {
	const body = document.body;

	const hand_video = document.createElement("video");
	hand_video.src = "static/video/hands_1.mp4";
	hand_video.playbackRate = 1.8;
	hand_video.autoplay = true;
	hand_video.classList.add("hand-video");
	body.appendChild(hand_video);

	hand_video.addEventListener("ended", () => {
		body.removeChild(hand_video);
	});
}