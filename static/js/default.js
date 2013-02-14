//====================================================================
// Default Unix Environment Commands
//====================================================================
/** 
 * These are commands common to a unix-based environment.
 * Call this function to load in the default unix commands.
 */


default_commands = function(command_line){
	that = command_line;
	that.add_command('ls', function(flag, arg) {		
		console.log("Make a list.")
	});

	that.add_command('rm', function(flag, arg){
		console.log("Remove a file.")
	});

	that.add_command('cd', function(flag, arg){
		console.log("Change a directory.")
	});

	that.add_command('kill', function(flag, arg){
		console.log("Force stop a program.")
	});

	that.add_command('pwd', function(flag, arg){
		console.log("Print path to current directory.")
	});

	that.add_command('mkdir', function(flag, arg){
		console.log("Make a directory.")
	});

};