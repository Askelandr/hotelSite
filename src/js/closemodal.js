/**
 * Функция закрытия модального окна по клику вне самого окна
 * @param {element} elem внешний элемент модального окна
 * @param {element} focus элемент на который переводится фокус после закрытия окна
 */
export default function closeModal(elem, focus) {
  document.addEventListener("click", (e) => {
    if (e.target === elem) {
      elem.style.display = "none";
      document.body.style.overflow = "";
      focus.scrollIntoView();
    }
  });
}
