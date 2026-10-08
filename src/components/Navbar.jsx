import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { Icono } from './Iconos';
import { usePedido } from '../context/PedidoContext';
import { irA, getLenis } from '../lib/scroll';
import { linkWhatsApp } from '../lib/whatsapp';

const LINKS = [
  { id: 'catalogo', texto: 'Catálogo' },
  { id: 'eventos', texto: 'Para eventos' },
  { id: 'fechas', texto: 'Fechas especiales' },
  { id: 'ferias', texto: 'Ferias' },
  { id: 'encargar', texto: 'Cómo encargar' },
];

export default function Navbar() {
  const { resumen, setAbierto } = usePedido();
  const [scrolleado, setScrolleado] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolleado(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (menu) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = menu ? 'hidden' : '';
  }, [menu]);

  const ir = (id) => {
    setMenu(false);
    setTimeout(() => irA(id), menu ? 260 : 0);
  };

  const cta =
    resumen.total > 0 ? (
      <button
        type="button"
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-2 rounded-full bg-choco px-5 py-2.5 font-display text-lg text-rosa transition-colors hover:bg-lavanda-ink"
      >
        Tu pedido
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-rosa px-1.5 text-sm text-choco">{resumen.total}</span>
      </button>
    ) : (
      <a
        href={linkWhatsApp('¡Hola MUM! 🍪 Quiero hacer un pedido.')}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-choco px-5 py-2.5 font-display text-lg text-rosa transition-colors hover:bg-lavanda-ink"
      >
        <Icono nombre="whatsapp" className="h-5 w-5" trazo={3.4} />
        Pedí por WhatsApp
      </a>
    );

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
          scrolleado ? 'bg-rosa/90 py-2.5 shadow-[0_1px_0_rgba(87,58,46,0.08)] backdrop-blur-md' : 'py-4'
        }`}
        aria-label="Principal"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <button type="button" onClick={() => irA(document.body)} className="text-choco" aria-label="Ir al inicio">
            <Logo className="h-9 w-auto sm:h-10" trazo={7} />
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => ir(l.id)}
                  className="font-sans text-[15px] font-medium text-choco underline-offset-[6px] hover:underline"
                >
                  {l.texto}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">{cta}</div>

          <div className="flex items-center gap-2 lg:hidden">
            {resumen.total > 0 && (
              <button
                type="button"
                onClick={() => setAbierto(true)}
                className="grid h-11 min-w-11 place-items-center rounded-full bg-choco px-3 font-display text-lg text-rosa"
                aria-label={`Ver tu pedido, ${resumen.total} productos`}
              >
                {resumen.total}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-choco text-choco"
              aria-expanded={menu}
              aria-controls="menu-movil"
              aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8c5-1.5 11 1.5 16 0M4 16c5-1.5 11 1.5 16 0" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            id="menu-movil"
            className="fixed inset-0 z-40 flex flex-col bg-chicle px-6 pb-10 pt-24 lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button type="button" onClick={() => ir(l.id)} className="font-display text-5xl font-semibold text-choco">
                    {l.texto}
                  </button>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(false)}>{cta}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
