import Footer from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Mech & Grogu",
    description:
      "Animando character (correr, caminar). \nRenderizado múltiple de un mismo modelo. \nInteracción (choque contra Moff Gideon).",
    image: "/grogu.jpg",
    href: "https://mech-and-grogu.vercel.app/",
  },
  {
    title: "F1 - Calendario",
    description: "Fechas del campeonato de F1 2024. \nColapinto reference.",
    image: "/formula1.jpg",
    href: "https://f1-calendar-snowy.vercel.app/",
  },
  {
    title: "Torre Globant",
    description:
      "Un youtuber intentó escalar la torre y se lo llevaron detenido, salió en todas las noticias. \nPodés saltar de plataforma en plataforma hasta a la cima. \nO buscarlo a Messi que te da un empujoncito",
    image: "/torre.jpg",
    href: "https://globant-tower.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Mini game a modo de portfolio. \nInspirado en tutoriales de Bruno Simon, con unas vueltas de tuerca para personalizar.",
    image: "/portfolio.jpg",
    href: "https://nico-battaglia-portfolio-3d.vercel.app/",
  },
  {
    title: "Luxor Cars",
    description: "Importando modelos 3D. \nAlquiler de autos.",
    image: "/cars.jpg",
    href: "https://luxor-cars-nico-bt.vercel.app/",
  },
  {
    title: "Ferrari Advertisement",
    description: "Scroll + movimiento.",
    image: "/ferrari.jpg",
    href: "https://ferrari-sable.vercel.app/",
  },
]

export default function Page() {
  return (
    <>
      <main className="dark min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <header className="mb-16">
            <h1 className="mb-12 text-4xl font-medium text-foreground md:text-5xl lg:text-6xl">
              Three.js Playroom
            </h1>
            <div className="grid gap-2 mt-6">
              <p className="text-lg text-muted-foreground md:text-xl">
                Algunas ideas surgieron por noticias o trends, como forma para sumar engagement en
                posts de Linkedin.
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                En general prueba y error más que diseño. Con agregados/aprendizajes en forma
                incremental.
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                La mayoría de los modelos 3D y texturas son versiones free descargadas de las webs
                Sketchfab y PolyHaven. Algunos armé con imágenes.
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
