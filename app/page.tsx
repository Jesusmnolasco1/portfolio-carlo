import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold md:text-8xl">
          Jesús M. Nolasco
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-400">
          Desarrollador Web • Analista de Datos • Estudiante de Derecho
        </p>

        <a
          href="#projects"
          className="mt-8 rounded-xl bg-white px-6 py-3 text-black transition hover:scale-105"
        >
          Ver Proyectos
        </a>
      </section>

      {/* Sobre mí */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-6 text-4xl font-bold">
          Sobre mí
        </h2>

        <p className="text-gray-400">
          Soy un apasionado de la tecnología,
          el desarrollo web, el análisis de datos
          y la innovación digital.
        </p>
      </section>

      {/* Habilidades */}
      <section
        id="skills"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-8 text-4xl font-bold">
          Habilidades
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-800 p-6">
            HTML
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            CSS
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            JavaScript
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            React
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Next.js
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Python
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section
        id="projects"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-8 text-4xl font-bold">
          Proyectos
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Proyecto 1
            </h3>

            <p className="text-gray-400">
              Descripción del proyecto.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Proyecto 2
            </h3>

            <p className="text-gray-400">
              Descripción del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-8 text-4xl font-bold">
          Contacto
        </h2>

        <p className="text-gray-400">
          correo@ejemplo.com
        </p>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Jesús M. Nolasco
      </footer>
    </main>
  );
}