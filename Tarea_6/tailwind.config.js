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
  