import { content } from "@/data/content";

const Videos = () => {
  return (
    <section id="videos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 wine">
            {content.videos.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.videos.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-wine via-gold to-wine mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.videos.videoPlaceholders.map((video, index) => (
            <div
              key={video.id}
              className="group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gold/20 hover:border-gold/50">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="mt-4 text-xl font-serif font-semibold text-center wine group-hover:text-gold transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Nota: Reemplaza los enlaces de video en el archivo <code className="bg-muted px-2 py-1 rounded">src/data/content.ts</code>
        </p>
      </div>
    </section>
  );
};

export default Videos;
