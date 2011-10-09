/*
 *  Do whatever you want with it. I don't care
 *  But don't fotget to give us some credit. (Apache License)
 *  - Tanin Na Nakorn
 *  - Sergiu Rata
 *  - Nilobol Ariyamongkollert
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
					
					var pos = $(real_obj).position();
					var marginLeft = $(real_obj).margin().left;
					var marginTop = $(real_obj).margin().top;
					
					$(real_obj).css('resize', 'none');
					
					default_obj = $(this).clone();
					$(default_obj).insertBefore(this);
					
					$(default_obj).css({
						position: 'absolute',
						top: (pos.top + marginTop) + "px", 
						left: (pos.left + marginLeft) + "px",
						'z-index': '-10000000',
						border: 'none',
						'border-color': 'transparent',
						'resize': 'none',
						'display': $(real_obj).css('display')
					});

					$(default_obj).attr('tabindex','-1')
									.attr('name',$(real_obj)
									.attr('name')+defaultIdSuffix)
									.attr('id', $(this)[0].id + defaultIdSuffix);
			
					$(default_obj).val(msg)
									.addClass(defaultTextClassName);
					
					real_obj.show_default_text = function() {
						
						this.save_background = $(real_obj).css('background-color');
						this.save_border = $(real_obj).css('border-color');
						this.save_background_image = $(real_obj).css('background-image');
						this.save_background_repeat = $(real_obj).css('background-repeat');
						
						$(this).css('background-color','transparent');
						$(this).css('border-color','transparent');
						$(this).css('background-image','url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")');
						$(this).css('background-repeat','repeat');
						
						this.is_jquery_default_text_shown = true;
					}
					
					real_obj.hide_default_text = function() {
						
						$(this).css('background-color',real_obj.save_background);
						$(this).css('border-color',real_obj.save_border);
						$(this).css('background-image',real_obj.save_background_image);
						$(this).css('background-repeat',real_obj.save_background_repeat);
						
						this.is_jquery_default_text_shown = false;
					}
			
					
	                
	                $(real_obj).focus(function() {
						
							if (this.is_jquery_default_text_shown == true) {
								this.hide_default_text();
							}
						
	                });

	                $(real_obj).blur(function() {
				
		                    if ($(real_obj).val() == "") {
		                        this.show_default_text();
							}
	                });
					
					if ($(real_obj).val() == "") {
	                    real_obj.show_default_text();
	                } else {
						real_obj.hide_default_text();
	                }
					
				} else
				{
					$('#' + $(this)[0].id + defaultIdSuffix).val(msg);
				}
                
                
            });
        }        
    });    
})(jQuery);


/*
 * JSizes - JQuery plugin v0.33
 *
 * Licensed under the revised BSD License.
 * Copyright 2008-2010 Bram Stein
 * All rights reserved.
 */
(function(b){var a=function(c){return parseInt(c,10)||0};b.each(["min","max"],function(d,c){b.fn[c+"Size"]=function(g){var f,e;if(g){if(g.width!==undefined){this.css(c+"-width",g.width)}if(g.height!==undefined){this.css(c+"-height",g.height)}return this}else{f=this.css(c+"-width");e=this.css(c+"-height");return{width:(c==="max"&&(f===undefined||f==="none"||a(f)===-1)&&Number.MAX_VALUE)||a(f),height:(c==="max"&&(e===undefined||e==="none"||a(e)===-1)&&Number.MAX_VALUE)||a(e)}}}});b.fn.isVisible=function(){return this.is(":visible")};b.each(["border","margin","padding"],function(d,c){b.fn[c]=function(e){if(e){if(e.top!==undefined){this.css(c+"-top"+(c==="border"?"-width":""),e.top)}if(e.bottom!==undefined){this.css(c+"-bottom"+(c==="border"?"-width":""),e.bottom)}if(e.left!==undefined){this.css(c+"-left"+(c==="border"?"-width":""),e.left)}if(e.right!==undefined){this.css(c+"-right"+(c==="border"?"-width":""),e.right)}return this}else{return{top:a(this.css(c+"-top"+(c==="border"?"-width":""))),bottom:a(this.css(c+"-bottom"+(c==="border"?"-width":""))),left:a(this.css(c+"-left"+(c==="border"?"-width":""))),right:a(this.css(c+"-right"+(c==="border"?"-width":"")))}}}})})(jQuery);