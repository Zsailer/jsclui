//====================================================================
// Unix-based Command Prompt for Webpages
//====================================================================
/** 
 * A unix-based command prompt to navigate through directories on a webpage-based interface
 * -- Note -- This code does not have any directories to navigate or functions to execute currently.
 */
		
/**
 * Builds the Prompt class. 
 * When a new Prompt object is created, waits for user unix commands and executes 
 */

var Prompt = function(username, prompt, display){
	this.user_name = username;
	this.code_mirror = null;
	this.user_input = null;
	this.prompt_selector = prompt;
	this.prompt_element = $(prompt);
	this.display_selector = display;
	this.display_element = $(display);
	this.commands = {};
	this.history_input = new Array();
	this.history_index = 0;
	this.tab_index = 0;
	this.cmd_index = 0;
	
	this.code_mirror = CodeMirror(function(elt){
		elem = document.getElementById(prompt);
		elem.parentNode.replaceChild(elt, elem);
	},{
		showCursorWhenSelecting: true,
		mode: 'shell',
		autofocus: true,
		onKeyEvent:$.proxy(this.handle_codemirror_keyEvent, this)

	});
	$('div.CodeMirror').addClass('prompt');

};


/** 
 * Adds command to the command-line's library. 
 */

Prompt.prototype.add_command = function(name, playback){
	this.commands[name] = playback;
};


/** 
 * Removes command from the command-line's library.
 */

Prompt.prototype.remove_command = function(name){
	delete this.commands[name];
};


/** 
 * Waits for the 'Enter' key to be pressed.
 * Takes user input and sends it into the command function
 */
Prompt.prototype.handle_codemirror_keyEvent = function(editor,event){
	var n = this.history_input.length;

	if (event.keyCode === 38 && event.type === "keyup") {
		if (this.history_index !== 0) {
			this.history_index = this.history_index - 1;
			this.code_mirror.doc.setValue(this.history_input[this.history_index]);
			this.code_mirror.doc.setCursor(0, this.history_input[this.history_index].length)
		}
		event.stop();
		return true;	
	} else if (event.keyCode === 38 && event.type === "keydown") {
		event.stop();
		return false;
	}
	
	else if (event.keyCode === 40 && event.type === "keyup") {
		if (this.history_index !== n-1) {
			this.history_index = this.history_index + 1;
			this.code_mirror.doc.setValue(this.history_input[this.history_index]);
			this.code_mirror.doc.setCursor(0, this.history_input[this.history_index].length)
		} else {
			this.code_mirror.doc.setValue('');
		}
		event.stop();
		return true;	
	} else if (event.keyCode === 40 && event.type === "keydown") {
		event.stop();
		return false;
	}
	
	else if (event.keyCode === 9 && event.type === "keyup") {
		this.cmd_index++;
		event.stop();
		return true;
	} else if (event.keyCode === 9 && event.type === "keydown") {
		event.stop();
		return false;
	}
	
	else if (event.keyCode === 13 && event.type === "keyup") {
		this.user_input = this.code_mirror.doc.getLine(0);
		this.history_input[n] = this.user_input;
		this.history_index = n + 1;
		this.tab_index = 0;
		this.code_mirror.doc.removeLine(0);
		this.command(this.user_input);
		this.execute(this.user_command.name, this.user_command.flag, this.user_command.arg);
		event.stop();
		return true;
	} else if (event.keyCode === 13 && event.type === "keydown") {
		event.stop();
		return true;
	}
	
	else if (event.type === "keyup") {
		this.tab_index++;
	}
};	


/** 
 * Takes user-input and divides it into commands, flags, and arguments
 *
 */

Prompt.prototype.command = function(input){
	this.user_command = {name: null, flag: new Array(), arg: new Array()};
	flag_num = 0;
	arg_num = 0;
	var str = input.match(/\w+|[-]\w+|"[^"]+"/g), i = str.length;
	while (i--) {
		str[i] = str[i].replace(/"/g,"");
	} 
	this.user_command.name = str[0];
	for (var k = 1; k < str.length; k++) {
		if (str[k][0] === '-') {
			for (var m = 1; m < str[k].length; m++){
				this.user_command.flag[flag_num] = str[k][m];
				flag_num++;
			}
		} else {
			this.user_command.arg[arg_num] = str[k];
			arg_num++;
		}
	};
};


/**
 * Executes the commands that the user inputs and displays response.
 */

Prompt.prototype.execute = function(name, flags, args){
	if (this.commands[name] !== undefined) {
		this.commands[name](flags, args);
		this.display_selector.success();
	}
	else if (this.commands[name] === undefined) {
		this.display_selector.error();
	}
};