import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePedido } from '../context/PedidoContext';
import { negocio } from '../data/mum';
import { Icono } from './Iconos';
import BoxSlots from './BoxSlots';
import { linkWhatsApp } from '../lib/whatsapp';
import { aISO, diaLargo, sumarDias } from '../lib/fechas';
import { getLenis } from '../lib/scroll';

const RETIROS = ['Punto de retiro', 'En una feria', 'Delivery de confianza'];

function armarMensaje({ resumen, fecha, retiro, nombre, nota }) {
  const l = ['¡Hola MUM! 🍪 Quiero hacer este pedido:', ''];
  resumen.porCat.forEach((g) => {
    const titulo = g.cat.enBox
      ? `${g.cat.nombre} (${g.boxes} ${g.boxes === 1 ? 'box' : 'boxes'} de ${negocio.tamanoBox})`
      : g.cat.nombre;
    l.push(`*${titulo}*`);
    g.items.forEach((i) => l.push(`• ${i.nombre} x${i.cantidad}`));
    if (g.faltan > 0) l.push(`(me ${g.faltan === 1 ? 'falta' : 'faltan'} ${g.faltan} para completar el box, ¿me recomendás?)`);
    l.push('');
  });
  if (fecha) l.push(`Para el: ${diaLargo(new Date(`${fecha}T12:00:00`))}`);
  if (retiro) l.push(`Retiro: ${retiro}`);
  if (nombre.trim()) l.push(`Nombre: ${nombre.trim()}`);
  if (nota.trim()) l.push(`Nota: ${nota.trim()}`);
  l.push('', '¿Me pasan el precio y los datos para la seña? 🩷');
  return l.join('\n');
}

function Cantidad({ item }) {
  const { agregar, quitar } = usePedido();
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => quitar(item.cat, item.nombre)}
        className="grid h-9 w-9 place-items-center rounded-full border-2 border-choco/25 text-choco hover:border-choco"
        aria-label={`Quitar un ${item.nombre}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M5 12h14" /></svg>
      </button>
      <span className="w-7 text-center font-display text-lg text-choco">{item.cantidad}</span>
      <button
        type="button"
        onClick={() => agregar(item.cat, item.nombre)}
        className="grid h-9 w-9 place-items-center rounded-full border-2 border-choco/25 text-choco hover:border-choco"
        aria-label={`Sumar otro ${item.nombre}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
      </button>
    </div>
  );
}

export default function Pedido() {
  const { resumen, abierto, setAbierto, vaciar } = usePedido();
  const [fecha, setFecha] = useState('');
  const [retiro, setRetiro] = useState(RETIROS[0]);
  const [nombre, setNombre] = useState('');
  const [nota, setNota] = useState('');

  const minimo = useMemo(() => aISO(sumarDias(new Date(), resumen.diasMinimos)), [resumen.diasMinimos]);
  const fechaValida = !fecha || fecha >= minimo;

  useEffect(() => {
    const lenis = getLenis();
    if (abierto) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = abierto ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [abierto, setAbierto]);

  useEffect(() => {
    if (resumen.total === 0) setAbierto(false);
  }, [resumen.total, setAbierto]);

  const mensaje = armarMensaje({ resumen, fecha: fechaValida ? fecha : '', retiro, nombre, nota });

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
        <AnimatePresence mode="wait" initial={false}>
          {resumen.total > 0 ? (
            <motion.button
              key="pedido"
              type="button"
              onClick={() => setAbierto(true)}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="flex items-center gap-3 rounded-full bg-choco py-3 pl-5 pr-3 font-display text-xl text-rosa shadow-polaroid hover:bg-lavanda-ink"
            >
              <Icono nombre="caja" className="h-7 w-7" trazo={3} />
              Tu pedido
              <motion.span
                key={resumen.total}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                className="grid h-8 min-w-8 place-items-center rounded-full bg-caramelo px-2 text-lg text-choco"
              >
                {resumen.total}
              </motion.span>
            </motion.button>
          ) : (
            <motion.a
              key="wa"
              href={linkWhatsApp('¡Hola MUM! 🍪 Quiero hacer un pedido.')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-choco text-rosa shadow-polaroid hover:bg-lavanda-ink"
              aria-label="Escribinos por WhatsApp"
            >
              <Icono nombre="whatsapp" className="h-8 w-8" trazo={3.2} />
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Panel del pedido */}
      <AnimatePresence>
        {abierto && (
          <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="titulo-pedido">
            <motion.div
              className="absolute inset-0 bg-choco/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAbierto(false)}
            />
            <motion.aside
              className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-rosa text-choco shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <header className="flex items-center justify-between border-b-2 border-dashed border-lavanda/70 px-5 py-4 sm:px-6">
                <h2 id="titulo-pedido" className="font-display text-4xl font-semibold">Tu pedido</h2>
                <button
                  type="button"
                  onClick={() => setAbierto(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-choco"
                  aria-label="Cerrar el pedido"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
              </header>

              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6" data-lenis-prevent>
                {resumen.porCat.map((g) => (
                  <section key={g.cat.id} className="mb-7">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold">{g.cat.nombre}</h3>
                      {g.cat.enBox && (
                        <span className="text-sm text-choco-soft">
                          {g.boxes} {g.boxes === 1 ? 'box' : 'boxes'} de {negocio.tamanoBox}
                        </span>
                      )}
                    </div>
                    {g.cat.enBox && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {Array.from({ length: g.boxes }, (_, i) => (
                          <BoxSlots
                            key={i}
                            chico
                            icono={g.cat.icono}
                            llenos={Math.min(negocio.tamanoBox, g.unidades - i * negocio.tamanoBox)}
                          />
                        ))}
                      </div>
                    )}
                    {g.faltan > 0 && (
                      <p className="mt-2 rounded-xl bg-caramelo/40 px-3 py-2 text-sm leading-snug">
                        Te {g.faltan === 1 ? 'falta' : 'faltan'} {g.faltan} para completar el box. Podés mandarlo igual y te
                        recomendamos sabores.
                      </p>
                    )}
                    <ul className="mt-3 divide-y divide-choco/10">
                      {g.items.map((i) => (
                        <li key={i.nombre} className="flex items-center justify-between gap-3 py-2.5">
                          <span className="text-[15px] leading-snug">{i.nombre}</span>
                          <Cantidad item={i} />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                <div className="space-y-5 border-t-2 border-dashed border-lavanda/70 pt-6">
                  <div>
                    <label htmlFor="pedido-fecha" className="font-display text-xl font-semibold">¿Para cuándo?</label>
                    <input
                      id="pedido-fecha"
                      type="date"
                      min={minimo}
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-choco/20 bg-papel px-3 py-2.5 text-base focus:border-choco focus:outline-none"
                      aria-describedby="ayuda-fecha"
                    />
                    <p id="ayuda-fecha" className={`mt-1.5 text-sm ${fechaValida ? 'text-choco-soft' : 'font-semibold text-[#A3392B]'}`}>
                      {fechaValida
                        ? `Lo más pronto: ${diaLargo(new Date(`${minimo}T12:00:00`))} (${resumen.diasMinimos === 14 ? 'cookies y alfajores se encargan con 2 semanas' : 'encargamos con 10 días'}).`
                        : `Para esa fecha no llegamos. Elegí desde el ${diaLargo(new Date(`${minimo}T12:00:00`))} o escribinos igual y vemos.`}
                    </p>
                  </div>

                  <fieldset>
                    <legend className="font-display text-xl font-semibold">¿Cómo lo retirás?</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {RETIROS.map((r) => (
                        <label
                          key={r}
                          className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-lavanda-ink ${
                            retiro === r ? 'border-choco bg-choco text-rosa' : 'border-choco/25 hover:border-choco'
                          }`}
                        >
                          <input type="radio" name="retiro" value={r} checked={retiro === r} onChange={() => setRetiro(r)} className="sr-only" />
                          {r}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="pedido-nombre" className="font-display text-xl font-semibold">Tu nombre</label>
                    <input
                      id="pedido-nombre"
                      type="text"
                      autoComplete="given-name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-choco/20 bg-papel px-3 py-2.5 text-base focus:border-choco focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="pedido-nota" className="font-display text-xl font-semibold">¿Algo más?</label>
                    <textarea
                      id="pedido-nota"
                      rows={3}
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      placeholder="Temática, dedicatoria, si es para regalo, si lo querés vegano..."
                      className="mt-2 w-full resize-none rounded-xl border-2 border-choco/20 bg-papel px-3 py-2.5 text-base placeholder:text-choco-soft/70 focus:border-choco focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <footer className="border-t-2 border-dashed border-lavanda/70 px-5 py-4 sm:px-6">
                <a
                  href={linkWhatsApp(mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-choco px-6 py-4 font-display text-xl text-rosa hover:bg-lavanda-ink"
                >
                  <Icono nombre="whatsapp" className="h-6 w-6" trazo={3.4} />
                  Enviar pedido por WhatsApp
                </a>
                <div className="mt-3 flex items-center justify-between gap-4 text-sm text-choco-soft">
                  <p>Te respondemos con el precio. Se reserva con el {negocio.sena}%.</p>
                  <button type="button" onClick={vaciar} className="shrink-0 font-semibold underline underline-offset-4 hover:text-choco">
                    Vaciar
                  </button>
                </div>
              </footer>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
