jQuery(document).ready(function($){
	
	$(window).scroll(function(){
		var scrollPosition=$(window).scrollTop(),
		navbar=$('.fixed-top');
		
		if(scrollPosition>400){
			
			navbar.addClass('change-fixed-top');
		}
		else{
			navbar.removeClass('change-fixed-top');
		}
	}
	);
	
	
});