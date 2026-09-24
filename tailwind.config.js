/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F28C0F',
          hover: '#DE7D09',
        },
        secondary: {
          DEFAULT: '#101C30',
          dark: '#0A1220',
        },
        navy: {
          DEFAULT: '#101C30',
          dark: '#0A1220',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          clean: '#F8F8F8',
        },
        neutral: {
          border: '#E5E5E5',
          text: '#707070',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(16, 28, 48, 0.08)',
      },
    },
  },
  plugins: [],
}
