/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Antonio = títulos (condensada, como el catálogo de MUM)
        // Shantell Sans = texto (letra hecha a mano, como sus dibujos de una sola línea)
        display: ['Antonio', 'Arial Narrow', 'sans-serif'],
        sans: ['Shantell', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      colors: {
        rosa: '#FFEAF1', // fondo principal (rosa del catálogo)
        chicle: '#FFC9DC', // rosa fuerte (portadas del catálogo)
        choco: '#573A2E', // texto y líneas (marrón del catálogo / destacadas)
        'choco-soft': '#7A5A4C', // texto secundario
        lavanda: '#8E97F0', // estrellitas, órbitas y líneas punteadas
        'lavanda-ink': '#4F55B8', // lavanda legible para texto e íconos
        caramelo: '#E8B87C', // destacadas de IG (tortas, budines)
        papel: '#FFFBF7', // marco polaroid
      },
      transitionTimingFunction: {
        suave: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        polaroid: '0 1px 2px rgba(87,58,46,0.10), 0 12px 28px -14px rgba(87,58,46,0.45)',
      },
    },
  },
  plugins: [],
};
