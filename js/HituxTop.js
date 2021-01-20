document.writeln("<div id=\"HituxBackTop_item\">");
document.writeln("        <a id=\"HituxBackTop\" onclick=\"return false;\" title=\"回到顶部\"></a>");
document.writeln("  ");
document.writeln("</div>");
document.writeln("");

$(function() {
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();		
		if(scrolltop>=200){		
			$("#HituxBackTop_item").show();
		}else{
			$("#HituxBackTop_item").hide();
		}
	});		
	$("#HituxBackTop").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);	
	});		
	$(".qr").hover(function(){
		$(".qr-popup").show();
	},function(){
		$(".qr-popup").hide();
	});	


});