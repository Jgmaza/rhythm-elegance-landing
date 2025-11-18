import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";
import { content } from "@/data/content";

const Hero = () => {
  const whatsappLink = `https://wa.me/${content.hero.whatsappNumber}`;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="gradient-text">{content.hero.title}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {content.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-wine hover:bg-wine-dark text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {content.hero.whatsappText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold text-foreground hover:bg-gold/10 text-lg px-8 py-6"
                onClick={() => window.open("/brochure.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                {content.hero.brochureText}
              </Button>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
              <div className="w-full h-full bg-gradient-to-br from-wine/20 via-muted to-gold/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-wine/30 rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Aquí va una imagen o video destacado
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-wine/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
