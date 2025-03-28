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

// Selectores para los botones del header
const locationButton = openModal.querySelector("div:first-child p");
const guestsButton = openModal.querySelector("div:nth-child(2) p");

// Eventos Menú Ubicación
const inputLocation = document.querySelector("#input-location");
const ulLocation = document.querySelector("#ul-location");

// Eventos Modal
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

// Cerrar modal al hacer click fuera de él
document.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && !openModal.contains(event.target)) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});

// Manejo del input de ubicación
inputLocation.addEventListener("click", (e) => {
    e.stopPropagation();
    ulLocation.classList.toggle("hidden");
});

ulLocation.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        inputLocation.value = e.target.textContent;
        locationButton.textContent = e.target.textContent.split(",")[0]; 
        ulLocation.classList.add("hidden");
    }
});

// Cerrar dropdown de ubicación al hacer click fuera
document.addEventListener("click", (e) => {
    if (!inputLocation.contains(e.target) && !ulLocation.contains(e.target)) {
        ulLocation.classList.add("hidden");
    }
});

// Eventos Contadores Huéspedes
const inputGuests = document.querySelector("#input-guests");
const guestsSelector = document.querySelector("#guests-selector");
const displayAdults = document.querySelector("#display-adults");
const displayChildren = document.querySelector("#display-children");

inputGuests.addEventListener("click", (e) => {
    e.stopPropagation();
    guestsSelector.classList.toggle("hidden");
});

// Manejo de botones de adultos
document.querySelectorAll("#buttons-guests button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        adults = Math.max(0, adults + (e.target.value === "+" ? 1 : -1));
        displayAdults.textContent = adults;
        updateTotalGuests();
    });
});

// Manejo de botones de niños
document.querySelectorAll("#buttons-guests-children button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        children = Math.max(0, children + (e.target.value === "+" ? 1 : -1));
        displayChildren.textContent = children;
        updateTotalGuests();
    });
});

// Cerrar selector de huéspedes al hacer click fuera
document.addEventListener("click", (e) => {
    if (!inputGuests.contains(e.target) && !guestsSelector.contains(e.target)) {
        guestsSelector.classList.add("hidden");
    }
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
    guestsButton.textContent = total > 0 ? `${total} guests` : "Add guests";
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
