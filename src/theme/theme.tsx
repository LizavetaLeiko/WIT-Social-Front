import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Dict } from '@chakra-ui/utils';


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props: Dict<any>) => ({
    'html, body': {
      fontFamily: 'body',
      bgColor: 'black',
      color: 'white',
      zIndex: -2,
    },
  }),
};

const defaultTheme = extendTheme({ 
  config,
  styles,
  colors: {
      brand:{
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        purple: {
          50: '#AE71FD',
          500: '#933EFF',
          600: '#6300C6'
        },
      }
  },
  fonts: {
    body: 'Roboto Condensed, sans-serif',
    heading: 'Vollkorn SC, serif',
  },
  breakpoints: {
    sm: '380px',
    md: '450px',
    lg: '600px',
    xl: '900px',
    '2xl': '1170px',
    '3xl': '1440px',
    '4xl': '1700px',
    '5xl': '19200px',
  },
})


export default defaultTheme;