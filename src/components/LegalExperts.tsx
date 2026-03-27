import { motion } from "framer-motion";
import femaleLawyer from "@/assets/lawyer-female.jpg";
import maleLawyer from "@/assets/lawyer-male.jpg";

const experts = [
  {
    image: femaleLawyer,
    name: "A.R. Amritha Bhagavathi, B.A., LL.M.",
    role: "Senior Advocate | Civil & Financial Law Specialist",
    desc: "Experienced advocate providing legal consultancy and court representation across Chennai, Chengalpattu, and surrounding areas.",
  },
  {
    image: maleLawyer,
    name: "V.H. Gokulan, B.A., LL.M.",
    role: "Advocate | Consumer & Litigation Specialist",
    desc: "Dedicated legal consultant offering client-focused support in litigation and legal advisory services.",
  },
];

const LegalExperts = () => {
  return (
    <section id="experts" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-gold font-sans text-sm tracking-widest uppercase mb-2">Our Legal Experts</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            The Advocates at Fedel Law Consultancy
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed">
            Skilled and experienced legal consultants providing trusted representation across Chennai, Chengalpattu
            and nearby courts. We handle civil, criminal, financial, and regulatory matters with a practical, ethical,
            and client-focused approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-xs text-primary-foreground/80 leading-relaxed">{expert.desc}</p>
                </div>
              </div>
              <div className="bg-card p-5 border-t-2 border-gold/30">
                <h3 className="font-serif font-semibold text-foreground mb-1">{expert.name}</h3>
                <p className="font-sans text-sm text-gold">{expert.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalExperts;
