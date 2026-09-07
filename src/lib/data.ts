import { IMAGES } from "@/lib/images";
import type {
  NavLink,
  StatItem,
  ClientItem,
  CoffeeGrade,
  ProcessStep,
  Certification,
  TimelineEvent,
  NewsItem,
  FaqItem,
  SustainabilityPoint,
} from "@/types";

export const siteConfig = {
  name: "High Range Coffee",
  legalName: "High Range Coffee Curing Private Limited",
  tagline: "Curing Trust Into Every Bean, Since 1995",
  shortDescription:
    "Premium green (unroasted) Arabica and Robusta coffee bean exporter and curing works, sourcing from the High Range growing belt and processing at our Coorg curing works in Karnataka, India.",
  description:
    "High Range Coffee Curing Private Limited is a trusted Indian exporter and curing works for green, unroasted Arabica and Robusta coffee beans, serving global trading houses and FMCG majors including Nestle, ITC, Hindustan Unilever, Olam and Louis Dreyfus Company since 1995.",
  url: "https://highrangecoffee.com",
  founded: "1995",
  heritageYears: "50+",
  founder: {
    name: "K.H.M. Saly",
    title: "Founder",
    experience: "40 years",
    bio: "Mr. K.H.M. Saly has spent four decades in the coffee industry, building High Range Coffee Curing Private Limited into one of the trusted names in Indian green coffee export, rooted in a family coffee heritage that traces back over fifty years to a plantation his forefathers started in the remote village of Nelliyampathy.",
  },
  address: {
    line1: "Abbur, Periyapatna",
    line2: "Kushalnagar, Coorg (Kodagu) District",
    city: "Karnataka",
    postalCode: "571107",
    country: "India",
    full: "Abbur, Periyapatna, Kushalnagar, Coorg District, Karnataka 571107, India",
  },
  contact: {
    phones: ["+91 82232 74700", "+91 99618 70700", "+91 94484 67968"],
    email: "highrangecoffee@gmail.com",
    whatsapp: "919961870700",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/high-range-coffee",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Coffee", href: "/coffee" },
  { label: "Sourcing & Process", href: "/sourcing-process" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Clientele", href: "/clientele" },
  { label: "For Importers", href: "/export" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: StatItem[] = [
  { label: "Installed Processing Capacity", value: "8,000", suffix: "MT" },
  { label: "Coffee Trees Under Cultivation", value: "300,000", suffix: "+" },
  { label: "Years of Family Coffee Heritage", value: "50", suffix: "+" },
  { label: "Land Preserved as Natural Forest", value: "21", suffix: "%" },
];

export const estateStats: StatItem[] = [
  {
    label: "Core Estate",
    value: "100",
    suffix: "ha",
    description: "Home estate under direct cultivation and management.",
  },
  {
    label: "Coffee Under Cultivation",
    value: "250",
    suffix: "ha",
    description: "Aggregate area under coffee across our holdings and grower network.",
  },
  {
    label: "Coffee Trees",
    value: "300,000",
    suffix: "+",
    description: "Arabica and Robusta trees cultivated across the High Range growing belt.",
  },
  {
    label: "Forest Cover Preserved",
    value: "21",
    suffix: "%",
    description: "Land intentionally left under natural forest for shade and biodiversity.",
  },
];

export const clients: ClientItem[] = [
  { name: "Nestle", category: "FMCG" },
  { name: "ITC Limited", category: "FMCG" },
  { name: "Hindustan Unilever", category: "FMCG" },
  { name: "Olam Agri", category: "Global Trading House" },
  { name: "Louis Dreyfus Company", category: "Global Trading House" },
  { name: "Aspinwall & Co.", category: "Trading House" },
  { name: "Continental Coffee", category: "Processor" },
  { name: "Allanasons", category: "Exporter" },
  { name: "Ned Commodities", category: "Global Trading House" },
  { name: "ECOM Agroindustrial", category: "Global Trading House" },
];

export const coffeeGrades: CoffeeGrade[] = [
  {
    slug: "plantation-a",
    name: "Plantation A",
    species: "Arabica",
    process: "Washed",
    description:
      "Our flagship washed Arabica grade, wet-processed and sun-dried for a clean, bright cup with balanced acidity. Plantation A is graded on bean size, density and defect count, making it a benchmark grade sought by roasters and trading houses worldwide.",
    cuppingNotes: ["Bright acidity", "Balanced body", "Notes of citrus and brown sugar"],
    screenSize: "Screen 17/18",
    image: IMAGES.greenBeans,
  },
  {
    slug: "plantation-b",
    name: "Plantation B",
    species: "Arabica",
    process: "Washed",
    description:
      "A washed Arabica grade just below Plantation A in screen size, offering excellent value without compromising on the clean, washed-process cup profile our buyers expect.",
    cuppingNotes: ["Clean cup", "Mild acidity", "Smooth, rounded body"],
    screenSize: "Screen 15/16",
    image: IMAGES.aerialEstate,
  },
  {
    slug: "plantation-c",
    name: "Plantation C",
    species: "Arabica",
    process: "Washed",
    description:
      "Our commercial washed Arabica grade, ideal for blends and volume buyers seeking consistent quality at competitive pricing, sourced and graded to Coffee Board of India standards.",
    cuppingNotes: ["Consistent cup", "Light acidity", "Versatile for blending"],
    screenSize: "Screen 14",
    image: IMAGES.dryingYard,
  },
  {
    slug: "arabica-cherry-ab",
    name: "Arabica Cherry AB",
    species: "Arabica",
    process: "Natural (Cherry)",
    description:
      "Sun-dried natural-process Arabica, processed whole as cherry to develop a fuller body and fruit-forward sweetness. A favourite among specialty roasters looking for distinctive, terroir-driven lots from the High Range belt.",
    cuppingNotes: ["Fruit-forward sweetness", "Full body", "Wine-like complexity"],
    screenSize: "AB Grade",
    image: IMAGES.cherries,
  },
  {
    slug: "robusta-cherry-ab",
    name: "Robusta Cherry AB",
    species: "Robusta",
    process: "Natural (Cherry)",
    description:
      "Sun-dried natural Robusta cherry, prized for its bold body, higher crema potential and strong, dependable base for espresso and instant-coffee blends.",
    cuppingNotes: ["Bold, earthy body", "Low acidity", "Strong crema base"],
    screenSize: "AB Grade",
    image: IMAGES.farmerPortrait,
  },
  {
    slug: "robusta-parchment",
    name: "Robusta Parchment",
    species: "Robusta",
    process: "Washed (Parchment)",
    description:
      "Washed and parchment-dried Robusta delivering a cleaner cup than natural-process Robusta, well suited for blenders wanting Robusta's strength with a smoother finish.",
    cuppingNotes: ["Cleaner Robusta profile", "Medium body", "Smooth finish"],
    screenSize: "Parchment AB",
    image: IMAGES.cupping,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Sourcing from the High Range Belt",
    description:
      "We work directly with growers and estates across the High Range coffee-growing belt spanning Kerala's Idukki and Munnar tracts and the adjoining Coorg growing region, building relationships that in many cases span generations.",
    image: IMAGES.heroEstate,
  },
  {
    step: 2,
    title: "Harvest",
    description:
      "Coffee cherries are hand-picked at peak ripeness during the harvest season (October to February), ensuring only quality cherry reaches our curing works for processing.",
    image: IMAGES.cherries,
  },
  {
    step: 3,
    title: "Curing & Processing",
    description:
      "At our curing works in Periyapatna and Kushalnagar, Coorg, cherry and parchment coffee is processed using sophisticated machinery — pulping, washing, sun-drying on our patios, and hulling — to bring out the best in every lot.",
    image: IMAGES.dryingYard,
  },
  {
    step: 4,
    title: "Grading & Quality Control",
    description:
      "Every lot is graded by screen size, density and defect count in line with Coffee Board of India standards, and cupped by our trained quality team before it is approved for sale.",
    image: IMAGES.cupping,
  },
  {
    step: 5,
    title: "Storage",
    description:
      "Graded green coffee is stored in our climate-appropriate warehousing facilities, protecting moisture content and cup quality until it is ready for dispatch.",
    image: IMAGES.greenBeans,
  },
  {
    step: 6,
    title: "Export",
    description:
      "We handle documentation, phytosanitary certification and logistics coordination to move consignments efficiently from our Coorg facility to ports and on to buyers across India and overseas.",
    image: IMAGES.exportContainers,
  },
];

export const certifications: Certification[] = [
  {
    name: "Coffee Board of India Recognition",
    description:
      "High Range Coffee Curing Private Limited is recognised and certified by the Coffee Board of India for coffee curing and export operations.",
  },
  {
    name: "4C Accreditation (via Nestle India)",
    description:
      "Accredited under the 4C (Common Code for the Coffee Community) baseline sustainability code through our relationship with Nestle India, reflecting our commitment to responsible sourcing.",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "1970s",
    title: "A Family's Coffee Beginning",
    description:
      "Our forefathers start a coffee plantation in the remote village of Nelliyampathy, planting the roots of a family relationship with coffee that now spans more than fifty years.",
  },
  {
    year: "1995",
    title: "High Range Coffee Curing Pvt. Ltd. Incorporated",
    description:
      "As the Indian coffee industry opens to the free market, the family heritage is formalised into High Range Coffee Curing Private Limited, with curing works established in Periyapatna and Kushalnagar, Coorg.",
  },
  {
    year: "2000s",
    title: "Capacity & Capability Built Up",
    description:
      "Steady, significant investment in machinery, storage infrastructure and trained staff builds installed processing capacity to 8,000 MT across Arabica and Robusta.",
  },
  {
    year: "Today",
    title: "A Trusted Name Across the Trade",
    description:
      "High Range Coffee now serves leading global trading houses and FMCG majors including Nestle, ITC, Hindustan Unilever, Olam and Louis Dreyfus Company, built on an image of trust and values with planters and traders alike.",
  },
];

export const sustainabilityPoints: SustainabilityPoint[] = [
  {
    title: "Shade-Grown, Forest-First",
    description:
      "21% of our estate land is deliberately preserved as natural forest, supporting shade-grown cultivation that protects biodiversity and soil health across the High Range belt.",
    icon: "TreePine",
  },
  {
    title: "4C-Aligned Responsible Sourcing",
    description:
      "Our 4C accreditation reflects adherence to baseline social, environmental and economic sustainability criteria across our sourcing and curing operations.",
    icon: "Leaf",
  },
  {
    title: "Fair, Long-Term Grower Relationships",
    description:
      "Many of our grower relationships span generations, built on consistent, fair dealing rather than opportunistic buying — a foundation that keeps quality and supply reliable, season after season.",
    icon: "Handshake",
  },
  {
    title: "Water-Conscious Processing",
    description:
      "Our washed-process lots are processed with careful attention to water use at our curing works, in line with responsible wet-milling practice.",
    icon: "Droplets",
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "2025-26-harvest-season-underway",
    title: "2025-26 Harvest Season Now Underway Across the High Range Belt",
    date: "2025-10-15",
    category: "Harvest",
    excerpt:
      "Cherry-picking has begun across our sourcing estates in the High Range belt, with early lots already arriving at our Periyapatna and Kushalnagar curing works for processing.",
    content: [
      "The 2025-26 harvest season is now underway across our sourcing estates in the High Range growing belt. As in previous years, hand-picking of ripe cherry has begun in phases across Arabica and Robusta blocks, with the first lots already reaching our curing works in Periyapatna and Kushalnagar for pulping, washing and drying.",
      "Early indications point to good cherry quality this season, supported by favourable monsoon conditions. Our quality team will begin cupping and grading the first Plantation and Cherry-grade lots over the coming weeks, with fresh-crop parcels expected to be export-ready from December.",
      "Buyers and trading partners interested in reserving fresh-crop allocations for the 2025-26 season are welcome to reach out to our export desk to discuss volumes and grades ahead of peak processing.",
    ],
    image: IMAGES.cherries,
  },
  {
    slug: "export-consignment-europe-q1",
    title: "Export Consignment Dispatched to European Roasting Partners",
    date: "2025-03-04",
    category: "Consignment",
    excerpt:
      "A consignment of graded Plantation A and Arabica Cherry AB lots has been dispatched from our Coorg curing works to long-standing roasting partners in Europe.",
    content: [
      "We are pleased to confirm the dispatch of a consignment of graded Plantation A and Arabica Cherry AB coffee to long-standing roasting partners in Europe. The lots were cupped and approved by our quality team prior to container loading, with full documentation and phytosanitary certification handled by our export desk.",
      "This shipment forms part of our ongoing commitment to consistent, on-time delivery for our international buyers, drawing on 8,000 MT of installed processing capacity at our Coorg facility.",
      "Importers and roasters seeking similar grade specifications for upcoming shipping windows are encouraged to contact us to discuss availability.",
    ],
    image: IMAGES.exportContainers,
  },
  {
    slug: "capacity-upgrade-milestone",
    title: "Milestone: Continued Investment in Curing Works Infrastructure",
    date: "2024-11-20",
    category: "Milestone",
    excerpt:
      "Ongoing upgrades to our processing and storage infrastructure at Periyapatna and Kushalnagar continue to strengthen consistency and volume capability for our buyers.",
    content: [
      "Consistent with our history of steady, significant investment, we have continued to upgrade processing and storage infrastructure at our Periyapatna and Kushalnagar curing works. These improvements support our installed capacity of 8,000 MT and help maintain consistent grading and cup quality across Arabica and Robusta lots.",
      "This investment reflects our long-term commitment to remaining a dependable supply partner for global trading houses and FMCG buyers as demand for high-quality Indian green coffee continues to grow.",
    ],
    image: IMAGES.aerialEstate,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Who is High Range Coffee Curing Private Limited?",
    answer:
      "High Range Coffee Curing Private Limited is an Indian green (unroasted) coffee bean curing works and exporter, incorporated in 1995, with a family coffee heritage of over 50 years tracing back to a plantation at Nelliyampathy. We source Arabica and Robusta coffee from the High Range growing belt and process it at our curing works in Periyapatna and Kushalnagar, Coorg, Karnataka, supplying global trading houses and FMCG majors including Nestle, ITC, Hindustan Unilever, Olam and Louis Dreyfus Company.",
  },
  {
    question: "What coffee grades does High Range Coffee export?",
    answer:
      "We handle a full range of Indian coffee trade grades, including washed Arabica Plantation A, B and C, natural-process Arabica Cherry AB, Robusta Cherry AB, and Robusta Parchment, graded by screen size, density and defect count in line with Coffee Board of India standards.",
  },
  {
    question: "How do I import green coffee beans from High Range Coffee?",
    answer:
      "Importers can reach our export desk through the Contact or For Importers page with their required grade, volume and shipping window. We will confirm available lots, share cupping notes and specifications, and coordinate documentation, phytosanitary certification and shipping logistics for export from our Coorg facility.",
  },
  {
    question: "What is the installed processing capacity of High Range Coffee?",
    answer:
      "Our curing works has an installed processing capacity of 8,000 metric tonnes, handling both Arabica and Robusta coffee across washed and natural process methods.",
  },
  {
    question: "What certifications does High Range Coffee hold?",
    answer:
      "We are recognised and certified by the Coffee Board of India for curing and export operations, and hold 4C (Common Code for the Coffee Community) accreditation through our relationship with Nestle India.",
  },
  {
    question: "Where is High Range Coffee's curing works located?",
    answer:
      "Our curing works and processing facilities are located at Abbur, Periyapatna and Kushalnagar in Coorg (Kodagu) district, Karnataka, India, in the heart of one of India's premier coffee-growing regions, while our sourcing network extends across the wider High Range growing belt.",
  },
  {
    question: "Is Indian coffee from High Range Coffee suitable for specialty and espresso roasting?",
    answer:
      "Yes. Our washed Arabica Plantation grades and natural Arabica Cherry lots offer clean-to-fruit-forward cup profiles suited to specialty roasting, while our Robusta Cherry and Parchment grades provide the bold body and crema base sought for espresso and blend roasting.",
  },
  {
    question: "What is the minimum order quantity for export?",
    answer:
      "Minimum order quantities vary by grade, container type and shipping route. Contact our export desk with your target volume and we will confirm the most efficient container and shipment plan for your order.",
  },
];
