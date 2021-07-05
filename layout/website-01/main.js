window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigator = document.querySelector('.navigator');
    navigator.classList.toggle('active');
    menuToggle.classList.toggle('active');
}