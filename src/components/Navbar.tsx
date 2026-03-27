import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/fedellaw-logo.png";
import ServiceMenu from "./ServiceMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#who-we-are" },
  { label: "Legal Services", type: "dropdown" },
  { label: "Legal Training & Development", href: "/legal-mentorship-training" },
  { label: "Contact Us", href: "#footer" },
  
];
const mobileServices = [
  {
    label: "Property & Real Estate",
    service: [
      "Title verification",
      "Property disputes",
      "Partition, injunction, and possession suits",
      "Builder-Buyer disputes",
      "Property documentation",
    ],
    url: "property-real-estate",
  },
  {
    label: "Matrimonial & Family Law",
    service: [
      "Divorce matters",
      "Child custody",
      "Maintenance claims",
      "Domestic violence",
      "Family settlements",
    ],
    url: "matrimonial-family-law",
  },
  {
    label: "Criminal Law Services",
    service: [
      "Criminal trials",
      "Bail matters",
      "PMLA defence",
      "FEMA cases",
      "GST & Taxation Opinions",
    ],
    url: "criminal-law",
  },
  {
    label: "Consumer Cases",
    service: [
      "Consumer complaints",
      "Service deficiency",
      "Unfair trade claims",
      "Insurance disputes",
      "Consumer appeals",
    ],
    url: "consumer-protection",
  },
  {
    label: "Pan-India Representation",
    service: [
      "Nationwide litigation",
      "Trial court cases",
      "High court matters",
      "Tribunal representation",
    ],
    url: "pan-india-representation",
  },
  {
    label: "Other Services",
    service: ["Legal Opinions", "FEMA Opinions", "PMLA Opinions"],
    url: "other-services",
  },
];



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  return (
    <header className="w-full z-50 relative">
      {/* Top bar */}
      <div className="gradient-hero py-2 px-4 md:px-8">
        <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] font-sans text-white  tracking-wide">
          Office Hours: Mon – Sat | 9:00 AM – 8:00 PM
        </p>
      </div>

      {/* Main nav */}
      <nav className="bg-dark-green   ">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Fedel Law Consultancy" className="h-12 w-auto" />
            <div className="hidden sm:block ">
              <span className="text-xl font-serif font-bold text-gold">FEDEL </span>
              <span className="text-xl font-serif font-bold text-primary-foreground">LAW</span>
              <p className="text-[10px] tracking-[0.2em] text-gold-light uppercase">Consultancy</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
             
              <li key={link.label} className="relative group">
                 {link.label === "Legal Services" ? (
                    <ServiceMenu />
                 ) :
                 (
                   <a
                  href={link.href}
                  className="font-sans lg:text-[10px] xl:text-sm text-primary-foreground/80 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
                 ) }
               
              </li>
            ))}
          </ul>

          <a
            href="#footer"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gold/90 hover:bg-gold text-accent-foreground font-sans font-semibold text-sm rounded transition-all duration-200 hover:shadow-lg"
          >
            <Plus size={14} />
            Book now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-dark-green border-t border-gold/10"
            >
              <ul className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
  <li key={link.label}>
    {link.label === "Legal Services" ? (
      <>
        {/* Dropdown Toggle */}
        <button
          onClick={() => setMobileDropdown(!mobileDropdown)}
          className="w-full text-left font-sans text-sm text-primary-foreground/80 hover:text-gold py-2"
        >
          {link.label}
        </button>

        {/* Dropdown Content */}
        <AnimatePresence>
          {mobileDropdown && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pl-4 border-l border-gold/20 flex flex-col gap-2"
            >
              {mobileServices.map((service) => (
                <li key={service.label}>
                  <a
                    href={`/services/${service.url}`}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-primary-foreground/70 hover:text-gold py-1"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </>
    ) : (
      <a
        href={link.href}
        onClick={() => setOpen(false)}
        className="block font-sans text-sm text-primary-foreground/80 hover:text-gold py-2 transition-colors"
      >
        {link.label}
      </a>
    )}
  </li>
))}
                <li>
                  <a
                    href="#footer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-accent-foreground font-sans font-semibold text-sm rounded mt-2"
                  >
                    <Plus size={14} />
                    Book now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
