// Calcula la próxima fecha especial y hasta cuándo se puede encargar.

const tercerDomingo = (anio, mes) => {
  const primero = new Date(anio, mes, 1);
  const hastaDomingo = (7 - primero.getDay()) % 7;
  return new Date(anio, mes, 1 + hastaDomingo + 14);
};

// Domingo de Pascua (algoritmo gregoriano anónimo)
const pascua = (y) => {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h - 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, mes - 1, dia);
};

export const fechaDelAnio = (regla, anio) => {
  if (regla.tipo === 'pascua') return pascua(anio);
  if (regla.tipo === 'tercerDomingo') return tercerDomingo(anio, regla.mes);
  return new Date(anio, regla.mes, regla.dia);
};

const soloDia = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
export const sumarDias = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const DIA = 86400000;
export const diasEntre = (a, b) => Math.round((soloDia(b) - soloDia(a)) / DIA);

// Devuelve las fechas ordenadas desde hoy, con su fecha límite de encargo
export const proximasFechas = (fechas, anticipacion, hoy = new Date()) => {
  const h = soloDia(hoy);
  return fechas
    .map((f) => {
      let fecha = fechaDelAnio(f.regla, h.getFullYear());
      if (fecha < h) fecha = fechaDelAnio(f.regla, h.getFullYear() + 1);
      const limite = sumarDias(fecha, -anticipacion);
      return { ...f, fecha, limite, faltan: diasEntre(h, fecha), paraLimite: diasEntre(h, limite) };
    })
    .sort((a, b) => a.fecha - b.fecha);
};

const fmtDia = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
const fmtCorto = new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long' });
export const diaLargo = (d) => fmtDia.format(d);
export const diaCorto = (d) => fmtCorto.format(d);

// Texto corto sobre el plazo para encargar
export const textoLimite = (f) => {
  if (f.paraLimite > 1) return `Encargá hasta el ${diaCorto(f.limite)}`;
  if (f.paraLimite === 1) return 'Encargá hasta mañana';
  if (f.paraLimite === 0) return 'Hoy es el último día para encargar';
  return 'Quedan pocos cupos: escribinos y vemos';
};

export const aISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
