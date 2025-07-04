/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A0A0B',
        'electric-lime': '#00FF88',
        'neon-green': '#39FF14',
        'charcoal': '#1C1C1E',
        'smoke': '#2C2C2E',
        'white': '#FFFFFF',
        'light-gray': '#8E8E93',
        'electric-blue': '#007AFF',
        'amber': '#FF9500',
        'crimson': '#FF3B30',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['3rem', { lineHeight: '1.16', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.25', fontWeight: '500' }],
        'h4': ['1.5rem', { lineHeight: '1.33', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.55', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.43', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.33', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
