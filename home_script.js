var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:true,
    autoplayTime:900,
    
    loop: true, // Enable looping if needed
    autoplay: {
        delay: 900, // Delay between slides in milliseconds (0.9 seconds in this case)
    },

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
});

let navbar=document.querySelector('.header .navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick=()=>{
    navbar.classList.remove('active');
}


var swiper = new Swiper(".mmySwiper", {
    slidesPerView: 3,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: -250,
        },
        // 1200:{
        //     slidesPerView: 3,
        //     spaceBetween:80,
        // },
        // 1300:{
            // slidesPerView: 3,
            // spaceBetween:0,
        // },
    },
});