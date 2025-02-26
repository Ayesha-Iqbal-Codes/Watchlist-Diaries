/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add support for React components
    "./public/index.html",         // Add the public folder for HTML content
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#000000",  // Custom color for your black theme
        customGray: "#1a1a1a",   // A darker gray for background or text
      },
      spacing: {
        'carousel-gap': '2rem',  // Custom spacing for carousel items
      },
    },
  },
  plugins: [],
};
