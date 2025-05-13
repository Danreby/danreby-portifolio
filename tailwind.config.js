/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/js/**/*.jsx',
    './resources/views/**/*.blade.php',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    scrollBehavior: true,
  },
  plugins: [],
};
