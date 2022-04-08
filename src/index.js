import "./css/style.css";
import scrolIntowiewElem from "./js/scrolintowiewelem";

import chooseSliderClick from "./js/choosesliderclick";
// Слайдер бронирования
let chooseButton = document.querySelectorAll(".choose__button");

let chooseSlide = [];
chooseSlide[0] = document.querySelector("#choose-slide1");
chooseSlide[1] = document.querySelector("#choose-slide2");
chooseSlide[2] = document.querySelector("#choose-slide3");

chooseSliderClick(chooseButton, chooseSlide, "choose-button1");
chooseSliderClick(chooseButton, chooseSlide, "choose-button2");
chooseSliderClick(chooseButton, chooseSlide, "choose-button3");

// Бронирование
let boockingButton = document.getElementsByClassName("room__card_button");
console.log(boockingButton[1]);
let chooseBlock = document.querySelector(".choose__block__container");
console.log(chooseBlock);
let modalWindow = document.querySelector(".modal__window");

let headerBoocking = document.querySelector("#button-header");
let mainBoocking = document.querySelector("#main-block-button");
let mainBlockBoocking = document.querySelector("#block_main__button");
let rentNow = document.querySelector("#rentout__block_button");
scrolIntowiewElem(headerBoocking, chooseBlock);
scrolIntowiewElem(mainBoocking, chooseBlock);
scrolIntowiewElem(mainBlockBoocking, chooseBlock);
scrolIntowiewElem(rentNow, chooseBlock);

chooseBlock.addEventListener("click", (e) => {
  console.log(e.path[0].className);
  console.log(modalWindow.style);
  if (e.path[0].className === "room__card_button") {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    modalWindow.scrollIntoView();
  }
  let closeModal = document.querySelector("#modal-button-close");
  closeModal.addEventListener("click", (e) => {
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
    chooseBlock.scrollIntoView();
  });
});
