/*
 * @Author: 573156440
 * @Date:   2016-03-25 18:30:35
 * @Last Modified by:   573156440
 * @Last Modified time: 2016-03-26 00:14:35
 */

'use strict';
$(function() {
    $('#fullpage').fullpage({
        continuousVertical: false, //循环演示
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        'navigation': true,
        onLeave: function(index, nextIndex, direction) {
            //index是离开的页面的序号从1开始，nextIndex是滚动到的页面的序号，从1开始；direction判断上滚还是下滚，值为up或down
            console.log(22222222222222)
            if (index == 1 && direction == 'down') {
                $(".header_main").animate({
                    top: -100
                }, 680);
                $(".header_sub").animate({
                    top: -36
                }, 680);
            } else if (nextIndex == 1 && direction == 'up') {
                $(".header_main").animate({
                    top: 0
                }, 680);
                $(".header_sub").animate({
                    top: 101
                }, 680);
            }
        },
    });
    //音乐导航

    $('#header .nav li').append("<ins></ins>");
    var arr = new Array('red', 'blue', '#ccc', 'yellow', 'pink', 'deeppink', 'purple');
    $('#header .nav ins').each(function(index, ele) {
        $(this).css('background-color', arr[index]);
    });
    $('#header .nav li').on('mouseenter', function() {
        $(this).children("ins").stop().animate({ top: 0 }, 200);
        $("audio").get($(this).index()).load(); //加载
        $("audio").get($(this).index()).play(); //播放
    }).on("mouseleave", function() {
        $(this).children("ins").stop().animate({ top: -75 }, 200);
    });

    //添加键盘事件
    $(window).keydown(function(event) {
        //console.log(e.keyCode);
        var num = 0;
        if (event.keyCode >= 49 && event.keyCode <= 56) {
            num = event.keyCode - 49;
            $('#header .nav li').eq(num).trigger("mouseenter");
            setTimeout(function() {
                $('#header .nav li').eq(num).trigger("mouseleave");
            }, 300);
        }
    });

    //百度地图
    (function() {
        console.log('百度地图');
        var map = new BMap.Map("allmap"); //创建map实例    BMap为百度地图的命名空间。下面有各种功能基类
        map.centerAndZoom(new BMap.Point(116.604, 39.715), 11); //初始化地图设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.GeolocationControl());  //添加定位控件（针对移动端开发默认位于地图左下方）
        map.addControl(new BMap.ScaleControl());    //比例尺控件
        map.addControl(new BMap.OverviewMapControl());    //缩略图控件
        map.addControl(new BMap.NavigationControl());  //平移缩放控件
        map.setCurrentCity("北京");
        // map.enableScrollWheelZoom(true);

        //标注天安门（与搜索标注有冲突）
        var point = new BMap.Point(116.404, 39.715);
        map.centerAndZoom(point,11);
        var marker = new BMap.Marker(point);   //创建标注-标注天安门
        map.addOverlay(marker);//将标注添加到地图中
        marker.addEventListener("click",function(){
            alert('你点击了天安门');
            var opts = {
                 width : 250,     // 信息窗口宽度
                 height: 100,     // 信息窗口高度
                 title : "Hello"  // 信息窗口标题
                }
                var infoWindow = new BMap.InfoWindow("踩过地安门，来到天安门", opts);  // 创建信息窗口对象
                map.openInfoWindow(infoWindow, point);      // 打开信息窗口
        });

        //配置搜索
         var search = document.getElementById('BMap_left_search');
        var bmapbtn = document.getElementById('bmap_btn');
        map.centerAndZoom(new BMap.Point(116.404,39.915),14);
        var local = new BMap.LocalSearch("北京市",{
            renderOptions:{map:map,autoViewport:true},pageCapacity:8}
            );
        bmapbtn.addEventListener("click",function(){
            var searchValue = search.value;
            local.search(searchValue);
        });
        search.addEventListener('blur',function(){
            var searchValue = search.value;
            local.search(searchValue);
        });
        search.addEventListener('keydown',function(e){
            if(e.keyCode==13){
                var searchValue = search.value;
                local.search(searchValue);
            }
        });


    })()

});
