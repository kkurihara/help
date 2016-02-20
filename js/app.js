$(function(){
	var lis = $('.acordion').children().children('li');
	lis.click(function(){
		if ($(this).attr("class") =="plus"){
			$(this).find('.link_list').slideDown();
			$(this).removeClass("plus").addClass("minus");
			
		}else{
			$(this).find('.link_list').slideUp();
			$(this).removeClass("minus").addClass("plus");
		}
		return false;
	});

});

$(function(){
	var searchBox =$('.header-searchbox-mobile');
	$('.header-area').find('.icon-search').click(function(){
		searchBox.show();
	});
	searchBox.find('.icon-close').click(function(){
		searchBox.hide();
	});


});
