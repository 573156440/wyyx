/**
 * Created by 573156440 on 2015/12/1.
 * 13839796596
 */
$(document).ready(function() {
    // 网易游戏全目录
    (function() {
        $("#meau").on("mouseenter", function(e) {
            $(this).children(".meau_detail").show().end()
                //e.preventDefault();
                .on("mouseout", function(e) {
                    $(this).children(".meau_detail").hide();
                    // e.preventDefault();
                    //e.stopPropagation();
                })
        })
    }());
    //头加下边框
    (function() {
        $(".reg>span").on("mouseenter", function() {
            $(this).each(function(index, ele) {
                $(this).css({ "height": "52px", "border-bottom": "3px solid red" }).stop();
                //ele.stopPropagation();
            })
        }).on("mouseout", function() {
            $(this).each(function(index, ele) {
                $(this).css({ "height": "55px", "border-bottom": 0 }).stop();
            })
        })
        $(".meau,.topBar-right").on("mouseenter", function() {
            $(this).css({ "height": "52px", "border-bottom": "3px solid red" })
        }).on("mouseout", function() {
            $(this).css({ "height": "55px", "border-bottom": 0 })
        })
    }());
    //微信 易信分享
    (function() {
        $(".yixin").on("mouseenter", function() {
            $(this).css("border-radius", "50% 50% 0 0");
            $("#yxewm").css("display", "block");
        }).on("mouseout", function() {
            $(this).css("border-radius", "50%");
            $("#yxewm").css("display", "none");
        })
        $(".weixin").on("mouseenter", function() {
            $(this).css("border-radius", "50% 50% 0 0");
            $("#wxewm").css("display", "block");
        }).on("mouseout", function() {
            $(this).css("border-radius", "50%");
            $("#wxewm").css("display", "none");
        })
    }());
    //动态修改content导航背景图  自动添加背景
    (function() {
        $("#navwrap>a").children("i").each(function(index, ele) {
            var aa = "images/newsH" + (10 + index) + ".png";
            $(this).css("background-image", "url(" + aa + ")");
        })
        $('#navwrap>a').eq(0).children('i').css("background-image", "url('images/newsH0.png')");
    }());
    //鼠标触发改变类名改变背景色和字体色
    (function() {
        $("#navwrap").children().each(function(index, ele) { //即a
            var dd = "images/newsH" + (10 + index) + ".png";
            var cc = "images/newsH" + (index) + ".png";

            $(ele).on("mouseenter", function(event) {
                    // console.log($(this).index())
                    $(this).addClass("current").siblings().removeClass("current").end()
                        .children("i").css("background-image", "url(" + cc + ")").end()

                    event.stopPropagation();
                })
                //改变当前i标签的背景图
        })
        $(".cat").on("mouseenter", function(event) {
            // console.log("为了阻止事件冒泡");
            event.stopPropagation();
        })
    }());
    //尾部上面的手风琴效果
    (function() {
        $("#sfq li").each(function(i, ele) {
                $(ele).css("background", "url(images/feature" + (i + 1) + ".jpg)");
            }).mouseenter(function() {
                $(this).stop().animate({ width: 580 }, 300).siblings("li").stop().animate({ width: 140 }, 300);
            })
            .mouseleave(function() {
                $("#sfq li").stop().animate({ width: 250 }, 100);
            });
    }());
    // Tab栏切换
    (function() {
        $("#newsTitle>span").on("mouseenter", function() {
            console.log("3333")
            $(this)
                .addClass("active")
                .siblings().removeClass("active");
            $("#newsDetail div").eq($(this).index())
                .addClass("selected")
                .siblings("div").removeClass("selected");
        })
    }());
    //banner图
    (function() {
        var index = 0;
        var aa = function() {
            index = index == 1 ? 0 : 1;
            $(".banner_wrap>a").hide().eq(index).show();
            if (index == 0) {
                $(".banner_wrap em").addClass("toRight");
            } else {
                $(".banner_wrap em").removeClass("toRight");
            }
        }
                //banner控制钮
        var timer = setInterval(aa, 2000)
        $("#switch_ctrl span").each(function(i, e) {
            //console.log(i)
            $(this).on("mouseenter", function() {
                clearInterval(timer);
                $(".banner_wrap>a").hide().eq(i).show();
            }).on("mouseout", function() {
                timer = setInterval(aa, 2000);
            })
        });
    }());
    //分享到背景精灵图自动生成
    (function() {
        $(".sharedetail ul a").each(function(index, ele) {
            $(this).css("background", "url('images/bkicons24.png') no-repeat " + 0 + " " + (-240 - 48 * index) + "px");
        })
    }());
    //考拉海购 秀品商城 切换
    (function() {
        $('#klhg').hide(0);
        var timer = setInterval(function() {
            $("#topBar_right>div").hide().eq(0).slideDown(1000);
            setTimeout(function() {
                $("#topBar_right>div").hide().eq(1).slideDown(1000);
            }, 3000)
        }, 6000)
    }());

})
