import $ from '../local_modules/jquery/dist/jquery.min'
import Swiper from '../local_modules/swiper/js/swiper.esm.bundle'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log('document ready')
})

const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
})
mySwiper()
