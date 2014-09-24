$(function(){
    if($("#gotoTop").length<1){
        $("body").prepend("<div id='gotoTop'></div>");
        $("#gotoTop").hide();
    }
    $("#gotoTop").click(function(){
        $('html,body').animate({scrollTop:0},'1000');
    });
    $(window).scroll(function(){
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
        if(scrollt>500){
            $("#gotoTop").show();
        }else{
            $("#gotoTop").hide();
        }
    })
})