# ¡Bienvenidos al proyecto! 🎉

Este repositorio es una plantilla diseñada para ayudarte a comenzar rápidamente. Sigue estos pasos para configurar tu entorno y empezar a trabajar:

## 1. Usa esta plantilla
Haz clic en el botón **"Use this template"** en la parte superior derecha de este repositorio para crear un nuevo proyecto basado en esta plantilla. 📂

## 2. Instala las dependencias
Después de clonar tu nuevo repositorio, abre la terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```
Esto instalará todo lo necesario para que el proyecto funcione. ✅

## 3. Compila los estilos de Tailwind CSS ✂️
Para que los estilos de Tailwind funcionen mientras trabajas, ejecuta:
```bash
npm run tw
```
Este comando se encargará de compilar los estilos cada vez que uses clases de Tailwind en tu HTML. 🎨

## 4. Archivos importantes 📂
- **`src/scripts/stays.js`**: Aquí encontrarás la data que necesitarás usar durante el proyecto. ¡Es tu fuente de información principal! 📊
- **`src/scripts/main.js`**: Este es el archivo donde escribirás el código principal de tu aplicación. Todo lo que construyas comenzará aquí. 🛠️
- **`src/scripts/utils.js`**: Este archivo contiene funciones auxiliares que pueden ser reutilizadas en diferentes partes de tu proyecto. Es un buen lugar para almacenar lógica común, como validaciones, formateos o cálculos. 🔧
- **`src/images/design`**: En esta carpeta encontrarás capturas que muestran cómo debería lucir el resultado esperado. Esto te servirá como referencia visual. 🖼️
- **`index.html`**: Este es el archivo donde desarrollarás el diseño de tu proyecto. Aquí se integrarán los estilos y el código para dar vida a tu aplicación. 🖋️

```plaintext
📂 ├── src/
    📜 ├── scripts/
         📄 ├── stays.js
         📄 └── main.js
    🖼️ ├── images/
         🖼️ └── design/
📄 ├── index.html
📦 ├── package.json
📖 └── README.md
🚫 └── .gitignore
```

## 5. ¡Manos a la obra! 🚀
Ya tienes todo listo para empezar. Explora los archivos, experimenta con el código y diviértete aprendiendo. 🎉

Si tienes dudas, no dudes en preguntar. ¡Éxito en tu proyecto! 💪




## Mejoras en la Interacción del Modal

1. Persistencia de Valores Seleccionados

Cambios implementados:

Al seleccionar una ubicación en el dropdown:

ulLocation.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        inputLocation.value = e.target.textContent;
        locationButton.textContent = e.target.textContent.split(",")[0];
        ulLocation.classList.add("hidden");
    }
});

Al modificar el número de huéspedes:

function updateTotalGuests() {
    const total = adults + children;
    inputGuests.value = total || "0";
    guestsButton.textContent = total > 0 ? `${total} guests` : "Add guests";
}

2. Mejoras en la Experiencia de Usuario

Comportamiento actualizado:

Los valores seleccionados ahora se reflejan en los botones del header principal
El texto de los botones cambia dinámicamente:
Para ubicación: Muestra la ciudad seleccionada (ej. "Helsinki")
Para huéspedes: Muestra el total (ej. "2 guests") o "Add guests" si no hay selección

##  Justificación de los Cambios

Estas mejoras fueron implementadas para:
Proporcionar retroalimentación visual inmediata al usuario
Mantener consistencia entre los valores seleccionados en el modal y lo que muestra el header
Mejorar la accesibilidad y usabilidad del componente
Seguir las mejores prácticas modernas de JavaScript usando querySelector

Impacto en la Interfaz

Antes:
Los botones del header siempre mostraban "Add location" y "Add guests"
No había indicación visual de lo seleccionado al cerrar el modal

Ahora:
Los botones del header reflejan las selecciones actuales
Los usuarios pueden ver sus selecciones sin necesidad de reabrir el modal
Estos cambios mejoran significativamente la experiencia del usuario al hacer más intuitivo el proceso de búsqueda.