
module.exports = {
  theme: {
    spinner: (theme) => ({
      default: {
        color: '#fff', 
        size: '1em', 
        border: '1px', 
        speed: '700ms', 
      },
    }),
    fontFamily: {
      display: ['"Abril Fatface"'],
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      filter: { 
        'grayscale-0': 'none',
        'grayscale-1': 'grayscale(1)',
      },
      transitionProperty: {
        'filter': 'filter',
      },
      colors: require('./colors'),
    },
    container: { center: true, padding: "1rem" },
    letterSpacing: { wide: ".05em", wider: ".1em", widest: ".25em" },
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md:
        " 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg:
        " 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl:
        " 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 30px 30px -15px rgba(0, 0, 0, 0.85)",
    },
  },
  corePlugins: {},
  variants: { margin: ["responsive", "group-hover"], filter: ["hover"] },
  plugins: [
    require('tailwindcss-filters'),
    // require('@tailwindcss/custom-forms'),
    require('tailwindcss-spinner')()
  ]
};
