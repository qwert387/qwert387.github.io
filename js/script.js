const swiper1 = new Swiper('.image-slider',{
    navigation: {
        nextEl: '.photo-slider-btn-next',
        prevEl: '.photo-slider-btn-prev'
    },

    slidesPerView: 3,

    spaceBetween: 40,

    loop: true,
});

const swiper2 = new Swiper('.quote-slider',{
    navigation: {
        nextEl: '.qoote-slider-btn-next',
        prevEl: '.qoote-slider-btn-prev'
    },
    
    loop: true,
});