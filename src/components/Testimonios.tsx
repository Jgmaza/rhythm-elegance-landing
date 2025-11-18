import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonios } from "@/data/testimonios";

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de quienes han confiado en nosotros
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <Card
              key={testimonio.id}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-gold/50 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="pt-6">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-gold/30" />
                </div>
                
                <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonio.cita}"
                </blockquote>

                <div className="border-t pt-4">
                  <p className="font-semibold text-wine text-lg">
                    {testimonio.nombre}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonio.cargo}
                  </p>
                  <p className="text-sm font-medium text-gold mt-1">
                    {testimonio.empresa}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {testimonio.tipoEvento}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
