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
  