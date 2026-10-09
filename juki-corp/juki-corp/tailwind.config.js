/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      colors: { ink: "#0a0a12", panel: "#12121d", line: "#23233a", brand: { DEFAULT: "#6d5efc", soft: "#a79bff", blue: "#3b82ff" } },
      boxShadow: { soft: "0 10px 40px -12px rgba(109,94,252,0.25)" },
    },
  },
  plugins: [],
};
