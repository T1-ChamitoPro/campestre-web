import { restaurantInfo } from '../../lib/constants';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-zinc-light pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Logo + Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-3xl">
                C
              </div>
              <div>
                <h3 className="text-2xl font-bold">{restaurantInfo.name}</h3>
                <p className="text-sm text-text-muted">{restaurantInfo.slogan}</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Disfruta de la mejor comida campestre en un ambiente familiar y agradable.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-semibold mb-5">Enlaces</h4>
            <ul className="space-y-3 text-text-muted">
              <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre Nosotros</a></li>
              <li><a href="#menu" className="hover:text-primary">Menú</a></li>
              <li><a href="#reservas" className="hover:text-primary">Reservas</a></li>
            </ul>
          </div>

          {/* Contacto y Horario */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contacto</h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5" size={20} />
                <p className="text-text-muted">{restaurantInfo.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-0.5" size={20} />
                <a 
                  href={`https://wa.me/${restaurantInfo.whatsapp}`}
                  className="text-text-muted hover:text-primary"
                >
                  {restaurantInfo.phone}
                </a>
              </div>

              <div>
                <h5 className="text-white text-xs mb-2 flex items-center gap-2">
                  <Clock size={16} /> Horario
                </h5>
                <p className="text-text-muted text-xs">
                  Viernes a Domingo y Festivos<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-light text-center text-xs text-text-muted">
          © {currentYear} {restaurantInfo.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
