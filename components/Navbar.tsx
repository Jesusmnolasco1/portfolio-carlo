"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowAvatar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">

          {showAvatar && (
            <Image
              src="/images/carlos.jpeg"
              alt="Carlos Minyety"
              width={40}
              height={40}
              className="rounded-full border border-white/20"
            />
          )}

          <h1 className="text-lg font-bold tracking-wide">
            Minyety Portfolio Desing 
          </h1>

        </div>

        <div className="flex gap-6 text-sm">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>

      </div>
    </nav>
  );
}