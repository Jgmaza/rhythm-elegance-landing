import { MessageCircle, Instagram } from "lucide-react";
import { content } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${content.contact.whatsappNumber}`;

  return (
    <footer className="bg-wine text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Name */}
          <h3 className="text-2xl font-serif font-bold text-gold">
            {content.bandName}
          </h3>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href={`https://instagram.com/${content.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/80">
            <p>© {currentYear} {content.bandName}</p>
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
