import Card from "../../Reutilizables/Card/Card";

const Características = () => {
    const características = [
      {
        icon: "🚀",
        title: "Rápido y Eficiente",
        description: "Optimizado para máxima velocidad y rendimiento"
      },
      {
        icon: "🎨",
        title: "Diseño Moderno",
        description: "Interfaces modernas y atractivas para tus usuarios"
      },
      {
        icon: "⚡",
        title: "Tecnología Avanzada",
        description: "Utilizamos las últimas tecnologías del mercado"
      }
    ];
  
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características <span className="text-blue-600">Destacadas</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todo lo que podemos ofrecerte para impulsar tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {características.map((caracteristica, index) => (
              <Card 
                key={index} 
                hover 
                className="text-center group border-0 shadow-md"
              >
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {caracteristica.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {caracteristica.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {caracteristica.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Características;