export default function chooseSliderClick(buttons, elems, id) {
  document.addEventListener("click", (e) => {
    let i = id.slice(-1);
    if (e.path[0].id === id) {
      for (let item of buttons) {
        item.style.color = "rgb(150, 150, 150)";
      }
      buttons[i - 1].style.color = "black";

      for (let item of elems) {
        item.style.display = "none";
      }
      elems[i - 1].style.display = "";
    }

    return;
  });
}
