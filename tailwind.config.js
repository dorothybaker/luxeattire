/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#008080",
      },
      backgroundColor: {
        primary: "#008080",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
