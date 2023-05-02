let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('ph-moon')){
        darkmode.classList.replace('ph-moon', 'ph-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('ph-sun', 'ph-moon');
        document.body.classList.remove('color');
    }
};

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('ph-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('ph-x');
    navlist.classList.remove('open');
};

// const sr = ScrollReveal ({
//     distance: '70px',
//     duration: 2700,
//     reset: true
// });

// sr.reveal('.hero-text',{delay:200, origin: 'bottom'});