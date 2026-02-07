/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Premium Polish" Palette
        brand: {
          DEFAULT: "#4A90E2", // Primary Blue
          50: "#EEF6FF",
          100: "#D6E9FF",
          600: "#2563EB", // Darker for hover
        },
        coral: {
          DEFAULT: "#FF6B6B", // Action/CTA
          hover: "#FF5252",
        },
        success: "#2ECC71",
        warning: "#F1C40F",
        danger: "#E74C3C",

        // Backgrounds
        background: "#F4F7FE", // Light blue-grey for depth
        surface: "#FFFFFF", // White for cards

        // Text
        ink: {
          DEFAULT: "#2D3748", // Dark Grey for primary text
          light: "#718096", // Muted for secondary
          lighter: "#A0AEC0", // Tertiary
        },

        stone: {
          // Keeping stone for compatibility/neutrals
          50: "#FAF9F6",
          100: "#F5F2F0",
          200: "#E6E2DE",
          300: "#D1CCC7",
          500: "#8C8580",
          800: "#44403C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Reverting to clean Sans for UI
        serif: ["Playfair Display", "Georgia", "serif"], // Keep for specific headers if needed
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)",
        card: "0 4px 12px rgba(0,0,0,0.05)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
