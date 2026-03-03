/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ayurAptayuPrimary: '#ff5400',
        ayurAptayuPrimaryHover: '#e64a00',
        ayurAptayuPrimaryLight: '#ffede4',
        ayurAptayuPageBg: '#f0f5f6',
        ayurAptayuCardBg: '#ffffff',
        ayurAptayuBorder: '#e5e7eb',
        ayurAptayuTextPrimary: '#000000',
        ayurAptayuTextMuted: '#6b7280',
      },
      fontFamily: {
        ayurAptayuHeading: ['Inter Tight', 'sans-serif'],
        ayurAptayuBody: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
