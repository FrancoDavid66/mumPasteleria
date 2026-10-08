import { motion, useReducedMotion } from 'framer-motion';

// Logo de MUM vectorizado: el palote y la palabra "mum" son UNA sola línea,
// así que se puede "dibujar" solo (loader y footer).
const PALOTE =
  'M83 63H112C115 50 116 36 118 27C120 19 127 17 130 25C133 34 134 50 135 63C136 47 139 32 143 25C147 18 155 19 157 28C159 39 160 52 162 63C163 47 166 32 170 25C174 18 182 19 184 28C186 40 187 54 192 61C196 66 201 62 203 54C205 46 206 36 207 26C207 40 208 54 214 61C220 67 229 62 232 51C234 42 235 33 236 26C236 40 237 53 241 61C244 66 250 63 252 55C254 46 256 34 259 26C262 18 269 19 271 28C273 40 274 52 276 63C277 47 280 32 285 25C290 18 297 20 299 30C301 42 302 54 304 63C305 47 309 32 314 25C319 18 326 20 328 30C330 44 333 57 342 62C347 64 352 63 358 63H405Q415 63 415 73V123Q415 133 405 133H83Q73 133 73 123V73Q73 63 83 63Z';

const MANIJAS = [
  'M63 86h10v24H63z',
  'M63 91C50 89 41 84 25 84C13 84 8 90 8 97C8 104 13 110 25 110C41 110 50 105 63 103',
  'M415 86h10v24h-10z',
  'M425 91C438 89 447 84 463 84C475 84 480 90 480 97C480 104 475 110 463 110C447 110 438 105 425 103',
];

export default function Logo({ className = 'h-10 w-auto', trazo = 6, animado = false, duracion = 1.6, conBajada = false, onListo }) {
  const reducir = useReducedMotion();
  const animar = animado && !reducir;
  const comun = { fill: 'none', stroke: 'currentColor', strokeWidth: trazo, strokeLinecap: 'round', strokeLinejoin: 'round' };

  return (
    <svg viewBox={conBajada ? '0 0 488 178' : '0 0 488 145'} className={className} role="img" aria-label="MUM Baking House">
      <g {...comun}>
        {animar ? (
          <motion.path
            d={PALOTE}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: duracion, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={onListo}
          />
        ) : (
          <path d={PALOTE} />
        )}
        {MANIJAS.map((d, i) =>
          animar ? (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: duracion * 0.72 + (i % 2) * 0.12, ease: 'easeOut' }}
            />
          ) : (
            <path key={i} d={d} />
          ),
        )}
      </g>
      {conBajada && (
        <text
          x="244"
          y="172"
          textAnchor="middle"
          fill="currentColor"
          style={{ font: '600 22px Antonio, sans-serif', letterSpacing: '0.42em' }}
        >
          BAKING HOUSE
        </text>
      )}
    </svg>
  );
}
