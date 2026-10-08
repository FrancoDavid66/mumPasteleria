import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo';

// Pantalla de entrada: el palote de MUM se dibuja solo con una línea.
// Se muestra una vez por visita.
const yaVisto = () => {
  try {
    return sessionStorage.getItem('mum-loader') === '1';
  } catch {
    return false;
  }
};

export default function Loader({ onTermina }) {
  const reducir = useReducedMotion();
  const [visible, setVisible] = useState(() => !yaVisto() && !reducir);

  useEffect(() => {
    if (!visible) {
      onTermina?.();
      return;
    }
    document.documentElement.style.overflow = 'hidden';
    const seguro = setTimeout(() => setVisible(false), 4000); // por si algo falla
    return () => {
      clearTimeout(seguro);
      document.documentElement.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const listo = () => {
    try {
      sessionStorage.setItem('mum-loader', '1');
    } catch {
      /* sin storage, no pasa nada */
    }
    setTimeout(() => setVisible(false), 380);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rosa text-choco"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <Logo animado duracion={1.5} trazo={5} className="w-[min(70vw,360px)]" onListo={listo} />
          <motion.p
            className="mt-5 font-display text-lg tracking-[0.4em] text-choco-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            BAKING HOUSE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
