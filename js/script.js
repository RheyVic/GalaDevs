document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var header = document.getElementById("header");
        if (window.pageYOffset > 10) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
});
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

