import { negocio } from '../data/mum';

const PASOS = [
  { t: 'Elegí', d: 'Armá tu box de cookies o alfajores, o elegí tu torta y tu budín.' },
  { t: 'Escribinos', d: `Por WhatsApp al ${negocio.whatsappVisible} o por Instagram. Te pasamos el precio.` },
  {
    t: `Señá el ${negocio.sena}%`,
    d: `Con ${negocio.anticipacion.general} días de anticipación (2 semanas para cookies y alfajores). Efectivo, transferencia o Mercado Pago.`,
  },
  { t: 'Retirá', d: 'En un punto de retiro, en una feria o con nuestro delivery de confianza.' },
];

export default function ComoEncargar() {
  return (
    <section id="encargar" className="bg-rosa py-20 sm:py-28" aria-labelledby="titulo-encargar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 id="titulo-encargar" className="font-display text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[0.9] text-choco">
          Cómo encargar
        </h2>

        <div className="relative mt-14">
          {/* La misma línea continua une los pasos */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-12 w-full text-lavanda lg:block"
            viewBox="0 0 1000 48"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 24C120 4 180 44 260 24S400 4 500 24 660 44 740 24 880 4 960 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PASOS.map((p, i) => (
              <li key={p.t}>
                <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-choco bg-rosa font-display text-3xl font-semibold text-choco">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-4xl font-semibold text-choco">{p.t}</h3>
                <p className="mt-2 max-w-[30ch] text-[17px] leading-relaxed text-choco-soft">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
