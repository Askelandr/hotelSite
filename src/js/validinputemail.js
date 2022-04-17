/**
 * Функция валидации инпута
 * @param {string} selectorInput
 * @param {string} selectorError
 */
export default function validInputEmail(selectorInput, selectorError) {
  let email;
  let inputGetEmail = document.querySelector(selectorInput);
  let errorEmailInput = document.querySelector(selectorError);

  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myMail = inputGetEmail.value;

  let valid = re.test(myMail);

  if (myMail === "") {
    errorEmailInput.innerHTML = "Поле должно быть заполнено";
    errorEmailInput.style.opacity = 1;
    return;
  } else if (!valid) {
    errorEmailInput.style.opacity = 0;
    errorEmailInput.innerHTML = "Введен некорректный email";
    errorEmailInput.style.opacity = 1;
    return;
  } else {
    email = inputGetEmail.value;

    errorEmailInput.style.opacity = 0;
    return true;
    // inputGetEmail.value = "";
  }
}
