import { motion, useReducedMotion } from 'framer-motion';

// Dibujos de una sola línea, en el estilo de las destacadas de @mum.pasteleria
const TRAZOS = {
  cookie: [
    'M32 9c9 0 13 3 17 7s7 9 7 16-3 12-7 16-9 7-17 7-12-2-17-6-6-10-6-17 2-12 6-16 8-7 17-7z',
    'M22 24c1.5-1 3-.5 3.5 1',
    'M37 20c1.2-.8 2.8-.4 3 .8',
    'M40 36c1.4-1 3-.3 3.2 1',
    'M24 39c1.3-.9 2.8-.3 3 1',
    'M31 30c1-.7 2.2-.3 2.4.7',
  ],
  alfajor: [
    'M9 29c0-8 10-13 23-13s23 5 23 13z',
    'M9 33c3-2 6 2 9 0s6 2 9 0 6 2 9 0 6 2 9 0 6 2 9 0',
    'M9 37h46c0 7-10 11-23 11S9 44 9 37z',
  ],
  torta: [
    'M22 26V16h20v10',
    'M22 18c3 0 3 3 5 3s3-3 5-3 3 3 5 3 3-3 5-3',
    'M14 44V26h36v18',
    'M14 29c3 0 3 4 6 4s3-4 6-4 3 4 6 4 3-4 6-4 3 4 6 4',
    'M10 44h44',
    'M32 44v8M24 52h16',
    'M32 16v-5',
  ],
  budin: [
    'M12 50V31c0-10 8-16 20-16s20 6 20 16v19z',
    'M12 30c3 0 4 5 7 5s4-6 7-6 4 6 7 6 4-5 7-5 4 4 6 4',
  ],
  frasco: [
    'M22 10h20v7H22z',
    'M21 17h22c3 0 5 2 5 5v25c0 4-3 7-7 7H23c-4 0-7-3-7-7V22c0-3 2-5 5-5z',
    'M16 30h32M16 42h32',
  ],
  huevo: [
    'M32 8c9 0 17 14 17 27 0 11-7 19-17 19s-17-8-17-19C15 22 23 8 32 8z',
    'M16 32l5 4 5-4 5 4 5-4 5 4 5-4 5 4',
  ],
  corazon: [
    'M4 52c10 0 18-2 28-2-12-8-20-16-20-25 0-6 4-10 9-10s9 3 11 7c2-4 6-7 11-7s9 4 9 10c0 9-8 17-20 25 10 0 18 2 28 2',
  ],
  pandulce: [
    'M14 36c0-12 8-20 18-20s18 8 18 20',
    'M14 36v14h36V36z',
    'M14 42h36',
    'M24 24l2 2M32 20v3M40 24l-2 2',
  ],
  hoja: ['M10 54C10 30 26 12 54 10c-2 28-20 44-44 44z', 'M10 54L40 24'],
  carpa: [
    'M12 22l5-10h30l5 10',
    'M8 22h48l-3 8c-1.6 4-6.4 4-8 0-1.6 4-6.4 4-8 0-1.6 4-6.4 4-8 0-1.6 4-6.4 4-8 0-1.6 4-6.4 4-8 0z',
    'M14 32v20M50 32v20',
    'M8 52h48',
    'M22 44h20',
  ],
  caja: ['M10 26h44v26H10z', 'M8 18h48v8H8z', 'M32 18v34', 'M32 18c-4-7-13-7-10 0M32 18c4-7 13-7 10 0'],
  whatsapp: [
    'M11 53l3.5-10.5A21 21 0 1 1 22 50z',
    'M24 22c-1.5 4 .5 9 5 13.5S38.5 42 42.5 40.5l2-3.5-5.5-3-2.5 2.5c-2.5-1-5.5-4-6.5-6.5l2.5-2.5-3-5.5z',
  ],
  instagram: ['M18 10h28a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z', 'M32 22a10 10 0 1 1 0 20 10 10 0 0 1 0-20z', 'M45 18.5v.5'],
};

export function Icono({ nombre, className = 'h-8 w-8', trazo = 2.4, dibujar = false, titulo }) {
  const reducir = useReducedMotion();
  const trazos = TRAZOS[nombre] || [];
  const animar = dibujar && !reducir;
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={trazo}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titulo ? 'img' : undefined}
      aria-hidden={titulo ? undefined : true}
    >
      {titulo && <title>{titulo}</title>}
      {trazos.map((d, i) =>
        animar ? (
          <motion.path
            key={`${nombre}-${i}`}
            d={d}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <path key={i} d={d} />
        ),
      )}
    </svg>
  );
}

// Estrellita de 4 puntas (la del catálogo)
export function Estrella({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.7 7.2 4.6 11.2 12 12-7.4.8-11.3 4.8-12 12-.7-7.2-4.6-11.2-12-12 7.4-.8 11.3-4.8 12-12z" />
    </svg>
  );
}
