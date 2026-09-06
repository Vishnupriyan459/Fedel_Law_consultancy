
import React from "react";
import LegalExperts from "@/components/LegalExperts";
import {
  FaPenNib,
  FaSearch,
  FaGavel,
  FaBrain,
  FaMicrophone,
  FaHandshake,
  FaBalanceScale,
  FaCompass,
} from "react-icons/fa";
import { motion ,type Variants} from "framer-motion";

const skills = [
  {
    icon: <FaPenNib />,
    title: "Legal Drafting Basics",
    content:
      "Learn the fundamentals of drafting legal notices, petitions, affidavits, complaints, and other essential legal documents with clarity and structure.",
  },
  {
    icon: <FaSearch />,
    title: "Case Law Research",
    content:
      "Understand how to read judgments, identify legal issues, extract important principles, and use case law effectively in legal reasoning.",
  },
  {
    icon: <FaGavel />,
    title: "Courtroom Awareness",
    content:
      "Gain a practical understanding of court procedures, filing process, hearing flow, and how advocates present arguments in real legal settings.",
  },
  {
    icon: <FaBrain />,
    title: "Argument Building & Legal Analysis",
    content:
      "Develop the ability to analyze facts, identify legal questions, frame issues, and construct logical arguments from both sides of a matter.",
  },
  {
    icon: <FaMicrophone />,
    title: "Communication & Advocacy Skills",
    content:
      "Improve public speaking, legal communication, presentation, and confidence required for moots, internships, and future courtroom practice.",
  },
  {
    icon: <FaHandshake />,
    title: "Client Interaction Basics",
    content:
      "Learn the importance of listening, understanding a client's issue, maintaining professionalism, and explaining legal matters responsibly.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Professional Ethics & Legal Discipline",
    content:
      "Get introduced to the ethical responsibilities, discipline, and conduct expected from a legal professional.",
  },
  {
    icon: <FaCompass />,
    title: "Career Guidance for Law Students",
    content:
      "Receive mentorship on internships, early career planning, legal specializations, and how to build a strong profile from the first year onward.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Framer Motion variants
   ───────────────────────────────────────────────────────────── */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const skillCardVariants: Variants = {
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
};

const textItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MentorshipPage() {
  return (
    <>
      <main className="font-['Georgia','Times_New_Roman',serif]">
        <section
          className="relative overflow-hidden px-6 py-24 md:py-32 text-center"
          style={{
            background: "linear-gradient(135deg, #1C3D26 0%, #16271B 100%)",
            backgroundImage: `
              linear-gradient(135deg, #1C3D26 0%, #16271B 100%),
              radial-gradient(ellipse at 70% 50%, rgba(176,141,87,0.13) 0%, transparent 60%),
              repeating-linear-gradient(
                90deg, transparent, transparent 79px,
                rgba(255,255,255,0.02) 79px, rgba(255,255,255,0.02) 80px
              )
            `,
          }}
        >
          {/* bottom gold line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #B08D57, transparent)",
            }}
          />

          <motion.div
            className="max-w-[760px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <motion.p
              className="text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-[#B08D57] mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Legal Mentorship
            </motion.p>

            {/* Title */}
            <motion.h1
              className="font-normal text-white leading-[1.15] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Training & Mentorship Program for Law Freshmen
            </motion.h1>

            {/* Description */}
            <motion.p
              className="leading-[1.8] text-white/60 mb-4"
              style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Build a strong legal foundation with practical training, guided
              mentorship, and real-world exposure from experienced advocates.
            </motion.p>

            <motion.p
              className="leading-[1.8] text-white/50 max-w-[620px] mx-auto"
              style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              This program is designed for first-year law students who want to
              go beyond classroom learning and understand how the legal
              profession works in practice.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-8 justify-center mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="bg-[#B08D57] hover:bg-[#9a7a48] active:bg-[#B08D57]
                  text- font-semibold rounded
                  px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5
                  transition-all duration-200 whitespace-nowrap"
                style={{ fontSize: "clamp(0.78rem, 1.5vw, 1rem)" }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Apply Now
              </motion.button>

              <motion.button
                className="border border-[#B08D57] hover:border-[#d4aa50] hover:bg-white/10
                  text-white font-semibold rounded
                  px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5
                  transition-all duration-200 whitespace-nowrap"
                style={{ fontSize: "clamp(0.78rem, 1.5vw, 1rem)" }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Explore the Program
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#faf8f4] px-6 py-16 md:py-24">
          <motion.div
            className="max-w-[820px] mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={sectionVariants}
          >
            <motion.p
              className="text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-[#B08D57] mb-4"
              variants={textItemVariants}
            >
              About the Program
            </motion.p>

            <motion.h2
              className="font-normal text-[#1C3D26] leading-[1.2] mb-7"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              variants={textItemVariants}
            >
              From Classroom to Courtroom
            </motion.h2>

            <motion.p
              className="leading-[1.85] text-[#3d3d3d] mb-5"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1rem)" }}
              variants={textItemVariants}
            >
              The Training & Mentorship Program for Law Freshmen is created to
              help students take their first steps into the legal profession
              with the right skills, discipline, and guidance. It combines
              foundational legal learning with practical exposure so that
              students can better understand advocacy, legal procedure,
              research, drafting, and professional conduct.
            </motion.p>

            <motion.p
              className="leading-[1.85] text-[#6b6b6b]"
              style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)" }}
              variants={textItemVariants}
            >
              Whether a student aims to pursue litigation, legal consultancy,
              judicial services, or corporate law in the future, this program
              helps them develop the mindset and practical ability needed from
              the beginning.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Skills Grid ──────────────────────────────────────────── */}
        <section
          className="px-6 py-16 md:py-24"
          style={{
            background:
              "linear-gradient(160deg, #1C3D26 0%, #16271B 100%)",
          }}
        >
          <div className="max-w-[1100px] mx-auto">

            {/* Curriculum heading */}
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={sectionVariants}
            >
              <motion.p
                className="text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-[#B08D57] mb-4"
                variants={textItemVariants}
              >
                Curriculum
              </motion.p>

              <motion.h2
                className="font-normal text-white leading-[1.2]"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
                variants={textItemVariants}
              >
                Skills They Will Learn
              </motion.h2>
            </motion.div>

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7  "
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={skillsContainerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="
                    border border-[#B08D57]/30 hover:border-[#B08D57]/70
                    rounded-sm px-6 py-8
                    transition-all duration-300 hover:-translate-y-1
                    cursor-default
                  "
                  style={{
                    background: "rgba(255,255,255,0.04)",
                  }}
                  variants={skillCardVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.span
                    className="block leading-none mb-4 text-[#B08D57]"
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {skill.icon}
                  </motion.span>

                  {/* Title */}
                  <h3
                    className="font-bold text-[#B08D57] tracking-[0.01em] mb-3"
                    style={{
                      fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                    }}
                  >
                    {skill.title}
                  </h3>

                  {/* Content */}
                  <p
                    className="leading-[1.7] text-white/60"
                    style={{
                      fontSize: "clamp(0.78rem, 1.3vw, 0.92rem)",
                    }}
                  >
                    {skill.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#faf8f4] px-6 py-16 md:py-24">
          <motion.div
            className="max-w-[820px] mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={sectionVariants}
          >
            <motion.p
              className="text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-[#B08D57] mb-4"
              variants={textItemVariants}
            >
              What to Expect
            </motion.p>

            <motion.h2
              className="font-normal text-[#1C3D26] leading-[1.2] mb-7"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              variants={textItemVariants}
            >
              A Structured Learning Environment
            </motion.h2>

            <motion.p
              className="leading-[1.85] text-[#3d3d3d]"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1rem)" }}
              variants={textItemVariants}
            >
              Students can expect a structured learning environment where they
              are guided by experienced legal professionals, introduced to
              practical legal work, and encouraged to build confidence through
              mentoring and exposure. The program focuses not only on knowledge,
              but also on the discipline, communication, and thinking process
              required in the legal field.
            </motion.p>
          </motion.div>
        </section>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <LegalExperts />
        </motion.div>

        <section className="bg-[#faf8f4] px-6 py-16 md:py-24">
          <motion.div
            className="max-w-[820px] mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={sectionVariants}
          >
            <motion.p
              className="text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-[#B08D57] mb-4"
              variants={textItemVariants}
            >
              Why Mentorship
            </motion.p>

            <motion.h2
              className="font-normal text-[#1C3D26] leading-[1.2] mb-7"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              variants={textItemVariants}
            >
              Learn Under Practicing Advocates
            </motion.h2>

            <motion.p
              className="leading-[1.85] text-[#3d3d3d] mb-5"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1rem)" }}
              variants={textItemVariants}
            >
              Learning under practicing advocates gives law freshmen early
              exposure to the realities of the legal profession. Instead of
              only understanding law in theory, students begin to see how legal
              principles are applied in actual matters, how arguments are built,
              and how legal professionals communicate, prepare, and represent.
            </motion.p>

            <motion.p
              className="leading-[1.85] text-[#6b6b6b]"
              style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)" }}
              variants={textItemVariants}
            >
              This kind of mentorship helps students start their legal journey
              with direction, practical awareness, and confidence.
            </motion.p>
          </motion.div>
        </section>

        <section
          className="relative overflow-hidden px-6 py-20 md:py-28 text-center"
          style={{
            background:
              "linear-gradient(135deg, #1C3D26 0%, #16271B 100%)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #B08D57, transparent)",
            }}
          />

          <motion.div
            className="max-w-[680px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={sectionVariants}
          >
            <motion.h2
              className="font-normal text-white leading-[1.2] mb-5"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              variants={textItemVariants}
            >
              Start your legal journey with the right guidance.
            </motion.h2>

            <motion.p
              className="leading-[1.8] text-white/60 mb-10"
              style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)" }}
              variants={textItemVariants}
            >
              Gain practical exposure, foundational legal skills, and
              mentorship from experienced advocates who understand both the
              academic and professional side of law.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 md:gap-8 justify-center"
              variants={textItemVariants}
            >
              <motion.button
                className="bg-[#B08D57] hover:bg-[#9a7a48] active:bg-[#B08D57]
                  font-semibold rounded
                  px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5
                  transition-all duration-200 whitespace-nowrap"
                style={{
                  fontSize: "clamp(0.78rem, 1.5vw, 1rem)",
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Apply Now
              </motion.button>

              <motion.button
                className="border border-[#B08D57] hover:border-[#d4aa50] hover:bg-white/10
                  text-white font-semibold rounded
                  px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5
                  transition-all duration-200 whitespace-nowrap"
                style={{
                  fontSize: "clamp(0.78rem, 1.5vw, 1rem)",
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Explore the Program
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

