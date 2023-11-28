'use strict';


const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


const toggleButton = document.querySelector('.toggle--btn i');
const mobileNavbar = document.querySelector('.mobile--navbar');
const navLinks = document.querySelectorAll("[data-nav-link]");

// Defining a function

function toggleNav() {
    toggleButton.classList.toggle("bx-menu");
    toggleButton.classList.toggle("bx-x");
    mobileNavbar.classList.toggle("navbar--active");
}

const linkClicked = function () {
    mobileNavbar.classList.remove("navbar--active");
    toggleButton.classList.toggle("bx-menu");
    toggleButton.classList.toggle("bx-x");
}

// Calling the function after click event occurs

toggleButton.addEventListener('click', function() {
    toggleNav();
});

addEventOnElem(navLinks, 'click', linkClicked);


var i = 0;
var images = [];
var slideTime = 2000; // 2 seconds
const slider = document.querySelector(".hero--slider");

images[0] = 'https://images.unsplash.com/photo-1608265035345-2c692e691b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80';
images[1] = 'https://punjabtourism.punjab.gov.in/museums/virasat-e-khalsa/virasat-e-khalsa-3.jpg';
images[2] = 'https://punjabtourism.punjab.gov.in/museums/jung-e-azadi/jung-e-azadi-6.jpg';
images[3] = 'https://punjabtourism.punjab.gov.in/museums/gobindgarh-fort/gobindgarh-fort-3.jpg';
images[4] = 'https://punjabtourism.punjab.gov.in/museums/pushpa-gujral-science-city-kapurthala/pushpa-gujral-science-city-kapurthala-1.jpg';
images[4] = 'https://punjabtourism.punjab.gov.in/destination/destibnation-rupnagar-4.jpg';

function changePicture() {
    slider.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
