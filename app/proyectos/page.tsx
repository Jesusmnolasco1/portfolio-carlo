"use client";

import { useCallback, useState } from "react";
import Navbar from "../../components/Navbar";
import YouTubeThumbnail from "../../components/YouTubeThumbnail";
import YouTubeVideoModal from "../../components/YouTubeVideoModal";
import { YOUTUBE_PROJECTS, type YouTubeProject } from "../../lib/youtube-projects";

// Registros locales conservados internamente que aún NO tienen enlace de
// YouTube. No se renderizan ni se les asigna ningún video por posición:
// cuando cada proyecto tenga su URL pública, se migra a YOUTUBE_PROJECTS
// (lib/youtube-projects.ts) y se retira de esta lista.
export const PENDING_YOUTUBE_LINK = [
  { label: "BellaVistaEdit_1", video: "/videos/BellaVistaEdit_1.mp4" },
  {
    label: "BienesVsOtrasInvClip2_Edit2",
    video: "/videos/BienesVsOtrasInvClip2_Edit2.mp4",
  },
  { label: "ChicaReelFinal", video: "/videos/ChicaReelFinal.mp4" },
  { label: "GusReelFinal", video: "/videos/GusReelFinal.mp4" },
  { label: "GusReel_2", video: "/videos/GusReel_2.mp4" },
  { label: "GymLife_Reel2_Edit", video: "/videos/GymLife_Reel2_Edit.mp4" },
  { label: "GymLife_Reel3_Edit", video: "/videos/GymLife_Reel3_Edit.mp4" },
  { label: "Gym_Life_Reel4_Edit", video: "/videos/Gym_Life_Reel4_Edit.mp4" },
  { label: "Gym_Life_SinGlitch", video: "/videos/Gym_Life_SinGlitch.mp4" },
  {
    label: "MG_CarlosMinyety_PrimerParcial",
    video: "/videos/MG_CarlosMinyety_PrimerParcial.mp4",
  },
  {
    label: "MG_CarlosMinyety_Práctica6",
    video: "/videos/MG_CarlosMinyety_Práctica6.mp4",
  },
  { label: "PenthouseEdit_1", video: "/videos/PenthouseEdit_1.mp4" },
  { label: "PrimerVideo", video: "/videos/PrimerVideo.mp4" },
  { label: "RealBrokerFinal1_1", video: "/videos/RealBrokerFinal1_1.mp4" },
  { label: "RealBrokerFinal2_3", video: "/videos/RealBrokerFinal2_3.mp4" },
  { label: "VistaCanaReel", video: "/videos/VistaCanaReel.mp4" },
];

export default function Proyectos() {
  const [selected, setSelected] = useState<YouTubeProject | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <main className="min-h-screen bg-[#121212] text-white antialiased selection:bg-purple-500/30 selection:text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Mi Portafolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Haz clic en un proyecto para reproducir el video con audio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`Reproducir video: ${project.title}`}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              <span className="relative block h-64 overflow-hidden rounded-2xl bg-gray-900">
                <YouTubeThumbnail
                  key={project.id}
                  videoId={project.id}
                  alt={`Vista previa del video ${project.title} — pulsa para reproducir`}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
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
      </section>

      {selected && (
        <YouTubeVideoModal project={selected} onClose={closeModal} />
      )}
    </main>
  );
}
