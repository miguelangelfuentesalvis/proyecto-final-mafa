/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
import { stays } from "./stays.js";
import { loadStays } from "./utils.js";

const filterStays = document.querySelector("#filters-stays");

loadStays(stays, filterStays);








/* Cerrar y Abrir Modal */

 const openModal = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const cerraModal = document.querySelector("#cerra-modal")

function toggle() {
    modal.classList.toggle("hidden");
}

openModal.addEventListener(`click`, toggle)

modal.addEventListener(`click`, (e) => {
    if (e.target === cerraModal) {
        toggle();
    }
})  

/* Botones de Busqueda */

const inputGuests = document.querySelector("#input-guests");
const buttonsGuests = document.querySelector("#buttons-guests");
const displayAdults = document.querySelector("#display-adults");
const buttonsGuestsChildren = document.querySelector("#buttons-guests-children");
const displayChildren = document.querySelector("#display-children");

const inputLocation = document.querySelector("#input-location");
const ulLocation = document.querySelector("#ul-location");

inputLocation.addEventListener(`click`, () => {
  ulLocation.classList.toggle(`hidden`);
});

inputGuests.addEventListener(`click`, () => {
  buttonsGuests.classList.toggle(`hidden`);
  buttonsGuestsChildren.classList.toggle(`hidden`);
});

/* Boton de Location */

ulLocation.addEventListener(`click`, (e) => {
  const { target } = e;
  const { tagName } = target;
  if (tagName === "LI") {
    inputLocation.value = target.textContent;
    ulLocation.classList.toggle(`hidden`);
  }
});

/* Botones de Adults y Children */

buttonsGuests.addEventListener(`click`, (e) => {
  const { target } = e;
  const { tagName } = target;
  const currentdisplyAdults = parseInt(displayAdults.textContent);
  const currentInputGuests = parseInt(inputGuests.value);
  if (tagName === "BUTTON") {
    if (target.value === "-") {
      displayAdults.textContent = currentdisplyAdults - 1;
      inputGuests.value = currentInputGuests - 1;
    } else if (target.value === "+") {
      displayAdults.textContent = currentdisplyAdults + 1;
      inputGuests.value = currentInputGuests + 1;
    }
  }
});
buttonsGuestsChildren.addEventListener(`click`, (e) => {
  const { target } = e;
  const { tagName } = target;
  const currentdisplyAdults = parseInt(displayChildren.textContent);
  const currentInputGuests = parseInt(inputGuests.value);
  if (tagName === "BUTTON") {
    if (target.value === "-") {
      displayChildren.textContent = currentdisplyAdults - 1;
      inputGuests.value = currentInputGuests - 1;
    } else if (target.value === "+") {
      displayChildren.textContent = currentdisplyAdults + 1;
      inputGuests.value = currentInputGuests + 1;
    }
  }
});

