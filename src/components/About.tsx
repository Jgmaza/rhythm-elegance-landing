import { content } from "@/data/content";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
              {content.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 animate-fade-in">
            {content.about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-center sm:text-left"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-wine/20"></div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-wine/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gold/20"></div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-wine/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
