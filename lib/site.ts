export const business = {
  name: "Wyoming Family Dentistry",
  tagline:
    "High-Quality Oral Healthcare Through a Patient-Centered Approach",
  phone: "1.513.821.0659",
  phoneAlt: "1-513-821-0659",
  phoneHref: "tel:+15138210659",
  textHref: "sms:wyomingfamilydentistry@gmail.com",
  email: "wyomingfamilydentistry@gmail.com",
  address: "411 Wyoming Ave, Wyoming, OH 45215",
  addressShort: "411 Wyoming Ave, Wyoming, OH 45215",
  facebook: "https://www.facebook.com/WyomingFamilyDentistry/",
  maps: "https://maps.app.goo.gl/VK4Cpei7mKUVJ5Uo7",
  directions: "https://maps.app.goo.gl/fSPwHZEfMbhQstet6",
  reviews: "https://maps.app.goo.gl/BGivzNn8HEYLZJcr7",
} as const;

export const hours = [
  { day: "Monday", time: "8:00AM - 5:00PM", closed: false },
  { day: "Tuesday", time: "7:00AM - 3:00PM", closed: false },
  { day: "Wednesday", time: "8:00AM - 5:00PM", closed: false },
  { day: "Thursday", time: "7:00AM - 3:00PM", closed: false },
  { day: "Friday", time: "Closed", closed: true },
  { day: "Saturday", time: "Closed", closed: true },
  { day: "Sunday", time: "Closed", closed: true },
] as const;

export const serviceSlugs = [
  "preventative-dentistry",
  "restorative-dentistry",
  "cosmetic-dentistry",
  "root-canal-therapy",
  "dental-implants",
  "dental-crowns",
  "tmj-therapy",
  "extractions",
  "botox",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceIcon =
  | "shield"
  | "restore"
  | "sparkle"
  | "activity"
  | "implant"
  | "crown"
  | "tmj"
  | "extraction"
  | "botox";

export type Service = {
  slug: ServiceSlug;
  href: string;
  name: string;
  icon: ServiceIcon;
  image?: string;
  summary: string;
  kicker: string;
};

export const services: Service[] = [
  {
    slug: "preventative-dentistry",
    href: "/preventative-dentistry",
    name: "Preventative Dentistry",
    icon: "shield",
    image: "/assets/images/service-preventative.webp",
    summary:
      "Preventative dentistry focuses on maintaining healthy teeth and gums through regular checkups, cleanings, and good oral hygiene practices.",
    kicker: "Routine care",
  },
  {
    slug: "restorative-dentistry",
    href: "/restorative-dentistry",
    name: "Restorative Dentistry",
    icon: "restore",
    image: "/assets/images/service-restorative.webp",
    summary:
      "Restorative dentistry focuses on repairing or replacing damaged or missing teeth to restore your smile’s function and appearance.",
    kicker: "Rebuild strength",
  },
  {
    slug: "cosmetic-dentistry",
    href: "/cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    icon: "sparkle",
    image: "/assets/images/service-cosmetic.webp",
    summary:
      "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile through treatments like whitening, veneers, bonding, and reshaping.",
    kicker: "Smile design",
  },
  {
    slug: "root-canal-therapy",
    href: "/root-canal-therapy",
    name: "Root Canal Therapy",
    icon: "activity",
    summary:
      "Leaving an infected tooth untreated means you’re facing even bigger risks, like a widespread infection or tooth loss.",
    kicker: "Relieve infection",
  },
  {
    slug: "dental-implants",
    href: "/dental-implants",
    name: "Dental Implants",
    icon: "implant",
    image: "/assets/images/service-implants.webp",
    summary:
      "Dental implants are durable, natural-looking replacements for missing teeth that are surgically placed into the jawbone to support crowns, bridges, or dentures.",
    kicker: "Replace missing teeth",
  },
  {
    slug: "dental-crowns",
    href: "/dental-crowns",
    name: "Dental Crowns",
    icon: "crown",
    image: "/assets/images/service-crowns.webp",
    summary:
      "In dentistry, crowns are tooth-shaped caps placed over damaged or decayed teeth to restore their shape, strength, and appearance.",
    kicker: "Protect & restore",
  },
  {
    slug: "tmj-therapy",
    href: "/tmj-therapy",
    name: "TMJ Therapy",
    icon: "tmj",
    image: "/assets/images/service-tmj.webp",
    summary:
      "The temporomandibular joint (TMJ) is what connects your jaw to your skull, and the key to moving your mouth fluidly.",
    kicker: "Jaw comfort",
  },
  {
    slug: "extractions",
    href: "/extractions",
    name: "Extractions",
    icon: "extraction",
    image: "/assets/images/service-extractions.webp",
    summary:
      "Tooth extractions are procedures where a tooth is removed from its socket in the bone, often due to decay, damage, or overcrowding.",
    kicker: "Gentle care",
  },
  {
    slug: "botox",
    href: "/botox",
    name: "Botox",
    icon: "botox",
    image: "/assets/images/service-botox.webp",
    summary:
      "Botox can help people by relaxing the muscles that cause wrinkles, resulting in smoother, younger-looking skin. It’s also used medically to relieve issues like chronic migraines, excessive sweating, and muscle stiffness.",
    kicker: "Therapeutic relief",
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = NavLink & {
  children?: NavLink[];
};

export const aboutLinks: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Our Office", href: "/our-office" },
  { label: "Insurance & Payment", href: "/insurance-payment" },
];

export const patientLinks: NavLink[] = [
  { label: "Patient Forms", href: "/patient-forms" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Rate Our Office", href: "/rate-our-office" },
];

export const mainNav: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us", children: aboutLinks },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...services.map(({ name, href }) => ({ label: name, href })),
    ],
  },
  { label: "Patients", href: "/patient-forms", children: patientLinks },
  { label: "Contact", href: "/contact-us" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Statement", href: "/privacy-statement-us" },
  { label: "Cookie Preferences", href: "/opt-out-preferences" },
];

export const paymentMethods = [
  "Cash",
  "Visa",
  "Mastercard",
  "Amex",
  "Discover",
  "Check",
  "Care Credit",
] as const;

export const siteStats = [
  { value: 9, suffix: "", label: "Dental services" },
  { value: 7, suffix: "", label: "Ways to pay" },
  { value: 3, suffix: "", label: "Friendly faces" },
  { value: 6, suffix: "", label: "Patient stories" },
] as const;

export const pageShell = {
  eyebrow: "Wyoming Family Dentistry",
  description:
    "Family dentistry in Wyoming, Ohio, centered on comfort, clear communication, and care that fits real life.",
} as const;
