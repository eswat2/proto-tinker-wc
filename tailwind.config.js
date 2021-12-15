const tw_clrs = require('proto-tailwindcss-clrs');

module.exports = {
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
        '10px': '10px',
      },
    },
  },
  variants: {},
  plugins: [
    tw_clrs({
      map: {
        bada55: '#bada55',
        slate: '#708090',
        slate4: '#4e5964',
        white: '#ffffff',
      },
    }),
  ],
};
