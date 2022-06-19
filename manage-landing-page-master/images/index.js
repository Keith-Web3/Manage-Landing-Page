const navToggle = document.getElementById("nav-toggle")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3")
const aside = document.querySelector("aside")
const darken = document.querySelector(".darken")

hasClickedToggle = false

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  hasClickedToggle = true
} else {
  lineOne.style.transform = "rotate(0deg) translateY(-50%)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg) translateY(50%)"
  hasClickedToggle = false
}
aside.classList.toggle("new-aside")
darken.classList.toggle("new-darken")
})

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let xOffset = e.offsetX
    let yOffset = e.offsetY
  
    button.style.setProperty('--x-offset', xOffset + "px")
    button.style.setProperty('--y-offset', yOffset + "px")
  
    button.classList.add('new-button')
  })
  button.addEventListener("animationend", () => {
    button.classList.remove('new-button')
  })
})

const cardContainer = document.querySelector(".card-container")
const cards = document.querySelectorAll(".card")
const cardNav = document.querySelectorAll("a")

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    cards.forEach((card, index) => {
      if (card === entry.target) {
        cardNav[index].style.backgroundColor = "var(--bright-red)"
      }
    })
    if(!entry.isIntersecting) {
      cards.forEach((card, index) => {
        if (card === entry.target) {
          cardNav[index].style.backgroundColor = "unset"
        }
      })
    }
    
  }), {
    parent: cardContainer,
    threshold: 1
  }
})

cards.forEach(card => {intersectionObserver.observe(card)})

const sectionOneChild = document.querySelector(".section-1-child")
const sectionOneImage = document.querySelector(".section_1 > img")
const sectionOneArray = [sectionOneChild, sectionOneImage]
console.log(sectionOneArray)
const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.style.transform = "translate(0, 0)"
    entry.target.style.opacity = "1"
    sectionOneObserver.unobserve(entry.target)
  }, {
    threshold: 0.7
  })
})

sectionOneArray.forEach(child => {
  sectionOneObserver.observe(child)
})