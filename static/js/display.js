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
    this.close_button = $('<button/>').addClass('close').attr('data-dismiss','alert').attr('type','button').html('&times;');
}

AlertDisplay.prototype.success = function(message){
    this.success_alert =  $('<div/>').addClass("alert alert-success").append(this.close_button).append(message)
    $(this.display).empty().append(this.success_alert);
}

AlertDisplay.prototype.error = function(message){
    this.error_alert =  $('<div/>').addClass("alert alert-error").append(this.close_button).append(message)
    $(this.display).empty().append(this.error_alert);
}

AlertDisplay.prototype.echo_input = function(input){
}

AlertDisplay.prototype.add_element = function(element, object){
    $(this.display).append(
        $(element).addClass('display_image').html(object)
    );
}


var ScrollDisplay = function (display) {
    this.display = display;
    $(this.display).addClass('display well well-small');
}


ScrollDisplay.prototype.echo_input = function(input){
    $(this.display).append($('<div/>').text(input));
}
ScrollDisplay.prototype.success = function(message){
    $(this.display).append($('<div/>').text(message));
}

ScrollDisplay.prototype.error = function(message){
    $(this.display).append($('<div/>').text(message));
}

ScrollDisplay.prototype.add_element = function(element, object){
    $(this.display).append(
        $(element).addClass('display_image').html(object)
    );
}


var HybridDisplay = function (display) {
    this.display = display;
    $(this.display).before('<div id="alert"></div>').addClass('display well well-small');
    this.close_button = $('<button/>').addClass('close').attr('data-dismiss','alert').attr('type','button').html('&times;');
}

HybridDisplay.prototype.echo_input = function(input){
    $(this.display).append($('<div/>').text(input));
}

HybridDisplay.prototype.success = function(message){
    $(this.display).before($('<div/>').attr('id','alert'));
    this.success_alert =  $('<div/>').addClass("alert alert-success")
    .attr('id','alert').append(this.close_button).append(message).replaceAll('#alert');
    $(this.display).append($('<div/>').text(message));
}

HybridDisplay.prototype.error = function(message){
    $(this.display).before($('<div/>').attr('id','alert'));
    this.error_alert =  $('<div/>').addClass("alert alert-error")
    .attr('id','alert').append(this.close_button).append(message).replaceAll('#alert');
    $(this.display).append($('<div/>').text(message));
}

HybridDisplay.prototype.add_element = function(element, object){
    $(this.display).append(
        $(element).addClass('display_image').html(object)
    );
}