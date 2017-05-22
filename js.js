// JavaScript Document
$(document).ready(function() {
	var news=$('#news'),
		newsli=$('#news li'),
		newsdiv=$('#news').children("div");
		
	newsli.click(function(){
		newsli.each(function() {
        	newsli.removeClass("displaynews");
			newsdiv.addClass("hidenews");
     	});
		$(this).addClass("displaynews");
		var index=$(this).index();
		newsdiv.eq(index).removeClass("hidenews");
	});
		
	$("#web-page").click(function() {
    	$("#ajax-content").load('html-colection/text.txt');
	});
		
	$("#back-to-top").click(function() {
		$('body').animate({ scrollTop: 0},"slow");
		return false;
    });
	
	$(window).scroll(function() {
		if($(window).scrollTop()>100)
			$("#back-to-top").css("transform","translateY(700px)");
        else
          	$("#back-to-top").css("transform","translateY(-700px)");
	});
	
		
});
