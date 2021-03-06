//accordion

$( function() {
	$( "#accordion" ).accordion({
		collapsible: true
	});
});


//slider

$('#slider').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider__arrow/arrow_left.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider__arrow/arrow_right.png"></button>'
});

$('#slider2').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider2__arrow/left_arrow.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider2__arrow/right_arrow.png"></button>'
});

$('#slider3').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider__arrow/arrow_left.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider__arrow/arrow_right.png"></button>',
	slidesToShow: 3,
	responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	 ]
});

$("#slider2 .slick-next").addClass("next2");
$("#slider2 .slick-prev").addClass("prev2");

$("#slider3 .slick-next").addClass("next3");
$("#slider3 .slick-prev").addClass("prev3");


//tabs

$( "#tabs" ).tabs();


//mobile menu

$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.menu').slideToggle(1500);
		return false
	});
});