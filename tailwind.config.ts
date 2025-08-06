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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Music-specific colors
				wave: {
					primary: 'hsl(var(--wave-primary))',
					secondary: 'hsl(var(--wave-secondary))',
					accent: 'hsl(var(--wave-accent))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'sans': ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
				'festival': ['Bebas Neue', 'cursive'],
				'grotesk': ['Space Grotesk', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 107, 0, 0.8), 0 0 60px rgba(255, 107, 0, 0.4)' 
					}
				},
				'wave': {
					'0%, 100%': { transform: 'scaleY(0.5)' },
					'50%': { transform: 'scaleY(1.5)' }
				},
				'festival-shimmer': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'festival-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(255, 235, 59, 0.2), 0 0 60px rgba(255, 107, 107, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 255, 136, 0.6), 0 0 80px rgba(255, 235, 59, 0.4), 0 0 120px rgba(255, 107, 107, 0.3)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'gradient-festival': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'wave': 'wave 1.5s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'festival-shimmer': 'festival-shimmer 2s ease-in-out infinite',
				'festival-pulse': 'festival-pulse 2s ease-in-out infinite',
				'gradient-festival': 'gradient-festival 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'music-gradient': 'var(--music-gradient-primary)',
				'music-secondary': 'var(--music-gradient-secondary)',
				'hero-gradient': 'var(--music-gradient-hero)',
				'festival-gradient': 'linear-gradient(135deg, #00ff88, #ffeb3b, #ff6b6b)',
				'festival-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.3), transparent 50%)'
			},
			boxShadow: {
				'neon-orange': 'var(--neon-orange)',
				'neon-purple': 'var(--neon-purple)',
				'neon-cyan': 'var(--neon-cyan)',
				'glass': 'var(--glass-shadow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
