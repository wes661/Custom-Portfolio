
$('#portfolio-btn').click(function(){
	$('.nav').removeClass('animated fadeOutLeftBig');
	$('.nav').css('visibility', 'visible');
	$('.nav').addClass('animated fadeInLeftBig');
	$('#portfolio-btn').addClass('animated fadeOutUp');
	$('#portfolio-back-btn').css('visibility', 'visible');
	$('#portfolio-back-btn').removeClass('animated fadeOutUp');
	$('#portfolio-back-btn').addClass('animated fadeInDown');
});
$('#portfolio-back-btn').click(function(){
	$('.nav').addClass('animated fadeOutLeftBig');
	$('#portfolio-back-btn').addClass('animated fadeOutUp');
	$('#portfolio-btn').removeClass('animated fadeOutUp');
	$('#portfolio-btn').addClass('animated fadeInDown');
})


jQuery(document).ready(function(){
	jQuery('.postOne').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 300
	});
});	

jQuery(document).ready(function(){
	jQuery('.postTwo').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset: 300
	});
});	



