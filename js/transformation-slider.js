const slideConteiner = document.querySelector('.transformation__grid')
const prevBtn = document.querySelector('.pagination-prev')
const nextBtn = document.querySelector('.pagination-next')

const pagination = document.querySelector('.pagination-indicators')

let activeSlide = 0

function nextSlide() {
    activeSlide++
    for (let item of slideConteiner.children) {
        item.style.order = 'unset'
    }
    if (activeSlide < 5 ) {
        prevBtn.style.opacity = '100%'
        nextBtn.style.opacity = '100%' 
        slideConteiner.children[activeSlide].style.order = '-1'
        this.addEventListener('click', nextSlide)
        prevBtn.addEventListener('click', prevSlide)
    } 
    if (activeSlide >= 4) {
        nextBtn.style.opacity = '20%'
        this.removeEventListener('click', nextSlide)
    }
    
    for (let indicator of pagination.children) {
        indicator.classList.remove('indicator-activ')
    }
    pagination.children[activeSlide].classList.add('indicator-activ')

    return activeSlide
}

function prevSlide() {
    activeSlide -=1
    for (let item of slideConteiner.children) {
        item.style.order = 'unset'
    }
    if (activeSlide > 0) {
        prevBtn.style.opacity = '100%' 
        nextBtn.style.opacity = '100%' 
        slideConteiner.children[activeSlide].style.order = '-1'
        this.addEventListener('click', prevSlide)
        nextBtn.addEventListener('click', nextSlide)
    } 
    if (activeSlide === 0) {
        prevBtn.style.opacity = '20%'
        prevBtn.removeEventListener('click', prevSlide)
        nextBtn.addEventListener('click', nextSlide)
    }

    for (let indicator of pagination.children) {
        indicator.classList.remove('indicator-activ')
    }
    pagination.children[activeSlide].classList.add('indicator-activ')
    
    return activeSlide
}


for (let item of slideConteiner.children) {
    item.style.transition = 'all .3s'
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)