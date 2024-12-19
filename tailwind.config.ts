import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0F0F0F",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FF5733",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "shadow-pulse": "shadow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-shadow": "float-shadow 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "shadow-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 15px rgba(255, 87, 51, 0.2)",
          },
          "50%": {
            "box-shadow": "0 0 30px rgba(255, 87, 51, 0.4)",
          },
        },
        "float-shadow": {
          "0%, 100%": {
            transform: "translateY(0)",
            "box-shadow": "0 10px 30px rgba(255, 87, 51, 0.2)",
          },
          "50%": {
            transform: "translateY(-10px)",
            "box-shadow": "0 20px 40px rgba(255, 87, 51, 0.3)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;