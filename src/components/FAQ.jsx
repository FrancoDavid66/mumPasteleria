import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { preguntas } from '../data/mum';

function Pregunta({ p, r, abierta, onToggle, id }) {
  return (
    <li className="border-b-2 border-dashed border-lavanda/60">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={abierta}
          aria-controls={`r-${id}`}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[26px] font-semibold leading-tight text-choco sm:text-3xl"
        >
          {p}
          <motion.span animate={{ rotate: abierta ? 45 : 0 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-chicle">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {abierta && (
          <motion.div
            id={`r-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-[17px] leading-relaxed text-choco-soft">{r}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQ() {
  const [abierta, setAbierta] = useState(0);
  return (
    <section id="preguntas" className="bg-rosa pb-24 sm:pb-32" aria-labelledby="titulo-faq">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <h2 id="titulo-faq" className="font-display text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.9] text-choco lg:col-span-4">
          Preguntas frecuentes
        </h2>
        <ul className="lg:col-span-8">
          {preguntas.map((q, i) => (
            <Pregunta key={q.p} id={i} {...q} abierta={abierta === i} onToggle={() => setAbierta(abierta === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </section>
  );
}
