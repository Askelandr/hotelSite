export default function closeModal(elem, focus) {
  document.addEventListener("click", (e) => {
    if (e.target === elem) {
      elem.style.display = "none";
      document.body.style.overflow = "";
      focus.scrollIntoView();
    }
  });
}
