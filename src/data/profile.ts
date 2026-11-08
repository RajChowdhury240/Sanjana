// Every fact here comes from Sanjana's résumé (resume.tex), about-me.txt or
// the previous site's copy. Do not invent metrics or endorsements.

import { asset } from "@/lib/asset";

export const person = {
  name: "Sanjana Karfa",
  email: "karfasanjana@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjana-karfa/",
  resume: asset("/Sanjana-Karfa-Resume.pdf"),
  photo: asset("/Sanjana.jpg"),
  location: "Burdwan, West Bengal, India",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Expertise", href: "#expertise" },
  { label: "Education", href: "#education" },
];

export type CareerEntry = {
  date: string;
  title: string;
  place: string;
  points?: string[];
};

export const career: CareerEntry[] = [
  {
    date: "Mar 2024 – now",
    title: "Human Capital Operations — Administrative, PwC AC",
    place: "FirstMeridian Global Services · India",
    points: [
      "Lead data audits of new-hire onboarding records at scale, then identify, reconcile and remediate discrepancies so every record meets regulatory and governance standards.",
      "Administer and optimise the enterprise-wide HRIS database, safeguarding the accuracy, integrity and confidentiality of all HR personnel records under the data-governance framework.",
      "Work with cross-functional, multicultural teams and stakeholders across business units to keep everyone aligned on organisational objectives.",
      "Execute Risk Control Self-Assessment (RCSA) initiatives, running systematic risk analysis across sampled HR metrics and strengthening the department's risk posture.",
    ],
  },
  {
    date: "Sep 2023 – Feb 2024",
    title: "Human Resources Intern, PhonePe",
    place: "India · 6 months",
    points: [
      "Coordinated end-to-end mass hiring drives and onboarding workflows so new joiners integrated without friction.",
      "Maintained the Joiners' Confirmation tracker and the New Offer Release Database with full data accuracy.",
      "Partnered with hiring managers to align recruitment pipelines with headcount targets and organisational priorities.",
      "Published periodic headcount reports and people-database summaries that gave stakeholders the visibility to make data-driven workforce decisions.",
    ],
  },
  {
    date: "Jun 2022 – Jul 2022",
    title: "Human Resources Summer Intern, Bank of Baroda",
    place: "Internship · 2 months",
  },
];

export const disciplines = [
  {
    title: "Audit & data integrity",
    desc: "Data audits at scale: finding discrepancies, reconciling them and driving remediation across enterprise systems.",
  },
  {
    title: "HRIS & data governance",
    desc: "Enterprise-wide HRIS administration that keeps personnel records accurate, confidential and compliant.",
  },
  {
    title: "Risk & compliance",
    desc: "RCSA initiatives and systematic risk analysis across HR metrics, held to organisational governance standards.",
  },
  {
    title: "People analytics",
    desc: "Headcount reporting and people-database management that turn records into decision-grade insight.",
  },
  {
    title: "Talent operations",
    desc: "Mass hiring drives, offer releases and onboarding workflows run end to end, with hiring managers in the loop.",
  },
  {
    title: "Stakeholder partnership",
    desc: "Clear, calm communication with multicultural teams, hiring managers and business-unit leaders.",
  },
];

export const toolkit = [
  {
    name: "Tools & platforms",
    items: ["Workday", "SAP", "Greenhouse", "AC Hub", "Microsoft Excel", "PowerPoint", "Word"],
  },
  {
    name: "HR competencies",
    items: [
      "Workforce data management",
      "HR audits & compliance",
      "Risk analysis",
      "Data-driven decision-making",
      "Agile methodology",
      "Ethics & governance",
    ],
  },
  {
    name: "Working style",
    items: [
      "Emotional intelligence",
      "Cross-functional communication",
      "Stakeholder engagement",
      "Conflict resolution",
      "Learning agility",
      "English & Bengali",
    ],
  },
];

export const education = [
  {
    score: "8.30",
    unit: "/ 10 CGPA",
    name: "MBA, Human Resource Management",
    school: "The University of Burdwan",
    years: "2021 – 2023",
    note: "HR strategy, organisational behaviour and labour relations.",
  },
  {
    score: "80.83%",
    unit: "",
    name: "PgD, Mass Communication & Public Relations",
    school: "St. Xavier's College (Autonomous), Kolkata",
    years: "2021 – 2022",
  },
  {
    score: "7.48",
    unit: "/ 10 CGPA",
    name: "B.A. (Hons.), English",
    school: "St. Xavier's College, Burdwan",
    years: "2018 – 2021",
  },
];

export const certifications = [
  { org: "TCS", title: "Youth Employment Program", desc: "Employability skills development training" },
  { org: "Google", title: "Digital Garage", desc: "The Fundamentals of Digital Marketing" },
  { org: "TCS iON", title: "Career Edge", desc: "Young Professional certificate" },
  { org: "The Open University", title: "Intercultural Competence", desc: "An introduction to intercultural competence in the workplace" },
  { org: "College Tips", title: "Summer Internship", desc: "Certificate of experience in video editing" },
];

export const interests = [
  {
    name: "Dance",
    text: "Trained dancer, recognised at national competitions in Delhi, Kolkata and Bhopal. The stage teaches discipline under a deadline.",
  },
  {
    name: "Sport",
    text: "Wins in athletics and cricket at school and university level, and a reminder that steady practice beats intensity.",
  },
  {
    name: "Photography",
    text: "A quiet eye for composition and light. Observing people well is the same skill at work.",
  },
  {
    name: "Editing",
    text: "Visual stories built in post-production, where technical precision meets creative judgement.",
  },
];

export const seeking = [
  {
    name: "Roles",
    items: [
      "HR Generalist",
      "HR Operations Specialist",
      "HRIS Analyst",
      "People Operations Associate",
      "Talent Acquisition Partner",
      "HR Risk & Compliance Associate",
      "Onboarding & Lifecycle Lead",
    ],
  },
  { name: "Location", items: ["Bengaluru", "Kolkata", "Burdwan", "Mumbai"] },
  { name: "Working mode", items: ["On-site", "Hybrid", "Remote", "30-day notice, negotiable"] },
];
