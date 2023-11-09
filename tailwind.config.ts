import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
            background:'#ffffff',
            primary: {
              '100':'#F875AA',
              '200':'#FFDFDF',
              '300':'#FFF6F6',
              '400':'#AEDEFC',
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          }
      },
      dark: {
        colors: {
          background:'#164863',
          primary: {
            '100':'#164863',
            '200':'#427D9D',
            '300':'#9BBEC8',
            '400':'#DDF2FD',
            DEFAULT: "#BEF264",
            foreground: "#ffffff",
          },
          focus: "#BEF264",
        }
      },
      
    },
  })],

}
export default config
