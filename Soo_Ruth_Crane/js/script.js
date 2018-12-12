$(document).ready(function() {

	// Used SLick Js by Ken Wheeler: http://kenwheeler.github.io/slick/

	// activating slide shows

	$('.left, .center, .right, .left2,.right2,.label_slide').slick({
		infinite: true,

	});


	// controls to move left and right slideshows when center buttons are clicked

	$('.slick-prev').click(function() {
		$('.left').slick('slickPrev');
		$('.right').slick('slickPrev');
		$('.left2').slick('slickPrev');
		$('.right2').slick('slickPrev');
		$('.label_slide').slick('slickPrev');

	});

	$('.slick-next').click(function() {
		$('.right').slick('slickNext');
		$('.left').slick('slickNext');
		$('.right2').slick('slickNext');
		$('.left2').slick('slickNext');
		$('.label_slide').slick('slickNext');
	});

});
