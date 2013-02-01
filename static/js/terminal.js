	
var Console = {
	
	Blank:"",
	userCommand: "",
	userCommandLength: 0,
	
	commandLine: function(){
		/* Launches the terminal command line */
			
		var textarea = document.getElementById('prompt');
		var myCodeMirror = CodeMirror.fromTextArea(textarea, {
			showCursorWhenSelecting: true, 
			mode: 'shell',
			autofocus: true,
			
			onKeyEvent: function(){
				
				var message = myCodeMirror.doc.getValue();
				userCommandLength = message.length;
				Console.userCommand = message;
				if(message[userCommandLength-1] == '\n'){
					Console.commandActions(message);
					myCodeMirror.doc.removeLine(0);
				}					
			}
		});
	},
	
	commandActions:function(com){
		if(com == 'cd\n'){
			/* Changes the directory */
			console.log("This job, you changed directories.");
		}else if(com == 'rm\n'){
			/* Removes the specified file */
			console.log("I'm proud of you, you removed a file.");
		}else if(com == 'mv\n'){
			/* Moves the file to specified file */
			console.log("Where do you want to move the file?");
		}else if(com == 'cp\n'){
			/* Copies the file to specified file */
			console.log("Alright, Alright already, I'll copy the file.");
		}else if(com == 'diff\n'){
			/* Compares two files to see differences*/
			console.log("Which door do you want to choose?");
		}else if(com == 'mkdir\n'){
			/* Creates a new directory */
			console.log("YES!!!!!");
		}else if(com == 'pwd\n'){
			/* Tells you where you are currently */
			console.log("Who do you think I am? Siri?");
		}else if(com == 'whoami\n'){
			/* Returns your username */
			console.log("I don't know who you are.");
		}else if(com == 'ls\n'){
			/* Lists the files in the current directory */
			console.log("This isn't your grocery list.");
		}
	}
}	


$(document).ready(function(){
	Console.commandLine();
});