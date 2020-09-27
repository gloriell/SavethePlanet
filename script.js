const pictures = [
    'url(img/main-wolf-image.png)',
    'url(img/main-wolf-image-amber.jpg)',
    'url(img/main-wolf-image-black.jpg)'
]

let x = 0;
function heroChange() {
    let hero = document.querySelector('.hero');
    hero.style.background = pictures[x];
    x = (x + 1) % pictures.length;
    hero.style.backgroundSize = "cover";
}


setInterval(heroChange, 5000);