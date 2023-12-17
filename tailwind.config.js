/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'Dana': "Dana",
        'DanaMedium': "Dana Medium",
        'DanaBold': "Dana DemiBold",
        'MorabbaLight': "Morabba Light",
        'MorabbaMedium': "Morabba Medium",
        'MorabbaBold': "Morabba Bold"
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'cubic-transition':'cubic-bezier(0, 0.01, 0.27, 1.55)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }, 
      spacing: {
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '15': '3.75rem',
        '30':'7.5rem'
      },
      fontSize: {
        '2xs': '0.65rem',
      }
    },
  
  },
  plugins: [],
}