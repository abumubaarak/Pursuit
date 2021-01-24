module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     fontFamily:{
       'custom':['DM Sans ']
     },
     extend: {
      backgroundImage: theme => ({
        'home-bg': "url('/src/img/auth-bg.svg')",
        'bottom': "url('/src/img/wave.svg')"
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
