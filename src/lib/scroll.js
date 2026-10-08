// Scroll suave compartido (Lenis). Si Lenis no está, usa el scroll nativo.
let lenis = null;
export const setLenis = (l) => { lenis = l; };
export const getLenis = () => lenis;

export const irA = (id) => {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
