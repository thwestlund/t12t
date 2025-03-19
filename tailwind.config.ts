/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066cc",
          hover: "#0055aa",
          light: "#e6f0ff",
          dark: "#004c99",
        },
        secondary: {
          DEFAULT: "#333333",
          light: "#4d4d4d",
          dark: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#4CAF50",
          hover: "#3e8e41",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Lexend", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
