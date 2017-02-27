/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.2 by Matt Varone
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
    			text: 'To Top',
    			min: 200,
    			inDelay:600,
    			outDelay:400,
      		containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) {
				    $(containerIDhash).fadeIn(settings.inDelay);
            $('.nav__logo').css({ 'display': 'none'});
            $('.nav__feedback--tel').css({ 'display': 'none'});
            //$('.nav__feedback').css({ 'align-self': 'center'});
            $('.nav__link').css({'padding-top' : '5px', 'padding-bottom' : '5px'});
            $('.nav__feedback-item:first-of-type').css({'margin-bottom': '0'});
        }
			else {
				$(containerIDhash).fadeOut(settings.Outdelay);
        $('.nav__logo').css({ 'display': 'block'});
        $('.nav__feedback--tel').css({ 'display': 'block'});
        $('.nav__link').css({'padding-top' : '20px', 'padding-bottom' : '20px'});
        //$('.nav__feedback').css({ 'align-self': 'stretch'});
        $('.nav__feedback-item:first-of-type').css({'margin-bottom': '10px'});
      }
		});
};
})(jQuery);