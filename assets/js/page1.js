import '../css/page1.css';

import $ from 'jquery';

const Carousel = {
    init: ($carousel) => {
        // Activate Carousel
        $carousel.carousel({
            interval: false
        });
        // Enable Carousel Controls
        $carousel.find('.carousel-control-prev').click(function(){
            $carousel.carousel("prev");
        });
        $carousel.find('.carousel-control-next').click(function(){
            $carousel.carousel("next");
        });
    }
};

Carousel.init($('#subject-carousel'));
Carousel.init($('#headline-carousel'));
