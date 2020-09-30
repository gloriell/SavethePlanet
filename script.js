const pictures = [
    'url(img/main-wolf-image.png)',
    'url(img/main-wolf-image-amber.jpg)',
    'url(img/main-wolf-image-black.jpg)'
]

let hero = document.querySelector('.hero');
let x = 0;
hero.style.backgroundSize = "cover";

function heroChange() {
    hero.style.background = pictures[x];
    x = (x + 1) % pictures.length;
    hero.classList.toggle('transition')
}
setInterval(heroChange, 4000);





const hamburger = document.querySelector('.navbar__hamburger');
const navbar = document.querySelector('.navbar__responsive');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('appear');



})