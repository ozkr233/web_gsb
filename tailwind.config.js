/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0047AB',
          yellow: '#FFD700',
          red: '#DC143C',
        },
        neutral: {
          white: '#FFFFFF',
          gray: '#F5F5F5',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 71, 171, 0.08)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(0,71,171,0.95) 0%, rgba(0,71,171,0.85) 100%)",
        'values-pattern': 'radial-gradient(circle at top right, rgba(255,215,0,0.25), transparent 55%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
