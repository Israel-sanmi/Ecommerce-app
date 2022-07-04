module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'firstImg': "url('./assets/backgrd.jpg')",
        'secondImg': "url('./assets/shirtsbgd.jpg')",
        'thirdImg': "url('./assets/vintage.jpg')"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}