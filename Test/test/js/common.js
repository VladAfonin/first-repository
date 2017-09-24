$(document).ready(function() {

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,

});

	$('.opacity').css({opacity: 0.7});

	$(".header-contact").click(function(){
		$(".connect_popup").show();
		$(".close_connect").show();
		$(".opacity").show();
	});

	$(".close_connect").click(function(){
		$(".connect_popup").hide();
		$(".close_connect").hide();
		$(".opacity").hide();
	});

});