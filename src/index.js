import "./css/style.css";
import json from "./json/room.json";
import scrolIntowiewElem from "./js/scrolintowiewelem";

import closeModal from "./js/closemodal";

import chooseSliderClick from "./js/choosesliderclick";
import validEndClose from "./js/validendclose";

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

let chooseBlock = document.querySelector(".choose__block__container");

let modalWindow = document.querySelector(".modal__window");

let headerBoocking = document.querySelector("#button-header");
let mainBoocking = document.querySelector("#main-block-button");
let mainBlockBoocking = document.querySelector("#block_main__button");
let rentNow = document.querySelector("#rentout__block_button");
scrolIntowiewElem(headerBoocking, chooseBlock);
scrolIntowiewElem(mainBoocking, chooseBlock);
scrolIntowiewElem(mainBlockBoocking, chooseBlock);
scrolIntowiewElem(rentNow, chooseBlock);

//Инициализация элементов модального окна
let inputGetDate = document.querySelector(".date__box_input");
let imageModalWindow = document.querySelector(".modal__window_image");
let textModalWindow = document.querySelector(".booking__room_description");
let headerModalWindow = document.querySelector(".card__data_header");
let roomStarModalWindow = document.querySelector(".card__data_star");
let roomBallModalWindow = document.querySelector(".card__data_ball");

chooseBlock.addEventListener("click", (e) => {
  let name = e.path[0].name;
  let roomData = json.find((el) => el.room === name);

  if (e.path[0].className === "room__card_button") {
    modalWindow.style.display = "block";

    imageModalWindow.style = ` background: url(${roomData.url}) no-repeat right center;`;
    textModalWindow.innerHTML = roomData.text;
    headerModalWindow.innerHTML = e.path[1].children[0].innerHTML;
    roomStarModalWindow.innerHTML = e.path[1].children[1].children[0].innerHTML;
    roomBallModalWindow.innerHTML = e.path[1].children[1].children[1].innerHTML;

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
//Закрываем модальное окно по щелчку вне окна
document.addEventListener("click", closeModal(modalWindow, chooseBlock));

// Проверка инпутов в модальном окне
let putButtonModalWindow = document.querySelector("#modal-button");
putButtonModalWindow.addEventListener("click", (e) => {
  validEndClose(modalWindow, chooseBlock);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
    chooseBlock.scrollIntoView();
  } else if (e.key === "Tab") {
    inputGetDate.focus();
  } else if (e.key === "Enter") {
    validEndClose(modalWindow, chooseBlock);
  }
});
