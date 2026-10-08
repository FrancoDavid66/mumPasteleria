import { ferias, negocio } from '../data/mum';
import { Icono, Estrella } from './Iconos';

export default function Ferias() {
  return (
    <section id="ferias" className="relative overflow-hidden bg-choco py-20 text-rosa sm:py-28" aria-labelledby="titulo-ferias">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Icono nombre="carpa" className="h-20 w-20 text-caramelo" trazo={2.2} />
          <h2 id="titulo-ferias" className="mt-6 font-display text-[clamp(3.4rem,8vw,5rem)] font-semibold leading-[0.92]">
            Dónde encontrarnos
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-rosa/80">
            No tenemos local a la calle: estamos en ferias. Podés encargar y retirar ahí, en un punto de retiro o con
            nuestro delivery de confianza.
          </p>
          <a
            href={negocio.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-rosa px-6 py-3.5 font-display text-xl text-choco transition-colors hover:bg-caramelo"
          >
            <Icono nombre="instagram" className="h-6 w-6" trazo={3.4} />
            Las fechas, en @{negocio.instagram}
          </a>
        </div>

        <ul className="lg:col-span-7 lg:pt-4">
          {ferias.map((f) => (
            <li
              key={f.nombre}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b-2 border-dashed border-lavanda/50 py-6 first:pt-0 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
            >
              <p className="font-display text-[clamp(2.2rem,4.5vw,3.25rem)] font-semibold leading-none">{f.nombre}</p>
              <div className="col-span-2 text-[15px] leading-snug text-rosa/75 sm:col-span-1">
                <p className="text-rosa">{f.cuando}</p>
                <p>{f.donde}</p>
                {f.nota && (
                  <p className="mt-1 inline-flex items-center gap-1.5 font-semibold text-caramelo">
                    <Estrella className="h-3 w-3" />
                    {f.nota}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
