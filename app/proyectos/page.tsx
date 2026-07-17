"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";

const projects = [
  { video: "/videos/BellaVistaEdit_1.mp4", poster: "/images/video-1.jpg" },
  { video: "/videos/BienesVsOtrasInvClip2_Edit2.mp4", poster: "/images/video-2.jpg" },
  { video: "/videos/ChicaReelFinal.mp4", poster: "/images/video-3.jpg" },
  { video: "/videos/GusReelFinal.mp4", poster: "/images/video-4.jpg" },
  { video: "/videos/GusReel_2.mp4", poster: "/images/video-5.jpg" },
  { video: "/videos/GymLife_Reel2_Edit.mp4", poster: "/images/video-6.jpg" },
  { video: "/videos/GymLife_Reel3_Edit.mp4", poster: "/images/video-7.jpg" },
  { video: "/videos/Gym_Life_Reel4_Edit.mp4", poster: "/images/video-8.jpg" },
  { video: "/videos/Gym_Life_SinGlitch.mp4", poster: "/images/video-9.jpg" },
  { video: "/videos/MG_CarlosMinyety_PrimerParcial.mp4", poster: "/images/video-10.jpg" },
  { video: "/videos/MG_CarlosMinyety_Práctica6.mp4", poster: "/images/video-11.jpg" },
  { video: "/videos/PenthouseEdit_1.mp4", poster: "/images/video-12.jpg" },
  { video: "/videos/PrimerVideo.mp4", poster: "/images/video-13.jpg" },
  { video: "/videos/RealBrokerFinal1_1.mp4", poster: "/images/video-14.jpg" },
  { video: "/videos/RealBrokerFinal2_3.mp4", poster: "/images/video-15.jpg" },
  { video: "/videos/VistaCanaReel.mp4", poster: "/images/video-16.jpg" },
];

function VideoPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onLoad = () => { el.currentTime = 2; };
    el.addEventListener("loadedmetadata", onLoad);
    return () => el.removeEventListener("loadedmetadata", onLoad);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="metadata"
      className="w-full h-full object-cover absolute inset-0"
    />
  );
}

export default function Proyectos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.muted = false;
    }
  }, [selectedVideo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main className="min-h-screen bg-[#121212] text-white antialiased selection:bg-purple-500/30 selection:text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Mi Portafolio
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Haz clic en la pantalla del video para abrirlo con audio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/5 bg-[#1a1a1a] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/20 cursor-pointer"
            >
              <div
                onClick={() => setSelectedVideo(project.video)}
                className="h-64 bg-gray-900 relative overflow-hidden group cursor-pointer rounded-2xl"
              >
                <VideoPreview src={project.video} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors text-2xl z-10"
            >
              ✕
            </button>
            <video
              ref={modalVideoRef}
              className="w-full max-h-[75vh] rounded-2xl shadow-2xl bg-black"
              controls
              src={selectedVideo}
            />
          </div>
        </div>
      )}
    </main>
  );
}
