module.exports = {
  mode: 'jit',  
  purge: [
    './public/**/*.html',
  ],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'weight-bold': ['basier_circlebold', 'Helvetica', 'Arial', 'sans-serif'],
        'weight-medium': ['basier_circlemedium', 'Helvetica', 'Arial', 'sans-serif'],
        'weight-regular': ['basier_circleregular', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        '22': '1.375rem',
        '100': '6.25rem',
        '80': '5rem',
        '80': '5rem',
        '17': '1.063rem',
        '55': '55px',
        '28': '28px',
        '32': '32px',
        '26': '26px',
        '200': '200px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'brown': '#76221B',
        'customegray': '#E8E7E0',
        'customeblue':'#2B374B',
        'customeOrange':'#9C3825',
        'customelightgray':'#ECEDED',
        'customelightblue':'#414142',
        'blue': '#3E1CE7',
        'bluegray': '#C7E0F6',
        'darkgray': '#E8E7E0',
      },
      maxWidth: {
        'small': '990px',
        '280': '280px',
        '1250': '1250px',
        '340': '340px',
        '170': '170px',
        '280': '280px',
        '120': '120px',
        '180': '180px',
        '130': '130px',
        '480': '480px',
        '315': '315px',
        '342': '342px',
      },
      minHeight: {
        '23': '23.5rem',
        '245': '245px',
        '170': '170px',
        '70': '70px',
      },
      height: {
        '256': '48rem',
        '170': '170px',
        '120': '120px',
        '180': '180px',
        '130': '130px',
      },
      lineHeight: {
        'extra-loose': '1.2',
      }
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      'mxl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
        }
      })
    }
  ]
}