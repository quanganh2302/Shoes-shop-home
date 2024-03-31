import type { Config } from "tailwindcss";

const config = {
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
      padding: {
        DEFAULT: '.5rem',
        sm: '2rem',
      },
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        borderLine: "hsl(var(--border-line))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        bgInput: "hsl(var(--background-input))",
        fgInput: "hsl(var(--muted-foreground))",
        gray: "hsl(var(--gray))",
        white: "hsl(var(--white))",
        gradientBg: "var(--gradient-background)",
        gradient1: "var(--gradient1)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          primary200: "hsl(var(--primary200))",
          primary50: "hsl(var(--primary50))",

        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient1': "url('/img/hero-pattern.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        futuraNormal: ["Futura-Book"],
        futuraMedium: ["Futura-Medium"],
        futuraHeavy: ["Futura-Bold"],
      },
      boxShadow: {
        cardShadow: "0px 4px 7px 0px rgba(149, 157, 165, 0.20)",
        buttonShadow: "0px 20px 80px -10px #40306E",
        navMobileCenter: "0 2px 8px rgba(0,0,0,.1)",
        navMobile: "0 2px 8px rgba(0,0,0,.2)",
      },
      screens: {
        "2xl": "1600px",
        "3xl": "1800px",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
