/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],

  theme: {
    extend: {

      colors: {

        primary: "#2463eb",
        primaryLight: "#4f7df3",
        primaryDark: "#1d4ed8",

        backgroundLight: "#f6f6f8",
        backgroundDark: "#111621",

        textPrimary: "#0f172a",
        textSecondary: "#64748b",

        borderLight: "#e5e7eb",

      },

      fontFamily: {
        display: ["Inter", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
        card: "0 20px 50px rgba(0,0,0,0.08)",
        glow: "0 0 40px rgba(36,99,235,0.35)",
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(135deg, #2463eb 0%, #4f7df3 50%, #7aa2ff 100%)",
      },

    },
  },

  plugins: [],
};