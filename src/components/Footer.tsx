import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const expertiseAreas = [
  "Civil & Criminal Cases",
  "Consumer Cases",
  "PMLA & FEMA Cases",
  "GST & Taxation Consultant",
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, contact, message } = formData;
    if (!name || !contact || !message) {
      alert("Please fill all fields");
      return;
    }
    const whatsappNumber = "919360676566";

    const text = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");
    // Form submission logic
    alert("Thank you for reaching out! We will contact you soon.");
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
    <footer id="footer" className="bg-dark-green pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-bold text-primary-foreground mb-1">
              We are
            </h3>
            <h4 className="text-gold font-serif font-bold text-xl mb-3">
              Fedel Law Consultancy
            </h4>
            <p className="text-gold-light font-sans text-sm italic mb-4">
              "Switch from doubt to right"
            </p>
            <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed">
              Trusted legal consultancy and court representation across Chennai,
              Chengalpattu, and surrounding areas.
            </p>
          </motion.div>

          {/* Column 2 - Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-primary-foreground mb-4">
              Our Address
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/70 font-sans text-sm">
                  No. 8, opposite indian atm, law clg main road, NGO nagar,
                  Chengalpattu – 603001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="text-primary-foreground/70 font-sans text-sm">
                  +91 96001 72568
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="text-primary-foreground/70 font-sans text-sm">
                  fedellawconsultancy@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-bold text-primary-foreground mb-4">
              Area of Expertise
            </h3>
            <ul className="space-y-2">
              {expertiseAreas.map((area) => (
                <li
                  key={area}
                  className="text-primary-foreground/70 font-sans text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-bold text-primary-foreground mb-4">
              GET IN TOUCH
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-primary-foreground/5 border border-gold/20 rounded text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Contact no."
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-primary-foreground/5 border border-gold/20 rounded text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
              <textarea
                placeholder="What do you need help with?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2.5 bg-primary-foreground/5 border border-gold/20 rounded text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-gold hover:bg-gold-dark text-accent-foreground font-sans font-semibold text-sm rounded transition-all duration-200"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-6 text-center">
          <p className="text-primary-foreground/40 font-sans text-xs">
            © 2026 Fedel Law Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
