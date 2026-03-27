import { Title } from "@radix-ui/react-toast";
import { icons } from "lucide-react";
import React from "react";

export interface ServiceInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
}

interface ServicePageContentProps {
  title: string;
  description: string;
  servicesInfo: ServiceInfo[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicePageContent({
  title,
  description,
  servicesInfo,
}: ServicePageContentProps) {
  return (
    <section className="service-page-content gradient-hero">
      {/* Hero header */}
      <div className="spc-hero">
        <div className="spc-hero__inner">
          <p className="spc-hero__eyebrow">Legal Services</p>
          <h1 className="spc-hero__title">{title}</h1>
          <p className="spc-hero__desc">{description}</p>
          <div className=" max-md:hidden flex gap-3 md:gap-10 justify-center mt-8">
            <a
              className="
    bg-[#B08D57] hover:bg-[#a07d24] active:bg-[#8d6e1f]
    text- font-semibold
    px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3
    text-[clamp(0.75rem,1.5vw,1rem)]
    rounded transition-all duration-200
    whitespace-nowrap
  "
              href="#footer"
            >
              Get Legal Consultation
            </a>

            <a
              className="
    border border-[#B08D57] hover:border-[#B08D57]
    hover:bg-white/10 active:bg-white/20
    text-white font-semibold
    px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3
    text-[clamp(0.75rem,1.5vw,1rem)]
    rounded transition-all duration-200
    whitespace-nowrap
  "
              href="tel:+919360676566"
            >
              Talk to our experts
            </a>
          </div>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="spc-cards-section space-y-7">
        <div className="spc-cards-grid ">
          {servicesInfo.map((service, index) => (
            <div className="spc-card" key={index}>
              <div className="spc-card__icon">{service.icon}</div>
              <h3 className="spc-card__title">{service.title}</h3>
              <p className="spc-card__content">{service.content}</p>
            </div>
          ))}
        </div>
        <p className="text-center ">
          Covering all types of {title} in every district of Tamil Nadu
        </p>
      </div>

      <style>{`
        /* ── Reset scope ─────────────────────────────────────────── */
        .service-page-content {
          --gold-btn: #8d7a26;
          --gold:    #B08D57;
          --gold-lt: #d4aa50;
          --ink:     #1a1a1a;
          --ink-mid: #3d3d3d;
          --ink-lt:  #6b6b6b;
          --cream:   #faf8f4;
          --white:   #ffffff;
          --border:  #e8e2d6;
          --shadow:  0 2px 20px rgba(0,0,0,0.07);
          --shadow-h:0 8px 40px rgba(0,0,0,0.13);
        }

        /* ── Hero ────────────────────────────────────────────────── */
        .spc-hero {
         
          background-image:
            radial-gradient(ellipse at 70% 50%, rgba(184,146,42,0.12) 0%, transparent 60%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 79px,
              rgba(255,255,255,0.02) 79px,
              rgba(255,255,255,0.02) 80px
            );
          padding: 96px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .spc-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .spc-hero__inner {
          max-width: 760px;
          margin: 0 auto;
        }

        .spc-hero__eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-lt);
          margin: 0 0 20px;
        }

        .spc-hero__title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 400;
          color: var(--white);
          line-height: 1.15;
          margin: 0 0 24px;
          letter-spacing: -0.01em;
        }

        .spc-hero__desc {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* ── Cards section ───────────────────────────────────────── */
        .spc-cards-section {
          background: var(--cream);
          padding: 72px 24px 88px;
        }

        .spc-cards-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
        }

        /* ── Individual card ─────────────────────────────────────── */
        .spc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-top: 3px solid var(--gold);
          border-radius: 2px;
          padding: 36px 32px 32px;
          box-shadow: var(--shadow);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
        }

        .spc-card:hover {
          box-shadow: var(--shadow-h);
          transform: translateY(-4px);
        }

        .spc-card__icon {
          font-size: 2rem;
          margin-bottom: 16px;
          line-height: 1;
          display: block;
          color: var(--gold);
        }

        .spc-card__title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 12px;
          letter-spacing: 0.01em;
          
        }

        .spc-card__content {
          font-size: 0.93rem;
          line-height: 1.7;
          color: var(--ink-mid);
          margin: 0;
          
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .spc-hero { padding: 64px 20px 56px; }
          .spc-hero_desc { font-size: 0.65rem; }
          .spc-cards-section { padding: 48px 16px 64px; }
          .spc-cards-grid { grid-template-columns: 1fr; gap: 20px; }
          .spc-card { padding: 28px 24px 24px; }
        }
      `}</style>
    </section>
  );
}
