$(document).ready(function() {
    $(window).on("scroll", bg_black);
    
    function bg_black () {
        var scrollX=$(window).scrollLeft();
        console.log(scrollX);
        var $bg_hamburger = $('#hamburger .line');
        if (scrollX>=$('#cnt2').offset().left) $bg_hamburger.addClass("bg_black");
        else if (scrollX<$('#cnt2').offset().left) $bg_hamburger.removeClass("bg_black");
        if (scrollX>=$('#footer').offset().left) $bg_hamburger.removeClass("bg_black");
    };
});