'use strict'
// SLIDER ADVANTAGES

const sliderAdvantages = document.querySelector('.swiper.advantages__slider')
let mySwiper

function mobileSliderAdvantages() {
    if (window.innerWidth <= 1019 && sliderAdvantages.dataset.mobile === 'false') {
        mySwiper = new Swiper(sliderAdvantages, {
            loop: true,
            pagination: {
                el: '.swiper-pagination.swiper-pagination--advantages',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next.swiper-button-next--advantages',
                prevEl: '.swiper-button-prev.swiper-button-prev--advantages',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                699: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                }
            }
        })
        sliderAdvantages.dataset.mobile = true
    }
    if (window.innerWidth > 1019) {
        sliderAdvantages.dataset.mobile = false
        if (sliderAdvantages.classList.contains('swiper-initialized')) {
            mySwiper.destroy()
        }
    }
}

mobileSliderAdvantages()
window.addEventListener('resize', mobileSliderAdvantages)

// SLIDER PRESENTATION

const sliderPresentation = document.querySelector('.swiper--presentation')

const presentationSwiper = new Swiper(sliderPresentation, {
    loop: true,
    pagination: {
        el: '.swiper-pagination.swiper-pagination--presentation',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.swiper-button-next--presentation',
        prevEl: '.swiper-button-prev.swiper-button-prev--presentation',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        699: {
            slidesPerView: 2,
            spaceBetween: 25,
        }
    }
})