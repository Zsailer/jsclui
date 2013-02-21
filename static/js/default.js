//====================================================================
// Default Unix Environment Commands
//====================================================================
/** 
 * These are commands common to a unix-based environment.
 * Call this function to load in the default unix commands.
 */


var DefaultCommands = function(command_line){
    that = command_line;
    that.add_command('ls', function(flag, arg, display) {        
        display.success('See list below.');
    });

    that.add_command('rm', function(flag, arg, display){
        display.success('Remove a file.')
    });

    that.add_command('cd', function(flag, arg, display){
        display.success('Changed to selected directory.')
    });

    that.add_command('pwd', function(flag, arg, display){
        display.success('Current path location.')
    });

    that.add_command('mkdir', function(flag, arg, display){
        display.success('Make a directory.')
    });

};