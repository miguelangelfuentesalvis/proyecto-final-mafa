/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function loadStays(array, elementHTML, counterElement) {
    if (!elementHTML) return;
    
    elementHTML.innerHTML = array.map(item => `
        <li class="flex flex-col rounded-lg">
            <figure class="w-full h-60">
                <img src="${item.photo}" alt="${item.title}" class="w-full h-full object-cover rounded-4xl">
            </figure>
            <div class="flex justify-between items-center w-full text-gray-400 p-2">
                <div>
                    <p>
                        ${item.superHost ? 
                            '<span class="border border-gray-950 rounded-2xl px-2.5 py-2 text-sm font-bold text-gray-700">SUPERHOST</span>' 
                            : ''}
                        <span>${item.type}${item.beds ? ` · ${item.beds} beds` : ''}</span>
                    </p>
                </div>
                <div class="flex items-center gap-1.5">
                    <svg class="size-5 text-[#eb5757]">
                        <use xlink:href="./src/images/icons/star.svg#star"></use>
                    </svg>
                    <span>${item.rating}</span>
                </div>
            </div>
            <h2 class="font-bold text-gray-700 p-2">${item.title}</h2>
        </li>
    `).join('');

    if (counterElement) {
        counterElement.textContent = array.length >= 12 ? "12+" : array.length;
    }
}
