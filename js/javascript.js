$(document).ready(function(){
    // Start
    $(".content_row").fadeIn(2000);
    //Scroll Down
    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
        (scrollValue >= 400) ? $("#row_1 span").fadeOut("1000") : $("#row_1 span").fadeIn("1000");
    });
    // Click Plus to Minus
	$( '.plus-to-minus' ).click(function(event){
        $(this).toggleClass( 'minus' );
        if($(this).parent().css("height") === "170px") {
            $(this).parent().css("height","auto");
            $(this).siblings(".detail").fadeIn(500);
        } else {
            $(this).parent().css("height","170px");
            $(this).siblings(".detail").fadeOut(100);
        }
	});
});