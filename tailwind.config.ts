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
                border: "hsl(var(--border))",
                "border-subtle": "var(--border-subtle)",
                "border-medium": "var(--border-medium)",
                "border-strong": "var(--border-strong)",
                "border-accent": "var(--border-accent)",
                "border-accent-strong": "var(--border-accent-strong)",
                "border-warm": "var(--border-warm)",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: {
                    DEFAULT: "hsl(var(--background))",
                    purple: "hsl(var(--background-purple))",
                    secondary: "hsl(var(--background-secondary))",
                },
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    glow: "hsl(var(--primary-glow))",
                },
                "secondary-glow": "hsl(var(--secondary-glow))",
                "accent-purple": "hsl(var(--accent-purple))",
                "accent-amber": "hsl(var(--accent-amber))",
                "accent-rose": "hsl(var(--accent-rose))",
                "accent-cyan": "hsl(var(--accent-cyan))",
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
                    glass: "var(--card-glass)",
                    dark: "var(--card-dark)",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
                display: ["Playfair Display", "Georgia", "serif"],
                playfair: ["Playfair Display", "Georgia", "serif"],
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
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.6' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 40px hsl(var(--primary-glow) / 0.4)' },
                    '50%': { boxShadow: '0 0 60px hsl(var(--primary-glow) / 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                breathe: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                floatGentle: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '25%': { transform: 'translate(20px, -20px) rotate(3deg)' },
                    '50%': { transform: 'translate(-10px, 10px) rotate(-2deg)' },
                    '75%': { transform: 'translate(15px, 15px) rotate(2deg)' },
                },
                'shimmer-slide': {
                    to: { transform: 'translate(calc(100cqw - 100%), 0)' },
                },
                'spin-around': {
                    '0%': { transform: 'translateZ(0) rotate(0)' },
                    '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
                    '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
                    '100%': { transform: 'translateZ(0) rotate(360deg)' },
                },
                'shine': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    to: { backgroundPosition: '0% 0%' },
                },
                'gradient': {
                    to: { backgroundPosition: 'var(--bg-size) 0' },
                },
                'marquee': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                },
                'marquee-vertical': {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(calc(-100% - var(--gap)))' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse': 'pulse 8s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'breathe': 'breathe 4s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'float-gentle': 'floatGentle 30s ease-in-out infinite',
                'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
                'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
                'shine': 'shine var(--duration) infinite linear',
                'gradient': 'gradient 8s linear infinite',
                'marquee': 'marquee var(--duration) linear infinite',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            dropShadow: {
                'glow': '0 0 20px hsl(var(--primary) / 0.6)',
            },
            boxShadow: {
                'purple': '0 10px 30px rgba(147, 51, 234, 0.3)',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
