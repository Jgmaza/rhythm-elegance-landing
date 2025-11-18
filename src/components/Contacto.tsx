import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, Clock, Headphones } from "lucide-react";
import { content } from "@/data/content";

const Contacto = () => {
  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}`;

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
              {content.technical.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto"></div>
          </div>

          {/* Technical Information */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-12 border-2 border-gold/20 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 wine">Duración del Show</h3>
                  <p className="text-foreground/80">{content.technical.showDuration}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 wine">Coordinación Incluida</h3>
                  <p className="text-foreground/80">{content.technical.coordination}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic border-t pt-4 mt-4">
                {content.technical.note}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h3 className="text-3xl font-serif font-bold wine">
              {content.contact.title}
            </h3>

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              className="bg-wine hover:bg-wine-dark text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href={`https://instagram.com/${content.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-wine transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-wine to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{content.contact.instagram}</span>
              </a>

              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 text-foreground hover:text-wine transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-wine rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{content.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
