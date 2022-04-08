export default function scrolIntowiewElem(elemFrom, elemInto) {
  elemFrom.addEventListener("click", (e) => {
    elemInto.scrollIntoView();
  });
}
