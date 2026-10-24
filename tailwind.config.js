/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-wine': '#421d24',
        'royal-violet': '#714cb6',
        'lilac-mist': '#d4c7ff',
        'deep-lagoon': '#0c4243',
        'warm-parchment': '#f2f0eb',
        'soft-mist': '#e3e3e2',
        'ink-charcoal': '#292827',
        'stone-gray': '#666666',
        'paper-white': '#ffffff',
        // shadcn compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#421d24',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#d4c7ff',
          foreground: '#292827',
        },
        accent: {
          DEFAULT: '#714cb6',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#e3e3e2',
          foreground: '#666666',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#292827',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontWeight: {
        w460: '460',
        w540: '540',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'subtle-violet': 'rgb(113, 76, 182) 0px 0px 0px 1px inset',
        'editorial': '0 4px 20px -2px rgba(41, 40, 39, 0.05)',
        'floating': '0 20px 40px -15px rgba(41, 40, 39, 0.1)',
      }
    },
  },
  plugins: [],
}
