/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-bs": "684px",
      },
      keyframes: {
        slide: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: "initial", transform: "initial" },
        },
      },
      animation: {
        "slide-left": "slide 0.3s forwards",
      },
    },
  },
  plugins: [],
};
