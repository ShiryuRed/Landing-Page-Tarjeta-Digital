const btnClose = document.querySelector('.btn-close-menu');
const btnOpen = document.querySelector('.btn-open-menu');
const menu = document.querySelector('.nav-responsive');
const boddy = document.querySelector(".body");

btnOpen.addEventListener('click', () => {
    btnOpen.classList.add("close");
    btnClose.classList.remove("close");
    menu.classList.add("nav-responsive-open");
    boddy.classList.add("no-scroll");
});

btnClose.addEventListener('click', () => {
    btnClose.classList.add("close");
    btnOpen.classList.remove("close");
    menu.classList.remove("nav-responsive-open");
    boddy.classList.remove("no-scroll");
});


const navResponsiveLi = document.querySelectorAll(".nav-responsive-li");


navResponsiveLi.forEach(li => {
    li.addEventListener('click', () => {
        btnClose.classList.add("close");
        btnOpen.classList.remove("close");
        boddy.classList.remove("no-scroll");
        setTimeout(function(){
            menu.classList.remove("nav-responsive-open");
            },600)
    });
  });

const btnAccion = document.querySelector(".btn-saber-mas")

function masInformacion() {
    // Lista de enlaces
    const enlaces = [
        'https://opengameart.org/content/approaching-the-tower',
        'https://opengameart.org/content/zelda-like-tilesets-and-sprites',
        'https://funnyfrontend.com/efectos-texto-css-svg-html/#google_vignette',
        'https://suizos-pizza.com/',
        'https://www.youtube.com/'
        // Ejemplos de paginas
    ];

    // Elige un enlace aleatorio
    const enlaceAleatorio = enlaces[Math.floor(Math.random() * enlaces.length)];

    // Abre el enlace en una nueva pestaña
    window.open(enlaceAleatorio, '_blank');
}
btnAccion.addEventListener("click", ()=> {
    masInformacion();
})