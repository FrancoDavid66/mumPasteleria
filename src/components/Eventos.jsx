import { Fragment } from 'react';
import Polaroid from './Polaroid';
import { Estrella } from './Iconos';
import { decoradas, tortasDecoradas } from '../data/mum';
import { linkWhatsApp } from '../lib/whatsapp';

const MSJ_COOKIES =
  '¡Hola MUM! 🍪 Quiero cookies decoradas.\nTemática: \nCantidad: \nPara el día: ';
const MSJ_TORTA =
  '¡Hola MUM! 🎂 Quiero presupuestar una torta decorada.\nPorciones: \nSabor: \nTemática o idea: \nPara el día: ';

const Boton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex rounded-full bg-choco px-7 py-4 font-display text-xl text-rosa transition-colors hover:bg-lavanda-ink"
  >
    {children}
  </a>
);

export default function Eventos() {
  return (
    <section id="eventos" className="relative overflow-hidden bg-chicle py-20 sm:py-28" aria-labelledby="titulo-eventos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 id="titulo-eventos" className="font-display text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[0.9] text-choco">
          Para tus eventos
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-choco-soft">
          Cumpleaños, casamientos, divorcios, egresados… y cualquier cosa que tengas ganas de festejar.
        </p>

        {/* Cookies decoradas */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-5xl font-semibold leading-[0.95] text-choco">Cookies decoradas con la temática que quieras</h3>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-choco-soft">
              Masa de vainilla con glasé o pasta de azúcar, envueltas una por una. También hacemos alfajores decorados.
            </p>
            <p className="mt-7 font-display text-2xl font-semibold text-choco">Las más pedidas</p>
            <p className="mt-3 max-w-[48ch] text-[17px] leading-[1.9] text-choco">
              {decoradas.tematicas.map((t, i) => (
                <Fragment key={t}>
                  <span className="whitespace-nowrap">{t}</span>
                  {i < decoradas.tematicas.length - 1 && (
                    <Estrella className="mx-2 inline h-2.5 w-2.5 -translate-y-px text-lavanda-ink" />
                  )}
                </Fragment>
              ))}
              <span className="whitespace-nowrap">, y lo que se te ocurra.</span>
            </p>
            <Boton href={linkWhatsApp(MSJ_COOKIES)}>Contanos tu temática</Boton>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7 lg:pl-6">
            {decoradas.fotos.map((f, i) => (
              <Polaroid key={f.pie} {...f} giro={[-4, 3, 2, -3][i]} className={i % 2 ? 'mt-10' : ''} />
            ))}
          </div>
        </div>

        {/* Tortas decoradas */}
        <div className="mt-28 grid items-center gap-14 lg:grid-cols-12">
          <div className="order-2 grid grid-cols-3 items-start gap-3 sm:gap-5 lg:order-1 lg:col-span-7 lg:pr-6">
            {tortasDecoradas.fotos.map((f, i) => (
              <Polaroid
                key={f.pie}
                {...f}
                giro={[-3, 4, -2][i]}
                className={['mt-0', 'mt-12', 'mt-4'][i]}
                aspecto={i === 2 ? 'aspect-[2/3]' : 'aspect-[4/5]'}
              />
            ))}
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <h3 className="font-display text-5xl font-semibold leading-[0.95] text-choco">Tortas decoradas a medida</h3>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-choco-soft">
              No se cobran por kilo: las presupuestamos según las porciones y el diseño. Elegí el sabor del catálogo y
              contanos la idea, nosotras la dibujamos.
            </p>
            <Boton href={linkWhatsApp(MSJ_TORTA)}>Pedí presupuesto</Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
