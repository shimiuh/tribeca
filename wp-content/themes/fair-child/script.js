(function($) {
  function edgtfInitProjectsSlider() {
  	var sliders = $('.edgtf-projects-slider');
  	sliders.each(function() {

  		var slider = $(this);
  		var textSlider = $(this).find('.edgtf-ps-text-slider-holder');


            var autoplay = false,
                autoPlaySpeed = 4000;

            if(typeof slider.data('autoplay') !== 'undefined' && slider.data('autoplay') == 'yes'){
                autoplay = true;
            }

            if(typeof slider.data('autoplay-speed') !== 'undefined' && slider.data('autoplay-speed') !== ''){
                autoPlaySpeed = slider.data('autoplay-speed');
            }

  		var slickImages = {
  			slidesToShow: 1,
  			slidesToScroll: 1,
                autoplay: autoplay,
                autoplaySpeed: autoPlaySpeed,
  			arrows: false,
  			fade: true,
  			draggable: false,
  			infinite: true,
        adaptiveHeight: false,
  		};

  		var slickText = {
  			slidesToShow: 1,
  			slidesToScroll: 1,
                autoplay: autoplay,
                autoplaySpeed: autoPlaySpeed,
  			asNavFor: slider.find('.edgtf-projects-slider-element'),
  			speed: 150,
                fade: true,
                easing: 'easeOutQuint',
  			arrows: false,
  			draggable: false,
  			dots: true,
  			dotsClass: 'edgtf-slick-dots-with-number',
  			customPaging: function(slider, i) {
  				return '<span class="edgtf-slick-dot-number">' + (i + 1) +'</span>';
  			},
  			infinite: true
  		};

  		var laptopSlider = slider.find('.edgtf-ps-laptop-images').slick(slickImages);
  		var tabletSlider = slider.find('.edgtf-ps-tablet-images').slick(slickImages);
  		var mobileSlider = slider.find('.edgtf-ps-mobile-images').slick(slickImages);
  		var infoSlider  = textSlider.slick(slickText);

            if (autoplay) {
                slider.on('mouseleave', function () {
                    laptopSlider.slick('slickPlay');
                    tabletSlider.slick('slickPlay');
                    mobileSlider.slick('slickPlay');
                    infoSlider.slick('slickPlay');
                });

                slider.on('mouseenter', function () {
                    laptopSlider.slick('slickPause');
                    tabletSlider.slick('slickPause');
                    mobileSlider.slick('slickPause');
                    infoSlider.slick('slickPause');
                });
            }

  	});
  }

  $(document).ready(function(){
    edgtfInitProjectsSlider();
  });
})(jQuery);
