import React from "react";
import { motion } from "framer-motion";

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

export default function ServicePageContent({
  title,
  description,
  servicesInfo,
}: ServicePageContentProps) {
  return (
    <section className="service-page-content gradient-hero">

      {/* HERO */}
      <div className="spc-hero h-[calc(100vh-90px)] max-h-[700px] flex flex-col justify-center relative">
        <motion.div
          key={title}
          className="spc-hero__inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* Eyebrow */}
          <motion.p
            className="spc-hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Legal Services
          </motion.p>

          {/* Title */}
          <motion.h1
            className="spc-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="spc-hero__desc"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="max-md:hidden flex gap-3 md:gap-10 justify-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#footer"
              className="
                bg-[#B08D57] hover:bg-[#a07d24] active:bg-[#8d6e1f]
                text-font-semibold
                px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3
                text-[clamp(0.75rem,1.5vw,1rem)]
                rounded transition-all duration-200
                whitespace-nowrap
              "
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Get Legal Consultation
            </motion.a>

            <motion.a
              href="tel:+91918610172215"
              className="
                border border-[#B08D57]
                hover:bg-white/10 active:bg-white/20
                text-white font-semibold
                px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3
                text-[clamp(0.75rem,1.5vw,1rem)]
                rounded transition-all duration-200
                whitespace-nowrap
              "
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Talk to our experts
            </motion.a>
          </motion.div>

        </motion.div>
      </div>


      {/* SERVICES */}
      <div className="spc-cards-section space-y-7">

        <motion.div
          className="spc-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {servicesInfo.map((service, index) => (
            <motion.div
              className="spc-card"
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              {/* Icon */}
              <motion.div
                className="spc-card__icon"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="spc-card__title">
                {service.title}
              </h3>

              {/* Content */}
              <p className="spc-card__content">
                {service.content}
              </p>

            </motion.div>
          ))}

        </motion.div>


        {/* Bottom text */}
        <motion.p
          className="text-center"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          Covering all types of {title} in every district of Tamil Nadu
        </motion.p>

      </div>

      {/* YOUR EXISTING STYLE */}
      <style>{`
        .service-page-content {
          --gold-btn: #8d7a26;
          --gold: #B08D57;
          --gold-lt: #d4aa50;
          --ink: #1a1a1a;
          --ink-mid: #3d3d3d;
          --ink-lt: #6b6b6b;
          --cream: #faf8f4;
          --white: #ffffff;
          --border: #e8e2d6;
          --shadow: 0 2px 20px rgba(0,0,0,0.07);
          --shadow-h: 0 8px 40px rgba(0,0,0,0.13);
        }

        .spc-hero {
          background-image:
            radial-gradient(
              ellipse at 70% 50%,
              rgba(184,146,42,0.12) 0%,
              transparent 60%
            ),
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
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold),
            transparent
          );
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

        .spc-cards-section {
          background: var(--cream);
          padding: 72px 24px 88px;
        }

        .spc-cards-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(300px, 1fr)
          );
          gap: 28px;
        }

        .spc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-top: 3px solid var(--gold);
          border-radius: 2px;
          padding: 36px 32px 32px;
          box-shadow: var(--shadow);
          cursor: default;
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

        @media (max-width: 640px) {
          .spc-hero {
            padding: 64px 20px 56px;
          }

          .spc-hero__desc {
            font-size: 0.9rem;
          }

          .spc-cards-section {
            padding: 48px 16px 64px;
          }

          .spc-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .spc-card {
            padding: 28px 24px 24px;
          }
        }
      `}</style>

    </section>
  );
}