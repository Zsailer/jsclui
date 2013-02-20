//====================================================================
// MAIN Code to call and place a command-line on webpage
//====================================================================
		
/**
 * This script waits for the doc's 'ready' function to return true. 
 * Then it creates a new command-line and display window in specified html div. 
 */

$(document).ready(function(){ 
	var alert = new HybridDisplay('#display_window');
	var user = new Prompt('user1@ipython', 'prompt_line', alert);
	default_commands(user); 
});