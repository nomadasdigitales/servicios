import React, { useState, useEffect } from "react";

export default function IndexPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans leading-relaxed text-gray-700 bg-gradient-to-b from-teal-50 to-white min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-600">Nomadas Digitales</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Inicio</a>
            <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Servicios</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>
            <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="text-gray-700 hover:text-teal-600 transition-colors">Soporte en Español</a>
            <a href="/servicios/business-consulting" className="text-gray-700 hover:text-teal-600 transition-colors">Business Consulting</a>
            <a href="/publicidad-digital-para-emprendedores-nomadas" className="text-gray-700 hover:text-teal-600 transition-colors">Publicidad Digital</a>
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
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Inicio</a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>
              <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="text-gray-700 hover:text-teal-600 transition-colors">Soporte en Español</a>
              <a href="/servicios/business-consulting" className="text-gray-700 hover:text-teal-600 transition-colors">Business Consulting</a>
              <a href="/publicidad-digital-para-emprendedores-nomadas" className="text-gray-700 hover:text-teal-600 transition-colors">Publicidad Digital</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Bienvenido a Nomadas Digitales</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tu compañero digital para viajes por Asia y consultoría empresarial. 
            Conectamos culturas, facilitamos experiencias y potenciamos negocios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Soporte para Viajeros
            </a>
            <a href="/servicios/business-consulting" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Consultoría Empresarial
            </a>
            <a href="/publicidad-digital-para-emprendedores-nomadas" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Publicidad Digital
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Soporte en Español para Viajeros por Asia</h3>
              <p className="text-gray-600 mb-4">
                Asistencia completa en español para tus viajes por Asia. Desde planificación hasta soporte en tiempo real.
              </p>
              <a href="/servicios/soporte-en-espanol-para-viajeros-por-asia" className="text-teal-600 hover:text-teal-800 font-semibold">
                Más información →
              </a>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4">
                Consultoría especializada para empresas que operan en mercados asiáticos o con clientes internacionales.
              </p>
              <a href="/servicios/business-consulting" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más información →
              </a>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Publicidad Digital para Nómadas</h3>
              <p className="text-gray-600 mb-4">
                Estrategias prácticas para lanzar campañas de Google Ads y Meta Ads que generen resultados mientras trabajas desde cualquier lugar.
              </p>
              <a href="/publicidad-digital-para-emprendedores-nomadas" className="text-purple-600 hover:text-purple-800 font-semibold">
                Más información →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contáctanos</h2>
          <p className="text-xl text-gray-600 mb-8">
            ¿Listo para comenzar tu aventura digital? Estamos aquí para ayudarte.
          </p>
          <a href="mailto:info@nomadasdigitales.com" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
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