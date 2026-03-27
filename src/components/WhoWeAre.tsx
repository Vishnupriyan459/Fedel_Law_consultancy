import { motion } from "framer-motion";
import highcourt from "@/assets/Vector.png";

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative lg:h-[180vh] bg-cream overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={highcourt}
        alt="High Court Building"
        className=" max-lg:hidden lg:absolute -bottom-10 left-0 w-full h-auto z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 py-20 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">
            Who we are?
          </p>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground italic">
            Law Firm in Chengalpattu & Chennai
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="font-sans text-muted-foreground leading-relaxed mb-6 max-md:text-sm md:text-base">
            Fedel Law Consultancy is a client-focused legal service firm dedicated
            to providing reliable and result-oriented legal support. Our team of
            experienced advocates handles a wide range of civil, criminal,
            financial, and regulatory matters with a practical and ethical
            approach. We actively handle cases across India especially Chennai
            courts, Chengalpattu, and surrounding areas, ensuring accessible and
            responsive legal assistance for our clients.
          </p>

          <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-md:text-sm md:text-base">
            We believe the law should protect, empower, and guide people — not
            confuse them. That's why we simplify legal processes and stand by our
            clients at every step, from consultation to resolution.
          </p>

          <h3 className="max-sm:xl md:text-2xl font-serif font-semibold text-foreground italic text-[#B08D57]">
            We cover major legal support
          </h3>
        </motion.div>
        
      </div>
      <img src={highcourt} alt="High Court Building" className="lg:hidden w-full h-autoobject-cover pointer-events-none" />

    </section>
  );
};

export default WhoWeAre;