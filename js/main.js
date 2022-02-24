$(document).ready(function() {
	$('.questions__box__items__content').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.questions__content').removeClass('questions__content_active');
		jQuery("#"+id).addClass('questions__content_active');
		let idElem = elem.getAttribute('id');
	});
    $('.questions__certificates__box').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		rows: 1,
		dots: true,
		autoplay: false,
		infinite: true,
		adaptiveHeight: true,
		centerMode: false,
	});
});