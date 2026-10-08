import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { categorias, negocio } from '../data/mum';

const PedidoContext = createContext(null);

const catPorId = Object.fromEntries(categorias.map((c) => [c.id, c]));

export function PedidoProvider({ children }) {
  const [items, setItems] = useState({}); // { 'cookies:Nutella': { cat, nombre, cantidad } }
  const [abierto, setAbierto] = useState(false);
  const [tab, setTab] = useState('cookies');

  const agregar = useCallback((cat, nombre) => {
    setItems((prev) => {
      const key = `${cat}:${nombre}`;
      const actual = prev[key]?.cantidad || 0;
      return { ...prev, [key]: { cat, nombre, cantidad: actual + 1 } };
    });
  }, []);

  const quitar = useCallback((cat, nombre) => {
    setItems((prev) => {
      const key = `${cat}:${nombre}`;
      const actual = prev[key]?.cantidad || 0;
      if (actual <= 1) {
        const copia = { ...prev };
        delete copia[key];
        return copia;
      }
      return { ...prev, [key]: { ...prev[key], cantidad: actual - 1 } };
    });
  }, []);

  const vaciar = useCallback(() => setItems({}), []);

  const resumen = useMemo(() => {
    const lista = Object.values(items);
    const porCat = categorias
      .map((c) => {
        const delCat = lista.filter((i) => i.cat === c.id);
        const unidades = delCat.reduce((s, i) => s + i.cantidad, 0);
        const boxes = c.enBox ? Math.ceil(unidades / negocio.tamanoBox) : 0;
        const faltan = c.enBox ? boxes * negocio.tamanoBox - unidades : 0;
        return { cat: c, items: delCat, unidades, boxes, faltan };
      })
      .filter((g) => g.unidades > 0);
    const total = lista.reduce((s, i) => s + i.cantidad, 0);
    const conBox = porCat.some((g) => g.cat.enBox);
    const diasMinimos = conBox ? negocio.anticipacion.cookiesYAlfajores : negocio.anticipacion.general;
    return { porCat, total, diasMinimos };
  }, [items]);

  const cantidadDe = useCallback((cat, nombre) => items[`${cat}:${nombre}`]?.cantidad || 0, [items]);

  const value = {
    items,
    agregar,
    quitar,
    vaciar,
    cantidadDe,
    resumen,
    abierto,
    setAbierto,
    tab,
    setTab,
    catPorId,
  };

  return <PedidoContext.Provider value={value}>{children}</PedidoContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePedido = () => useContext(PedidoContext);
