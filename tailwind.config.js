import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';
import flowbiteReact from 'flowbite-react/plugin';
import flowbite           from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
// CommonJS
const flowbiteReact = require('flowbite-react/plugin');

// ou, se seu tailwind.config.js for ESM:

export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    ".flowbite-react\\class-list.json"
  ],

  theme: {
    extend: {
      fontFamily: {
        'padrao-sans': ["Open Sans", 'Segoe UI'],
        'padrao-normal': 'Segoe UI',
        'padrao-light': 'Segoe UI Light',
        'padrao-destaque': 'Trebuchet MS',
        'padrão-sans': 'Open Sans',
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
      },
    },
  },

  plugins: [forms, plugin(function ({ addComponents, addBase }) {
    const buttons = require('./style/buttons.js');
    const dynamicStyles = require('./style/dynamicStyles.js')
    const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

    addComponents({
      ':root': {
        '--primary': '#1f2b5e',
        '--secondary': '#cdd72a',
        '--mono-100': '#F0F4FC',
        '--mono-200': '#a09ca2',
        '--alert': '#ff514d',
      },
      '.degrade-100': {
        background: 'linear-gradient(60deg, #f15a22 0%, #cdd72a 60%)',
      },
      '.degrade-200': {
        background: 'linear-gradient(135deg, #100F2C 0%, #1f2b5e 80%)',
      },
      '.h-fullscreen': {
        height: 'calc(100vh - 74px)',
      },
    });

    addBase({
      '@keyframes fadeIn': dynamicStyles['@keyframes fadeIn'],
    });
  }), flowbiteReact],
};