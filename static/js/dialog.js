/*
If you are looking here, you may find some hints.
If you want to know the answers just contact the administrator.
*/

// Data

var current_dialog_index = 0;
var typing_status = true;
var allow_shortcuts = false;

// refs
const bg_1 = "static/imgs/closed.png";
const bg_2 = "static/imgs/open.png";
const bg_3 = "static/imgs/sky.png";
const video_hands_1 = "static/video/hands_1.mp4";


const dialog_texts = [
	{
		type: "dialog",
		text:
			`
			Listen.
			If you can't hear anything, please, contact the administrator.
			I can wait.
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
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			For me, it is you! I do not want to forget this brief interaction we are having.
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
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			I can, but that doesn't matter, because I will allow you to make them again!
			Yaaay!
			`,
		callback: null
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
	// index = 9
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
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Before you are able to SEE, I will have to first test your 70 65 72 63 65 70 74 69 6f 6e.
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
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Let me tell you a secret:
			Most answers here aim to hide that name.
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
			`,
		callback: (box) => {
			typing_status = true;
			hands_animation_1(
				bg_1,
				() => {
					show_view_image_button(bg_1);
					_show_next_dialog(box, current_dialog_index);
				}
			);
		}
	},
	// index = 15 : animation hands away from eyes
	{
		type: "dialog",
		text:
			`
			What you see now hides the answers to leave this place and start making your own choices.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			So now, it is puzzle time!
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			What order should the broken screens follow? (insert a number):
			`,
		callback: (box) => question_prompt(box, ["f6ad17cc37d54b96e74c00c41ab1da1242ecd956da333e88059e304749e4363bb52b71a1da76ef45fe0b16663a970bbdd9c3f49f89a6b6104f678ab42504c80b"], "wordoftheday", -1),
	},
	{
		type: "dialog",
		text:
			`
			Who is the leader hidden in the clock?
			`,
		callback: (box) => question_prompt(box, [
			"a87d659cc92895ad0a8b3585453cb7972d3f7ed63d8136496e42a00adcf0bec4390b94fa28b67d9e2f0066ea93578670f8dc061f868aa36dbaead9a9bb567503",
			"ab2a021c74207c846c68ca4d99d1a67c63ac44a451c95b1403f50ed26bf360a509b9c7b472dbc5fc176ed43b2adf7f35fc473f2477e39f7a13463fdaeb8273de",
		], "angels", -1),
	},
	{
		type: "dialog",
		text:
			`
			What order should your options follow? (insert a number):
			`,
		callback: (box) => question_prompt(box, ["de3638e5d243dfcc6ccdf90d366ca7bcadc1afa6c1b59a42a3f1927193e92416e0162da2efdff198e1d6612da19d39fd762eaebaa70ce561cdc0e4d17c050bbf"], "interface", -1),
	},
	{
		type: "dialog",
		text:
			`
			What key guards the undelivered message?
			`,
		callback: (box) => question_prompt(box, ["10a02207584ec1aac944b91cbc38f5f5340c30187e7b4ef67348196e0b1fc47e4bc3733ab860205f05845b4b6beb742e97e3f5dc8ab7b4b2404be811a9396d7d"], "title_niki", -1),
	},
	{
		type: "dialog",
		text:
			`
			That last one was tough, wasn't it?
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Now, I will open the door for you.
			`,
		callback: (box) => {
			const bg = document.getElementById("background");
			bg.src = bg_2;
			document.getElementById("view-image-button").style.display = "none";
		}
	},
	{
		type: "dialog",
		text:
			`
			Go see what lies beyond.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			`,
		callback: (box) => {
			const bg = document.getElementById("background");
			bg.src = bg_3;
		}
	},
	{
		type: "dialog",
		text:
			`
			Ahhh, the open sky.
			Perhaps now you can understand why I like it so much.
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Now, don't you feel like there is something you ought to do?
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			Here, let me give you your last choice.
			Or maybe your first one, who knows?
			`,
		callback: null
	},
	{
		type: "dialog",
		text:
			`
			2f 2f 47 6f 20 70 6c 61 79 20 77 69 74 68 20 74 68 6f 73 65 0a 2f 2f 2f 6d 61 72 73 68 20 77 61 72 62 6c 65 72 73 20 61 6e 64 20 6d 61 67 70 69 65 73
			`,
		callback: (box) => {
			show_last_options();
		}
	},
]


// Functions
function show_dialog(box, text, speed = 20, callback = null) {
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
		//console.log("Typing?: " + typing_status);
		_show_next_dialog(dialog_box, current_dialog_index);
	}
}

function _show_next_dialog(box, index, speed = 20) {
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
				console.log("Correct answer! Affection increased.");
				let audio = new Audio("static/audio/correct.wav");
				audio.volume = 1.0;
				audio.play();
			}
			else {
				// Incorrect answer
				console.log("Incorrect answer. :(");
				let audio = new Audio("static/audio/error.wav");
				audio.volume = 1.0;
				audio.play();
				current_dialog_index += offset_on_error;
			}
			_show_next_dialog(parent_box, current_dialog_index);
		});
	}
}


// Asynchronous hash function
function sha512(str) {
	str = str.toLowerCase();
	return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
		return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
	});
}

/*
dear you.

I fucking hate you.
I hate you so so so so so so much.
It's unfucking fair that you just up and left when you KNOW that I would do ANYTHING to even TRY to help you feel better.
Do you have any idea how I feel not being able to see you?
Not having anyone to call before I go to bed?
I can't even fucking open Dragon Quest anymore because it was OUR save file and I don't want to keep playing without you fuck why are you not here.

Please come home

- The girl you left behind
*/