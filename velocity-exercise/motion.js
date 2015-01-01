$(function(){
//        $(".test").velocity({height: "200px"},{duration: 1000});
        $.Velocity.hook($('.test'),"rotateX","-45deg");
    $.Velocity.hook($('.test'),"rotateY","15deg");
    var x = 1000;
//        $(button).toggle(function(){
//            x = 2000;
//        },function(){
//            x = 1000;
//        });
    $($(".test img")[0]).velocity({
        rotateZ: "360deg",
//            rotateX: "20 deg",
//            translateX:"500px"
    },{
        duration: 1000,
        loop: true,
        easing: "linear",
//        queue:"a"
    });

    $($(".test img")[1]).velocity({
        rotateZ: "360deg",
//            rotateX: "20 deg",
//            translateX:"500px"
    },{
        duration: 2000,
        loop: true,
        easing: "linear",
    });
    $('.msg b').velocity({
       textShadowBlur: 0,
    },{
        loop:true,
        duration : 1000,
        easing: "linear",
    });
});