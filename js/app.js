$(document).ready(function(){



	function hamburger(){
		$('.hamburger').on('click', function(){
			if(window.matchMedia('min-width: 670px')){
				$('.hamburger .menu').toggle();
			}

		})
	}
	
	hamburger();


	function resize(){

		$(window).on('resize', function(){
			if( $(window).width() > 685 ) {
				$('.hamburger .menu').hide();
			}
		})

	}
	
	resize();	


	function odsylacz(){

		$('.menu, .scrollUp, .buttonRow').find('a').on('click', function(){

		    var href = $(this).attr('href');

	 		$('html, body').animate({
	            scrollTop: $(href).offset().top 
	        }, 1000);

			return false;
		})
	}

	odsylacz();

	function arrowUp(){

		$(window).scroll(function(){
			if ($(this).scrollTop()>300){
				$('.arrowUpNav').fadeIn();
			}
			else {
				$('.arrowUpNav').fadeOut();
			}

		})

	}

	arrowUp();



	function firstHovers(){

		$('.computer').hover(function(){
			$('.bgTurq1').css('display', 'block');
		}, function(){
			$('.bgTurq1').css('display', 'none');
		});

		$('.headphones').hover(function(){
			$('.bgTurq2').css('display', 'block');
		}, function(){
			$('.bgTurq2').css('display', 'none');
		});

		$('.desk').hover(function(){
			$('.bgTurq3').css('display', 'block');
		}, function(){
			$('.bgTurq3').css('display', 'none');
		});
	}

	firstHovers();


	function secondHovers(){

		$('.view1').hover(function(){
			$('.bgTurqBig1').css('display', 'block');
		}, function(){
			$('.bgTurqBig1').css('display', 'none');
		});

		$('.view2').hover(function(){
			$('.bgTurqBig2').css('display', 'block');
		}, function(){
			$('.bgTurqBig2').css('display', 'none');
		});

		$('.view3').hover(function(){
			$('.bgTurqBig3').css('display', 'block');
		},function(){
			$('.bgTurqBig3').css('display', 'none');
		});
	}

	secondHovers();


	function accordion(){

		$('.accordion p:not(:first)').hide();
		$('.accordion h1').on('click', function(){
			$(this).next('p').slideToggle().siblings('p:visible').slideUp();
			$(this).children('.arrow').toggle();
			$(this).children('.arrowSecond').toggle();
		});

		$('.accordion').find('p').niceScroll({cursorcolor:"#95e1d4", autohidemode: false, cursorwidth: "7px", background: "#f5f5f5",railoffset: { top: 0, right: 0, left: -10, bottom: 0 }});

	}

	accordion();


	function whatPeoplelSay(){

		$('.topPeople').find('.personName2').on('click', function(){
			if ($(window).width() < 610){
				$(this).siblings('.peopleP').slideToggle();
			}
		})

		if ($(window).width() > 610){
			$('.topPeople').find('.peopleP').slideDown();
		}

	}	

	whatPeoplelSay();


	function sliderQuotes(){
		$('.bxslider').bxSlider();	
	}	
		$('.bxslider').bxSlider({
 			nextSelector: '#slider-next',
 			prevSelector: '#slider-prev',
  			nextText: '<img src="images/arrowLeft.png" height="25" width="25"/>',
  			prevText: '<img src="images/arrowRight.png" height="25" width="25"/>',
  			slideWidth: 1200,
  			pager: false,
		});
	
		
	sliderQuotes();

});

