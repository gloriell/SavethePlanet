//cod animatie
const pictures = [
    'url(img/main-wolf-image.png)',
    'url(img/main-wolf-image-amber.jpg)',
    'url(img/main-wolf-image-black.jpg)'
]

let hero = document.querySelector('.hero');
let x = 0;


function heroChange() {
    hero.style.background = pictures[x];
    x = (x + 1) % pictures.length;
    hero.classList.toggle('transition');
}
setInterval(heroChange, 4000);




//cod hamburger menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar__responsive');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('appear');

})

//cod dropdown story hamburger
let story = document.getElementById('story');
window.onload = function () {

    story.addEventListener('click', () => {
        document.getElementsByClassName('navbar__story')[0].classList.toggle('change');
        document.getElementsByClassName('navbar__story')[1].classList.toggle('change');
        document.getElementsByClassName('navbar__story')[2].classList.toggle('change');
    })
};

//cod dropdown story navbar
let storyDropdown = document.querySelector('.navbar__dropdown');
let dropdown = document.querySelector('.dropdown')

storyDropdown.addEventListener('click', () => {
    dropdown.classList.toggle('falling');
})