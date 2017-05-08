+function( $ ) {

	$.fn.modal = function( options ) {

		var	block_page = $('<div class="block-page"></div>'),
			defaults = $.extend({
				animationIn: 'flipInX',
				animationOut: 'flipOutX'
			}, options); 
		
		add_block_page(block_page);

		return this.click(function(e){

			e.preventDefault();
			var btn = $(this),
				dataTarget = btn.attr('data-target');

			if (dataTarget === undefined || dataTarget === '' || dataTarget === '#') {
				return;
			}; 

			show_block_page(block_page);
			show_popup_box(dataTarget, defaults.animationIn, defaults.animationOut);

			$(dataTarget + ' .modal-close, .block-page').click(function(){
				hide_popup_box(dataTarget, defaults.animationIn, defaults.animationOut)
				hide_block_page(block_page);
			});

		});

		function add_block_page(block_page) {
			$(block_page).appendTo('body');
		}

		function show_block_page(block_page) {
			$(block_page).fadeIn();
		}

		function hide_block_page(block_page) {
			$(block_page).fadeOut();
		}

		function show_popup_box(dataTarget, animationIn, animationOut) {
			$(dataTarget).removeClass(animationOut).addClass('animated ' + animationIn).fadeIn();
		}

		function hide_popup_box(dataTarget, animationIn, animationOut) {
			$(dataTarget).removeClass(animationIn).addClass(animationOut);
		} 

	}


}(jQuery);

	
