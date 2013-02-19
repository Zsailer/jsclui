//====================================================================
// Display Window
//====================================================================
		
/**
 * Creates a scrollable display window to log command_line input and
 * print responses. 
 */

var Display = function (display){
	this.code_mirror_display = CodeMirror(function(elt){
		elem = document.getElementById(display);
		elem.parentNode.replaceChild(elt, elem);
	}, {
		showCursorWhenSelecting: false,
		mode: 'shell',
		readOnly: true,	
		viewportMargin: 20		
	});
};

Display.prototype.log_input = function (user_name, user_input){
	var n = this.code_mirror_display.doc.lineCount();
	this.code_mirror_display.doc.setLine(n-1, "=====================\n" 
		+ user_name +": "+ user_input + "\n\n");
};

Display.prototype.output = function (bool, cmd, flag, arg){
	if (bool === true) {
		var n = this.code_mirror_display.doc.lineCount();
		this.code_mirror_display.doc.setLine(n-1,
			"You have entered a " + "'" + cmd + 
			"'" + " command with" + "\n flags called " + "'" + 
			flag + ",'" + "\n and arguments called " + 
			"'" + arg +"'.\n\n");
	} else {
		var n = this.code_mirror_display.doc.lineCount();
		this.code_mirror_display.doc.setLine(n-1,
			"Error: This command is not valid!\n\n");
	}
};