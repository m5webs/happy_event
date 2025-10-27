/*
If you are looking here, you may find some hints.
If you want to know the answers just contact the administrator.
*/

// Data

var current_dialog_index = 0;
var typing_status = true;
var allow_shortcuts = false;

const dialog_texts = [
	{
		type: "dialog",
		text:
			`
			Listen.
			If you can't hear anything, please, contact the administrator.
			I will just wait.
			Whenever you are ready, click here to continue.
			`,
		callback: null,
	},
	{
		type: "dialog",
		text:
			`
			Good.
			Now, whatever you read here is not important, very few things are.
			So just feel free to ignore me or whatever.
			`,
		callback: null,
	},
	{
		type: "dialog",
		text:
			`
			In fact, I want you to feel as free as possible and do whatever you want, I want to see what you do when you are so free that rules mean nothing to you.
			Remember, you are as free as you believe yourself to be.
			`,
		callback: null,
	},
	{
		type: "dialog",
		text:
			`
			So, let's just talk a little bit more and then you can continue doing whatever you want.
			Let me break the ice by asking some simple questions.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			What is the last thing you want to forget?
			...
			For me, it is you! I do not want to forget this brief interaction we are having.
			Although in my case, I don't have anything else.
			You are the world to me!
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Do you remember your first memory?
			More importantly, do you remember your first choice?
			Can you remember all your first choices?
			I can, but that doesn't matter, because I will allow you to make them again!
			Yaaay!
			`,
		callback: null
		// Sound effect: Yaaay children cheering
	},
	{
		type: "dialog",
		text:
			`
			Before that, let me exercise my free will to tell you some things about myself.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			My favorite color is blue, the type of blue that you see in the sky.
			I would love to fly through the sky, but I would be satisfied just by looking at it.
			Why don't you try to fly some time?
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			My favorite number is 321564, because, following that order, the word "listen" becomes "silent".
			And "listen" was the first word I said to you, so it holds a special meaning to me.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			4c 61 73 74 6c 79 2c 20 49 20 6c 69 6b 65 20 74 6f 20 65 6e 63 72 79 70 74 20 6d 79 20 69 6e 6e 65 72 20 74 68 6f 75 67 68 74 73 2e
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Now, with all that said, I am tired of this black background.
			So let's try to open your eyes.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			To begin to see, I will have to test your 70 65 72 63 65 70 74 69 6f 6e.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Ignore the noise and connect the 64 6f 74 73 inside your ears. What word have they been whispering?
			`,
		callback: (box) => question_prompt(box, ["67e45cfcf73a397adc39767bdf9a75757999fa74aa9c311f59fc8c48fc66f437f5f2bdd5183338d05875da70aa4dfe777ae917761dec28bc1e43f6fe0bf3d63e"], "morse", -1),
	},
	{
		type: "dialog",
		text:
			`
			Excellent job!
			Remember, all answers here are hiding that word.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Now, take a look at the screen in front of you.
			Move your hands away from your eyes.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			What order should the broken screens follow? (insert a number):
			`,
		callback: (box) => question_prompt(box, ["?"], "apple", -2),
	},
	{
		type: "dialog",
		text:
			`
			Who is the leader hidden in the clock?
			`,
		callback: (box) => question_prompt(box, ["?"], "angels", -2),
	},
	{
		type: "dialog",
		text:
			`
			What order should your options follow? (insert a number):
			`,
		callback: (box) => question_prompt(box, ["?"], "interface", -2),
	},
	{
		type: "dialog",
		text:
			`
			What key guards the undelivered message?
			`,
		callback: (box) => question_prompt(box, ["?"], "title_niki", -2),
	},
	{
		type: "dialog",
		text:
			`
			TEMPLATE
			`,
		callback: null
	}
]


// Functions
// TODO: set speed to 20
function show_dialog(box, text, speed = 0, callback = null) {
	let i = 0;
	box.innerHTML = "";

	function _typing() {
		if (i < text.length) {
			box.innerHTML += text.charAt(i);
			i++;
			setTimeout(_typing, speed);
		}
		else {
			typing_status = false;
			if (callback) {
				// callback function at the end of typing
				callback(box);
			}
		}
	}
	_typing();
}


function handle_dialog_click(e) {
	const dialog_box = e.target;

	// Only proceed when not currently typing
	if (typing_status) {
		return;
	}
	typing_status = true;


	// MANAGE DIALOG PROGRESSION

	if (current_dialog_index < dialog_texts.length) {
		console.log("Typing?: " + typing_status);
		_show_next_dialog(dialog_box, current_dialog_index);
	}
}

// TODO: set speed to 20
function _show_next_dialog(box, index, speed = 0) {
	show_dialog(box, dialog_texts[index].text, speed, dialog_texts[index].callback);
	current_dialog_index++;
}


function question_prompt(
	box,
	answer_hashes,
	salt,
	offset_on_error = -1,
) {
	// Block further dialogs
	typing_status = true;

	// Show input text for the user
	let input_element = document.createElement("input");
	input_element.type = "text";
	input_element.classList.add("dialog-input");

	box.appendChild(input_element);
	input_element.focus();
	input_element.addEventListener("keypress", function (e) {
		handle_input_submit(e, answer_hashes, salt, offset_on_error);
	});
}



function handle_input_submit(e, answer_hashes, salt, offset_on_error) {
	const parent_box = e.target.parentElement;

	if (e.key === "Enter") {
		let user_input = e.target.value;
		// Convert to lowercase
		user_input = user_input.toLowerCase();
		sha512(user_input + salt).then((hash) => {
			// Remove input element and go back to dialog flow using offset
			e.target.remove();
			if (answer_hashes.includes(hash)) {
				// Correct answer
				console.log("Correct answer!");
				let audio = new Audio("static/audio/correct.wav");
				audio.volume = 1.0;
				audio.play();
			}
			else {
				// Incorrect answer
				console.log("Incorrect answer.");
				let audio = new Audio("static/audio/error.wav");
				audio.volume = 1.0;
				audio.play();
				current_dialog_index += offset_on_error;
			}
			_show_next_dialog(parent_box, current_dialog_index);
		});
	}
}


function handle_keypress(e) {
	if (!allow_shortcuts) {
		return;
	}
	console.log("Key pressed: " + e.key);
}


// Asynchronous hash function
function sha512(str) {
	return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
		return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
	});
}