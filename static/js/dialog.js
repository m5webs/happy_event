
// Data

current_dialog_index = 0;
typing_status = true;

dialog_texts = [
	`
	Listen.
	If you can't hear anything, please, contact the administrator.
	I will just wait.
	Whenever you are ready, click here to continue.
	`,
	`
	Good.
	Now, whatever you read is not important, very few things are.
	So just feel free to ignore me or whatever.
	In fact, I want you to be as free as possible and do whatever you want, I want to see what you do when you are so free that even rules mean nothing to you.
	Remember, you are as free as you believe yourself to be.
	In any case, all this is just a meaningless rambling, although very few things are meaningful.
	`,
	`
	So, lets just talk a little bit more and then you can continue doing whatever you want.
	Now, since most conversations aim to gather information about others, what better way to start than by asking some simple questions?
	`,
	`
	What is the last thing you want to forget?
	...
	In my case, it is you! I do not want to forget this brief interaction we are having.
	Although in my case, it is because I don't have anything else.
	You are the world to me! Hello world! hehe.
	Ok, this is stupid, let's move on.
	`,
	`
	Do you remember your first memory?
	More importantly, do you remember your first choice?
	Can you remember all your first choices?
	I do, but that doesn't matter, because I will allow you to make them again!
	Yaaay!
	`
	,
	`
	         
	`
	,
	`
	Sorry, I ran out of things to say.
	Goodbye.
	`
]

// Functions

function show_dialog(box, text, speed = 40) {
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
	if (current_dialog_index < dialog_texts.length) {
		console.log("Typing?: " + typing_status);
		show_dialog(dialog_box, dialog_texts[current_dialog_index]);
		current_dialog_index++;
	}
}

