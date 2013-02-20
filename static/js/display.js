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
	var close_button = '<button type="button" class="close" data-dismiss="alert">&times;</button>';
	this.success = function(){
		$(display).empty();
		var message = 'Success!';
		$(display).append('<div class="alert alert-success">' + close_button + message + '.</div>')
	};
	this.error = function(){
		$(display).empty();
		var message = 'Error!';
		$(display).append('<div class="alert alert-error">' + close_button + message + '</div>')
	};
}


var ScrollDisplay = function (display) {
	$(display).addClass('well well-small');
	$(display).css('height', '200px');
	$(display).css('overflow', 'scroll');
	this.success = function(){
		var message = 'Success!';
		$(display).append('<div>' + message + '</div>');;
	}
	this.error = function(){
		var message = 'Error!';
		$(display).append('<div>' + message + '</div>');
	}
}


var HybridDisplay = function (display) {
	$(display).before('<div id="alert"></div>');
	$(display).addClass('well well-small');
	$(display).css('height', '200px');
	$(display).css('overflow', 'scroll');
	var close_button = '<button type="button" class="close" data-dismiss="alert">&times;</button>';
	this.success = function(){
		var message = 'Success!';
		$(display).before('<div id="alert"></div>');
		$('<div id="alert" class="alert alert-success">' + close_button + message + '</div>').replaceAll('#alert');
		$(display).append('<div>' + message + '</div>');
		
	}
	this.error = function(){
		var message = 'Error!';
		$(display).before('<div id="alert"></div>');
		$('<div id="alert" class="alert alert-error">' + close_button + message + '</div>').replaceAll('#alert');
		$(display).append('<div>' + message + '</div>');
	}
	
}