import { z } from "zod";

import preventativeDentistry from "@/content/services/preventative-dentistry.json";
import restorativeDentistry from "@/content/services/restorative-dentistry.json";
import cosmeticDentistry from "@/content/services/cosmetic-dentistry.json";
import rootCanalTherapy from "@/content/services/root-canal-therapy.json";
import dentalImplants from "@/content/services/dental-implants.json";
import dentalCrowns from "@/content/services/dental-crowns.json";
import tmjTherapy from "@/content/services/tmj-therapy.json";
import extractions from "@/content/services/extractions.json";
import botox from "@/content/services/botox.json";
import privacyStatement from "@/content/legal/privacy-statement-us.json";
import optOutPreferences from "@/content/legal/opt-out-preferences.json";
import type { ServiceSlug } from "@/lib/site";

const textBlock = z.object({ type: z.literal("p"), text: z.string() });
const h2Block = z.object({ type: z.literal("h2"), text: z.string() });
const h3Block = z.object({ type: z.literal("h3"), text: z.string() });
const h4Block = z.object({ type: z.literal("h4"), text: z.string() });
const listBlock = z.object({
  type: z.literal("list"),
  ordered: z.boolean(),
  items: z.array(z.string()),
});
const tableBlock = z.object({
  type: z.literal("table"),
  rows: z.array(z.array(z.string())),
});

const blockSchema = z.union([
  textBlock,
  h2Block,
  h3Block,
  h4Block,
  listBlock,
  tableBlock,
]);

const pageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  blocks: z.array(blockSchema),
});

export type ContentBlock = z.infer<typeof blockSchema>;
export type PageContent = z.infer<typeof pageSchema>;

export const servicePages: Record<ServiceSlug, PageContent> = {
  "preventative-dentistry": pageSchema.parse(preventativeDentistry),
  "restorative-dentistry": pageSchema.parse(restorativeDentistry),
  "cosmetic-dentistry": pageSchema.parse(cosmeticDentistry),
  "root-canal-therapy": pageSchema.parse(rootCanalTherapy),
  "dental-implants": pageSchema.parse(dentalImplants),
  "dental-crowns": pageSchema.parse(dentalCrowns),
  "tmj-therapy": pageSchema.parse(tmjTherapy),
  extractions: pageSchema.parse(extractions),
  botox: pageSchema.parse(botox),
};

export const legalPages = {
  "privacy-statement-us": pageSchema.parse(privacyStatement),
  "opt-out-preferences": pageSchema.parse(optOutPreferences),
} as const;

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string[];
  shortBio: string;
};

export const team: TeamMember[] = [
  {
    name: "Emily Boehm DDS",
    role: "Dentist",
    image: "/assets/images/team-emily.webp",
    alt: "Dr. Emily Boehm of Wyoming Family Dentistry",
    shortBio:
      "Emily grew up in Ironton, Ohio, and completed her degree in dentistry at The Ohio State University, where she graduated with honors.",
    bio: [
      "Dr. Boehm’s interest in dentistry started at a young age. Due to a condition she was born with, the field of dentistry was able to change her smile, build her confidence and lead her to do the same for others. Emily grew up in the small town of Ironton, Ohio, right on the Ohio River, an area that taught her to focus on family. She obtained her undergraduate degree in Communications from James Madison University. After working as a sales associate and party planner for the Cincinnati Reds, her career continued in casino marketing for the Atlantis Hotel & Casino in the Bahamas. After some unforgettable experiences and a tremendous change of heart, she started down the lengthy path to become a dentist. She ultimately completed her degree in dentistry at The Ohio State University, where she graduated with honors.",
      "Dr. Boehm and her family live here in Wyoming and truly enjoy being part of this charming community. Her favorite place to be is with her family—husband Andrew, twin girls Addy & Bess and twin dogs Bouncer and Buddy. An avid joke enthusiast, Emily has completed a full marathon and several half marathons.",
    ],
  },
  {
    name: "Susan Pass",
    role: "Business Manager",
    image: "/assets/images/team-susan.webp",
    alt: "Susan Pass, Business Manager at Wyoming Family Dentistry",
    shortBio:
      "Susan brings a business degree and sharp organizational skills to the practice. Patients know her as the insurance guru.",
    bio: [
      "Susan has a business degree and got hooked on the field of dentistry when a friend recommended she work with a dentist to manage the practice finances. Her organizational skills and sharp business sense have made her a great fit for our team. She loves to learn, and after six years, dentistry still affords her the opportunity to do so every day. Susan enjoys working at Wyoming Family Dentistry because her coworkers feel like family to her. We call her the insurance guru because she helps patients navigate their (often complicated) dental insurance policies and isn’t afraid to take her questions straight to the source.",
      "When she’s not managing the business finances, you can find her shopping with her daughter, Briana or relishing old episodes of the Golden Girls. She lives in Wyoming with her husband Jim and likes to dabble in interior design on her days off.",
    ],
  },
  {
    name: "Heather Reed",
    role: "Registered Dental Hygienist",
    image: "/assets/images/team-heather.webp",
    alt: "Heather Reed, Registered Dental Hygienist at Wyoming Family Dentistry",
    shortBio:
      "Heather is the newest member of the team. Patients rave about her gentle nature and ability to educate with passion.",
    bio: [
      "Heather has a wild imagination and always knew she wanted to work in the dental field. As a kid, she would pretend she was a dentist with her baby dolls, wanting to give them pretty smiles. Heather is our newest team member, and she already feels like part of the family. Patients rave about her gentle nature and ability to educate with passion.",
      "Heather and is a mama to three young kids, Ethan, Olivia and Cooper. She juggles work life and family life with grace, enjoys baking in her limited spare time and cruises around with husband Devon in their 1965 New Yorker on weekends. One day she’d like to rent an RV and take the whole family across the country.",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Emily and her team are the best! She is the most gentle dentist I’ve ever been too. She’s our go to place for cleanings, cavities, cracked teeth, crowns and recommendations to other professionals for other work, e.g. tooth extractions and root canals Her team is very professional and friendly! If you have any dental concerns, go there!",
    author: "Brian B.",
    source: "Patient review",
  },
  {
    quote:
      "Every one here is super friendly and thorough. The staff went above and beyond for me after having to switch dental offices after a horrible experience at my last one. The front desk is quick and efficient. They were able to help me with all of my insurance and billing needs with no fuss.",
    author: "Briana P.",
    source: "Patient review",
  },
  {
    quote:
      "I’m a new patient, and had my first appointment today. I had to wait a while to get an appt, but I’m sure glad that I did! The staff was very warm and welcoming, and I received the best cleaning that I’ve ever had.",
    author: "Craymon M.",
    source: "Patient review",
  },
  {
    quote:
      "We never fail to have a great patient experience in Emily’s practice. She and her staff are kind and gentle and provide clear explanations of their treatments. We have been going to this practice for over twenty years!",
    author: "Angie M.",
    source: "Patient review",
  },
  {
    quote:
      "I always have a great experience every time I visit Wyoming Family Dentistry. I have already referred them to several people and will continue to do so. I appreciate great customer service and going to the dentist is usually dreaded, but great conversation, friendly staff and fast service always makes a difference!!",
    author: "Katie H.",
    source: "Patient review",
  },
  {
    quote:
      "So my 5 year old had two small cavities unfortunately. Emily Price Boehm at Wyoming Family Dentistry did an amazing job with her. Fillings required two shots because of different areas of the mouth. HEIDI didn’t cry and was a champ through the entire procedure! Thank you Dr. Boehm and Gabby (assistant) for being so patient and providing a positive dental experience for my little girl!",
    author: "Featured Google Review",
    source: "Google review",
    featured: true,
  },
];

export const homeContent = {
  welcomeHeading: "Welcome To Wyoming Family Dentistry",
  welcomeParagraphs: [
    "At Wyoming Family Dentistry, we’re dedicated to providing high-quality dental care in a warm and welcoming environment. Our team believes that every patient deserves personalized attention and treatment tailored to their unique needs. From routine cleanings and exams to advanced restorative and cosmetic procedures, we use the latest technology and techniques to ensure your comfort and achieve the best possible results. Our goal is to help every member of your family enjoy a lifetime of healthy, beautiful smiles.",
    "We take pride in building lasting relationships with our patients based on trust, compassion, and open communication. Whether you’re visiting us for preventive care, smile enhancements, or urgent dental needs, our friendly staff strives to make every experience positive and stress-free. At Wyoming Family Dentistry, you’re more than just a patient—you’re part of our dental family, and we’re committed to keeping your smile healthy for years to come.",
  ],
  pullQuote:
    "At Wyoming Family Dentistry, you’re more than just a patient—you’re part of our dental family.",
  ratingPrompt:
    "Did you have an experience at our office that you would like to share with us? Use our patient satisfaction survey to let us know how we did, we always encourage your feedback.",
  highlights: [
    {
      title: "Dental Crowns",
      text: "In dentistry, crowns are tooth-shaped caps placed over damaged or decayed teeth to restore their shape, strength, and appearance.",
      href: "/dental-crowns",
    },
    {
      title: "Restorative Dentistry",
      text: "Restorative dentistry focuses on repairing or replacing damaged or missing teeth to restore your smile’s function and appearance. Treatments like fillings, crowns, bridges, and implants help improve oral health and maintain proper bite alignment.",
      href: "/restorative-dentistry",
    },
    {
      title: "Dental Implants",
      text: "A surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, facial prosthesis or to act as an orthodontic anchor.",
      href: "/dental-implants",
    },
  ],
} as const;

export const aboutContent = {
  intro:
    "At Wyoming Family Dentistry, we select only the best of the best to serve our patients and their families. All of our staff members are friendly, knowledgeable, and highly proficient in their office duties. Should you have any questions or concerns before, during or after a visit to our Wyoming dentist, do not hesitate to visit with one of our staff members. They are readily standing by to address your needs.",
  teamHeading: "About Wyoming Family Dentistry",
} as const;

export const officeContent = {
  intro:
    "We are proud of our office here at Wyoming Family Dentistry. Patients are the heart of our practice, so it makes sense that we would go out of the way to provide comfortable waiting and treatment areas complete with the types of amenities you would expect from the premier dental practice in Wyoming. Our office is filled with state of the art diagnostic and dental treatment technology to ensure accuracy and early detection of oral complications. We believe our patients deserve only the best, and our staff works hard to deliver a superior experience at every visit.",
  insuranceHeading: "Insurance and Payment",
  insurance:
    "Our office welcomes many types of dental insurance, and our insurance coordinator will be happy to assist you in determining what type of benefits are available to you through your insurance plan. Payment arrangements for account balances are due at the time services are rendered, so please bring your insurance card with you to your first visit. We accept many forms of payment, including cash and most major credit cards. You can also speak with our office manager about flexible payment options available for major dental services.",
  paymentIntro: "We Accept the Following:",
  paymentNote:
    "If you have lingering questions concerning the financial aspect of your visit, our office manager is on-hand during our regular business hours to answer your questions and address your concerns.",
} as const;

export const patientForms = [
  {
    name: "New Patient Information",
    description: "Complete your new patient details before your first visit.",
    file: "/assets/forms/new-patient-information.pdf",
  },
  {
    name: "Medical History Exam",
    description: "Share the medical background that helps us care for you safely.",
    file: "/assets/forms/medical-history-exam.pdf",
  },
  {
    name: "HIPAA Explanation",
    description: "Review how your health information is protected.",
    file: "/assets/forms/hipaa-explanation.pdf",
  },
  {
    name: "Financial Policy",
    description: "Understand payment expectations and financial arrangements.",
    file: "/assets/forms/financial-policy.pdf",
  },
] as const;

export const patientFormsIntro =
  "We know that your time is valuable. That’s why we offer a simplified office experience with online patient forms that you can complete prior to your appointment. You’ll spend less time in the waiting area, streamlining your initial visit. These forms help us better understand your background, allowing us to provide you with the most effective care possible. As always, please do not hesitate to contact us is you have any questions about patient forms or your appointment.";

export const appointmentIntro =
  "Please note that this form does not guarantee an appointment: we will contact you to confirm your appointment, or in the event that we are unable to book you during your requested dates, we will contact you to determine a better fit. We look forward to hearing from you!";

export const newPatientSteps = [
  {
    title: "Request your visit",
    text: "Tell us what you need and when you prefer to come in. We will follow up to confirm your appointment.",
    href: "/request-an-appointment",
    action: "Request an appointment",
  },
  {
    title: "Complete your forms",
    text: "Fill out your patient forms before you arrive so your first visit starts with less waiting.",
    href: "/patient-forms",
    action: "Open patient forms",
  },
  {
    title: "Bring your insurance card",
    text: "Payment arrangements for account balances are due at the time services are rendered, so please bring your insurance card with you to your first visit.",
    href: "/insurance-payment",
    action: "Insurance & payment",
  },
] as const;

export const faqs = [
  {
    question: "What is preventative dentistry?",
    answer:
      "This type of dentistry focuses on good oral health maintenance while decreasing the risk of tooth decay and other issues that may lead to serious complications.",
  },
  {
    question: "How often do you need routine dental cleanings and exams?",
    answer:
      "Our dentist would like to see you twice a year for these visits (or more often if needed).",
  },
  {
    question: "What are the benefits of preventive dental care?",
    answer:
      "Staying on top of your oral health with these services puts you in a good position to only need a couple of dental visits per year. Other benefits include a reduced risk of gum disease, a lower risk of tooth decay, stronger and healthier teeth overall, a reduced risk of tooth damage such as fractures, and a beautiful smile.",
  },
  {
    question: "What is a root canal?",
    answer:
      "This procedure involves removing infected/decayed material from inside your tooth to address infections. During this process, we clear out and clean the canals in the pulp of your tooth.",
  },
  {
    question: "Do root canals hurt?",
    answer:
      "They do have a reputation for this. But root canals have come a long way, providing a treatment approach that’s no more uncomfortable than getting a filling. We numb the area so you won’t feel anything, though you might have mild soreness afterward.",
  },
  {
    question: "How long does the implant process take?",
    answer:
      "You’re looking at several months to complete this procedure — with a few or more months needed for your jaw to heal between steps.",
  },
  {
    question: "Is Botox safe?",
    answer:
      "Yes, as long as a qualified and properly trained dentist administers the injections. Our dentist has this training, providing you with peace of mind that your Botox visits will go smoothly!",
  },
  {
    question: "How long do Botox results last?",
    answer:
      "They last for awhile — but not forever. You may notice results in just a few hours. These results usually last for a few months or more, though you’ll need to set up treatment sessions again to maintain them.",
  },
] as const;
