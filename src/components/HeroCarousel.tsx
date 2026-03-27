import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ladyJustice from "@/assets/god_of_justice.svg";
import highcourt from "@/assets/highcourt.jpg";
import building from "@/assets/building.png";

const slides = [
  {
    headline: "Expert Legal Advice\nis Just a Phone Call\nAway.",
    subtext:
      "Trusted legal guidance for individuals, families, and businesses. From civil disputes to corporate compliance, we provide clear legal solutions with professionalism, integrity, and care.",
    image: ladyJustice,
    imageClass:
      " object-contain drop-shadow-2xl ",
  },
  {
    headline: "Trusted Legal\nRepresentation with\nIntegrity",
    subtext:
      "Our experienced advocates handle civil, criminal, consumer, FEMA, GST, and financial law matters with dedication across Chennai and Chengalpattu courts.",
    image: highcourt,
    imageClass: " object-cover rounded-xl shadow-2xl",
  },
  {
    headline: "Complete Legal\nDocumentation Services\nin Tamil Nadu",
    subtext:
      "From legal opinions to property registration, we handle essential legal documentation and representation with accuracy and professionalism.",
    image: building,
    imageClass: " object-contain drop-shadow-xl",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative gradient-hero overflow-hidden min-h-[85vh] flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,hsl(40_55%_54%/0.15),transparent_50%)]"  />

      <div className="container mx-auto px-4 py-12 md:py-18 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* LEFT CONTENT */}
            <div className="order-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gold font-sans text-sm tracking-widest uppercase mb-4"
              >
                Leave the Legal Burden to Us
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight whitespace-pre-line mb-6"
              >
                {slides[current].headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-primary-foreground/70 font-sans text-base md:text-lg max-w-xl mb-8 leading-relaxed"
              >
                {slides[current].subtext}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#footer"
                  className="px-7 py-3 bg-gold hover:bg-gold-dark text-accent-foreground font-sans font-semibold rounded transition-all duration-200 hover:shadow-lg"
                >
                  Get Consultation
                </a>

                <a
                  href="#practice-areas"
                  className="px-7 py-3 border border-gold/40 text-primary-foreground font-sans font-semibold rounded hover:border-gold hover:bg-gold/10 transition-all duration-200"
                >
                  Explore Services
                </a>
              </motion.div>
             
            </div>

            
             {/* DOTS (Mobile between content & image, Desktop below both) */}
            <div className="order-2 md:order-3 md:col-span-2 flex gap-3 mt-6 md:mt-10 justify-start">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-8"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            {/* RIGHT IMAGE */}
            <div className="order-3 md:order-2 flex justify-center relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                src={slides[current].image}
                alt="Legal imagery"
                className={slides[current].imageClass}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroCarousel;