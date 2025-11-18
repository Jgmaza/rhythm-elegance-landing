import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, Disc3, Radio } from "lucide-react";
import { repertorio } from "@/data/repertorio";

const iconMap = [Music2, Disc3, Radio];

const Repertorio = () => {
  return (
    <section id="repertorio" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
            Nuestro Repertorio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de los clásicos que hacen vibrar cualquier evento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {repertorio.map((categoria, index) => {
            const Icon = iconMap[index];
            return (
              <Card
                key={categoria.categoria}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-wine/30 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-3 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif wine">
                    {categoria.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {categoria.canciones.map((cancion, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-foreground/80 hover:text-wine transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="leading-relaxed">{cancion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
          Este es solo una muestra de nuestro extenso repertorio. Trabajamos contigo para personalizar
          la selección musical según el tipo de evento y las preferencias de tu audiencia.
        </p>
      </div>
    </section>
  );
};

export default Repertorio;
