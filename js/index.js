 
/*=====================  wrap5  =======================*/

 $(function(){
	$(".gw-link").on("mouseenter",function(){
		$(this).stop().css("color","#fff").animate({
			"background-position-y":0
		},"fast");
	}).on("mouseleave",function(){
		$(this).stop().css({
			"background-position-y":-30,
			"color":"#9F9F9F"
		});
	});
	
	toggleImg();
	function toggleImg(){
		$(".con-box-title a").on("click",function(){
		var $this = $(this),
			index = $this.index();
			$this.addClass("active").siblings("a").removeClass("active");
			$(".a-hot-wrap").eq(index).addClass("active").siblings().removeClass("active");
			$(".cur-hot-box").eq(index).addClass("cur").siblings().removeClass("cur");
	});
	}
	function downLoad(){
		var a = $()  //  函数循环a-hot-wrap  的 length  
	}
	$()  //  点击事件。
 });













