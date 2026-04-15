import { restaurantInfo } from '../lib/constants';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-zinc">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Texto */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Nuestra Historia
            </div>
            
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Un pedazo de campo<br />en el corazón de Valledupar
            </h2>

            <div className="space-y-6 text-lg text-text-muted">
              <p>
                El Campestre nació con la idea de traer los sabores auténticos del campo a la ciudad. 
                Desde 2015, nos hemos convertido en el lugar favorito para disfrutar de buena comida, 
                ambiente familiar y momentos especiales.
              </p>
              <p>
                Nuestro enfoque está en ingredientes frescos, carnes de calidad y recetas tradicionales 
                preparadas con cariño. Ya sea para una comida familiar, un evento empresarial o una 
                celebración importante, en El Campestre encontrarás calidez y sabor en cada plato.
              </p>
            </div>
          </div>

          {/* Imagen / Decoración */}
          <div className="relative">
            <div className="aspect-square bg-zinc-light rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <span className="text-8xl opacity-10">🌳</span>
              </div>
            </div>
            
            {/* Decoración */}
            <div className="absolute -bottom-6 -right-6 bg-dark border border-zinc-light p-6 rounded-2xl">
              <p className="font-semibold text-primary">Ambiente Campestre</p>
              <p className="text-sm text-text-muted">Espacio abierto • Parqueadero • Rio Guatapuri </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
