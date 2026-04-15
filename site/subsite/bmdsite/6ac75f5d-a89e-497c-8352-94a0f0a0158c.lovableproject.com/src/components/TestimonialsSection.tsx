import { useState, useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Wonderful experience. Dr. Escobar is the best. Everyone was very cordial and made me feel really comfortable. I would definitely recommend this place to anyone.",
    author: "Cynthia H.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "From the initial phone call throughout the entire process it was definitely 5-star treatment. I would DEFINITELY recommend this place to ANYONE.",
    author: "Ron S.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. My smile has never looked better!",
    author: "Maria L.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "Dr. Johnson was so gentle and patient with me. I used to be terrified of the dentist, but not anymore. Truly life-changing care.",
    author: "James T.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    quote: "Got my implants done here and the results are phenomenal. It looks completely natural. Worth every penny!",
    author: "Sandra K.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    quote: "The whole team made my kids feel so comfortable. We drive 30 minutes to come here because no other office compares.",
    author: "David M.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: "I had a dental emergency and they fit me in the same day. The care I received was exceptional. Can't thank them enough.",
    author: "Patricia W.",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    quote: "My veneers look absolutely incredible. People keep asking me what I did differently. Thank you Bellaire Modern Dental!",
    author: "Kevin R.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "Clean, modern, friendly. Everything you want in a dental office. The technology they use is really impressive.",
    author: "Angela P.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    quote: "I've been coming here for 3 years and every visit is consistent — excellent care, warm staff, and a beautiful office.",
    author: "Robert J.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    quote: "The cosmetic work they did on my teeth completely changed my confidence. I smile all the time now!",
    author: "Lisa N.",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    quote: "Professional, punctual, and painless. Dr. Munu explained everything clearly and I felt totally at ease throughout.",
    author: "Thomas G.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cycleIdx, setCycleIdx] = useState(0);

  const activeIdx = hoveredIdx !== null ? hoveredIdx : cycleIdx;
  const active = testimonials[activeIdx];

  const nextCycle = useCallback(() => {
    setCycleIdx((prev) => {
      let next: number;
      do {
        next = Math.floor(Math.random() * testimonials.length);
      } while (next === prev && testimonials.length > 1);
      return next;
    });
  }, []);

  useEffect(() => {
    if (hoveredIdx !== null) return;
    const interval = setInterval(nextCycle, 4000);
    return () => clearInterval(interval);
  }, [hoveredIdx, nextCycle]);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-charcoal text-secondary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Patient Stories
          </p>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            We've helped thousands of Texans achieve a{" "}
            <span className="text-gradient-gold">beautiful smile</span>
          </h2>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Active testimonial display */}
          <div className="relative bg-secondary/30 backdrop-blur rounded-3xl p-8 lg:p-12 border border-secondary-foreground/10 mb-12 min-h-[220px] flex flex-col justify-center">
            <Quote className="h-10 w-10 text-primary/30 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p
              key={activeIdx}
              className="text-lg lg:text-xl text-secondary-foreground/90 leading-relaxed italic animate-fade-in"
            >
              "{active.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={active.avatar}
                alt={active.author}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/40"
              />
              <p className="font-semibold text-secondary-foreground">{active.author}</p>
            </div>
          </div>

          {/* Avatar grid */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setCycleIdx(i)}
                className={`relative rounded-full transition-all duration-300 ${
                  activeIdx === i
                    ? "ring-2 ring-primary scale-110 shadow-lg shadow-primary/20"
                    : "ring-1 ring-secondary-foreground/20 hover:ring-primary/50 hover:scale-105 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                />
                {activeIdx === i && (
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-secondary animate-scale-in" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
