/*
 *  Do whatever you want with it. I don't care
 *  But don't fotget to give me some credit :P
 *  - Tanin Na Nakorn (whowish.com)
 *  - Sergiu Rata
 */
(function($){
    $.fn.extend({         
        //pass the options variable to the function
        default_text: function(msg, opts) {
            var defaultTextClassName = opts.defaultClass != null ? opts.defaultClass : "jquery_default_text";
            var defaultIdSuffix = opts.defaultIdSuffix != null ? opts.defaultIdSuffix : "_default_text";

            return this.each(function() {
                var real_obj = this;
                var default_obj = $(this).clone();
                $(default_obj).hide();
                
                $(default_obj).insertBefore(this);
                $(default_obj).val(msg).addClass(defaultTextClassName).attr('id',$(this)[0].id + defaultIdSuffix);
                
                if ($(real_obj).val() == "") {
                    $(real_obj).hide();
                    $(default_obj).show();
                } else {
                    $(real_obj).show();
                    $(default_obj).hide();
                }
                
                var defaultClickHandler = function() {
                    $(default_obj).hide();
                    $(real_obj).show();
                    $(real_obj).focus();
                };

                $(default_obj).click(defaultClickHandler);
                $(default_obj).mousedown(defaultClickHandler);
                $(default_obj).focus(defaultClickHandler);
                
                $(real_obj).blur(function() {
                    if ($(real_obj).val() == "") {
                        $(default_obj).show();
                        $(real_obj).hide();
                    }
                });
            });
        }        
    });    
})(jQuery);