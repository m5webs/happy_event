
const starting_dialog_index = 0;
const starting_speed = 40;

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
	console.log("USER2 logged in");
	console.log("Please leave the terminal, do not touch the wires.");

	// hide dialog box
	const dialog_box = document.getElementById("dialog-box");
	dialog_box.style.display = "none";
}


function start_scene(e) {
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
	// show dialog box
	const dialog_box = document.getElementById("dialog-box");
	dialog_box.style.display = "block";
	dialog_box.classList.add("fade-in");
	setTimeout(() => {
		// First dialog
		current_dialog_index = starting_dialog_index;
		_show_next_dialog(dialog_box, current_dialog_index, starting_speed);
	}, 1000);

	// start audio
	const bgm = document.getElementById("bgm");
	_fade_audio(bgm, 0.8, 0, 14000, 100);
}


function hands_animation_1(after_image, callback = null) {
	const body = document.body;

	const hand_video = document.createElement("video");
	hand_video.src = video_hands_1;
	hand_video.playbackRate = 1.8;
	hand_video.autoplay = true;
	hand_video.classList.add("hand-video");
	body.appendChild(hand_video);

	hand_video.addEventListener("ended", () => {
		const bg = document.getElementById("background");
		bg.src = after_image;
		setTimeout(() => {
			body.removeChild(hand_video);
		}, 500);
		if (callback) {
			callback();
		}
	});
}


function show_last_options() {
	const body = document.body;
	const dialog_box = document.getElementById("dialog-box");
	const number_of_btns = 6;

	const button_container = document.createElement("div");
	button_container.classList.add("button-container");
	body.appendChild(button_container);

	for (let i = 0; i < number_of_btns; i++) {
		let jump_button = document.createElement("button");
		jump_button.innerText = "Jump";
		jump_button.classList.add("jump-button");
		let href_link = "https://djnostyle.itch.io/lessons-in-love";
		let audio_file = "static/audio/error.wav";
		if (i == 3) {
			href_link = "https://djnostyle.itch.io/lessons-in-love?YUMI_SEX=TRUE";
			audio_file = "static/audio/correct.wav";
		}
		jump_button.addEventListener("click", () => {
			let audio = new Audio(audio_file);
			audio.volume = 1.0;
			audio.play();
			setTimeout(() => {
				window.location.href = href_link;
			}, 1000);
		});
		button_container.appendChild(jump_button);
	}
	dialog_box.style.display = "none";
}


function show_view_image_button(img_ref) {
	const container = document.getElementById("background-container");
	const button = document.createElement("button");
	button.id = "view-image-button";
	button.innerText = "View Image";
	button.classList.add("view-image-button");
	button.style.opacity = 0;
	button.addEventListener("click", () => {
		window.open(img_ref, "_blank");
	});
	container.appendChild(button);
	setTimeout(() => {
		button.style.opacity = 0.8;
	}, 500);
}