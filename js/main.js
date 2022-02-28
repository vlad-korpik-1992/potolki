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
	$('.catalog__box__link').on('click', function (e) {
        e.preventDefault();
        let elem = e.target.parentNode;
		console.log(elem);
		let id = '1' + elem.getAttribute('id');
		jQuery("#"+id).addClass('sidebar_active');
		let idElem = elem.getAttribute('id');
		$( "body" ).toggleClass('body_fixed');
    });
	$('.sidebar__back').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').removeClass('sidebar_active');
		$( "body" ).removeClass('body_fixed');
    });
	$('.sidebar__overlay').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').removeClass('sidebar_active');
		$( "body" ).removeClass('body_fixed');
    });
});