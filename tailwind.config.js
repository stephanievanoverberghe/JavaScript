/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{html, js, jsx}",
    "./*.{html, js, jsx}"
  ],
  theme: {
    // A l'extérieur, ça remplace les fonctionnalités se trouvant dans le thème tailwind
    extend: {
      // A l'intérieur, ça ajoute des fonctionnalités au thème tailwind sans rien écraser
    },
  },
  plugins: [],
}

