$(document).ready(function(){
    // Start
    $(".content_row").fadeIn(2000);
    //Scroll Down
    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
        (scrollValue >= 400) ? $("#row_1 span").fadeOut("1000") : $("#row_1 span").fadeIn("1000");
    });
    // Click Plus to Minus
	$( '.plus-to-minus' ).click( function( event ) {
		$(this).toggleClass( 'minus' );
        ($(this).parent().parent().css("height") === "170px") ? $(this).parent().parent().css("height","700px") : $(this).parent().parent().css("height","170px");
	});
});