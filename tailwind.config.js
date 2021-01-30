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
        'bottom': "url('/src/img/wave.svg')",
        'search-1': "url('/src/img/search-comb-1.png')",
        'search-2': "url('/src/img/search-comb-2.png')"
        
      }),

      backgroundSize: {
        'search': '10rem 10rem'
      },

      backgroundColor:theme=>({
        'jobsearch':'#EBEFF4'
      }),

      flex:{
        '2':'0 0 50%'
      },
      gridTemplateColumns:{
        'card' :'80px 1fr 100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
