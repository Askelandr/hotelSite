import validInputEmail from "./validinputemail";
import validInputName from "./validinputname";
import validDate from "./validdate";
import getDate from "./getdate";
/**
 * Функция закрытия модального окна после проверки всех полей ввода
 * @param {Element} elem элемент модального окна
 * @param {Element} focus элемент на который переводится фокус после закрытия окна
 */
export default function validAndClose(elem, focus) {
  let firstName = document.querySelector("#modal-first-name");
  let lastName = document.querySelector("#modal-last-name");
  let email = document.querySelector("#modal-email");
  let bookingRoom = document.querySelector(".card__data_header");
  let arrivalDate = document.querySelector("#arrival-input");

  let arrivalDateError = document.querySelector("#arrival-date");
  let departureDate = document.querySelector("#departure-input");
  let departureDateError = document.querySelector("#departure-date");
  let person = {};
  person.booking = {};
  validInputName("#modal-first-name", "#modal-firstname-error");
  validInputEmail("#modal-email", "#modal-error-email");
  validInputName("#modal-last-name", "#modal-lastname-error");
  validDate(arrivalDate, arrivalDateError);
  validDate(departureDate, departureDateError);
  if (new Date(departureDate.value) - new Date(arrivalDate.value) < 0) {
    departureDateError.innerHTML = "Incorrect date";
    departureDateError.style.color = "#d02502";
    return;
  }

  if (validInputName("#modal-first-name", "#modal-firstname-error")) {
    if (validInputEmail("#modal-email", "#modal-error-email")) {
      if (validInputName("#modal-last-name", "#modal-lastname-error")) {
        if (validDate(arrivalDate, arrivalDateError)) {
          if (validDate(departureDate, departureDateError)) {
            person.roomBooking = bookingRoom.innerHTML;
            person.firstName = firstName.value;
            person.lastName = lastName.value;
            person.email = email.value;
            person.booking.arrival = arrivalDate.value;
            person.booking.departure = departureDate.value;
            console.log(person);
            elem.style.display = "none";
            document.body.style.overflow = "";
            focus.scrollIntoView();
          }
        }
      }
    }
  }
}
