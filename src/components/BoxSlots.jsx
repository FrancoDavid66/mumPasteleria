import { AnimatePresence, motion } from 'framer-motion';
import { Icono } from './Iconos';
import { negocio } from '../data/mum';

// Caja de 6 lugares que se va llenando a medida que sumás cookies o alfajores
export default function BoxSlots({ llenos, icono = 'cookie', chico = false }) {
  const n = negocio.tamanoBox;
  const tam = chico ? 'h-9 w-9' : 'h-12 w-12 sm:h-14 sm:w-14';
  return (
    <div
      className={`inline-grid grid-cols-3 gap-1.5 rounded-[14px] border-2 border-choco bg-papel ${chico ? 'p-1.5' : 'p-2 sm:gap-2 sm:p-2.5'}`}
      role="img"
      aria-label={`${llenos} de ${n} lugares llenos`}
    >
      {Array.from({ length: n }, (_, i) => {
        const lleno = i < llenos;
        return (
          <div
            key={i}
            className={`relative grid ${tam} place-items-center rounded-full ${lleno ? '' : 'border-2 border-dashed border-lavanda/70'}`}
          >
            <AnimatePresence>
              {lleno && (
                <motion.span
                  className="absolute inset-0 grid place-items-center rounded-full bg-caramelo text-choco"
                  initial={{ scale: 0, rotate: -40 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                >
                  <Icono nombre={icono} className={chico ? 'h-6 w-6' : 'h-8 w-8 sm:h-9 sm:w-9'} trazo={3} />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
