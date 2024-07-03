import range from 'lodash/range';
import aspectRatio from '@tailwindcss/aspect-ratio';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(1, 1000),
      },
      inset: {
        ...pxToRemFunc(1, 1000),
      },
      fontSize: {
        ...pxToRemFunc(1, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(1, 1000),
      },
      backgroundColor: {
        primary: '#101820',
        secondary: '#0fba74',
        findit: '#4785FF',
      },
      textColor: {
        primary: '#0fba74',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1280px',
      },
    },
    fontFamily: {
      sans: ['Pretandard Variable', 'Pretendard', 'noto-sans-kr', 'sans-serif'],
      bebas: ['BebasNeue', 'sans-serif'],
      JalnanGothic: ['JalnanGothic', 'sans-serif'],
    },
    boxShadow: {
      primary: '0px 0px 8px 4px rgba(15, 186, 116, 0.2)',
    },
    scrollBehavior: ['smooth', 'auto'],
  },
  plugins: [aspectRatio],
};
