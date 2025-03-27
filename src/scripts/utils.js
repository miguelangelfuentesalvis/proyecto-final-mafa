/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function loadStays(array, elementHTML) {
    elementHTML.innerHTML = "";
    array.forEach(function (item) {
        const templete = filterStaysByCity(item.photo, item.title, item.rating, item.type, item.beds);
        elementHTML.innerHTML += templete;
    });
   
}

export function filterStaysByCity(
    photo,
    title,
    rating,
    type,
    beds
  ) 
{
  const templete = `
     <li class="flex flex-col rounded-lg">
                <figure class="w-full h-60">
                    <img src="${photo}"
                        alt="Imagen de habitación" class="w-full h-full bject-cover rounded-4xl">
                </figure>
                <div class="flex justify-between items-center w-full text-gray-400 p-2">
                    <div>
                        <p>
                            <span id="superhost"
                                class="border border-gray-950 rounded-2xl px-2.5 py-2 text-sm font-bold text-gray-700">SUPERHOST</span>
                            <span id="type">${type}.</span>
                            <span id="beds">${beds} beds</span>
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center text-center gap-1.5">
                        <span><svg class="size-5 text-[#eb5757]">
                                <use xlink:href="./src/images/icons/star.svg#star"></use>
                            </svg></span>
                        <span id="rating">${rating}</span>
                    </div>
                </div>
                <h2 id="title" class="font-bold text-gray-700 p-2">${title}</h2>
            </li>
    `;
  return templete;
}
