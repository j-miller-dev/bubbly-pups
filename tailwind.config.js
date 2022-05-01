module.exports = {
  content: ["./index.html", "./home.html", "./*.{html,js}"],
  theme: {
    extend: {
      'body': "#ebb9d7",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  fontFamily: {
    baloo: ["Baloo Bhai", "sans-serif"],
  },
};
