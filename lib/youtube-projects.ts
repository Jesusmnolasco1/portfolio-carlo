// Fuente central de los proyectos de video con enlace de YouTube.
// El carrusel ("Proyectos Destacados") y la cuadrícula ("Mi Portafolio")
// importan estas mismas asociaciones: no duplicar ni reordenar aquí
// sin actualizar ambas secciones.

export type YouTubeProject = {
  id: string;
  title: string;
  isShort: boolean;
};

// Los 8 videos, en el orden solicitado.
export const YOUTUBE_PROJECTS: YouTubeProject[] = [
  { id: "87-E7DGlJ1E", title: "Proyecto destacado 1", isShort: false },
  { id: "Smj1RNG_7Xw", title: "Proyecto destacado 2", isShort: false },
  { id: "027HaxF4rRs", title: "Proyecto destacado 3", isShort: false },
  { id: "RPugdfrV0Pk", title: "Proyecto destacado 4 (Short)", isShort: true },
  { id: "g1xX4780ZiU", title: "Proyecto destacado 5 (Short)", isShort: true },
  { id: "KVAasJin6ck", title: "Proyecto destacado 6 (Short)", isShort: true },
  { id: "mpoRa2WsIaU", title: "Proyecto destacado 7 (Short)", isShort: true },
  { id: "EsdenjmkiQ8", title: "Proyecto destacado 8 (Short)", isShort: true },
];

// Orden de respaldo para miniaturas: maxresdefault no siempre existe
// (sobre todo en Shorts), hqdefault/mqdefault casi siempre sí.
export const YOUTUBE_THUMBNAIL_VARIANTS = [
  "maxresdefault",
  "hqdefault",
  "mqdefault",
] as const;

export function youtubeThumbnailUrl(
  videoId: string,
  variant: string = YOUTUBE_THUMBNAIL_VARIANTS[0]
): string {
  return `https://img.youtube.com/vi/${videoId}/${variant}.jpg`;
}

// URL de reproducción dentro de la página (también válida para Shorts:
// se usa el endpoint normal de embed con el VIDEO_ID, no la URL /shorts).
// autoplay=1 solicita reproducción automática con audio; el reproductor
// muestra sus controles por defecto para iniciarla manualmente si el
// navegador bloquea el autoplay.
export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}
