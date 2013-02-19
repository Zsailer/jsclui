//====================================================================
// MAIN Code to call and place a command-line on webpage
//====================================================================
		
/**
 * This script waits for the doc's 'ready' function to return true. 
 * Then it creates a new command-line and display window in specified html div. 
 */

$(document).ready(function(){ 
	var user = new Prompt('user1@ipython', 'prompt_line', 'display_window');
	default_commands(user); 
});