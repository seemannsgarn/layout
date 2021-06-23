function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}
function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigator = document.querySelector('.navigator');
    toggleMenu.classList.toggle('active');
    navigator.classList.toggle('active');

}