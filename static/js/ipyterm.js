

$(document).ready(function(){
	
	/*Build a Prompt Class */
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
	};

	prompt.prototype.handle_codemirror_keyEvent = function(editor,event){
		if(event.keyCode === 13 && event.type === "keyup"){
			this.userInput = this.code_mirror.doc.getLine(0);
			this.code_mirror.doc.removeLine(0);
			this.command(this.userInput);
		}
	};	
	
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
			}else if(i === n-1){
				this.userCommand.arg[argNum] = this.userInput.substr(k+1, i-(k));
				argNum++;
			}
		}
		console.log("This is a command called " + "'" + this.userCommand.name + "'");
		console.log("This is a flag called " + "'" + this.userCommand.flag + "'");
		console.log("This is an argument called " + "'" + this.userCommand.arg + "'");		
	}
	
	var display = function(){
		this.code_mirror_display = CodeMirror(document.body, {
			showCursorWhenSelecting: false,
			mode: 'shell',
			readOnly: true			
		});
	}
	
	var user1 = new prompt('user1');
	var display1 = new display(); 
		
});

 




