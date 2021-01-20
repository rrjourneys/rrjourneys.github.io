
$(document).ready(function(){
	

	//banner轮播
	function sliderF(wrap){

		var wrap = $(wrap);
		var box = wrap.find("ul");
		var thumb = wrap.find("ol");
		var prev = wrap.find(".prev");
		var next = wrap.find(".next");
		var w = wrap.width();
		var l = box.find("li").length;
		var windowH = $(window).outerHeight();
		var i = 0;

		wrap.css({"height":windowH});
		box.find("li,a").css({"height":windowH});

		for (var j=0; j<l;  j++) {
			$("<li><span></span></li>").appendTo(thumb);
		}
		thumb.children("li").eq(i).addClass("active");

		//滚动
		function cycle(){

			if (i == l-1){
				i=0;
			}else{
				i++
			}

			thumb.children("li").eq(i).addClass("active").siblings().removeClass("active");
			box.children("li").eq(i).siblings().css({
				"z-index":"0"
			});
			box.children("li").eq(i).addClass("on").css({
				"opacity":"0",
				"z-index":"1"
			}).animate({
				"opacity":"1"
			},500,function(){
				box.children("li").eq(i).siblings().removeClass("on");
			});
			
		}

		//底部按钮点击
		thumb.children("li").each(function(index){

			$(this).click(function(){
				i=index;
				thumb.children("li").eq(i).addClass("active").siblings().removeClass("active");
				box.children("li").eq(i).siblings().css({
					"z-index":"0"
				});
				box.children("li").eq(i).addClass("on").css({
					"opacity":"0",
					"z-index":"1"
				}).animate({
					"opacity":"1"
				},500,function(){
					box.children("li").eq(i).siblings().removeClass("on");
				});
				
			});
			
		});


		var timer=setInterval(cycle,4000);

		thumb.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(cycle,4000);
		});
	}

	sliderF(".banner");


	//滚动下一屏
	$(".banner .scroll-btn").click(function(){
		var windowH = $(window).outerHeight();
		$("body,html").animate({"scrollTop":windowH});
	});


	//业务鼠标经过显示价格
	$(".bussiness-body .item").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});


	//案例手机端二维码
	$(".enter .mobel-phone-icon").mouseover(function(){
		$(this).siblings(".case-ewm").fadeIn(500);
	}).mouseout(function(){
		$(this).siblings(".case-ewm").fadeOut(500);
	});

	
	//新闻切换
	$(".news .news-type li").each(function(index){
		$(this).mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(".news .news-body").eq(index).show().siblings(".news-body").hide();
		});
	});


	//微信公众号二维码
	$(".interactive-body-l .wx-icon").mouseenter(function(){
		$(this).siblings(".ewm").fadeIn(500);
	}).mouseleave(function(){
		$(this).siblings(".ewm").fadeOut(500);
	});

	//微信公众号二维码
	$(".interactive-body-r .wx-btn").mouseenter(function(){
		$(this).siblings(".ewm").fadeIn(500);
	}).mouseleave(function(){
		$(this).siblings(".ewm").fadeOut(500);
	});


	//在线服务显示
	function onlineServiceShow(){
		$(window).scroll(function(){

			var windowScrollTop = $(window).scrollTop();
			var windowH = $(window).outerHeight();

			//if(windowScrollTop>windowH-windowH/2){
				//$(".online-service").fadeIn();
			//}else{
				//$(".online-service").fadeOut();
			//}

		});
	}

	onlineServiceShow();


	//返回顶部
	function DoTop(){

		$(".go-top").click(function(){
			$("body,html").animate({
				"scrollTop":"0px"
			},300)
		});
		
	}

	DoTop();


	//内页banner文字显示
	$(".banner-inside").addClass("show");


	//套餐切换
	$(".package-type li").each(function(index){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(".package-detail").eq(index).show().siblings(".package-detail").hide();
		});
	});

	

});



