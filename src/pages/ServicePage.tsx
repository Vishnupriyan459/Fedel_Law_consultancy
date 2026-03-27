import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import LegalExperts from "../components/LegalExperts";
import ServicePageContent from "../components/Servicepagecontent";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocument,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineShieldCheck,
  HiOutlineHashtag,
  HiOutlineLockOpen,
  HiOutlineBanknotes,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineSpeakerWave,
  HiOutlineNoSymbol,
  HiOutlineMap,
  HiOutlineClipboardDocument,
  HiOutlinePencilSquare,
  HiOutlineDocumentMagnifyingGlass,
} from "react-icons/hi2";

import { Content } from "vaul";
import { ImHammer2 } from "react-icons/im";
// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceCardItem {
  title: string;
  icon: string;
}

export interface ServiceInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export interface ServiceData {
  title: string;
  description: string;
  servicesInfo: ServiceInfo[];
}

// ─── Legacy list data (kept for backward-compat if needed elsewhere) ──────────

const services: Record<string, { title: string; items: string[] }> = {
  "property-real-estate": {
    title: "Property & Real Estate Matters",
    items: [
      "Title verification and due diligence",
      "Property disputes and ownership claims",
      "Partition, injunction, and possession suits",
      "Builder–buyer disputes",
      "Registration and documentation advisory",
    ],
  },
  "criminal-law": {
    title: "Criminal Law",
    items: [
      "Bail applications",
      "Criminal defense",
      "FIR and investigation guidance",
    ],
  },
};

// ─── Rich service content ─────────────────────────────────────────────────────

const serviceContent: Record<string, ServiceData> = {
  "property-real-estate": {
    title: "Property & Real Estate Matters",
    description:
      "Comprehensive legal support for all property-related matters — from due diligence and documentation to resolving complex ownership disputes. We protect your real estate interests at every stage.",
    servicesInfo: [
      {
        title: "Title Verification",
        content:
          "Thorough examination of title deeds, encumbrance certificates, and revenue records to confirm clear and marketable title before any transaction.",
        icon: <HiOutlineMagnifyingGlass />,
      },
      {
        title: "Property Disputes",
        content:
          "Strategic representation in ownership disputes, boundary conflicts, and adverse possession claims before civil courts and revenue authorities.",
        icon: <HiOutlineScale />,
      },
      {
        title: "Partition, Injunction & Possession Suits",
        content:
          "Filing and defending partition suits for co-owned property, obtaining injunctions to protect possession, and executing possession orders.",
        icon: <HiOutlineBuildingLibrary />,
      },
      {
        title: "Builder–Buyer Disputes",
        content:
          "Addressing delayed possession, defective construction, non-refund of amounts, and RERA-related complaints against builders and developers.",
        icon: <HiOutlineWrenchScrewdriver />,
      },
      {
        title: "Property Documentation",
        content:
          "End-to-end assistance in drafting sale deeds, gift deeds, lease agreements, power of attorney, and registration of documents.",
        icon: <HiOutlineDocument />,
      },
    ],
  },

  "matrimonial-family-law": {
    title: "Matrimonial & Family Law",
    description:
      "Sensitive, discreet, and determined legal counsel for family matters — guiding you through difficult personal situations with professionalism and empathy.",
    servicesInfo: [
      {
        title: "Divorce Matters",
        content:
          "Representation in mutual consent and contested divorce proceedings across all personal law statutes including Hindu, Muslim, Christian, and Special Marriage Act.",
        icon: <HiOutlineHeart />,
      },
      {
        title: "Child Custody",
        content:
          "Advocating for the best interests of the child in custody, guardianship, and visitation disputes before family courts and high courts.",
        icon: <HiOutlineUserGroup/>,
      },
      {
        title: "Maintenance Claims",
        content:
          "Filing and defending claims for interim and permanent maintenance, alimony, and financial support for spouses and children.",
        icon: <HiOutlineBriefcase />,
      },
      {
        title: "Domestic Violence",
        content:
          "Urgent protection orders, residence orders, and compensation claims under the Protection of Women from Domestic Violence Act, 2005.",
        icon: <HiOutlineShieldCheck />,
      },
      {
        title: "Family Settlements",
        content:
          "Drafting legally binding family settlement agreements, mediation assistance, and court-approved consent terms to resolve disputes amicably.",
        icon: <HiOutlineHashtag />,
      },
    ],
  },

  "criminal-law": {
    title: "Criminal Law Services",
    description:
      "Robust criminal defence from trial courts to the Supreme Court — covering conventional criminal matters as well as complex economic offences under PMLA, FEMA, and regulatory statutes.",
    servicesInfo: [
      {
        title: "Criminal Trials",
        content:
          "Full-scale representation in criminal trials and appeals, including sessions, special courts, high courts, and the Supreme Court of India.",
        icon: <HiOutlineScale />,
      },
      {
        title: "Bail Matters",
        content:
          "Bail, anticipatory bail, and default bail applications; quashing of FIRs and criminal proceedings under Section 528 BNSS / Section 482 CrPC.",
        icon: <HiOutlineLockOpen />,
      },
      {
        title: "PMLA Defence",
        content:
          "Strategic defence in Prevention of Money Laundering Act cases — attachment proceedings, Special Court trials, PMLA appeals, and bail before Appellate Tribunals.",
        icon: <HiOutlineBanknotes />,
      },
      {
        title: "FEMA Cases",
        content:
          "Advisory and representation in Foreign Exchange Management Act investigations, compounding applications, and adjudication proceedings before the Enforcement Directorate.",
        icon: <HiOutlineGlobeAlt />,
      },
      {
        title: "GST & Taxation Opinions",
        content:
          "Expert legal opinions on GST disputes, tax evasion allegations, SFIO inquiries, and departmental investigations by revenue authorities.",
        icon: <HiOutlineChartBar />,
      },
    ],
  },

  "consumer-protection": {
    title: "Consumer Protection Matters",
    description:
      "Assertive representation for consumers and businesses before consumer commissions at every level — ensuring justice for deficiencies, unfair practices, and contractual violations.",
    servicesInfo: [
      {
        title: "Consumer Complaints",
        content:
          "Filing well-crafted complaints before District Consumer Commissions for product defects, service failures, and misleading advertisements.",
        icon: <HiOutlineSpeakerWave />,
      },
      {
        title: "Service Deficiency",
        content:
          "Claims against service providers including airlines, hospitals, educational institutions, and telecom companies for deficiency in services.",
        icon: <HiOutlineWrenchScrewdriver />,
      },
      {
        title: "Unfair Trade Claims",
        content:
          "Proceedings against unfair trade practices, restrictive trade practices, and false representations under the Consumer Protection Act, 2019.",
        icon: <HiOutlineNoSymbol />,
      },
      {
        title: "Insurance Disputes",
        content:
          "Challenging wrongful repudiation of insurance claims, under-settlement, and policy mis-selling by insurance companies before consumer forums.",
        icon: <HiOutlineShieldCheck />,
      },
      {
        title: "Consumer Appeals",
        content:
          "Appeals and revisions before State Consumer Disputes Redressal Commissions and the National Consumer Disputes Redressal Commission (NCDRC).",
        icon: <HiOutlineBuildingLibrary />,
      },
    ],
  },

  "pan-india-representation": {
    title: "Pan-India Legal Representation",
    description:
      "Seamless legal services across every jurisdiction in India — coordinating litigation, managing multi-forum proceedings, and ensuring consistent advocacy wherever your matter demands.",
    servicesInfo: [
      {
        title: "Nationwide Litigation",
        content:
          "End-to-end litigation management and advisory across all states — with an established network of associate counsel for local representation.",
        icon: <HiOutlineMap />,
      },
      {
        title: "Trial Court Cases",
        content:
          "Representation before Civil Courts, Criminal Courts, Family Courts, Labour Courts, and other courts of first instance across India.",
        icon: <HiOutlineScale />,
      },
      {
        title: "High Court Matters",
        content:
          "Writ petitions, appeals, and revisions before all 25 High Courts — including urgent hearings, interim reliefs, and constitutional matters.",
        icon:  <HiOutlineBuildingLibrary />,
      },
      {
        title: "Tribunal Representation",
        content:
          "Appearing before specialised tribunals including NCLT, NCLAT, ITAT, CESTAT, DRT, DRAT, NGT, SAT, and sector-specific regulatory bodies.",
        icon: <HiOutlineClipboardDocument />,
      },
    ],
  },

  "other-services": {
    title: "Other Legal Services",
    description:
      "Specialised opinions and advisory on complex legal questions — delivering clear, actionable guidance on regulatory, financial, and commercial matters.",
    servicesInfo: [
      {
        title: "Legal Opinions",
        content:
          "Detailed written legal opinions on civil, commercial, corporate, and property law matters for individuals, businesses, and institutions.",
        icon: <HiOutlinePencilSquare />,
      },
      {
        title: "FEMA Opinions",
        content:
          "Expert opinions on foreign exchange transactions, FDI compliance, ODI structuring, NRI investments, and cross-border remittance issues.",
        icon: <HiOutlineGlobeAlt />,
      },
      {
        title: "PMLA Opinion",
        content:
          "Comprehensive analysis of money laundering exposure, risk assessment, reporting obligations, and defence strategy under the PMLA framework.",
        icon: <HiOutlineDocumentMagnifyingGlass />,
      },
    ],
  },
};
const support = [
  {
    Title: "Case Evaluation & Legal Opinion",
    icon: <HiOutlineDocumentMagnifyingGlass />,
    content: "Analyze your case details and legal situation",
  },
  {
    Title: "Documentation & Evidence preparal",
    icon: <HiOutlineBanknotes />,
    content: "Prepare essential documents for your case ",
  },
  {
    Title: "Notice / Filling / Representation",
    icon: <HiOutlineScale />,
    content: "Issue notices and represent you in court",
  },
  {
    Title: "Court Follow-Up & Resolution",
    icon: <ImHammer2 />,
    content: "Reach and support in all courts through; the state",
  },
];


export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  const service = slug ? serviceContent[slug] : undefined;
  const legacyService = slug ? services[slug] : undefined;

  if (!service && !legacyService) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      

      {service ? (
        /* Rich content path — passes structured data to ServicePageContent */
        <ServicePageContent
          title={service.title}
          description={service.description}
          servicesInfo={service.servicesInfo}
        />
      ) : (
        /* Fallback: legacy plain-list rendering */
        <div>
          <h1>{legacyService!.title}</h1>
          <ul>
            {legacyService!.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="bg-white w-full">
  <h1 className="font-bold text-center pt-4  text-[clamp(1.35rem,2vw,4rem)]">How We Support Your Case</h1>

  <div className="flex max-md:flex-col items-stretch justify-around py-9 px-1 gap-5 mx-3 ">
    {support.map((item, index) => (
      <div
        key={index}
        className="flex-1 min-w-0 flex flex-col justify-center items-center border border-[#e8e2d6] rounded px-3 py-9 gap-4"
      >
        <div className="text-[clamp(2rem,2vw,1.5rem)]">{item.icon}</div>

        <h3 className="font-medium text-center w-full  text-[clamp(0.85rem,1.5vw,1rem)]">
          {item.Title}
        </h3>

        <p className="font-regular text-center text-[clamp(0.75rem,1.2vw,0.875rem)] line-clamp-4 w-full">
          {item.content}
        </p>
      </div>
    ))}
  </div>
</div>
      <LegalExperts />
      <CTASection />
      
    </>
  );
}