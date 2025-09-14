import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1e1b4b',
        secondary: '#6366f1',
        accent: '#a855f7',
        findit: '#4785FF',
      },
      textColor: {
        primary: '#6366f1',
        secondary: '#a855f7',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-button': 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
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
      secondary: '0px 0px 6px 4px rgba(15, 186, 116, 0.3)',
    },
    scrollBehavior: ['smooth', 'auto'],
  },
  plugins: [aspectRatio],
};
