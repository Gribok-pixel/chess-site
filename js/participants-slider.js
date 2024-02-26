const participantsList = document.querySelector('.participants__list')
const prevParticipantBtn = document.querySelector('.switches-prev')
const nextParticipantBtn = document.querySelector('.switches-next')
const numbering = document.querySelector('.switches-numbering')


const sliderStep = participantsList.children[0].offsetWidth + 20
const hiddenListSum = Math.round((participantsList.scrollWidth - participantsList.clientWidth) / sliderStep)
const visibleListSum = Math.round(participantsList.clientWidth / sliderStep)

numbering.children[0].textContent = visibleListSum
numbering.children[1].textContent = participantsList.children.length

let translate = 0

function slideNext() {
    
    if (translate > -(sliderStep * hiddenListSum)) {
        translate-=sliderStep
        participantsList.style.transition = `all 0.5s`
        participantsList.style.transform = `translateX(${translate}px)`
        prevParticipantBtn.style.backgroundColor = '#313131'

        numbering.children[0].textContent = Number(numbering.children[0].textContent) + 1
    } 
    if (Number(numbering.children[0].textContent) == participantsList.children.length) {
        nextParticipantBtn.style.backgroundColor = '#D6D6D6'
    }
}
function slidePrev() {
    
    if (translate < 0) {
        translate+=sliderStep
        participantsList.style.transition = `all 0.5s`
        participantsList.style.transform = `translateX(${translate}px)`
        nextParticipantBtn.style.backgroundColor = '#313131'

        numbering.children[0].textContent = Number(numbering.children[0].textContent) - 1
    } 
    if (Number(numbering.children[0].textContent) == visibleListSum) {
        prevParticipantBtn.style.backgroundColor = '#D6D6D6'
    }
}



let count = 0
setInterval(() => {
    count++
    if (count > hiddenListSum * 2) {
        count = 0
    }

    if (count <= hiddenListSum) {
        slideNext()
    }
    if (count > hiddenListSum && count <= hiddenListSum * 2) {
        slidePrev()
    }
}, 4000);


nextParticipantBtn.addEventListener('click', slideNext)
prevParticipantBtn.addEventListener('click', slidePrev)


