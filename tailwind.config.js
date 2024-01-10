/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
      backgroundImage: {
        blueyellow: "url(/public/pawel-czerwinski-g2Zf3hJyYAc-unsplash.jpg)",
        bluepink: "url(/public/pawel-czerwinski-I5A7oW933yE-unsplash.jpg)",
        blueorange: "url(/public/pawel-czerwinski-Nmeu6odqoNM-unsplash.jpg)",
        blue: "url(/public/pawel-czerwinski-oykbZuvajO0-unsplash.jpg)",
        firered: "url(/public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg)",
      },
    },
  },
  plugins: [],
};
