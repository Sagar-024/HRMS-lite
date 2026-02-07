/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Refined Premium Palette - More Sophisticated
        brand: {
          DEFAULT: "#4A90E2",
          50: "#EBF5FF",
          100: "#D6EAFF",
          200: "#ADDAFF",
          300: "#85C5FF",
          400: "#5CAFFF",
          500: "#4A90E2",
          600: "#2E75C7",
          700: "#1D5BA3",
          800: "#124480",
          900: "#0A2E5C",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          50: "#FFF1F1",
          100: "#FFE0E0",
          200: "#FFC7C7",
          300: "#FFA3A3",
          400: "#FF8080",
          500: "#FF6B6B",
          600: "#F04444",
          700: "#D42929",
          800: "#B01A1A",
          900: "#8C1010",
        },
        violet: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        success: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          500: "#10B981",
          600: "#059669",
        },
        warning: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          500: "#F59E0B",
        },
        danger: {
          DEFAULT: "#EF4444",
          50: "#FEF2F2",
          500: "#EF4444",
          600: "#DC2626",
        },

        // Sophisticated Backgrounds
        background: "#FAFBFC", // Softer, warmer white
        surface: "#FFFFFF",

        // Rich Text Colors
        ink: {
          DEFAULT: "#1A202C", // Richer black
          light: "#4A5568",
          lighter: "#718096",
          pale: "#A0AEC0",
        },

        // Warm Neutrals (not just grey)
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
      },
      fontFamily: {
        // Distinctive Typography - Per Frontend Design Skill
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        display: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
      },
      boxShadow: {
        // More Natural, Sophisticated Shadows
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        xl: "0.875rem", // 14px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(217, 100%, 70%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(272, 83%, 75%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.2) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
