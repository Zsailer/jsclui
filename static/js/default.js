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
        display.add_element('<div/>', '<img src="http://www.irisclasson.com/wp-content/uploads/2012/09/lists.jpg">');
    });

    that.add_command('rm', function(flag, arg, display){
        display.success('Remove a file.')
        display.add_element('<div/>', '<img src="http://2.bp.blogspot.com/-1UWstLCh-do/Tiq2CT-VwFI/AAAAAAAAATE/t7VBbGGNI-4/s1600/remove-blogger.jpg">');
    });

    that.add_command('cd', function(flag, arg, display){
        display.success('Changed to selected directory.')
        display.add_element('<div/>', '<img src="http://www.gahorseevents.com/wp-content/uploads/2012/05/directory.jpg">');
    });

    that.add_command('pwd', function(flag, arg, display){
        display.success('Current path location.')
        display.add_element('<div/>', '<img src="http://www.iconshock.com/img_jpg/REALVISTA/transportation/jpg/256/road_icon.jpg">');
    });

    that.add_command('mkdir', function(flag, arg, display){
        display.success('Make a directory.')
        display.add_element('<div/>', '<img src="http://gimp-tutorials.net/files/files/thum-icon-folder.jpg?1224421196">');
    });

};