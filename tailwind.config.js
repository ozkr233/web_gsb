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
          blue: '#003366', // Navy Blue
          yellow: '#F4D03F', // Warm Gold
          red: '#C8102E', // Deep Red
        },
        neutral: {
          white: '#FFFFFF',
          light: '#FDFBF7', // Cream/Off-white
          gray: '#F5F5F5',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 51, 102, 0.08)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(0, 51, 102, 0.95) 0%, rgba(0, 51, 102, 0.85) 100%)",
        'values-pattern': 'radial-gradient(circle at top right, rgba(244, 208, 63, 0.25), transparent 55%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
