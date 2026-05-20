import { Scissors, Palette, UserRound, Sparkles, Coffee, Building2, Package, Heart, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Service Card Component
function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="group bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-foreground" />
      </div>
      <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// Gallery Image Component
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

// Price Row Component
function PriceRow({ service, price }: { service: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-border last:border-b-0">
      <span className="text-foreground">{service}</span>
      <span className="font-serif font-semibold text-accent">{price}</span>
    </div>
  )
}

// Experience Item Component
function ExperienceItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <span className="text-foreground">{text}</span>
    </div>
  )
}

// Testimonial Card Component
function TestimonialCard({ image, name, quote }: { image: string; name: string; quote: string }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
      <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="text-muted-foreground italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-serif font-semibold text-foreground">— {name}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif font-bold text-xl tracking-tight text-foreground">
            Studio Hair
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#galeria" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Galería
            </Link>
            <Link href="#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>
          <Link
            href="#contacto"
            className="hidden md:inline-flex px-5 py-2 bg-accent text-accent-foreground font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            Reservar cita
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-salon.jpg"
            alt="Interior del salón Studio Hair"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance text-foreground">
              Tu estilo empieza aquí.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Cortes modernos, color profesional y una experiencia pensada para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Reservar cita
              </Link>
              <Link
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Descubre nuestra amplia gama de servicios diseñados para realzar tu belleza natural.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Scissors}
              title="Corte & Estilo"
              description="Cortes modernos adaptados a tu rostro y estilo."
            />
            <ServiceCard
              icon={Palette}
              title="Color & Mechas"
              description="Balayage, rubios y coloración profesional."
            />
            <ServiceCard
              icon={UserRound}
              title="Barbería Premium"
              description="Afeitado clásico, perfilado y cuidado de barba."
            />
            <ServiceCard
              icon={Sparkles}
              title="Tratamientos Capilares"
              description="Hidratación, keratina y reparación profunda."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestra Galería</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Inspírate con algunos de nuestros trabajos más recientes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <GalleryImage src="/images/gallery-1.jpg" alt="Balayage profesional" />
            <GalleryImage src="/images/gallery-2.jpg" alt="Corte de caballero" />
            <GalleryImage src="/images/gallery-3.jpg" alt="Herramientas de estilismo" />
            <GalleryImage src="/images/gallery-4.jpg" alt="Peinado elegante" />
            <GalleryImage src="/images/gallery-5.jpg" alt="Barbería premium" />
            <GalleryImage src="/images/gallery-6.jpg" alt="Interior del salón" />
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="precios" className="py-20 md:py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestros Precios</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tarifas transparentes para todos nuestros servicios.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            <PriceRow service="Corte hombre" price="12€" />
            <PriceRow service="Corte mujer" price="18€" />
            <PriceRow service="Color raíz" price="25€" />
            <PriceRow service="Balayage" price="45€" />
            <PriceRow service="Barba" price="8€" />
            <PriceRow service="Keratina" price="35€" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Una experiencia pensada para ti.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                En Studio Hair nos preocupamos por cada detalle. Desde el momento en que entras, queremos que te sientas especial.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ExperienceItem icon={Coffee} text="Café y refrescos incluidos" />
                <ExperienceItem icon={Building2} text="Ambiente moderno" />
                <ExperienceItem icon={Package} text="Productos profesionales" />
                <ExperienceItem icon={Heart} text="Atención personalizada" />
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero-salon.jpg"
                alt="Experiencia en Studio Hair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              image="/images/testimonial-1.jpg"
              name="Laura G."
              quote="Muy profesionales, salí encantada."
            />
            <TestimonialCard
              image="/images/testimonial-2.jpg"
              name="Marcos R."
              quote="Ambiente moderno y trato increíble."
            />
            <TestimonialCard
              image="/images/testimonial-3.jpg"
              name="Sara P."
              quote="El balayage me quedó perfecto."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Contacto</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Estamos aquí para ti. Reserva tu cita o visítanos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Link
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+34 600 000 000</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-sm text-muted-foreground">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-sm text-muted-foreground">La Almunia de Doña Godina</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">Lun - Sáb: 10:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.207847097811!2d-1.374566!3d41.476457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5a4f6c0c7b2c5f%3A0x4b8c1b0f3e2e3d6!2sLa%20Almunia%20de%20Do%C3%B1a%20Godina%2C%2050300%20Zaragoza!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Studio Hair"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-xl font-bold mb-2 text-background">Studio Hair</p>
          <p className="text-sm text-muted">© 2026 Studio Hair. Todos los derechos reservados.</p>
          <p className="text-xs text-muted/60 mt-2">
            Hecho por{" "}
            <a
              href="zovvostudio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              ZovvoStudio
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
