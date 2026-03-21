import React, { useState, useEffect } from "react";

export default function SoporteenEspañolparaViajerosporAsíaPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    { icon: "💬", text: "Chat en tiempo real por WhatsApp" },
    { icon: "📞", text: "Llamadas de voz y videollamadas" },
    { icon: "🗺️", text: "Planificación de itinerarios personalizados" },
    { icon: "📍", text: "Información local y consejos prácticos" },
    { icon: "👨‍👩‍", text: "Atención de una familia con +13 años de experiencia" },
  ];

  const testimonials = [
    {
      text: "Gracias a Soporte en Español, mis vacaciones fueron inolvidables. Siempre estaban ahí cuando los necesitaba.",
      author: "Viajero feliz",
      rating: 5,
    },
    {
      text: "Los consejos que proporcionaron hicieron toda la diferencia en mi viaje. ¡Altamente recomendados!",
      author: "Exploradora contenta",
      rating: 5,
    },
    {
      text: "La tranquilidad de tener soporte en español mientras viajas por Asia no tiene precio. ¡Excelente servicio!",
      author: "Aventurero satisfecho",
      rating: 5,
    },
  ];

  return (
    <div className="font-sans leading-relaxed text-gray-700 bg-gradient-to-b from-teal-50 to-white min-h-screen">
      {/* Header / Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-teal-600/95 backdrop-blur-md shadow-lg"
            : "bg-teal-600"
        }`}
      >
        <nav className="flex flex-wrap justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌏</span>
            <h1 className="text-xl font-bold tracking-wide text-white">
              Soporte en Español
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap gap-1">
            {["servicios", "contacto", "testimonios"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 hover:scale-105 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-teal-700 px-6 py-4 animate-fade-in">
            {["servicios", "contacto", "testimonios"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-teal-800 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://image.qwenlm.ai/public_source/d20c3a2c-f607-4d13-93ff-c9d2c576e75a/10da23787-5cd7-48a0-8953-de89d17bbd86.png ')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        <div className="relative z-10 px-4 animate-fade-in-up">
          <div className="inline-block bg-teal-600/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">✈️ Viaja con confianza</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4 leading-tight">
            Asesoría para tus Viajes por Asia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl drop-shadow-lg mt-2 max-w-2xl mx-auto">
            Te ayudamos a vivir con tranquilidad en tus aventuras.
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="mt-8 bg-white text-teal-700 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-teal-100 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ¡Comienza tu aventura!
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto my-12 px-6">
        {/* Servicios Section */}
        <section
          id="servicios"
          className="mb-16 scroll-mt-24 animate-fade-in"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-2">
              Nuestros Servicios
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Ofrecemos asistencia por WhatsApp mediante chat, llamada o
            videollamada. Somos expertos en el itinerario de tus viajes,
            brindando información local y consejos prácticos.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-gray-700 bg-white rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 border border-teal-100"
              >
                <span className="text-3xl flex-shrink-0">{service.icon}</span>
                <span className="font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto Section */}
        <section
          id="contacto"
          className="mb-16 scroll-mt-24 animate-fade-in"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-2">Contacto</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Reservas y consultas en horarios intensos. Comunícate con nosotros
              usando el botón de WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/123456789 "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                ¡Contactar por WhatsApp!
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section
          id="testimonios"
          className="mb-16 scroll-mt-24 animate-fade-in"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-2">
              Testimonios
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-teal-500 rounded-xl px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <footer className="text-teal-700 font-semibold text-sm">
                  — {testimonial.author}
                </footer>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para tu aventura en Asia?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            No viajes solo. Contáctanos y haz de tu viaje una experiencia
            inolvidable y segura.
          </p>
          <a
            href="https://wa.me/123456789 "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-teal-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-teal-50 hover:scale-105 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hablar con un asesor
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-3xl">🌏</span>
            <span className="text-xl font-bold">Soporte en Español</span>
          </div>
          <p className="text-sm text-white/80 mb-4">
            &copy; 2024 Soporte en Español para Viajeros por Asia. Todos los
            derechos reservados.
          </p>
          <div className="flex justify-center gap-4 text-white/60 text-sm">
            <span>✈️ Viajes seguros</span>
            <span>•</span>
            <span>🌏 Experiencia local</span>
            <span>•</span>
            <span>💬 Soporte 24/7</span>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
