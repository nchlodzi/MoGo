$(document).ready(function(){


$('.navigation').on('click', function(){
	if(window.matchMedia('max-width: 360px')){
		$('.navigation li').toggleClass('show');
		console.log("działą")
		
		
	}

})

/*
function now (){
	window.addEventListener('resize', function(event){
		var mg = window.matchMedia("(max-width: 500px)");

		if(mg.matches){
			cosnole.log('yes');
		}else{
			cosnole.log('no');
				}
			}
		}
	})
}
*/
});

