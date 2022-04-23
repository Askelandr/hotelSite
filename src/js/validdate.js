import getDate from "./getdate";

/**
 * Функция проверки полей ввода дат
 * @param {Element} elemdate инпут ввода даты
 * @param {Element} elemerror элемент ошибки
 * @returns
 */
export default function validDate(elemdate, elemerror) {
  if (new Date(elemdate.value) - new Date(getDate()) < 0) {
    elemerror.innerHTML = "Incorrect date";
    elemerror.style.color = "#d02502";
  } else {
    if (elemdate.id === "arrival-input") {
      elemerror.innerHTML = "Arrival date";
    } else {
      elemerror.innerHTML = "Departure date";
    }

    elemerror.style.color = "#5c5c5c";
    return true;
  }
}
