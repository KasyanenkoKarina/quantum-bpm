/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function() {
    const $slider = $('.js-mobile-slider');
    settingsObj = {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        adaptiveHeight: true
    };

    if ($(window).width() > 1224) {
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    } else {
        if (!$slider.hasClass('slick-initialized')) {
            $slider.slick(settingsObj);
        }
    }
});


// $(document).ready(function() {
//     $('.js-container-slider').slick({
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true,
//         arrows: false,
//         variableWidth: true,
//         swipe: false,
//         responsive: [{
//                 breakpoint: 1224,
//                 settings: {
//                     variableWidth: false,
//                 }
//             },
//             {
//                 breakpoint: 769,
//                 settings: {
//                     centerMode: true,
//                     variableWidth: true,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false,
//                     swipe: true
//                 }
//             },
//         ]
//     });
// });