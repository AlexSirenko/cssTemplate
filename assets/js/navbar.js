var arrayNavbar = document.querySelectorAll('.contain-sub-navbar');

arrayNavbar.forEach(function(elem){
    elem.onclick = function(e){
        document.getElementById(elem.dataset.subNavId).classList.toggle('d-none');
    }
});

var menuIcon = document.querySelector('.menu-icon-toggle');
var sidebar = document.querySelector('.sidebar');
var main = document.querySelector('.main');
var disable = document.querySelector('#disable');

sidebar.classList.toggle('d-none');//при запуске

menuIcon.onclick = function(e) {
    sidebar.classList.toggle('d-none');
    disable.classList.toggle('d-none');
};

disable.onclick = function(){
    sidebar.classList.toggle('d-none');
    disable.classList.toggle('d-none');
};