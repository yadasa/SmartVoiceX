import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/b0dda1c1-f45e-4cf9-ba22-1554f112bc4f/Implants-and-Dentures.jpg",
    alt: "Dental implants & dentures",
    category: "Implants",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/da29314c-e56d-4281-80cf-4df74750ae79/Cosmetic-Dentistry.jpg",
    alt: "Cosmetic dentistry",
    category: "Cosmetic",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/0213ce87-1817-4b17-bbf3-2b4f3539a253/Surgery.jpg",
    alt: "Oral surgery",
    category: "Surgery",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/67522ea9ea4b3147aabef81c/740d694d-a3c0-4097-abd5-d5e7dc7276d5/General-Dentistry.jpg",
    alt: "General dentistry",
    category: "General",
  },
];

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));

  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6" ref={ref}>
          <div
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Our Work</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              Smile <span className="text-gradient-gold">Transformations</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Browse our gallery of life-changing dental results across every specialty.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto [column-fill:_balance]">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className={`group relative break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: isVisible ? `${i * 120 + 200}ms` : "0ms" }}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    {img.category}
                  </span>
                  <p className="text-background font-heading font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnails strip */}
          <div
            className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {filtered.map((img, i) => (
              <button
                key={img.src + "-thumb"}
                onClick={() => openLightbox(i)}
                className="w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-200 opacity-70 hover:opacity-100"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 lg:left-8 text-background/60 hover:text-background transition-colors z-10"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 lg:right-8 text-background/60 hover:text-background transition-colors z-10"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="max-w-4xl max-h-[85vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                {filtered[lightbox].category}
              </span>
              <p className="text-background font-heading font-semibold text-lg mt-1">
                {filtered[lightbox].alt}
              </p>
              <p className="text-background/50 text-sm mt-1">
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
