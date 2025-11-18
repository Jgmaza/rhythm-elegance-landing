import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Sparkles } from "lucide-react";
import { formatos } from "@/data/formatos";

const iconMap = {
  intimo: Sparkles,
  salsa: Music,
  crossover: Users,
};

const Formatos = () => {
  return (
    <section id="formatos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
            Nuestros Formatos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres opciones diseñadas para adaptarse perfectamente a tu evento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formatos.map((formato, index) => {
            const Icon = iconMap[formato.id as keyof typeof iconMap];
            return (
              <Card
                key={formato.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-gold/50 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-wine to-wine-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif wine">
                    {formato.nombre}
                  </CardTitle>
                  <CardDescription className="text-base gold font-semibold">
                    {formato.subtitulo}
                  </CardDescription>
                  <Badge variant="outline" className="w-fit mt-2 border-wine/30">
                    {formato.musicos}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {formato.descripcion}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-wine">Instrumentación:</h4>
                    <ul className="space-y-2">
                      {formato.instrumentos.map((instrumento, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                          <span>{instrumento}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-wine">Ideal para:</h4>
                    <div className="flex flex-wrap gap-2">
                      {formato.idealPara.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gold/10 text-foreground border-gold/20"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Formatos;
