"use client";

import { useCallback, useState } from "react";
import YouTubeThumbnail from "./YouTubeThumbnail";
import YouTubeVideoModal from "./YouTubeVideoModal";
import { YOUTUBE_PROJECTS, type YouTubeProject } from "../lib/youtube-projects";

export default function ProyectosDestacados() {
  const [selected, setSelected] = useState<YouTubeProject | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

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
        <YouTubeVideoModal project={selected} onClose={closeModal} />
      )}
    </>
  );
}
