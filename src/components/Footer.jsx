import Logo from './Logo';
import { Icono } from './Iconos';
import { negocio } from '../data/mum';
import { linkWhatsApp } from '../lib/whatsapp';

export default function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-chicle pb-10 pt-20 text-choco">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Logo conBajada className="mx-auto w-full max-w-3xl" trazo={4} />

        <div className="mt-16 grid gap-10 border-t-2 border-dashed border-lavanda/70 pt-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">Pedidos</p>
            <a
              href={linkWhatsApp('¡Hola MUM! 🍪 Quiero hacer un pedido.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-lg font-medium hover:underline"
            >
              <Icono nombre="whatsapp" className="h-6 w-6" trazo={3.2} />
              {negocio.whatsappVisible}
            </a>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold">Seguinos</p>
            <a
              href={negocio.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-lg font-medium hover:underline"
            >
              <Icono nombre="instagram" className="h-6 w-6" trazo={3.2} />@{negocio.instagram}
            </a>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold">Catálogo</p>
            <a href={negocio.catalogoPdf} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-lg font-medium hover:underline">
              Descargalo en PDF
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-sm text-choco-soft sm:flex-row sm:justify-between">
          <p>Pastelería artesanal en {negocio.zona}. Hecha a mano, con amor de mamá.</p>
          <p>© {anio} {negocio.nombre}</p>
        </div>
      </div>
    </footer>
  );
}
