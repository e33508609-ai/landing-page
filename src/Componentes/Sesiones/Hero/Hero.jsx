import Boton from "../../Reutilizables/Boton/Boton";

const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Transforma tu{' '}
            <span className="text-blue-600">
              negocio digital
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Soluciones innovadoras para llevar tu empresa al siguiente nivel con tecnología de punta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Boton size="lg" className="animate-bounce">
              Comenzar Ahora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Boton>
            <Boton variant="outline" size="lg">
              Ver Demo
            </Boton>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;