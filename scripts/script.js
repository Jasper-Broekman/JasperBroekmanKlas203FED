// JavaScript Document
console.log("hi");

const nietzichtbaar = document.getElementById("niet-zichtbaar");
const header = document.querySelector("header");
const hamburger = document.querySelector("#hamburger-icon");
const kruisje = document.querySelector("#sluiten");

// MENU OPENEN via hamburger
hamburger.addEventListener('click', function () {
    nietzichtbaar.style.display = "flex";
    header.classList.add("hide-header");
});

// MENU SLUITEN via kruisje
kruisje.addEventListener('click', function () {
    nietzichtbaar.style.display = "none";
    header.classList.remove("hide-header");
});
