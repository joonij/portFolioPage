$(document).ready(function(){
    $("#row_1").fadeIn(2000, function(){
        $(".content_row").fadeIn(1000);
    });
    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
        if(scrollValue >= 1000){
            $(".project").fadeIn(2000);
        }
    });
});