let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('nav');
let nextBTN = document.querySelector('.next');
let previousBTN = document.querySelector('.previous');
let slidesContainer = document.querySelector('.slides');
let slides = slidesContainer.children;
let moveDistance = slides[0].clientWidth;
let counter = 0;
let currentSliderNumber = document.querySelector('.currentSlide-number span');
let slideContent = document.querySelectorAll('.slide .container');

hamburger.addEventListener('click', toggleClass)
nextBTN.addEventListener('click', NextImg)
previousBTN.addEventListener('click', previousImg)

function toggleClass() {
    toggleHamburgerClass()
    toggleNavbarClass()

}
function toggleHamburgerClass() {
    hamburger.classList.toggle('hamburger-open')
}
function toggleNavbarClass() {
    navbar.classList.toggle('nav-open')
}
function NextImg() {
    if (counter === slides.length - 1) {
        return
    }
    counter++
    move()
    animat()
    currentSlide()
}
function previousImg() {
    if (counter === 0) {
        return
    }
    counter--
    move()
    currentSlide()
}
function move() {
    slidesContainer.style.transform = `translate(${-counter * moveDistance}px)`
}
function animat() {
    slideContent[counter].classList.add('animat')
}
function currentSlide() {
    currentSliderNumber.textContent = `0${counter + 1}`;
}