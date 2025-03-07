# Tarea 6 - Comunicación Asíncrona

> Alonso Hernández Robles 2º DAW AULA

---

## 1. Instalaciones

En primer lugar, como siempre, inicializamos un nuevo proyecto de *Node.js* con:

```bash
npm init -y
```

Después, vamos a instalar *Tailwind CSS* y las dependencias necesarias para usar *PostCSS*:

```bash
npm install -D tailwindcss@3.3.3 postcss autoprefixer
```

Ahora vamos a crear los archivos de configuración que usará *Tailwind* (`tailwind.config.js`):

```bash
npx tailwindcss init
```

También vamos a crear el archivo `postcss.config.js` con el siguiente contenido

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Después, en `tailwind.config.js`, vamos a modificar su contenido tal que así:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",         // ✅ Detecta clases en todos los HTML
      "./src/**/*.html",  // ✅ Si los HTML están dentro de 'src'
      "./src/**/*.js"     // ✅ Si tienes scripts que generan clases dinámicamente
    ],
    theme: {
      extend: {},
    },
    plugins: [],
};
```

Creamos la estructura de directorios y archivos necesaria (haciendo énfasis en `src/`):

- node_modules/
- src/
  - css/
    - styles.css
  - js/
    - script.js
    - jquery.js
  - index.html
  - jquery.html
- package-lock.json
- package.json
- postcss.config.js
- README.md
- tailwind.config.js

Dentro de `src/styles.css`, vamos a importar *Tailwind CSS*:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Agrego el siguiente script en `package.json`:

```json
"build": "tailwindcss -i ./src/css/style.css -o ./src/css/output.css --minify"
```

y lo ejecuto con:

```bash
npm run build
```

## 2. Desarrollo

Importo el archivo `output.css` en los archivos `index.html` y `jquery.html`:

```html
<link rel="stylesheet" href="css/output.css">
```

Uso una librería externa de *Tailwind CSS* llamada *Flowbite* para mostrar dos componentes en un icono de perfil que se encuentra en los headers. Para ello, añado el siguiente script en `index.html` y `jquery.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/flowbite@1.5.1/dist/flowbite.min.js"></script>
```

En cada página, añado en el encabezado el título de la página, un logo y un botón para ir a la otra página, ya sea `index.html` o `jquery.html`.

En el cuerpo de la página, muestro las tarjetas de 3 en 3 extraídas remotamente de dos APIs, una de textos en latín y otra de imágenes. Además, estas tarjetas tienen un efecto con el ratón cuando pasa por encima.

Por último, en el pie de página, muestro tres enlaces genéricos, **Política de Privacidad**, **Condiciones de Uso** y **Sobre Nosotros**.