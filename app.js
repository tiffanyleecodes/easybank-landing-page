const open = document.querySelector('.open');
const menu = document.querySelector('.menu');
const main = document.querySelector('main')

open.addEventListener('click', function(){
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
       this.src = "./images/icon-hamburger.svg" 
    }else {
        menu.style.display = 'block';
        this.src = "./images/icon-close.svg"
    }
})