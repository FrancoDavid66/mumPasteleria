// Foto en marco polaroid, como en el catálogo de MUM
export default function Polaroid({ src, alt, pie, giro = 0, className = '', aspecto = 'aspect-[4/5]', carga = 'lazy', prioridad }) {
  return (
    <figure
      className={`bg-papel p-2.5 pb-0 shadow-polaroid sm:p-3 sm:pb-0 ${className}`}
      style={{ transform: `rotate(${giro}deg)` }}
    >
      <div className={`overflow-hidden bg-chicle/40 ${aspecto}`}>
        <img
          src={src}
          alt={alt}
          loading={carga}
          fetchpriority={prioridad ? 'high' : undefined}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-1 py-2.5 text-center font-sans text-[15px] font-medium text-choco sm:py-3 sm:text-base">
        {pie}
      </figcaption>
    </figure>
  );
}
