/*
 *  Do whatever you want with it. I don't care
 *  But don't fotget to give us some credit. (Apache License)
 *  - Tanin Na Nakorn
 *  - Sergiu Rata
 */
(function($){
    $.fn.extend({         
        //pass the options variable to the function
        default_text: function(msg, opts) {
			
			if (opts == undefined) { opts = {}; }
			
            var defaultTextClassName = opts.defaultClass != null ? opts.defaultClass : "jquery_default_text";
            var defaultIdSuffix = opts.defaultIdSuffix != null ? opts.defaultIdSuffix : "_default_text";
			

            return this.each(function() {
                var real_obj = this;
				var default_obj = null;
				
				if ($('#' + $(this)[0].id + defaultIdSuffix).length == 0) {
					default_obj = $(this).clone();
					var real_offset = $(real_obj).offset();
					if ($(real_obj).parent().css('position') == "")
					{
						$(real_obj).parent().css('position','relative');
					}
					$(default_obj).css('position','absolute');
					$(default_obj).offset({ top: real_offset.top-1, left: real_offset.left-1});
					$(default_obj).css('z-index','-100');
					$(default_obj).attr('tabindex','-1');
					$(real_obj).css('z-index','0');

					$(default_obj).css('display',$(real_obj).css('display'))
					.attr('name',$(real_obj).attr('name')+defaultIdSuffix);
					
					$(default_obj).insertBefore(this);
					$(default_obj).val(msg).addClass(defaultTextClassName).attr('id', $(this)[0].id + defaultIdSuffix);
					
					real_obj.show_default_text = function() {
						
						this.save_background = $(real_obj).css('background-color');
						this.save_border = $(real_obj).css('border-color');
						this.save_background_image = $(real_obj).css('background-image');
						this.save_background_repeat = $(real_obj).css('background-repeat');
						
						$(this).css('background-color','transparent');
						$(this).css('border-color','transparent');
						$(this).css('background-image','url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")');
						$(this).css('background-repeat','repeat');
					}
					
					real_obj.hide_default_text = function() {
						$(this).css('background-color',real_obj.save_background);
						$(this).css('border-color',real_obj.save_border);
						$(this).css('background-image',real_obj.save_background_image);
						$(this).css('background-repeat',real_obj.save_background_repeat);
					}
			
					if ($(real_obj).val() == "") {
	                    real_obj.show_default_text();
	                } else {
						real_obj.hide_default_text();
	                }
	                
	                var defaultClickHandler = function() {
						
							if ($(real_obj).css('background-color') == 'transparent') {
								real_obj.hide_default_text();
							}
						
	                };
	
	                $(real_obj).focus(defaultClickHandler);
					

	                $(real_obj).blur(function() {
				
		                    if ($(real_obj).val() == "") {
		                        real_obj.show_default_text();
							}
	                });
					
				} else
				{
					$('#' + $(this)[0].id + defaultIdSuffix).val(msg);
				}
                
                
            });
        }        
    });    
})(jQuery);