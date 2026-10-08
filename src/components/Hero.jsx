import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Polaroid from './Polaroid';
import { Estrella, Icono } from './Iconos';
import { fotosHero, fechasEspeciales, negocio } from '../data/mum';
import { proximasFechas, diaLargo, textoLimite } from '../lib/fechas';
import { usePedido } from '../context/PedidoContext';
import { irA } from '../lib/scroll';

// La línea continua que cruza el hero y hace un corazón (como sus destacadas de IG)
const LINEA_MOVIL =
  'M-10 650C80 662 170 608 240 584C270 574 296 572 318 572C301 561 290 550 290 537C290 529 296 523 302.6 523C309 523 315 527 318 533C321 527 327 523 333.4 523C340 523 346 529 346 537C346 550 335 561 318 572C345 574 372 582 400 572';

const LINEA =
  'M-20 610C120 598 220 648 330 626C420 608 470 566 520 566C548 566 576 578 600 590C552 558 520 526 520 490C520 466 536 450 556 450C576 450 592 462 600 478C608 462 624 450 644 450C664 450 680 466 680 490C680 526 648 558 600 590C660 592 724 600 784 560C864 504 824 380 904 300C984 220 1084 238 1224 138';

export default function Hero({ listo }) {
  const { setTab } = usePedido();
  const reducir = useReducedMotion();
  const proxima = useMemo(() => proximasFechas(fechasEspeciales, negocio.anticipacion.general)[0], []);

  const armarBox = () => {
    setTab('cookies');
    irA('catalogo');
  };

  const entrada = (i) =>
    reducir
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: listo ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden bg-rosa pb-10 pt-28 sm:pt-32 lg:min-h-[100svh] lg:pb-10">
      {/* Línea que se dibuja sola (una versión para compu y otra para celu) */}
      {[
        { d: LINEA, vb: '0 0 1200 700', cls: 'hidden lg:block inset-0 h-full w-full', par: 'xMidYMid slice' },
        { d: LINEA_MOVIL, vb: '0 0 390 900', cls: 'sm:hidden left-0 top-0 h-[900px] w-[390px]', par: 'xMinYMin meet' },
      ].map((l) => (
        <svg
          key={l.vb}
          className={`pointer-events-none absolute text-choco ${l.cls}`}
          viewBox={l.vb}
          preserveAspectRatio={l.par}
          aria-hidden="true"
        >
          <motion.path
            d={l.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: reducir ? 1 : 0 }}
            animate={{ pathLength: listo || reducir ? 1 : 0 }}
            transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          />
        </svg>
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.h1
            {...entrada(0)}
            className="font-display text-[clamp(4rem,12.5vw,8.25rem)] font-semibold leading-[0.95] text-choco lg:text-[clamp(5rem,8.6vw,8.25rem)]"
          >
            <span className="sr-only">MUM Baking House, pastelería artesanal: </span>
            <span className="block">Ricas.</span>
            <span className="block">Rellenas.</span>
            <span className="block">Originales.</span>
          </motion.h1>

          <motion.p {...entrada(1)} className="mt-7 max-w-[34ch] text-lg leading-relaxed text-choco-soft sm:text-xl">
            Cookies NY, alfajores de especialidad, tortas y budines hechos a mano por una pastelera profesional y mamá
            emprendedora. Encargás por WhatsApp y retirás en {negocio.zona}.
          </motion.p>

          <motion.div {...entrada(2)} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <button
              type="button"
              onClick={armarBox}
              className="rounded-full bg-choco px-7 py-4 font-display text-xl font-medium text-rosa transition-colors hover:bg-lavanda-ink"
            >
              Armá tu box de 6
            </button>
            <button
              type="button"
              onClick={() => irA('catalogo')}
              className="font-sans text-lg font-semibold text-choco underline decoration-lavanda decoration-2 underline-offset-[7px] hover:decoration-choco"
            >
              Ver todo el catálogo
            </button>
          </motion.div>
        </div>

        {/* Collage de polaroids */}
        <div className="relative mx-auto aspect-[1/1.04] w-full max-w-[560px] lg:col-span-6 lg:max-w-none xl:aspect-[1/0.96]">
          {fotosHero.map((f, i) => {
            const pos = [
              'left-[0%] top-[7%] w-[47%] z-10',
              'right-[1%] top-[0%] w-[44%] z-20',
              'left-[35%] top-[46%] w-[37%] z-30',
            ][i];
            const giro = [-6, 5, -2][i];
            return (
              <motion.div
                key={f.pie}
                className={`absolute ${pos}`}
                initial={reducir ? false : { opacity: 0, y: 40, rotate: giro * 2 }}
                animate={listo || reducir ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Polaroid {...f} giro={giro} carga="eager" prioridad={i === 0} />
              </motion.div>
            );
          })}

          <Estrella className="absolute left-[46%] top-[1%] h-7 w-7 text-lavanda" />
          <Estrella className="absolute bottom-[14%] right-[6%] h-5 w-5 text-lavanda" />
          <Estrella className="absolute bottom-[30%] left-[4%] h-4 w-4 text-lavanda" />

          {/* Sticker con la próxima fecha especial (se calcula solo) */}
          {proxima && (
            <motion.button
              type="button"
              onClick={() => irA('fechas')}
              className="absolute bottom-[-2%] right-[-3%] z-40 hidden w-[31%] max-w-[210px] rotate-[7deg] rounded-[48%_52%_46%_54%/52%_46%_54%_48%] bg-caramelo px-4 py-7 text-center text-choco shadow-polaroid transition-transform hover:rotate-[3deg] lg:block"
              initial={reducir ? false : { scale: 0.6, opacity: 0 }}
              animate={listo || reducir ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 1.2 }}
            >
              <span className="block font-sans text-sm font-medium sm:text-[15px]">Se viene</span>
              <span className="block font-display text-[28px] font-semibold leading-none">{proxima.nombre}</span>
              <span className="mt-1 block font-sans text-[13px] leading-snug sm:text-sm">{diaLargo(proxima.fecha)}</span>
              <span className="mt-2 block font-sans text-[13px] font-semibold leading-snug underline decoration-choco/40 underline-offset-4 sm:text-sm">
                {textoLimite(proxima)}
              </span>
            </motion.button>
          )}
        </div>

        {proxima && (
          <button
            type="button"
            onClick={() => irA('fechas')}
            className="-mt-4 flex items-center gap-4 rounded-[24px] bg-caramelo px-5 py-4 text-left text-choco shadow-polaroid lg:hidden"
          >
            <Icono nombre={proxima.icono} className="h-11 w-11 shrink-0" trazo={2.6} />
            <span>
              <span className="block font-display text-2xl font-semibold leading-none">Se viene el {proxima.nombre}</span>
              <span className="mt-1 block text-sm">
                <span className="capitalize-first inline-block">{diaLargo(proxima.fecha)}</span>. {textoLimite(proxima)}.
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
