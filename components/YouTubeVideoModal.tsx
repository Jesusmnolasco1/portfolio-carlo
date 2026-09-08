"use client";

import { useEffect, useRef } from "react";
import { youtubeEmbedUrl, type YouTubeProject } from "../lib/youtube-projects";

// Reproductor modal compartido por el carrusel y la cuadrícula.
// - Crea el iframe solo al abrir (nada de iframes en la carga inicial).
// - Al cerrar se desmonta el iframe: detiene video y audio al instante.
// - Cierre: botón X, tecla Escape y clic en el fondo exterior.
// - Devuelve el foco al elemento que lo abrió (la tarjeta pulsada).
// - Bloquea el scroll de la página mientras está abierto.
// - Ajusta el formato: 16:9 en videos normales, 9:16 en Shorts.
export default function YouTubeVideoModal({
  project,
  onClose,
}: {
  project: YouTubeProject;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Reproductor de video: ${project.title}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          project.isShort ? "max-w-[360px]" : "max-w-4xl"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-12 right-0 z-10 text-2xl text-white/60 transition-colors hover:text-white"
        >
          ✕
        </button>
        <div
          className={`w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
            project.isShort ? "aspect-[9/16] max-h-[80vh]" : "aspect-video"
          }`}
        >
          <iframe
            key={project.id}
            src={youtubeEmbedUrl(project.id)}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
