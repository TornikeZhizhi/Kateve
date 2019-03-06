// Search Start --------------------------------------------------------

$(document).ready(function(){
	var meF = 0;
	$(".header_search_box span").on("click",function(){
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else {
			$(this).find("img").attr("src","images/search_icon.png");
			meF = 0;
		}
	})
})

// Search End -------------------------------------------------------------

	$(document).ready(function(){
			$('.histoy_slider_fluid').owlCarousel({
		    loop:true,
		    margin:5,
		    nav:true,
		    smartSpeed:1200,
		    responsive:{
		        0:{
		            items:1
		        },
		        450:{
		        	items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})

	})
