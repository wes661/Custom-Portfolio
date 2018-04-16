
$(".mail").hover(function(){
	$(this).addClass('animated infinite pulse');
},
function(){
	$(this).removeClass('animated infinite pulse')
})
$(".btn-play").hover(function(){
	$(this).addClass('animated infinite pulse');
},
function(){
	$(this).removeClass('animated infinite pulse')
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

