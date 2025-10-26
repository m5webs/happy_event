


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
}


function start_scene(e) {
	console.log("Scene started");
	console.log(e)
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
		show_dialog(dialog_box, dialog_texts[current_dialog_index]);
		current_dialog_index++;
	}, 2000);

	// start audio
	const bgm = document.getElementById("bgm");
	_fade_audio(bgm, 1, 0, 14000, 100);
}