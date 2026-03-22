import React, { useState, useEffect } from "react";

export default function PublicidadDigitalParaEmprendedoresNomadasPage() {
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

  const steps = [
    {
      number: "1",
      title: "Define objetivos claros",
      content: "Antes de encender campañas, decide si buscas: Generar leads (formularios, descargas), Vender productos o servicios, o Aumentar suscriptores de newsletter. Estos objetivos guiarán tu elección de plataformas y métricas (CPA, ROAS, CTR).",
    },
    {
      number: "2",
      title: "Elige las plataformas correctas",
      content: "Google Ads: ideal para tráfico con intención (búsqueda). Usa campañas de búsqueda y display para remarketing. Meta Ads (Facebook/Instagram): excelente para llegar a audiencias frías y construir marca.",
    },
    {
      number: "3",
      title: "Segmentación y creatividades",
      content: "Segmenta audiencias basadas en intereses, comportamientos y datos demográficos. Crea variaciones de anuncios (texto + imagen) y prueba cuáles generan más clics.",
    },
    {
      number: "4",
      title: "Optimiza y escala con datos",
      content: "Analiza el rendimiento semanalmente. Identifica cuáles campañas tienen mejor CPA y prioridades. Usa pruebas A/B para comparar titulares, llamadas a la acción, imágenes o videos.",
    },
  ];

  const tips = [
    { icon: "📊", text: "Ten un proceso de reporte rápido (una hoja con métricas clave)" },
    { icon: "👥", text: "Trabaja con un freelancer o agencia como apoyo cuando estás en destinos con internet lento" },
    { icon: "📱", text: "Asegura que tus páginas de destino estén optimizadas para móvil y carguen rápido" },
  ];

  return (
    <div className="font-sans leading-relaxed text-gray-700 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">Nomadas Digitales</div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a>
            <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Introducción</a>
            <a href="#pasos" onClick={(e) => { e.preventDefault(); scrollToSection('pasos'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Pasos</a>
            <a href="#consejos" onClick={(e) => { e.preventDefault(); scrollToSection('consejos'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Consejos</a>
            <a href="/servicios/business-consulting" className="text-gray-700 hover:text-purple-600 transition-colors">Business Consulting</a>
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
              <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a>
              <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Introducción</a>
              <a href="#pasos" onClick={(e) => { e.preventDefault(); scrollToSection('pasos'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Pasos</a>
              <a href="#consejos" onClick={(e) => { e.preventDefault(); scrollToSection('consejos'); }} className="text-gray-700 hover:text-purple-600 transition-colors">Consejos</a>
              <a href="/servicios/business-consulting" className="text-gray-700 hover:text-purple-600 transition-colors">Business Consulting</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">📈 Marketing Digital para Nómadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Publicidad digital para emprendedores nómadas: maximiza tu ROI
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Estrategias prácticas para lanzar campañas de Google Ads y Meta Ads que generen resultados mientras trabajas desde cualquier lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pasos" onClick={(e) => { e.preventDefault(); scrollToSection('pasos'); }} className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Ver Estrategias
            </a>
            <a href="/servicios/business-consulting" className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition-colors">
              Consultoría Empresarial
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">La publicidad digital es tu aliada</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            La publicidad digital es una herramienta potente para escalar tu negocio incluso cuando estás en movimiento. 
            El secreto consiste en priorizar campañas medibles, enfocadas y ajustadas al comportamiento de tu público.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section id="pasos" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">4 Pasos para Maximizar tu ROI</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pro Tip */}
          <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 border border-purple-200">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-2">Pro Tip</h4>
                <p className="text-gray-700">
                  Recurre a tus historias de viaje o casos de clientes para humanizar tus anuncios. 
                  Como nómada, configura alertas en tu móvil con tu herramienta de anuncios para revisar métricas clave sin entrar en profundidad cada día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Nomads Section */}
      <section id="consejos" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Consejos para Nómadas Digitales</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <p className="text-gray-700 font-medium">{tip.text}</p>
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <blockquote className="text-xl md:text-2xl italic mb-4">
              "La ventaja de ser nómada es que puedes iterar rápido y probar nuevas audiencias desde distintos mercados. Aprovecha esa agilidad."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Listo para escalar tu negocio?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre cómo nuestras estrategias de publicidad digital pueden ayudarte a crecer mientras viajas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/servicios/business-consulting" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Solicitar Consultoría
            </a>
            <a href="/" className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Volver al Inicio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nomadas Digitales. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Publicado: Marzo 2026 | Autor: Jacqueline M.Q.</p>
        </div>
      </footer>
    </div>
  );
}
