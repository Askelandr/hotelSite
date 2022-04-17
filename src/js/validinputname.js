/**
 * Функция валидации инпута
 * @param {string} selectorInput
 * @param {string} selectorError
 */
export default function validInputName(selectorInput, selectorError) {
  let name;
  let inputGetName = document.querySelector(selectorInput);
  let errorNameInput = document.querySelector(selectorError);

  let myName = inputGetName.value;
  errorNameInput.style.opacity = 0;
  if (myName === "") {
    errorNameInput.style.opacity = 0;
    errorNameInput.innerHTML = "Поле должно быть заполнено";
    errorNameInput.style.opacity = 1;
    return;
  } else {
    name = inputGetName.value;

    errorNameInput.style.opacity = 0;
    return true;
    // inputGetName.value = "";
  }
}
