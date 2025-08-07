import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                'bg-tertiary': 'var(--bg-tertiary)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-tertiary': 'var(--text-tertiary)',
                'border-primary': 'var(--border-primary)',
                'border-secondary': 'var(--border-secondary)',
                'accent-primary': 'var(--accent-primary)',
                'accent-hover': 'var(--accent-hover)',
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            fontSize: {
                'xs': 'var(--text-xs)',
                'sm': 'var(--text-sm)',
                'base': 'var(--text-base)',
                'lg': 'var(--text-lg)',
                'xl': 'var(--text-xl)',
                '2xl': 'var(--text-2xl)',
                '3xl': 'var(--text-3xl)',
                '4xl': 'var(--text-4xl)',
                '5xl': 'var(--text-5xl)',
                '6xl': 'var(--text-6xl)',
                '7xl': 'var(--text-7xl)',
                '8xl': 'var(--text-8xl)',
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
                fadeUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
