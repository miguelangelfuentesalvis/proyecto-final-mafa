/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
import { stays } from "./stays.js";
import { loadStays } from "./utils.js";

// Variables globales
let adults = 0;
let children = 0;

// Selectores
const openModal = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#cerra-modal");
const searchBtn = document.querySelector("#search-btn");
const staysList = document.querySelector("#filters-stays");
const staysCounter = document.querySelector("#stays-counter span");

// Eventos Menú Ubicación
const inputLocation = document.querySelector("#input-location");
const ulLocation = document.querySelector("#ul-location");



// Eventos Modal
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

// cerrar modal al hacer click fuera de el.
document.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && !openModal.contains(event.target)) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});

inputLocation.addEventListener("click", (e) => {
    e.stopPropagation();
    ulLocation.classList.toggle("hidden");
});

ulLocation.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        inputLocation.value = e.target.textContent;
        ulLocation.classList.add("hidden");
    }
});

// Eventos Contadores Huéspedes
const inputGuests = document.querySelector("#input-guests");
const buttonsGuests = document.querySelector("#buttons-guests");
const buttonsGuestsChildren = document.querySelector("#buttons-guests-children");
const displayAdults = document.querySelector("#display-adults");
const displayChildren = document.querySelector("#display-children");

inputGuests.addEventListener("click", () => {
    document.querySelector("#guests-selector").classList.toggle("hidden");
});

document.querySelectorAll("#buttons-guests button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        adults = Math.max(0, adults + (e.target.value === "+" ? 1 : -1));
        displayAdults.textContent = adults;
        updateTotalGuests();
    });
});

document.querySelectorAll("#buttons-guests-children button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        children = Math.max(0, children + (e.target.value === "+" ? 1 : -1));
        displayChildren.textContent = children;
        updateTotalGuests();
    });
});

// Evento Búsqueda
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filterStays();
    toggleModal();
});

// Funciones
function toggleModal() {
    modal.classList.toggle("hidden");
    document.body.style.overflow = modal.classList.contains("hidden") ? "auto" : "hidden";
}

function updateTotalGuests() {
    const total = adults + children;
    inputGuests.value = total || "0";
}

function filterStays() {
    const location = inputLocation.value.split(",")[0].trim().toLowerCase();
    const guests = parseInt(inputGuests.value) || 0;
    
    const filtered = stays.filter(stay => {
        const locationMatch = !location || stay.city.toLowerCase().includes(location);
        const guestsMatch = guests === 0 || stay.maxGuests >= guests;
        return locationMatch && guestsMatch;
    });
    
    loadStays(filtered, staysList, staysCounter);
}

// Inicialización
loadStays(stays, staysList, staysCounter);
