$(function () {
    var smoke_pos = 0,
        smoke_sudu = 4;

    vare
    time1, time2;

    var $work = $('main .row a');

    setInterval(function () {
        $(".smoke").css({backgroundPosition: '0' + (smoke_pos -= smoke_sudu) + 'px'});
    }, 30);
//    $.Velocity.hook($('.smoke'), "backgroundpositionX", "0");
//    var time1 =
//        setInterval(function () {
//
//            $('.smoke').velocity({
//                backgroundPositionY: "-=4px",
//            }, {
//                duration: 30,
//                easing: "linear",
////        loop: true,
//////        complete: "revert",
////        complete: o(),
//            });
//        }, 30);


////    clearInterval('time2');
//$('.jumbotron').mouseover(
//    function () {
////        alert("he");
//        clearInterval(time1);
//        time2 = setInterval(function () {
//            $('.smoke').velocity({
//                backgroundPositionY: "-=8px",
//            }, {
//                duration: 30,
//                easing: "linear",
//            });
//
//        });
//    })
//    .mouseout(function () {
//        clearInterval(time2);
//        time1 = setInterval(function () {
//            $('.smoke').velocity({
//                        backgroundPositionY: "-=4px",
//            }, {
//                duration: 30,
//                easing: "linear",
//            });
//        }, 30);
//    });
        $('.jumbotron')
            .mouseover(function () {
                $(this).css("backgroundPosition", "0 -300px");
                smoke_sudu = 8
            })
            .mouseout(function () {
                $(this).css("backgroundPosition", "0 0");
                smoke_sudu = 4

            });


//        $work.bind('mouseover', function () {
//            var $this = $(this);
//            var desc = $this.attr('desc')
//            $this.data('name', $this.html());
//            desc == '' ? 0 : $this.html(desc);
//        }).bind('mouseout', function () {
//            var $this = $(this);
//            $this.attr('desc', $this.html());
//            $this.html($this.data('name'));
//        });
        $("[desc]")
            .bind('mouseover', function () {

                var $this = $(this);
                var desc = $this.attr('desc');
                $this.data('name', $this.html());
                desc == '' ? 0 : $this.html(desc);
            })
            .bind('mouseout', function () {
                var $this = $(this);
                $this.attr('desc', $this.html());
                $this.html($this.data('name'));
            });

//        $('#all').bind('click',function(){
//           $work.css('display','block');
//            return false;
//        });
//        $('#css').bind('click',function(){
//            $work.css('display','none');
//            $('.' + $(this)[0].id).css('display','block')
////            $('.js').css('display','none');
//            return false;
//
//        })
//        $('#js').bind('click',function(){
//            $work.css('display','block');
//            $('.css').css('display','none');
//            return false;
//        })

//        $(".nav a").bind("click",function(){
//            if (!this.id == ''){
//                $work.css('display','none');
//                $('.' + this.id).css('display','block');
//            }
//        })
        $("[data-select]").bind("click", function () {
            $work.css('display', 'none');
            $($(this).attr('data-select')).css('display', 'block');
        });
    });