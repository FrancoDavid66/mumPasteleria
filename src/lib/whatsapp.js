import { negocio } from '../data/mum';

export const linkWhatsApp = (texto) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const abrirWhatsApp = (texto) => {
  window.open(linkWhatsApp(texto), '_blank', 'noopener');
};
