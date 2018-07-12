$(document).ready(function(){
    $("#row_1").fadeIn(2000, function(){
        $(".content_row").fadeIn(1000);
    });
    // Click Plus to Minus
	$( '.plus-to-minus' ).click( function( event ) {
		$( this ).toggleClass( 'minus' );
        $(".project").addClass("");
	});
});