
// $(".mail").hover(function(){
// 	$(this).addClass('animated pulse');
// },
// function(){
// 	$(this).removeClass('animated pulse')
// })
// $(".projectPic").hover(function(){
// 	$(this).addClass('animated pulse');
// },
// function(){
// 	$(this).removeClass('animated pulse')
// })

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

$('#aboutArrow').click(function(){
	$('#aboutArrowUp').show('fast');
	$('#aboutMe').css('visibility', 'visible');
	$('#aboutMe').addClass('animated fadeInLeftBig');
	$('#aboutMe').removeClass('fadeOutLeftBig');
	$('#aboutArrow').hide('fast');
})
$('#aboutArrowUp').click(function(){
	$('#aboutArrow').show('fast');
	$('#aboutArrowUp').hide('fast');
	$('#aboutMe').addClass('animated fadeOutLeftBig');
	$('#aboutMe').removeClass('fadeInLeftBig');
	setTimeout(function(){
		$('#aboutMe').css('visibility', 'hidden');
	}, 1000);
})

$('#aboutArrow').click(function(){
	$('#aboutArrowUp').show('fast');
	$('#aboutMe').css('visibility', 'visible');
	$('#aboutMe').addClass('animated fadeInLeftBig');
	$('#aboutMe').removeClass('fadeOutLeftBig');
	$('#aboutArrow').hide('fast');
})
$('#aboutArrowUp').click(function(){
	$('#aboutArrow').show('fast');
	$('#aboutArrowUp').hide('fast');
	$('#aboutMe').addClass('animated fadeOutLeftBig');
	$('#aboutMe').removeClass('fadeInLeftBig');
	setTimeout(function(){
		$('#aboutMe').css('visibility', 'hidden');
	}, 1000);
})


	
$('#worksArrow').click(function(){
	$('#worksArrowUp').show('fast');
	$('#projects').css('visibility', 'visible');
	$('#projects').addClass('animated fadeInDownBig');
	$('#projects').removeClass('fadeOutUpBig');
	$('#worksArrow').hide('fast');
})
$('#worksArrowUp').click(function(){
	$('#worksArrow').show('fast');
	$('#worksArrowUp').hide('fast');
	$('#projects').addClass('animated fadeOutUpBig');
	$('#projects').removeClass('fadeInDownBig');
	setTimeout(function(){
		$('#projects').css('visibility', 'hidden');
	}, 1000);
})

