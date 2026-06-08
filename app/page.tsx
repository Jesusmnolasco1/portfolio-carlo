import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      {/* Hero */}
<section className="flex min-h-screen items-center justify-center px-6">
  <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 items-center">

    <div className="flex justify-center">
      <Image
        src="/images/carlos.jpg"
        alt="Carlos Gabriel Minyety Almonte"
        width={400}
        height={400}
        className="rounded-full border-4 border-gray-800 shadow-2xl"
      />
    </div>

    <div>
      <p className="mb-3 text-gray-400 uppercase tracking-widest">
        Diseñador Gráfico • Motion Graphics • Editor de Video
      </p>

      <h1 className="text-5xl font-bold md:text-7xl">
        Carlos Gabriel
        <br />
        Minyety Almonte
      </h1>

      <p className="mt-6 text-lg text-gray-400 leading-8">
        Diseñador gráfico egresado del ITLA especializado en
        branding, diseño editorial, motion graphics,
        edición audiovisual y contenido visual para redes
        sociales y campañas publicitarias.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-white px-6 py-3 text-black transition hover:scale-105"
        >
          Ver Proyectos
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-gabriel-minyety-almonte-b58aa1355/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white px-6 py-3 transition hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </div>

  </div>
</section>

      {/* Sobre mí */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-8 text-4xl font-bold">
          Sobre mí
        </h2>

        <p className="text-gray-400 leading-8">
          Soy Carlos Gabriel Minyety Almonte, diseñador gráfico egresado del
          Instituto Tecnológico de Las Américas (ITLA). Me dedico
          profesionalmente al diseño visual y la creación de contenido digital,
          desarrollando proyectos de branding, publicidad, motion graphics,
          edición audiovisual, diseño editorial y material para redes sociales.
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
            Diseño Gráfico
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Adobe Photoshop
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Adobe Illustrator
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Motion Graphics
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Edición de Video
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            Diseño Editorial
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section
        id="projects"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="mb-8 text-4xl font-bold">
          Proyectos Destacados
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Diseño de Flyers Publicitarios
            </h3>

            <p className="text-gray-400">
              Creación de material promocional para campañas publicitarias,
              negocios y redes sociales.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Motion Graphics
            </h3>

            <p className="text-gray-400">
              Desarrollo de animaciones visuales para contenido digital y
              campañas de marketing.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Diseño Editorial
            </h3>

            <p className="text-gray-400">
              Diseño y maquetación de revistas, catálogos y documentos
              corporativos.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-2 text-2xl font-semibold">
              Edición Audiovisual
            </h3>

            <p className="text-gray-400">
              Producción y edición de videos para redes sociales y contenido
              promocional.
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

  <p className="mb-8 text-gray-400">
    ¿Tienes un proyecto en mente? Estoy disponible para trabajos de diseño
    gráfico, branding, motion graphics, diseño editorial y edición de video.
  </p>

  <div className="space-y-4 text-lg">
    <p>
      📧 Correo:
      {" "}
      <a
        href="mailto:pixelado321@gmail.com"
        className="text-blue-400 hover:underline"
      >
        pixelado321@gmail.com
      </a>
    </p>

    <p>
      📱 Teléfono:
      {" "}
      <a
        href="tel:+18097778500"
        className="text-blue-400 hover:underline"
      >
        (809) 777-8500
      </a>
    </p>

    <p>
      💼 LinkedIn:
      {" "}
      <a
        href="https://www.linkedin.com/in/carlos-gabriel-minyety-almonte-b58aa1355/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Ver perfil profesional
      </a>
    </p>
  </div>
</section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
  © 2026 Carlos Gabriel Minyety Almonte · Diseñador Gráfico
</footer>
    </main>
  );
}