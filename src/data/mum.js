// =====================================================================
//  MUM Baking House — TODOS LOS DATOS EDITABLES DE LA WEB
//  (sacados del Instagram @mum.pasteleria y del catálogo PDF de marzo 2026)
// =====================================================================

import cookiesBandeja from '../assets/fotos/cookies-bandeja.webp';
import cookiesOreo from '../assets/fotos/cookies-oreo.webp';
import cookiesCrumble from '../assets/fotos/cookies-crumble.webp';
import alfajorCorte from '../assets/fotos/alfajor-corte.webp';
import alfajorTriple from '../assets/fotos/alfajor-triple.webp';
import alfajorCoco from '../assets/fotos/alfajor-coco.webp';
import alfajorNy from '../assets/fotos/alfajor-ny.webp';
import tortaFrambuesa from '../assets/fotos/torta-frambuesa.webp';
import tortaDrip from '../assets/fotos/torta-drip.webp';
import tortaTematica from '../assets/fotos/torta-tematica.webp';
import budin from '../assets/fotos/budin.webp';
import mermelada from '../assets/fotos/mermelada.webp';
import panDulce from '../assets/fotos/pan-dulce.webp';
import panDulce2 from '../assets/fotos/pan-dulce-2.webp';
import cookieCascanueces from '../assets/fotos/cookie-cascanueces.webp';
import cookiesHalloween from '../assets/fotos/cookies-halloween.webp';
import cookiePersonaje from '../assets/fotos/cookie-personaje.webp';
import cookiesFeria from '../assets/fotos/cookies-feria.webp';
import cakesicles from '../assets/fotos/cakesicles.webp';

// ---------------------------------------------------------------------
// Contacto
// ---------------------------------------------------------------------
export const negocio = {
  nombre: 'MUM Baking House',
  instagram: 'mum.pasteleria',
  instagramUrl: 'https://www.instagram.com/mum.pasteleria/',
  pasteleraIg: 'mausisebess',
  whatsapp: '5491154196895', // formato internacional para wa.me
  whatsappVisible: '11 5419-6895',
  catalogoPdf: 'https://drive.google.com/drive/folders/1CxNNkV2zaXXh2-QPkywBAgOB3X2pihSw',
  dominio: 'https://mum-pasteleria.vercel.app',
  zona: 'Buenos Aires',
  // Días mínimos de anticipación
  anticipacion: { general: 10, cookiesYAlfajores: 14 },
  sena: 50, // % que se abona al encargar
  pagos: ['efectivo', 'transferencia', 'Mercado Pago'],
  tamanoBox: 6, // cookies y alfajores se arman en box de 6
};

export const fotosHero = [
  { src: cookiesCrumble, alt: 'Power crumble cookies bañadas en chocolate', pie: 'Power crumble' },
  { src: tortaFrambuesa, alt: 'Torta cubierta de frambuesas frescas', pie: 'Frambuesa y lima' },
  { src: cookieCascanueces, alt: 'Cookie decorada de cascanueces', pie: 'Decoradas a mano' },
];

// ---------------------------------------------------------------------
// Catálogo
//  - enBox: true  -> se suman de a una unidad y se arman cajas de 6
//  - vegano: true -> muestra la hojita
//  - nuevo: true  -> etiqueta "nuevo"
// ---------------------------------------------------------------------
export const categorias = [
  {
    id: 'cookies',
    nombre: 'Cookies',
    icono: 'cookie',
    enBox: true,
    unidad: 'cookie',
    bajada: 'Estilo NY: gorditas, rellenas y con mucho topping.',
    fotos: [
      { src: cookiesCrumble, alt: 'Power crumble cookies', pie: 'Power crumble' },
      { src: cookiesBandeja, alt: 'Bandeja de cookies clásicas recién horneadas', pie: 'Recién salidas' },
      { src: cookiesOreo, alt: 'Cookies de cacao con Oreo', pie: 'Oreo' },
    ],
    datos: [
      'Pesan entre 80 y 100 g (el tamaño varía según el sabor para mantener un precio único).',
      'Se venden en box de 6 y podés combinar sabores.',
      'Encargalas con 2 semanas de anticipación.',
      'Se pueden freezar hasta 3 meses.',
    ],
    sabores: [
      { n: 'Power crumble', d: 'Base NY cookie, dos rellenos, baño de chocolate y toppings. Las estrellas de la casa.', nuevo: true },
      { n: 'Clásica de chips', d: 'Masa de vainilla y mascabo con trocitos de chocolate (o rocklets, si preferís).' },
      { n: 'Nutella', d: 'Masa de nutella y cacao con avellanas.' },
      { n: 'Marroc', d: 'Masa con pasta de maní, maní picado y trocitos de marroc.' },
      { n: 'Baileys', d: 'Masa de vainilla y mascabo, chocolate blanco y ganache de Baileys.' },
      { n: 'Carrot cake', d: 'Masa húmeda de zanahoria, frutos secos y chocolate blanco.' },
      { n: 'Pink lemon', d: 'Masa de limón y coco.' },
      { n: 'Cacao y naranja', d: 'Masa de cacao y cáscara de naranja.', vegano: true },
      { n: 'Chocotorta', d: 'Masa con chocolinas, dulce de leche y ganache de dulce de leche.' },
      { n: 'Triple chocolate', d: 'Masa de cacao con trocitos de chocolate blanco, con leche y semi amargo.' },
      { n: 'Pistacho', d: 'Masa de pistacho y maní con chocolate.' },
      { n: 'Cacao y Fernet', d: 'Masa de cacao, nuez y glaseado de Fernet.' },
      { n: 'Banana y nuez', d: 'Masa húmeda de banana, un toque de canela y nuez.' },
      { n: 'Red velvet', d: 'Masa de red velvet con chocolate blanco.' },
      { n: 'Arándano, coco y limón', d: 'Masa de limón con arándano rojo y cubierta de coco.', vegano: true },
      { n: 'Funfetti', d: 'Masa suave de vainilla y leche con sprinkles.' },
      { n: 'Monster cookie', d: 'Masa con avena, frutos secos, chocolate y rocklets.' },
      { n: 'Oreo', d: 'Masa de cacao, trocitos de chocolate y galletitas Oreo.' },
      { n: 'Brownie y frutos rojos', d: 'Masa de chocolate blanco con trocitos de brownie y glaseado de frutos rojos.' },
      { n: 'Muffin de arándanos', d: 'Masa suave de vainilla y leche con arándanos y glasé de limón.' },
      { n: "S'mores", d: 'Masa de vainilla, trocitos de cookie, chocolate y marshmallows.' },
    ],
  },
  {
    id: 'alfajores',
    nombre: 'Alfajores',
    icono: 'alfajor',
    enBox: true,
    unidad: 'alfajor',
    bajada: 'De especialidad, con rellenos y dulces artesanales.',
    fotos: [
      { src: alfajorCorte, alt: 'Alfajor de cacao cortado al medio con relleno de nutella', pie: 'Cookie y Nutella' },
      { src: alfajorCoco, alt: 'Alfajores de coco y maracuyá con baño blanco', pie: 'Coco y maracuyá' },
      { src: alfajorTriple, alt: 'Alfajor triple de chocolate', pie: 'Bruce triple' },
      { src: alfajorNy, alt: 'Alfajor stout envuelto con la etiqueta de MUM', pie: 'Stout' },
    ],
    datos: [
      'Pesan entre 90 y 100 g.',
      'Se venden en box de 6 y podés combinar sabores.',
      'Encargalos con 2 semanas de anticipación.',
      'Se pueden freezar hasta 3 meses.',
    ],
    sabores: [
      { n: 'NY style', d: 'Lo más nuevo: alfajor con tapas de NY cookie. Consultá los sabores del momento.', nuevo: true },
      { n: 'Clásico de dulce de leche', d: 'Masa de vainilla, relleno de dulce de leche y baño de chocolate semi amargo.' },
      { n: 'Coco', d: 'Tapas de coco con dulce de leche, espolvoreado en coco (sin baño de chocolate).' },
      { n: 'Marroc', d: 'Tapas de maní y mascabo, relleno de marroc artesanal y baño de chocolate con leche.' },
      { n: 'Patagonia', d: 'Tapas con harina de almendras, dulce de leche, centro de frutos rojos artesanal y baño de chocolate blanco.' },
      { n: 'Nuez', d: 'Tapas de nuez, relleno de dulce de leche y baño de chocolate blanco.' },
      { n: 'Maní y caramelo salado', d: 'Tapas de cacao y maní, dulce de leche y caramelo salado, con baño semi amargo.' },
      { n: 'Cacao y frambuesa', d: 'Tapas de cacao, ganache semi amargo y centro de frambuesa artesanal, con baño semi amargo.' },
      { n: 'Cookie y Nutella', d: 'Tapas de cookie americana con ganache de nutella, sin baño.' },
      { n: 'Stout', d: 'Masa de cacao y maní, ganache de chocolate y cerveza negra, con centro de toffee.' },
      { n: 'Coco y maracuyá', d: 'Tapas de coco, borde de dulce de leche y ganache de maracuyá, con baño blanco y escamas de coco.' },
      { n: 'Bruce triple', d: 'Triple de cacao con ganache semi amargo y ganache de chocolate y Baileys.' },
      { n: 'Carrot cake', d: 'Masa de zanahoria y especias, ganache de chocolate blanco y dulce de zanahoria, manzana y canela.' },
      { n: 'Pistacho', d: 'Masa con pistacho, ganache de pistacho y baño de chocolate con leche con un toque de sal marina.' },
      { n: 'Selva negra', d: 'Masa de cacao, ganache de chocolate blanco y frutos rojos confitados, con baño semi amargo.' },
      { n: 'Vegano clásico', d: 'Tapas de vainilla, dulce de leche de almendras y baño semi amargo.', vegano: true },
      { n: 'Vegano con semillas', d: 'Tapas de cacao y semillas, dulce de leche de almendras y baño semi amargo.', vegano: true },
      { n: 'Boniato y nuez', d: 'Tapas de sablée de vainilla, dulce de boniato artesanal y nuez, con baño de chocolate con leche.', vegano: true },
      { n: 'Chocolate y naranja', d: 'Tapas de naranja, ganache semi amargo con naranjas confitadas y baño semi amargo.', vegano: true },
    ],
  },
  {
    id: 'tortas',
    nombre: 'Tortas',
    icono: 'torta',
    enBox: false,
    unidad: 'torta',
    bajada: 'Para cumples, casamientos, divorcios y egresados.',
    fotos: [
      { src: tortaFrambuesa, alt: 'Torta de frambuesa, lima y chocolate blanco', pie: 'Frambuesa y lima' },
      { src: tortaDrip, alt: 'Torta decorada rosa con drip y flamenco', pie: 'Decorada' },
    ],
    datos: [
      'Las decoradas no se cobran por kilo: se presupuestan según porciones y diseño.',
      'Encargala con 10 días de anticipación.',
      'Contanos la temática y armamos el diseño.',
    ],
    sabores: [
      { n: 'Frambuesa y lima', d: 'Frambuesa, lima, chocolate blanco y pétalos de rosa. La que nos hace llorar de amor.' },
      { n: 'Bruce', d: 'Pastel de chocolate húmedo, ganache de chocolate y dulce de leche, cubierto de ganache.' },
      { n: 'Carrot cake', d: 'Zanahoria y frutos secos, mermelada de zanahoria y manzana, ganache de chocolate blanco y queso crema.' },
      { n: 'Pop corn', d: 'Vainilla, dulce de leche, crunch de maní y ganache de Baileys, con caramel ganache y pochoclos.' },
      { n: 'Limón', d: 'Limón y amapola, ganache de chocolate blanco y limón, con jalea de limón, pepino y jengibre.' },
      { n: 'Oreo', d: 'Bizcochuelo de vainilla y Oreo, relleno mitad dulce de leche y mitad crema oreo.' },
      { n: 'Choco blanco y frutos rojos', d: 'Pastel húmedo de chocolate blanco, ganache y confitura artesanal de frutos rojos.' },
      { n: 'Confetti', d: 'Vainilla con sprinkles, ganache de dulce de leche y cubierta de ganache de chocolate.' },
      { n: 'Pistacho', d: 'Bizcocho de pistacho, dulce de leche con confitura de frutillas y ganache de pistacho.' },
    ],
  },
  {
    id: 'budines',
    nombre: 'Budines',
    icono: 'budin',
    enBox: false,
    unidad: 'budín',
    bajada: 'XL de verdad: 30 cm y 1,5 kg, en caja con visor.',
    fotos: [{ src: budin, alt: 'Budín cubierto con chocolate y frutos secos', pie: 'Frutos secos' }],
    datos: [
      'Miden 30 cm y pesan 1,5 kg.',
      'Vienen en caja con visor, listos para regalar.',
      'Todos se pueden pedir con harina integral.',
    ],
    sabores: [
      { n: 'Vainilla', d: 'Masa de vainilla cubierta con glaseado.' },
      { n: 'Marmolado', d: 'Masa de vainilla y cacao cubierta con chocolate.' },
      { n: 'Coco', d: 'Masa de coco cubierta con dulce de leche y chocolate blanco.' },
      { n: 'Frutos secos', d: 'Masa de vainilla con frutos secos, cubierta con chocolate.' },
      { n: 'Carrot', d: 'Masa de zanahoria y frutos secos, cubierta de ganache de chocolate blanco.' },
      { n: 'Chocolate y naranja', d: 'Masa de cacao y naranja con glaseado de naranja.' },
      { n: 'Chocolate', d: 'Masa de cacao cubierta con chocolate.' },
      { n: 'Chips de chocolate', d: 'Masa de vainilla con trocitos de chocolate y cubierta de chocolate.' },
      { n: 'Dulce de leche', d: 'Masa de dulce de leche con trocitos de chocolate, cubierta con chocolate.' },
      { n: 'Banana y nuez', d: 'Masa de banana con nuez, cubierta de dulce de leche, chocolate y nuez picada.' },
      { n: 'Limón y amapola', d: 'Masa de limón con semillas de amapola y glaseado de limón.' },
      { n: 'Centeno y frutos rojos', d: 'Masa de vainilla y harina de centeno con frutos rojos y su glaseado.' },
      { n: 'Vegano', d: 'Masa de remolacha y arándanos con glaseado de frutos rojos.', vegano: true },
    ],
  },
  {
    id: 'mermeladas',
    nombre: 'Mermeladas',
    icono: 'frasco',
    enBox: false,
    unidad: 'frasco',
    bajada: 'Artesanales, sin aditivos ni conservantes.',
    fotos: [{ src: mermelada, alt: 'Frasco de confitura de frutos rojos de MUM', pie: 'Frutos rojos' }],
    datos: [
      'Frasco de vidrio de 220 cc con cinta de seguridad y cuchara de madera.',
      'Sin aditivos ni conservantes.',
    ],
    sabores: [
      { n: 'Zanahoria, manzana y canela', d: 'La misma que va dentro de la carrot cake.' },
      { n: 'Manzana, banana y naranja', d: 'Suave y frutal, ideal para el desayuno.' },
      { n: 'Confitura de frutos rojos', d: 'Frutilla, frambuesa, arándano, mora y grosella.' },
      { n: 'Jalea de limón, pepino y jengibre', d: 'Fresca y distinta. Va genial con quesos.' },
    ],
  },
  {
    id: 'fechas',
    nombre: 'Fechas especiales',
    icono: 'pandulce',
    enBox: false,
    unidad: 'unidad',
    bajada: 'Navidad, Pascuas y los días de mamá, papá y los peques.',
    fotos: [
      { src: panDulce, alt: 'Pan dulce artesanal cubierto de chocolate y frutos secos', pie: 'Pan dulce' },
      { src: panDulce2, alt: 'Pan dulce con fruta glaseada sobre una base de madera', pie: 'Full' },
    ],
    datos: [
      'Los precios dependen de los productos de la temporada.',
      'Encargá con 10 días de anticipación: en fechas especiales los cupos vuelan.',
    ],
    grupos: [
      {
        titulo: 'Pan dulce',
        detalle: '300 g y 750 g',
        sabores: [
          'Chocolate', 'Chocolate y nuez', 'Chocolate y arándanos', 'Chocolate y frutos secos',
          'Frutos secos', 'Fruta glaseada', 'Dulce de leche y vauquita', 'Nutella',
          'Full (frutos secos, chocolate y fruta glaseada)',
        ],
      },
      { titulo: 'Turrones', detalle: 'Artesanales', sabores: ['Maní', 'Almendra y maní', 'Marroc'] },
      {
        titulo: 'Huevos decorados',
        detalle: '500 g, 20 cm de alto',
        sabores: ['Chocolate blanco', 'Chocolate con leche', 'Chocolate semi amargo'],
      },
      {
        titulo: 'Huevos rellenos',
        detalle: '700 g, 20 cm de alto',
        sabores: ['Chocotorta', 'Oreotorta', 'Brownie', 'Lemon pie'],
      },
    ],
  },
];

// ---------------------------------------------------------------------
// Para tus eventos
// ---------------------------------------------------------------------
export const decoradas = {
  fotos: [
    { src: cookiesHalloween, alt: 'Cookies decoradas de Halloween: calaveras, calabazas y pociones', pie: 'Halloween' },
    { src: cookiePersonaje, alt: 'Cookie decorada con un personaje celeste', pie: 'Tu personaje' },
    { src: cookiesFeria, alt: 'Cookies decoradas con frases para una feria', pie: 'Con frase' },
    { src: cookieCascanueces, alt: 'Cookie de cascanueces navideño', pie: 'Navidad' },
  ],
  tematicas: [
    'Pokémon', 'Las chicas superpoderosas', 'Star Wars', 'Friends', 'Flork', 'Los Simpson', 'Barbie',
    'Merlina', 'One Piece', 'Demon Slayer', 'Naruto', 'Sailor Moon', 'My Melody', 'Disney',
    'Harry Potter', 'Mario Bros', 'Fútbol: Argentina campeón', 'Superhéroes', 'Kawaii',
  ],
};

export const tortasDecoradas = {
  fotos: [
    { src: tortaTematica, alt: 'Torta temática de autos con cactus', pie: 'Temática' },
    { src: tortaDrip, alt: 'Torta rosa con drip y flamenco', pie: 'Drip' },
    { src: cakesicles, alt: 'Paletas de torta y letras decoradas con flores', pie: 'Mesa dulce' },
  ],
  ocasiones: ['cumpleaños', 'casamientos', 'divorcios', 'fiestas de egresados'],
};

// ---------------------------------------------------------------------
// Fechas especiales (se calculan solas cada año)
//   tipo 'tercerDomingo' -> mes (0 = enero)
// ---------------------------------------------------------------------
export const fechasEspeciales = [
  { id: 'pascuas', nombre: 'Pascuas', regla: { tipo: 'pascua' }, icono: 'huevo', que: 'Huevos decorados de 500 g y rellenos de 700 g.', foto: cakesicles, pie: 'Mesa dulce' },
  { id: 'padre', nombre: 'Día del Padre', regla: { tipo: 'tercerDomingo', mes: 5 }, icono: 'alfajor', que: 'Boxes de alfajores y cookies para regalar.', foto: alfajorNy, pie: 'Alfajor stout' },
  { id: 'nino', nombre: 'Día del Niño', regla: { tipo: 'tercerDomingo', mes: 7 }, icono: 'cookie', que: 'Cookies decoradas con sus personajes favoritos.', foto: cookiePersonaje, pie: 'Tu personaje' },
  { id: 'madre', nombre: 'Día de la Madre', regla: { tipo: 'tercerDomingo', mes: 9 }, icono: 'corazon', que: 'Boxes de cookies, budines XL y tortas para mamá.', foto: tortaFrambuesa, pie: 'Frambuesa y lima' },
  { id: 'navidad', nombre: 'Navidad', regla: { tipo: 'fija', mes: 11, dia: 24 }, icono: 'pandulce', que: 'Pan dulce de 300 y 750 g, turrones y cookies navideñas.', foto: panDulce, pie: 'Pan dulce' },
];

// ---------------------------------------------------------------------
// Ferias donde están
// ---------------------------------------------------------------------
export const ferias = [
  { nombre: 'Nerdo', cuando: 'Dos veces por mes', donde: 'C.C. Matienzo', nota: 'Estamos siempre' },
  { nombre: 'Expo Alfajores', cuando: 'Edición anual', donde: 'La Rural', nota: 'Con los alfajores NY style' },
  { nombre: 'Horror XP', cuando: 'Según calendario', donde: 'Buenos Aires', nota: '' },
  { nombre: 'Magic Meeting', cuando: 'Según calendario', donde: 'Buenos Aires', nota: '' },
  { nombre: 'Feria Gamer', cuando: 'Según calendario', donde: 'Buenos Aires', nota: '' },
];

// ---------------------------------------------------------------------
// Preguntas frecuentes (del catálogo)
// ---------------------------------------------------------------------
export const preguntas = [
  {
    p: '¿Cómo encargo?',
    r: 'Por WhatsApp o por Instagram. Al encargar se abona el 50% del pedido, con un mínimo de 10 días de anticipación (2 semanas para cookies y alfajores).',
  },
  { p: '¿Qué medios de pago tienen?', r: 'Efectivo, transferencia bancaria y Mercado Pago.' },
  {
    p: '¿Tienen opciones para dietas alternativas?',
    r: 'Sí: hacemos productos veganos, sin lactosa, algunos integrales y reducidos en azúcar. No trabajamos productos sin TACC.',
  },
  {
    p: '¿Hacen envíos?',
    r: 'No tenemos envío propio, pero tenemos puntos de retiro y te recomendamos nuestro delivery de confianza.',
  },
  { p: '¿Puedo combinar productos?', r: '¡Sí! Podés combinar distintos sabores de cookies y alfajores o armar tu pack.' },
  {
    p: '¿Tienen un mínimo de compra?',
    r: 'No, pero algunos productos no se venden sueltos: las cookies y los alfajores van en box.',
  },
  {
    p: '¿Tienen local a la calle?',
    r: 'No. Pero estamos en varias ferias: podés encargar y retirar ahí. Avisamos las fechas en Instagram.',
  },
  {
    p: '¿Cuánto duran?',
    r: 'Las cookies decoradas duran hasta 1 mes a temperatura ambiente y se entregan envueltas una por una. Cookies y alfajores se pueden freezar hasta 3 meses.',
  },
];
