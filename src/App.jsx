import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { PedidoProvider } from './context/PedidoContext';
import { setLenis } from './lib/scroll';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import Eventos from './components/Eventos';
import Fechas from './components/Fechas';
import Ferias from './components/Ferias';
import ComoEncargar from './components/ComoEncargar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Pedido from './components/Pedido';

export default function App() {
  const [listo, setListo] = useState(false);

  // Scroll suave
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    setLenis(lenis);
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <PedidoProvider>
      <Loader onTermina={() => setListo(true)} />
      <a href="#catalogo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-choco focus:px-4 focus:py-2 focus:text-rosa">
        Ir al catálogo
      </a>
      <header>
        <Navbar />
      </header>
      <main className="font-sans text-choco">
        <Hero listo={listo} />
        <Catalogo />
        <Eventos />
        <Fechas />
        <Ferias />
        <ComoEncargar />
        <FAQ />
      </main>
      <Footer />
      <Pedido />
    </PedidoProvider>
  );
}
