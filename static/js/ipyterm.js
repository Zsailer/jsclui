//====================================================================
// Unix-based Command Prompt for Webpages
//====================================================================
/** 
 * A unix-based command prompt to navigate through directories on a webpage-based interface
 * -- Note -- This code does not have any directories to navigate or functions to execute currently.
 */

$(document).ready(function(){
		
	/**
	 * Builds the prompt class. 
	 * When a new prompt object is created, waits for user unix commands and executes 
	 */
	var prompt = function(username){
		this.userName = username;
		this.code_mirror = null;
		this.userInput = null;
		this.code_mirror = CodeMirror(document.body,{
			showCursorWhenSelecting: true, 
			mode: 'shell',
			autofocus: true,
			onKeyEvent:$.proxy(this.handle_codemirror_keyEvent, this)

		});
		$('div.CodeMirror').addClass('prompt');
		this.code_mirror_display = CodeMirror(document.body, {
			showCursorWhenSelecting: false,
			mode: 'shell',
			readOnly: true			
		});
	};
	
	
	/** 
	 * Waits for the 'Enter' key to be pressed.
	 * Takes user input and sends it into the command function
	 */
	prompt.prototype.handle_codemirror_keyEvent = function(editor,event){
		if(event.keyCode === 13 && event.type === "keyup"){
			this.userInput = this.code_mirror.doc.getLine(0);
			this.code_mirror.doc.removeLine(0);
			this.command(this.userInput);
			this.execute();
		}
	};	
	
	
	/** 
	 * Takes user-input and divides it into commands, flags, and arguments
	 *
	 */
	prompt.prototype.command = function(input){
		this.userCommand = {name: null, flag: new Array(), arg: new Array()};
		var k = 0;
		var n = input.length;
		var flagNum = 0;
		var argNum = 0;
		for(var i = 0; i < n; i++){
			if(input[i] === ' '){
				if(input[k+1] === '-'){
					this.userCommand.flag[flagNum] = this.userInput.substr(k+1,i - (k+1));
					flagNum++;
				}else{
					if(input[k] === ' '){
						this.userCommand.arg[argNum] = this.userInput.substr(k+1, i-(k+1));
						argNum++;
					}else{
						this.userCommand.name = this.userInput.substr(k,i-(k));
					}
				}
				k = i;
			}else if(i === n-1 && input[k+1] === '-'){
				this.userCommand.flag[flagNum]=this.userInput.substr(k+1, i-(k));
			}else if(i === n-1 && input[k] === ' '){
				this.userCommand.arg[argNum] = this.userInput.substr(k+1, i-(k));
				argNum++;
			}else if(i === n-1){
				this.userCommand.name = this.userInput.substr(k,i+1);
			}
		}	
	};
	
	
	/**
	 * Executes the commands that the user inputs.
	 * Change this code to execute what you prefer.
	 */
	prompt.prototype.execute = function(){
		var com = this.userCommand.name;
		var flags = this.userCommand.flag;
		var arg = this.userCommand.arg;
		this.code_mirror_display.doc.setValue("You have entered a command called " + "'" + com + ",'" + "\n flags called " + "'" + flags + ",'" + "\n and arguments called " + "'" + arg +"'.");			
	};
	
	/**
	 * This is the class that contains all unix commands
	 */
	var unixCommands = function(){	
		this.rm = 'Remove files';
		this.cd = 'Change directories';
		this.exit = 'Exit program';
		this.logout = 'Logout of project';
		this.kill = 'Kill the current program';
		this.cp = 'Copy the selected filed';
		this.mkdir = 'Make a new directory';
		this.mv = 'Move the files';
		this.pwd = 'Show path to current directory';
 
	};
	
	/**
	 * This is an empty function to respond to 'user_command'. 
	 * Before code is used, fill this in.
	 * An example 'ls' command is below
	 */
	unixCommands.prototype.user_command = function(){
		
	};
	unixCommands.prototype.ls = function(){

	};
	
	var user1 = new prompt('user1');
		
});

 




