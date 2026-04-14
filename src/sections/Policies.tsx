export default function Policies() {
  return (
    <section className="py-20 bg-zinc border-t border-zinc-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-white">Información Importante</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Por favor lee atentamente nuestras políticas y reglas antes de visitarnos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Horario y Precio de Entrada */}
          <div className="space-y-8">
            {/* Horario */}
            <div className="bg-dark border border-zinc-light rounded-3xl p-8">
              <h3 className="text-primary text-2xl font-semibold mb-6 flex items-center gap-3">
                🕒 Horario de Atención
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-text-muted">
                  <span>Viernes</span>
                  <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-text-muted">
                  <span>Sábado</span>
                  <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-text-muted">
                  <span>Domingo</span>
                  <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-text-muted">
                  <span>Festivos</span>
                  <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Precio de Entrada */}
            <div className="bg-dark border border-zinc-light rounded-3xl p-8">
              <h3 className="text-primary text-2xl font-semibold mb-6">💰 Precio de Entrada</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Niños (hasta 14 años)</span>
                  <span className="text-2xl font-bold text-primary">$5.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Adultos (mayores de 14 años)</span>
                  <span className="text-2xl font-bold text-primary">$10.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reglas y Políticas al pedir */}
          <div className="bg-dark border border-zinc-light rounded-3xl p-8">
            <h3 className="text-primary text-2xl font-semibold mb-8">📋 Al momento de hacer tu pedido</h3>
            
            <ol className="space-y-6 text-text-muted list-decimal pl-5">
              <li>Al tomar tu pedido, por favor indica el nombre de la persona que pagará la cuenta.</li>
              <li>Indica la hora aproximada en la que deseas que llegue tu pedido (a partir de las 12:00, en intervalos de 30 minutos).</li>
              <li>Una vez confirmado nombre y hora, se procede a seleccionar los platos.</li>
              <li>Revisa bien los productos antes de confirmar, ya que no se pueden hacer cambios después.</li>
              <li>La factura se entrega inmediatamente y debe pagarse en ese momento con la cajera móvil.</li>
              <li>El tiempo de preparación puede demorar hasta <span className="text-white">25 minutos</span>, dependiendo de la cantidad de pedidos previos.</li>
            </ol>
          </div>
        </div>

        {/* Reglas Generales - Full Width */}
        <div className="mt-12 bg-red-950/30 border border-red-900/50 rounded-3xl p-10">
          <h3 className="text-red-400 text-2xl font-semibold mb-8 flex items-center gap-3">
            ⚠️ Reglas del Restaurante
          </h3>
          
          <div className="space-y-8 text-text-muted">
            <div>
              <p className="font-medium text-white mb-2">1. Prohibición de ingreso de productos externos</p>
              <p>No está permitido ingresar gaseosas, bebidas embriagantes, snacks ni ningún tipo de comida externa.</p>
              <p className="text-red-400 text-sm mt-2">En caso de detectarse, se cobrará el valor del producto ingresado.</p>
            </div>

            <div>
              <p className="font-medium text-white mb-2">2. Prohibido el ingreso de comida y equipos de sonido</p>
              <p>Está terminantemente prohibido ingresar comida y usar equipos de sonido dentro del restaurante.</p>
              <p className="text-red-400 text-sm mt-2">
                Somos un restaurante y estamos para vender nuestros productos. 
                El consumo de entradas no da derecho a violar estas normas.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-red-400/80 mt-10 font-medium">
            Por favor respete estas reglas para mantener un buen ambiente para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
