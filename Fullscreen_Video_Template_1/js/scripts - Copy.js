(function($){
    "use strict";

    $(window).load(function() {

        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");

    });

    /*$(document).ready(function(){

        $(window).trigger("resize");
        initOwlCarousel();
        initTextrotator();
        initOnepagenav();
        initPiechart();
        
    });*/


    /* Full Height Container / Dropdowns
    -------------------------------------------------------*/       
  
    $(window).resize(function(){
        
        container_full_height_init();
            
        //var windowWidth = $(window).width();
        //if (windowWidth <= 974) {
            //$('.dropdown-toggle').attr('data-toggle', 'dropdown');
            //$('.navigation').removeClass("sticky offset scrolling");
            //$('.nav-type-4').find(".local-scroll-no-offset").removeClass('local-scroll-no-offset').addClass("local-scroll");
        //}
        //if (windowWidth > 974) {
            //$('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
            //$('.dropdown').removeClass('open');
            //$('.nav-type-4').find(".local-scroll").removeClass('local-scroll').addClass("local-scroll-no-offset");
        //}

        /* Mobile Menu Resize
        -------------------------------------------------------*/
        //$(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
        
    });
	

    /* IE Detect
    -------------------------------------------------------*/
    if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }

    /* Mobile Detect
    -------------------------------------------------------*/
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
       $("html").addClass("mobile");
       //$('.dropdown-toggle').attr('data-toggle', 'dropdown');
    }
    else {
        $("html").removeClass("mobile");
    }

    // Detect touch devices    
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }


  




    /* Progress Bars
    -------------------------------------------------------*/
    var $section = $('#animated-skills').appear(function() {
    
        function loadDaBars() {
            var bar = $('.progress-bar');
            var bar_width = $(this);
            $(function(){
              $(bar).each(function(){
                bar_width = $(this).attr('aria-valuenow');
                $(this).width(bar_width + '%');
              });
            });
        }
        loadDaBars();
    });


   











    /* FitVIds
    -------------------------------------------------------*/
    $(".video-wrap").fitVids();


    

})(jQuery);



/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init(){
    (function($){
        $(".container-full-height").height($(window).height());
    })(jQuery);
}