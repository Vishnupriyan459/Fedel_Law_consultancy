import { motion } from "framer-motion";
import ladyJustice from "@/assets/god_of_justice2.svg";

const CTASection = () => {
  return (
    <section className="relative gradient-cta py-20 md:py-28 overflow-hidden">
      {/* Faded Lady Justice */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-100 hidden lg:block m-2">
        <img
          src={ladyJustice}
          alt=""
          className="h-full object-contain object-right"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Leave the Legal<br />Burden to Us
          </h2>
          <p className="font-sans text-lg text-primary-foreground/70 mb-8 leading-relaxed">
            Professional guidance. Transparent process. Trusted representation.
            Let our experienced advocates handle your legal matters with integrity and dedication.
          </p>
          <a
            href="#footer"
            className="inline-block px-8 py-4 bg-gold hover:bg-gold-dark text-accent-foreground font-sans font-semibold rounded transition-all duration-200 hover:shadow-lg gold-glow"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
