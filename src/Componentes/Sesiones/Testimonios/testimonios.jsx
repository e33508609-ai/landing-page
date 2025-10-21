import Card from "../../Reutilizables/Card/Card";

const Testimonios = () => {
    const testimonios = [
      {
        id: 1,
        name: "María González",
        position: "CEO en TechSolutions",
        company: "TechSolutions",
        image: "👩‍💼",
        content: "Increíble servicio. Nuestra web ha mejorado un 200% en conversiones desde que trabajamos con ellos. Profesionales y eficientes.",
        rating: 5,
        featured: true
      },
      {
        id: 2,
        name: "Carlos Rodríguez",
        position: "Director de Marketing",
        company: "DigitalPlus",
        image: "👨‍💼",
        content: "El equipo entendió perfectamente nuestras necesidades y entregó un producto que superó todas nuestras expectativas.",
        rating: 5,
        featured: false
      },
      {
        id: 3,
        name: "Ana Martínez",
        position: "Fundadora",
        company: "StartupLab",
        image: "👩‍🎓",
        content: "La landing page que crearon para nosotros convierte como loca. Muy recomendables para cualquier proyecto digital.",
        rating: 4,
        featured: false
      },
      {
        id: 4,
        name: "David López",
        position: "CTO",
        company: "Innovatech",
        image: "👨‍🔬",
        content: "Código limpio, documentación excelente y un equipo muy profesional. Volveremos a trabajar con ellos sin duda.",
        rating: 5,
        featured: false
      }
    ];
  
    const StarRating = ({ rating }) => {
      return (
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
      );
    };
  
    return (
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros <span className="text-blue-600">clientes</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre por qué cientos de empresas confían en nosotros para sus proyectos digitales
            </p>
          </div>
  
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio) => (
              <Card 
                key={testimonio.id}
                hover
                className={`relative ${
                  testimonio.featured 
                    ? 'md:col-span-2 lg:col-span-1 md:row-span-2 transform md:scale-105 border-2 border-blue-200' 
                    : ''
                }`}
              >
                
                {testimonio.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                )}
  
               
                <div className="flex flex-col h-full">
                 
                  <div className="mb-4">
                    <StarRating rating={testimonio.rating} />
                  </div>
  
                  
                  <blockquote className="flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonio.content}"
                    </p>
                  </blockquote>
  
                 
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                    <div className="text-3xl mr-4">
                      {testimonio.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonio.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonio.position}
                      </div>
                      <div className="text-blue-600 text-sm font-medium">
                        {testimonio.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
  
         
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Tasa de Retención</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Rating Promedio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonios;