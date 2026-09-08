"use client";

import { useState } from "react";
import {
  YOUTUBE_THUMBNAIL_VARIANTS,
  youtubeThumbnailUrl,
} from "../lib/youtube-projects";

// Miniatura de YouTube con respaldo automático:
// maxresdefault → hqdefault → mqdefault. Nunca muestra imagen rota
// mientras exista al menos la variante básica del video.
export default function YouTubeThumbnail({
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
    // <img> simple: carga directo desde el CDN de YouTube, sin
    // configuración remota de next/image y funciona igual en Vercel.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={youtubeThumbnailUrl(
        videoId,
        YOUTUBE_THUMBNAIL_VARIANTS[variantIndex]
      )}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={() => {
        setVariantIndex((prev) =>
          prev < YOUTUBE_THUMBNAIL_VARIANTS.length - 1 ? prev + 1 : prev
        );
      }}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-[.85]"
    />
  );
}
