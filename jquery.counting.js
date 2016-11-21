/**
 * Counter - jQuery plugin
 * 
 * A simple plugin to create 'counting' effect on text element
 * 
 * @author Throk <k.borecki@throk.pl>
 * @copyright (c) 2016 Throk
 * @version 1.0
 */

(function ($) {
    /*
     * INITIALIZATION
     */

    /* Variable initializion */
    var settings = [];

    /* Create prototype */
    $.fn.counting = function(options) {
        settings = $.extend({
            section: 4
        }, options );

        return this.each(function() {
            initSingle($(this));
        });
    };

    /* Initialize single counter */
    function initSingle(element){
        element.data("max", parseInt(element.text())).text(0);
        
        $(window).scroll(function(){
            var half_h = ($(window).height()/5)*settings.section;
            if(element.length > 0){
                if($(window).scrollTop() >= element.offset().top-half_h){
                    if(typeof(element.data("lock")) === "undefined"){
                        element.data("lock", 1);
                        calculateNo(element, 0, parseInt(element.data("max")));
                    }
                }
            }
        });
    }

    /* Looping function */
    function calculateNo(element, start, end){
        element.text(start);

        if(start !== end){
            setTimeout(function(){
                start++;
                calculateNo(element, start, end);   
            }, 1000/end);
        }
    }
    
}( jQuery ));