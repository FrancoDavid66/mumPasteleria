import { useMemo } from 'react';
import { fechasEspeciales, negocio } from '../data/mum';
import { proximasFechas, diaLargo, textoLimite } from '../lib/fechas';
import { Icono } from './Iconos';
import Polaroid from './Polaroid';
import { usePedido } from '../context/PedidoContext';
import { irA } from '../lib/scroll';

export default function Fechas() {
  const { setTab } = usePedido();
  const fechas = useMemo(() => proximasFechas(fechasEspeciales, negocio.anticipacion.general), []);
  const [proxima, ...resto] = fechas;

  const verCatalogo = () => {
    setTab('fechas');
    irA('catalogo');
  };

  return (
    <section id="fechas" className="bg-rosa py-20 sm:py-28" aria-labelledby="titulo-fechas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 id="titulo-fechas" className="font-display text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[0.9] text-choco">
          Fechas especiales
        </h2>
        <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-choco-soft">
          Encargá con {negocio.anticipacion.general} días de anticipación: en estas fechas los cupos vuelan.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* La que viene */}
          <article className="relative grid gap-8 rounded-[36px] bg-caramelo/45 p-6 sm:grid-cols-[1fr_auto] sm:p-10 lg:col-span-7">
            <div className="flex flex-col">
              <p className="font-sans text-base font-semibold text-choco-soft">
                Se viene en {proxima.faltan} {proxima.faltan === 1 ? 'día' : 'días'}
              </p>
              <h3 className="mt-2 font-display text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-[0.9] text-choco">{proxima.nombre}</h3>
              <p className="mt-3 text-lg capitalize-first text-choco">{diaLargo(proxima.fecha)}</p>
              <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-choco-soft">{proxima.que}</p>
              <p className="mt-6 inline-flex self-start rounded-full bg-choco px-4 py-2 text-[15px] font-semibold text-rosa">
                {textoLimite(proxima)}
              </p>
            </div>
            {proxima.foto && (
              <Polaroid src={proxima.foto} alt={`${proxima.nombre}: ${proxima.pie}`} pie={proxima.pie} giro={4} className="w-44 justify-self-center sm:w-52" />
            )}
          </article>

          {/* El resto del año */}
          <ul className="lg:col-span-5">
            {resto.map((f) => (
              <li key={f.id} className="flex items-center gap-5 border-b-2 border-dashed border-lavanda/60 py-5 first:pt-0">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-chicle text-choco">
                  <Icono nombre={f.icono} className="h-10 w-10" trazo={2.6} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[28px] font-semibold leading-none text-choco">{f.nombre}</h3>
                  <p className="mt-1.5 text-[15px] text-choco-soft">
                    <span className="capitalize-first inline-block">{diaLargo(f.fecha)}</span>. {f.que}
                  </p>
                </div>
              </li>
            ))}
            <li className="pt-6">
              <button
                type="button"
                onClick={verCatalogo}
                className="font-sans text-lg font-semibold text-choco underline decoration-lavanda decoration-2 underline-offset-[7px] hover:decoration-choco"
              >
                Ver pan dulce, turrones y huevos de Pascua
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
