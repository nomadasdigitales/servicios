import React, { useState, useEffect } from "react";

export default function BusinessConsultingPage() {
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
    { icon: "🌏", text: "Expansión a mercados asiáticos" },
    { icon: "🤝", text: "Consultoría de partnerships internacionales" },
    { icon: "📊", text: "Análisis de mercado y estrategias de crecimiento" },
    { icon: "💼", text: "Optimización de operaciones globales" },
    { icon: "🎯", text: "Desarrollo de estrategias digitales para negocios" },
  ];

  const testimonials = [
    {
      text: "La consultoría de Nomadas Digitales nos ayudó a expandirnos exitosamente en Asia. Su conocimiento del mercado fue invaluable.",
      author: "CEO de Empresa Global",
      rating: 5,
    },
    {
      text: "Recomiendo encarecidamente sus servicios. Transformaron nuestra estrategia internacional completamente.",
      author: "Directora de Expansión",
      rating: 5,
    },
    {
      text: "Profesionales con experiencia real en mercados asiáticos. Resultados excepcionales.",
      author: "Emprendedor Satisfecho",
      rating: 5,
    },
  ];

  return (
    <div className="font-sans leading-relaxed text-gray-700 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Nomadas Digitales</div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
            <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="text-gray-700 hover:text-blue-600 transition-colors">Soporte en Español</a>
          </nav>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="text-gray-700 hover:text-blue-600 transition-colors">Soporte en Español</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Business Consulting</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Potenciamos tu negocio con estrategias globales y expertise en mercados asiáticos. 
            Desde expansión internacional hasta optimización de operaciones, te ayudamos a crecer.
          </p>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Solicitar Consultoría
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios de Consultoría</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <p className="text-gray-700 font-medium">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="text-gray-800 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para expandir tu negocio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos para una consulta inicial gratuita y descubre cómo podemos ayudarte a crecer globalmente.
          </p>
          <a href="mailto:consulting@nomadasdigitales.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Enviar Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nomadas Digitales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}