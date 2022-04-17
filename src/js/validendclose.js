import validInputEmail from "./validinputemail";
import validInputName from "./validinputname";
export default function validEndClose(elem, focus) {
  validInputName("#modal-first-name", "#modal-firstname-error");
  validInputEmail("#modal-email", "#modal-error-email");
  validInputName("#modal-last-name", "#modal-lastname-error");
  if (validInputName("#modal-first-name", "#modal-firstname-error")) {
    if (validInputEmail("#modal-email", "#modal-error-email")) {
      if (validInputName("#modal-last-name", "#modal-lastname-error")) {
        elem.style.display = "none";
        document.body.style.overflow = "";
        focus.scrollIntoView();
      }
    }
  }
}
