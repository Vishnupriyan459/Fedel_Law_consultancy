import { motion } from "framer-motion";
import { Scale, Shield, Globe, Landmark, Receipt, GraduationCap} from "lucide-react";
import { Link } from "react-router-dom";
const areas = [
  {
    icon: Scale,
    title: "Civil & Criminal Cases",
    desc: "At Fedel Law Consultancy, we provide legal representation and advisory for civil disputes, criminal defence, property matters, personal conflicts, and court litigation support.",
    url: "services/criminal-law",
  },
  {
    icon: Shield,
    title: "Consumer Cases",
    desc: "We protect consumer rights in cases involving defective products, service deficiencies, unfair trade practices, and misrepresentation before consumer forums.",
    url: "services/consumer-protection",
  },
  {
    icon: Globe,
    title: "FEMA Opinion",
    desc: "We assist clients with FEMA compliance, cross-border transactions, foreign exchange issues, and regulatory approvals.",
    url: "services/other-services",
  },
  {
    icon: Landmark,
    title: "PMLA Cases",
    desc: "We provide legal guidance and representation in matters related to the Prevention of Money Laundering Act (PMLA) and financial investigations.",
    url: "services/other-services",
  },
  {
    icon: Receipt,
    title: "GST & Taxation",
    desc: "We offer advisory and legal support for GST registration, compliance, disputes, notices, and tax-related legal matters.",
    url: "services/other-services",
  },
  {
    icon: GraduationCap,
    title: "Legal Training & Awareness",
    desc: "We conduct legal awareness programs, workshops, and training sessions for individuals, organizations, and institutions.",
    url: "legal-training-awareness",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-sans text-sm tracking-widest uppercase mb-2">What we Do</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Our Legal Services & Practice Areas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <area.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
              <Link
                 to={`${area.url}`}
                className="font-sans text-sm font-medium text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-1"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
