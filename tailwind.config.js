/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1220",
          light: "#1f2937",
          royal: "#111827"
        },
        accent: {
          gold: "#fbbf24",
          redhot: "#f97316"
        }
      }
    }
  },
  plugins: []
};
