//====================================================================
// DISPLAY WINDOWS
//====================================================================
        
/**
 * Includes three different types of output message displays. 
 *
 * AlertDisplay shows a single colored box displaying errors or successes.
 *
 * ScrollDisplay logs user-input in a scrollable window and prints 
 * any error messages or responses to input.
 *
 * HybridDisplay includes an AlertDisplay and ScrollDisplay simultaneously.
 */

var AlertDisplay = function (display) {
    this.display = display;
    this.close_button = '<button type="button" class="close" data-dismiss="alert">&times;</button>'; 
}

AlertDisplay.prototype.success = function(message){
    $(this.display).empty().append('<div class="alert alert-success">' + this.close_button + message + '</div>')
}

AlertDisplay.prototype.error = function(message){
    $(this.display).empty().append('<div class="alert alert-error">' + this.close_button + message + '</div>')
}



var ScrollDisplay = function (display) {
    this.display = display;
    $(this.display).addClass('well well-small').css('height', '200px').css('overflow', 'scroll');
}


ScrollDisplay.prototype.echo_input = function(input){
    $(this.display).append('<div>' + input + '</div>');
}
ScrollDisplay.prototype.success = function(message){
    $(this.display).append('<div>' + message + '</div>');
}

ScrollDisplay.prototype.error = function(message){
    $(this.display).append('<div>' + message + '</div>');
}




var HybridDisplay = function (display) {
    this.display = display;
    $(this.display).before('<div id="alert"></div>').addClass('well well-small').css('height', '200px').css('overflow', 'scroll');
    this.close_button = '<button type="button" class="close" data-dismiss="alert">&times;</button>';
}

HybridDisplay.prototype.echo_input = function(input){
    $(this.display).append('<div>' + input + '</div>');
}

HybridDisplay.prototype.success = function(message){
    $(this.display).before('<div id="alert"></div>');
    $('<div id="alert" class="alert alert-success">' + this.close_button + message + '</div>').replaceAll('#alert');
    $(this.display).append('<div>' + message + '</div>');
}

HybridDisplay.prototype.error = function(message){
    $(this.display).before('<div id="alert"></div>');
    $('<div id="alert" class="alert alert-error">' + this.close_button + message + '</div>').replaceAll('#alert');
    $(this.display).append('<div>' + message + '</div>');
}