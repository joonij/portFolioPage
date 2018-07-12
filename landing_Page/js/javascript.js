$(document).ready(function(){
    $("#row_1").fadeIn(2000, function(){
        $(".content_row").fadeIn(1000);
    });
    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        if(scrollValue >= 1000){
            $("#row_3_1 .col-md-6").fadeIn(2500, function(){
                $("#row_3_1 img").fadeIn(100, function(){
                    $("#row_3_2 .col-md-5").fadeIn(3000);
                });
            });
        }
    });
});