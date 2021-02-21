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
       'custom': ['DM Sans '],
       'nuito':['Nunito']
     },
     extend: {

      backgroundImage: theme => ({
        'home-bg': "url('/src/img/auth-bg.svg')",
        'bottom': "url('/src/img/wave.svg')",
        'search-1': "url('/src/img/search-comb-1.png')",
         'search-2': "url('/src/img/search-comb-2.png')",
        'profile-bg':"url('/src/img/profile_bg.png')"
        
      }),

      backgroundSize: {
        'search': '10rem 10rem'
      },

      backgroundColor:theme=>({
        'jobsearch': '#F9FAFE',
        'main': '#FCFDFF',
        'main-2': '#F0F4F8',


      }),

      flex:{
        '2': '0 0 14%',
        '3':'0 0 100%'

       },
       screens: {
        'md-sm':'768px'
       },
       boxShadow: {
         'main':'rgba(0, 0, 0, 0.15) 0px 4px 16px 0px'
       },
       colors: {
         'main': '#FCFDFF',
         'logo':'#0c008c'
       },
      gridTemplateColumns:{
        'card': '80px 1fr 100px',
        'modal':'50px 1fr 30px',
        'mobile':'70px 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
