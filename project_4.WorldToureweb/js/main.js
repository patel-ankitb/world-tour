$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoPlay : false,
    goToFirst : true,
    goToFirstSpeed : 1000,
    navigation:true,
    dots:false,
    navigationText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

AOS.init();