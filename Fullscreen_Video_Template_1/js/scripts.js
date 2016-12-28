(function($){
    "use strict";

    $(window).load(function() {

        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");

    });

    /* Full Height Container
    -------------------------------------------------------*/       
    $(window).resize(function(){
        container_full_height_init();
    });

})(jQuery);


/* Full Height Container
-------------------------------------------------------*/
function container_full_height_init(){
    (function($){
        $(".container-full-height").height($(window).height());
    })(jQuery);
}