import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white antialiased selection:bg-purple-500/30 selection:text-white">
      
      {/* Fondo Dinámico Ambient Blur */}
      <div className="absolute left-[-10%] top-[-5%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute right-[-5%] top-[15%] h-[550px] w-[550px] rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none" />

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          
          {/* Bloque Izquierdo: Foto de Perfil Premium */}
          <div className="flex justify-center md:order-last">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
              {/* Ecos de luces tras la imagen */}
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-3xl opacity-70 animate-pulse duration-[6s]"></div>
              <div className="absolute -inset-8 rounded-full bg-purple-500/10 blur-2xl opacity-50"></div>

              <Image
                src="/images/carlos.jpeg"
                alt="Carlos Gabriel Minyety Almonte"
                fill
                priority
                className="relative rounded-full border border-white/10 object-cover shadow-[0_0_60px_rgba(59,130,246,0.2)]"
              />
            </div>
          </div>

          {/* Bloque Derecho: Textos y Datos */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Disponible para proyectos freelance
              </span>
            </div>

            <h1 className="mt-6 text-6xl font-black tracking-tight leading-none sm:text-7xl lg:text-8xl">
              Carlos
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Minyety
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Diseñador gráfico egresado del ITLA especializado en branding, 
              motion graphics, edición audiovisual, diseño editorial y 
              contenido visual estratégico para marcas modernas.
            </p>

            {/* CTA Botones */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-gray-100 shadow-lg"
              >
                Ver Trabajos
              </a>

              <a
                href="https://www.linkedin.com/in/carlos-gabriel-minyety-almonte-b58aa1355/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border-transparent"
              >
                LinkedIn
              </a>
            </div>

            {/* Badges de Especialidades */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Diseño Gráfico", "Motion Graphics", "Video Editing"].map((badge) => (
                <span key={badge} className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm">
                  {badge}
                </span>
              ))}
            </div>

            {/* Métricas e Info del ITLA */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8">
              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">2025</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1">Graduado ITLA</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">5+</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1">Especialidades</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">100%</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1">Creatividad</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SOBRE MÍ ================= */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">01 // Trayectoria</h2>
        <div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 md:p-10 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-white mb-4">Diseño con enfoque estratégico</h3>
          <p className="text-lg leading-relaxed text-zinc-400 max-w-4xl">
            Soy Carlos Gabriel Minyety Almonte, diseñador gráfico egresado del Instituto Tecnológico de Las Américas (ITLA). Me dedico al desarrollo de identidades visuales memorables, campañas publicitarias de alto impacto, motion graphics dinámicos, diseño editorial impecable y postproducción audiovisual orientada a potenciar marcas en entornos digitales competitivos.
          </p>
        </div>
      </section>

      {/* ================= HABILIDADES (Estilo Figma) ================= */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">02 // Core Competencies</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Diseño Gráfico", icon: "🎨" },
            { name: "Adobe Photoshop", icon: "✨" },
            { name: "Adobe Illustrator", icon: "🖌" },
            { name: "Motion Graphics", icon: "🎬" },
            { name: "Edición de Video", icon: "🎥" },
            { name: "Diseño Editorial", icon: "📚" }
          ].map((skill) => (
            <div 
              key={skill.name}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/20 p-5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-zinc-900/50 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              <span className="text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="text-base font-semibold text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROYECTOS DESTACADOS (Ruleta / Marquee) ================= */}
      <section id="projects" className="relative z-10 py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">03 // Portafolio</h2>
            <h3 className="text-4xl font-extrabold text-white tracking-tight">Proyectos Destacados</h3>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs">Selección de trabajos conceptuales y comerciales listos para ser transformados en casos de estudio.</p>
        </div>

        {/* Contenedor de la Ruleta */}
        <div className="relative w-full overflow-hidden flex">
          {/* Track de la animación */}
          <div className="flex w-max animate-ruleta gap-6 px-6">
            
            {/* Duplicamos el array de proyectos para crear el efecto infinito */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  { title: "Diseño de Flyers Publicitarios", desc: "Diseño de piezas promocionales para campañas comerciales y eventos." },
                  { title: "Motion Graphics", desc: "Animaciones visuales para contenido digital y marketing." },
                  { title: "Diseño Editorial", desc: "Revistas, catálogos y publicaciones digitales." },
                  { title: "Edición Audiovisual", desc: "Producción y edición de video para marcas y empresas." }
                ].map((project, idx) => (
                  <div 
                    key={`${i}-${idx}`} 
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 p-8 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-zinc-900/40 w-[350px] shrink-0"
                  >
                    <div>
                      {/* Contenedor Placeholder Visual */}
                      <div className="mb-6 aspect-video w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 opacity-80 flex items-center justify-center text-xs tracking-widest uppercase text-zinc-600 font-bold transition-transform duration-500 group-hover:scale-[1.03]">
                        Asset En Espera
                      </div>
                      <h4 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
                        {project.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {project.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-900/50 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors">
                      <span>Próximamente</span>
                      <span className="transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>
      
      {/* ================= CONTACTO ================= */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">04 // Conexión</h2>
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/50 to-black p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-extrabold text-white">¿Tienes una idea en mente?</h3>
            <p className="mt-2 text-zinc-400 max-w-md">Creemos experiencias visuales memorables que diferencien tu marca. Escríbeme y hablemos de tu próximo proyecto.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto justify-center text-left">
            <div className="space-y-4">
             {/* Tarjeta de Correo Estilo Premium */}
<div className="mt-4 w-full">
  <a 
    href="mailto:pixelado321@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex w-full max-w-sm items-center justify-between rounded-2xl border border-white/5 bg-[#121212] p-4 transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white/10"
  >
    <div className="flex items-center gap-4">
      {/* Contenedor del ícono azul oscuro */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0a1930] text-[#3b82f6]">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
        </svg>
      </div>
      
      {/* Textos apilados */}
      <div className="flex flex-col text-left">
        <span className="text-base font-bold text-white">Correo Electrónico</span>
        <span className="text-sm font-medium text-zinc-400">pixelado321@gmail.com</span>
      </div>
    </div>

    {/* Flecha indicadora animada */}
    <div className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-300">
      →
    </div>
  </a>
</div>
              <div className="flex items-center gap-3">
  
  {/* Tarjeta de WhatsApp Estilo Premium */}
<div className="mt-4 w-full">
  <a 
    href="https://wa.me/18097778500?text=Hola%20Carlos,%20vengo%20de%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex w-full max-w-sm items-center justify-between rounded-2xl border border-white/5 bg-[#121212] p-4 transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white/10"
  >
    <div className="flex items-center gap-4">
      {/* Contenedor del ícono verde oscuro */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0b2415] text-[#25D366]">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </div>
      
      {/* Textos apilados */}
      <div className="flex flex-col text-left">
        <span className="text-base font-bold text-white">WhatsApp</span>
        <span className="text-sm font-medium text-zinc-400">Respuesta rápida en horario laboral</span>
      </div>
    </div>

    {/* Flecha indicadora animada */}
    <div className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-300">
      →
    </div>
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-900 bg-black py-8 text-center text-xs font-medium tracking-wider text-zinc-600 uppercase">
        © 2026 Carlos Minyety · Diseñador Gráfico 
      </footer>
    </main>
  );
}