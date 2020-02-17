$(function() {


	$("body").css("overflow", "auto");

	// Loading Page
	$(".loading-screen .loading-head").fadeOut(2000, function() {

		$(".loading-screen").fadeOut(1500, function() {

		})
	});

	//Agjust Header Height

	$('.header').height($(window).height());


	//Smooth Scroll
	$('.navbar-nav .nav-item .nav-link').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top - 20
		}, 500);
	});

	//Adjust Current Class

	$('.navbar-nav .nav-item .nav-link').click(function() {
		$('.navbar-nav .nav-link').removeClass('current');
		$(this).addClass('current');
	});


	//Trigger Mixitup

	var mixer = mixitup('#container');

	// Adjust shuffle

	$('.shuffle li').click(function() {
		$(this).addClass('selected').siblings().removeClass('selected');
	});



	// Counter
	$('.count span').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
				duration: 10000,
				easing: 'swing',
				step: function() {
					$(this).text(Math.ceil(this.Counter));
				}
			});
	});


	//Trigger NiceScroll
	$('html, body').niceScroll({
		cursorcolor: '#ec3237',
		cursorborder: 'none',
		cursorwidth: '10'
	});
});