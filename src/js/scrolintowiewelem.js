/**
 * Функция перехода от одного элемента к другому
 * @param {element} elemFrom Начальный элемент
 * @param {element} elemInto Конечный элемент
 */
export default function scrolIntowiewElem(elemFrom, elemInto) {
  elemFrom.addEventListener("click", (e) => {
    elemInto.scrollIntoView();
  });
}
