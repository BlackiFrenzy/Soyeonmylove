var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var menuLinks = document.querySelectorAll('.ul li a'); 

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
});

menuLinks.forEach(link => {  
    link.addEventListener('click', () => {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    });
});