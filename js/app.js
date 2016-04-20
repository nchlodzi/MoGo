$(document).ready(function(){

$('.computer').on('mouseover',function(){
	$('.bgTurq1').css('display', 'block');
})

$('.computer').on('mouseleave',function(){
	$('.bgTurq1').css('display', 'none');
})

$('.headphones').on('mouseover',function(){
	$('.bgTurq2').css('display', 'block');
})

$('.headphones').on('mouseleave',function(){
	$('.bgTurq2').css('display', 'none');
})

$('.desk').on('mouseover',function(){
	$('.bgTurq3').css('display', 'block');
})

$('.desk').on('mouseleave',function(){
	$('.bgTurq3').css('display', 'none');
})


// $('.firstTeamPerson').hover(function(){
// 	$('.bgTurqBig1').css('display', 'block');
// 	console.log('tak');
// 	$('.yellowRectangle').css('display', 'block');
// 	console.log('nie');
// })

// $('.yellowRectangle').find('div .col-3').on('mouseover', function(){
// 	$(this).css('background-color', '#f38181');
// })

$('.yellowRectangle').hover(function(){
	// $(this).prev().removeClass();
	$(this).prev().addClass('hover');
	console.log('mama');
},
 function(){
	$(this).prev().removeClass('hover');
	// $(this).prev().addClass('.firstTeamPerson');
	console.log('tata');
});



// $('.firstTeamPerson').on('mouseleave',function(){
// 	$('.bgTurqBig1').css('display', 'none');
// 	$('.yellowRectangle').css('display', 'none');
// })

// $('.secondTeamPerson').on('mouseover',function(){
// 	$('.bgTurqBig2').css('display', 'block');
// })

// $('.secondTeamPerson').on('mouseleave',function(){
// 	$('.bgTurqBig2').css('display', 'none');
// })

$('.thirdTeamPerson').on('mouseover',function(){
	$('.bgTurqBig3').css('display', 'block');
})

$('.thirdTeamPerson').on('mouseleave',function(){
	$('.bgTurqBig3').css('display', 'none');
})



	function accordion(){

		$('.accordion p:not(:first)').hide();
		$('.accordion h1').on('click', function(){
			$(this).next('p').slideToggle().siblings('p:visible').slideUp();
			$(this).children('.arrow').toggle();
			$(this).children('.arrowSecond').toggle();
		})


	}

	accordion();


$('.secondTeamPerson').hover(function(){
	$('.hoverPhoto').show();
},
 function(){
	$('.hoverPhoto').hide();

});


$('.secondTeamPerson .facebook').hover(function(){
	$(this).css('background-color', '#f38181');
},
 function(){
	$(this).css('background-color', '#fce389');

});


	$('.topPeople').find('.personName2').on('click', function(){
		$(this).siblings('.peopleP').slideToggle();
	})



});

