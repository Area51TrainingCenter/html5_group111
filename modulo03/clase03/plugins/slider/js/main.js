 $(window).load(function() {

    $('.flexslider').flexslider({
    	animation:"slide",
    	direction:"horizontal",
    	reverse:false,
    	startAt:1
    });



     $(".owl-carousel").owlCarousel({
     	items:4,
     	margin:15,
     	loop:true,
     	nav:true,
     	dots:true,
     	autoplay:true,
     	autoplayTimeout:2000,
     	responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
     });



  });