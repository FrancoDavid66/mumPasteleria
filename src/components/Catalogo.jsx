import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categorias, negocio } from '../data/mum';
import { usePedido } from '../context/PedidoContext';
import { Icono, Estrella } from './Iconos';
import Polaroid from './Polaroid';
import BoxSlots from './BoxSlots';

function Sumar({ cat, nombre }) {
  const { cantidadDe, agregar, quitar } = usePedido();
  const cant = cantidadDe(cat, nombre);
  if (cant === 0) {
    return (
      <button
        type="button"
        onClick={() => agregar(cat, nombre)}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-lavanda-ink text-lavanda-ink transition-colors hover:bg-lavanda-ink hover:text-rosa"
        aria-label={`Sumar ${nombre} al pedido`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    );
  }
  return (
    <div className="flex h-11 shrink-0 items-center rounded-full bg-choco text-rosa">
      <button
        type="button"
        onClick={() => quitar(cat, nombre)}
        className="grid h-11 w-10 place-items-center rounded-l-full hover:bg-lavanda-ink"
        aria-label={`Quitar un ${nombre}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <path d="M5 12h14" />
        </svg>
      </button>
      <span className="min-w-6 text-center font-display text-lg" aria-live="polite">
        {cant}
      </span>
      <button
        type="button"
        onClick={() => agregar(cat, nombre)}
        className="grid h-11 w-10 place-items-center rounded-r-full hover:bg-lavanda-ink"
        aria-label={`Sumar otro ${nombre}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
}

function Sabor({ cat, s }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-choco/10 py-4">
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-[22px] font-semibold leading-tight text-choco">
          {s.n}
          {s.vegano && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#DCEFD9] px-2 py-0.5 font-sans text-xs font-semibold text-[#2F5D2C]">
              <Icono nombre="hoja" className="h-3.5 w-3.5" trazo={4} />
              Vegano
            </span>
          )}
          {s.nuevo && (
            <span className="rounded-full bg-lavanda px-2 py-0.5 font-sans text-xs font-semibold text-white">Nuevo</span>
          )}
        </p>
        {s.d && <p className="mt-1 max-w-[46ch] text-[15px] leading-snug text-choco-soft">{s.d}</p>}
      </div>
      <Sumar cat={cat} nombre={s.n} />
    </li>
  );
}

// Lista en dos columnas con la línea punteada lavanda del catálogo
function DosColumnas({ children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-6 left-1/2 top-6 hidden border-l-2 border-dashed border-lavanda/80 md:block" />
      <ul className="grid md:grid-cols-2 md:gap-x-16">{children}</ul>
    </div>
  );
}

function EstadoBox({ cat }) {
  const { resumen, setAbierto } = usePedido();
  const g = resumen.porCat.find((x) => x.cat.id === cat.id);
  const unidades = g?.unidades || 0;
  const tam = negocio.tamanoBox;
  const enEste = unidades === 0 ? 0 : unidades % tam === 0 ? tam : unidades % tam;
  const boxes = g?.boxes || 0;

  let texto;
  if (unidades === 0) texto = `Sumá ${tam} ${cat.unidad === 'cookie' ? 'cookies' : 'alfajores'} y combiná los sabores que quieras.`;
  else if (g.faltan > 0) texto = `Te ${g.faltan === 1 ? 'falta' : 'faltan'} ${g.faltan} para completar ${boxes > 1 ? `el box ${boxes}` : 'el box'}.`;
  else texto = boxes === 1 ? '¡Box completo! Podés seguir sumando para otro.' : `¡${boxes} boxes completos!`;

  return (
    <div className="mb-8 flex flex-col gap-5 rounded-[28px] bg-chicle/70 p-5 sm:flex-row sm:items-center sm:p-6">
      <BoxSlots llenos={enEste} icono={cat.icono} />
      <div className="flex-1">
        <p className="font-display text-[28px] font-semibold leading-none text-choco">
          Tu box de {cat.nombre.toLowerCase()}
          {boxes > 1 && <span className="text-choco-soft"> ({boxes})</span>}
        </p>
        <p className="mt-2 text-[15px] leading-snug text-choco-soft" aria-live="polite">
          {texto}
        </p>
        {unidades > 0 && (
          <button
            type="button"
            onClick={() => setAbierto(true)}
            className="mt-3 font-sans text-[15px] font-semibold text-lavanda-ink underline underline-offset-4"
          >
            Ver mi pedido
          </button>
        )}
      </div>
    </div>
  );
}

export default function Catalogo() {
  const { tab, setTab } = usePedido();
  const cat = useMemo(() => categorias.find((c) => c.id === tab) || categorias[0], [tab]);

  return (
    <section id="catalogo" className="relative overflow-x-clip bg-rosa py-20 sm:py-28" aria-labelledby="titulo-catalogo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="titulo-catalogo" className="font-display text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[0.9] text-choco">
              El catálogo
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-choco-soft">
              Elegí sabores y sumalos a tu pedido. Cuando esté listo lo mandás por WhatsApp y te pasamos el precio.
            </p>
          </div>
          <a
            href={negocio.catalogoPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start font-sans text-[15px] font-semibold text-choco underline decoration-lavanda decoration-2 underline-offset-[6px] hover:decoration-choco lg:self-auto"
          >
            Ver el catálogo en PDF
          </a>
        </div>

        {/* Pestañas */}
        <div
          className="-mx-4 mt-10 overflow-x-auto px-4 sm:mx-0 sm:px-0"
          data-lenis-prevent-wheel
          style={{ scrollbarWidth: 'none' }}
        >
          <div role="tablist" aria-label="Categorías" className="flex min-w-max gap-1 border-b-2 border-choco/10 sm:gap-2">
            {categorias.map((c) => {
              const activo = c.id === tab;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={activo}
                  aria-controls="panel-catalogo"
                  onClick={() => setTab(c.id)}
                  className={`relative flex items-center gap-2.5 px-3 pb-4 pt-2 font-display text-xl font-semibold transition-colors sm:px-4 sm:text-2xl ${
                    activo ? 'text-choco' : 'text-choco-soft/80 hover:text-choco'
                  }`}
                >
                  <Icono key={activo ? `${c.id}-on` : c.id} nombre={c.icono} className="h-8 w-8" trazo={2.6} dibujar={activo} />
                  {c.nombre}
                  {activo && (
                    <motion.span
                      layoutId="tab-linea"
                      className="absolute inset-x-2 -bottom-[2px] h-[3px] rounded-full bg-choco"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            id="panel-catalogo"
            role="tabpanel"
            aria-labelledby={`tab-${cat.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14"
          >
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="relative mx-auto max-w-[300px] pb-6 sm:max-w-[380px]">
                  {/* Órbita lavanda con estrellitas, como en el catálogo */}
                  <svg className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-lavanda" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="50" cy="50" rx="47" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(-28 50 50)" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
                  </svg>
                  <Estrella className="absolute -left-2 top-[30%] z-10 h-6 w-6 text-lavanda" />
                  <Estrella className="absolute -right-3 bottom-[22%] z-10 h-7 w-7 text-lavanda" />
                  <Polaroid {...cat.fotos[0]} giro={-3} className="relative w-[82%]" />
                  {cat.fotos[1] && (
                    <Polaroid {...cat.fotos[1]} giro={5} className="absolute -bottom-2 right-0 w-[48%]" />
                  )}
                </div>

                <p className="mt-10 font-display text-[30px] font-semibold leading-tight text-choco">{cat.bajada}</p>
                <ul className="mt-5 space-y-3">
                  {cat.datos.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-snug text-choco-soft">
                      <Estrella className="mt-1 h-3.5 w-3.5 shrink-0 text-lavanda-ink" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8">
              {cat.enBox && <EstadoBox cat={cat} />}

              {cat.sabores && (
                <DosColumnas>
                  {cat.sabores.map((s) => (
                    <Sabor key={s.n} cat={cat.id} s={s} />
                  ))}
                </DosColumnas>
              )}

              {cat.grupos && (
                <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
                  {cat.grupos.map((g) => (
                    <div key={g.titulo}>
                      <h3 className="font-display text-4xl font-semibold text-choco">{g.titulo}</h3>
                      <p className="mt-1 text-[15px] text-choco-soft">{g.detalle}</p>
                      <ul className="mt-2">
                        {g.sabores.map((s) => (
                          <li key={s} className="flex items-center justify-between gap-4 border-b border-choco/10 py-3">
                            <span className="font-display text-xl font-medium text-choco">{s}</span>
                            <Sumar cat={cat.id} nombre={`${g.titulo}: ${s}`} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
