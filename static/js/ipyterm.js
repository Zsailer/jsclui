
var terminal = {
	cursorState: true,
	blickAgain: null,
	config: {
		cursorOn: "#fff",
		cursorOff: "#000",
		blinkTime:500	
	},

	cursorAction: function(state){
		if(state === true){
			setTimeout(function(){
				$("#cursor").css("background-color", terminal.config.cursorOff)
			}, terminal.config.blinkTime);
			terminal.cursorState = false;
		}
		else{
			setTimeout(function(){
				$("#cursor").css("background-color", terminal.config.cursorOn)
			}, terminal.config.blinkTime);
			terminal.cursorState = true; 
		}
		
		terminal.blinkAgain = window.setTimeout($.proxy(function() {
			this.cursorAction(!this.cursorState, true);
		},this), this.config.blinkTime);
	}
}; 

$(document).ready(function(){
	terminal.cursorAction(terminal.cursorState);
});

