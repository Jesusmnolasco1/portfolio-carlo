"use client";

import { useCallback, useEffect, useState } from "react";

type YouTubeProject = {
  id: string;
  title: string;
  isShort: boolean;
};

// 8 videos in the exact order requested.
const YOUTUBE_PROJECTS: YouTubeProject[] = [
  { id: "87-E7DGlJ1E", title: "Proyecto destacado 1", isShort: false },
  { id: "Smj1RNG_7Xw", title: "Proyecto destacado 2", isShort: false },
  { id: "027HaxF4rRs", title: "Proyecto destacado 3", isShort: false },
  { id: "RPugdfrV0Pk", title: "Proyecto destacado 4 (Short)", isShort: true },
  { id: "g1xX4780ZiU", title: "Proyecto destacado 5 (Short)", isShort: true },
  { id: "KVAasJin6ck", title: "Proyecto destacado 6 (Short)", isShort: true },
  { id: "mpoRa2WsIaU", title: "Proyecto destacado 7 (Short)", isShort: true },
  { id: "EsdenjmkiQ8", title: "Proyecto destacado 8 (Short)", isShort: true },
];

const THUMBNAIL_VARIANTS = [
  "maxresdefault",
  "hqdefault",
  "mqdefault",
] as const;

function thumbnailUrl(videoId: string, variant: string) {
  return `https://img.youtube.com/vi/${videoId}/${variant}.jpg`;
}

function YouTubeThumbnail({
  videoId,
  alt,
  eager = false,
}: {
  videoId: string;
  alt: string;
  eager?: boolean;
}) {
  const [variantIndex, setVariantIndex] = useState(0);

  return (
    // Plain <img> keeps this carousel free of next/image remote-host
    // configuration and loads directly from YouTube's CDN on Vercel.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={thumbnailUrl(videoId, THUMBNAIL_VARIANTS[variantIndex])}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={() => {
        setVariantIndex((prev) =>
          prev < THUMBNAIL_VARIANTS.length - 1 ? prev + 1 : prev
        );
      }}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-[.85]"
    />
  );
}

export default function ProyectosDestacados() {
  const [selected, setSelected] = useState<YouTubeProject | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  // Escape closes the modal.
  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected, closeModal]);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  return (
    <>
      <section id="projects" className="relative z-10 overflow-hidden py-20">
        <div className="mx-auto mb-10 flex max-w-6xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              03 // Portafolio
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-white">
              Proyectos Destacados
            </h3>
          </div>
          <p className="max-w-xs text-sm text-zinc-400">
            Selección de trabajos conceptuales y comerciales listos para ser
            transformados en casos de estudio.
          </p>
        </div>

        {/* Contenedor de la Ruleta */}
        <div className="relative flex w-full overflow-hidden">
          {/* Track de la animación */}
          <div className="flex w-max animate-ruleta gap-6 px-6">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex gap-6"
              >
                {YOUTUBE_PROJECTS.map((project, idx) => (
                  <button
                    key={`${copy}-${project.id}`}
                    type="button"
                    tabIndex={copy === 1 ? -1 : 0}
                    onClick={() => setSelected(project)}
                    aria-label={`Reproducir video: ${project.title}`}
                    className="group w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:w-[350px]"
                  >
                    <span className="relative block h-64 overflow-hidden bg-gray-800">
                      <YouTubeThumbnail
                        key={project.id}
                        videoId={project.id}
                        alt={`Vista previa del video ${project.title} — pulsa para reproducir`}
                        eager={copy === 0 && idx < 2}
                      />
                      {/* Sutil oscurecido en hover */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
                      />
                      {/* Indicador de reproducción */}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Reproductor de video: ${selected.title}`}
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${
              selected.isShort ? "max-w-[360px]" : "max-w-4xl"
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              autoFocus
              aria-label="Cerrar video"
              className="absolute -top-12 right-0 z-10 text-2xl text-white/60 transition-colors hover:text-white"
            >
              ✕
            </button>
            <div
              className={`w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
                selected.isShort
                  ? "aspect-[9/16] max-h-[80vh]"
                  : "aspect-video"
              }`}
            >
              <iframe
                key={selected.id}
                src={`https://www.youtube.com/embed/${selected.id}?autoplay=1&rel=0`}
                title={selected.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
