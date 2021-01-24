const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

toggle.addEventListener('click',()=>{
    menu.classList.add('show');

})
close.addEventListener('click',()=>{
    menu.classList.remove('show');

})


AOS.init({
    disable:'mobile',
    duration:800
})