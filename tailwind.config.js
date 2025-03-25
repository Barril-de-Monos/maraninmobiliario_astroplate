module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust paths as necessary
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        body: '#fff',
        border: '#eaeaea',
        light: '#f6f6f6',
        dark: '#040404',
        'darkmode-primary': '#fff',
        'darkmode-body': '#1c1c1c',
        'darkmode-border': '#3E3E3E',
        'darkmode-light': '#222222',
        'darkmode-dark': '#fff',
        text: '#444444',
        'text-dark': '#040404',
        'text-light': '#717171',
        'darkmode-text': '#B4AFB6',
        'darkmode-text-dark': '#fff',
        'darkmode-text-light': '#B4AFB6',
      },
      fontFamily: {
        primary: ['Heebo', 'sans-serif'],
        secondary: ['Signika', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        'base-sm': '12.8px',
        'h1-sm': '2.25rem',
        h1: '3rem',
        'h2-sm': '1.875rem',
        h2: '2.25rem',
        'h3-sm': '1.5rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add other plugins if necessary
  ],
}
