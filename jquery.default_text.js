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
					$(default_obj).offset({ top: real_offset.top, left: real_offset.left});
					$(default_obj).css('z-index','-100');
					$(real_obj).css('z-index','0');

					$(default_obj).css('display',$(real_obj).css('display'))
					.attr('name',$(real_obj).attr('name')+defaultIdSuffix);
					
					$(default_obj).insertBefore(this);
					$(default_obj).val(msg).addClass(defaultTextClassName).attr('id', $(this)[0].id + defaultIdSuffix);
					
					
					real_obj.save_background = $(real_obj).css('background-color');
					real_obj.save_border = $(real_obj).css('border-color');
			
					if ($(real_obj).val() == "") {
	                    $(real_obj).css('background-color','transparent');
						$(real_obj).css('border-color','transparent');
						$(real_obj).css('background-image','url("transparent.gif")');
						
						
	                } else {
						
	                    $(real_obj).css('background-color',real_obj.save_background);
						$(real_obj).css('border-color',real_obj.save_border);
						$(real_obj).css('background-image','');
						
	                }
	                
	                var defaultClickHandler = function() {
						
							if ($(real_obj).css('background-color') == 'transparent') {
								
								$(real_obj).css('background-color',real_obj.save_background);
								$(real_obj).css('border-color',real_obj.save_border);
								$(real_obj).css('background-image','');
								
							}
						
	                };
	
	                $(real_obj).click(defaultClickHandler);
					

	                $(real_obj).blur(function() {
				
		                    if ($(real_obj).val() == "") {
		                        $(real_obj).css('background-color','transparent');
								$(real_obj).css('border-color','transparent');
								$(real_obj).css('background-image','url("transparent.gif")');
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