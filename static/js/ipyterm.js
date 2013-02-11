//====================================================================
// Unix-based Command Prompt for Webpages
//====================================================================
/** 
 * A unix-based command prompt to navigate through directories on a webpage-based interface
 * -- Note -- This code does not have any directories to navigate or functions to execute currently.
 */

$(document).ready(function(){
		
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
		this.code_mirror_display = CodeMirror(function(elt){
			elem = document.getElementById(display);
			elem.parentNode.replaceChild(elt, elem);
		}, {
			showCursorWhenSelecting: false,
			mode: 'shell',
			readOnly: true			
		});
	};
	
	
	/** 
	 * Waits for the 'Enter' key to be pressed.
	 * Takes user input and sends it into the command function
	 */
	Prompt.prototype.handle_codemirror_keyEvent = function(editor,event){
		if(event.keyCode === 13 && event.type === "keyup"){
			this.user_input = this.code_mirror.doc.getLine(0);
			this.code_mirror.doc.removeLine(0);
			this.command(this.user_input);
			this.execute();
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
		while(i--){
			str[i] = str[i].replace(/"/g,"");
		} 
		this.user_command.name = str[0];
		for(var k = 1; k < str.length; k++){
			if(str[k][0] === '-'){
				this.user_command.flag[flag_num] = str[k];
				flag_num++;
			}else{
				this.user_command.arg[arg_num] = str[k];
				arg_num++;
			}
		};
	};
	
	/**
	 * Executes the commands that the user inputs.
	 * Change this code to execute what you prefer.
	 */
	Prompt.prototype.execute = function(){
		for(var key in unix_commands){
			if(this.user_command.name === key){
				unix_commands[this.user_command.name](this.user_command.name,this.user_command.flag,this.user_command.arg);
				this.code_mirror_display.doc.setValue("You have entered a " + "'" + unix_commands.output + "'" + " command with" + "\n flags called " + "'" + this.user_command.flag + ",'" + "\n and arguments called " + "'" + this.user_command.arg +"'.");
			}else if(unix_commands.output === null){
				this.code_mirror_display.doc.setValue("This command is not valid!");
			}
		}
	};
	
	
	/**
	 * This is the class that contains all unix commands
	 */
	var unix_commands = {	
		rm: function(cmd, flags, args){
			this.output = 'remove';
		},
		cd: function(cmd, flags, args){
			this.output = 'change directory';
		},
		exit: function(cmd, flags, args){
			this.output = 'exit';
		},
		logout: function(cmd, flags, args){
			this.output = 'logout';
		},
		kill: function(cmd, flags, args){
			this.output = 'killl';
		},
		cp: function(cmd, flags, args){
			this.output = 'copy';
		},
		mkdir: function(cmd, flags, args){
			this.output = 'make a directory';
		},
		mv: function(cmd, flags, args){
			this.output = 'move';
		},
		pwd: function(cmd, flags, args){
			this.output = 'path to directory';
		},
		output: null
	};
	
	
	var user1 = new Prompt('user1', 'prompt_line', 'display_window');
		
});

 




