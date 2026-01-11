/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-strong": "rgb(var(--color-accent-strong) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        wash: "rgb(var(--color-wash) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgb(var(--shadow-color) / 0.12)",
        card: "0 10px 24px rgb(var(--shadow-color) / 0.12)"
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)"
      },
      spacing: {
        section: "var(--space-section)",
        stack: "var(--space-stack)"
      }
    }
  }
};
