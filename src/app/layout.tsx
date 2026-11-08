import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sans = Inter({ subsets: ["latin"], axes: ["opsz"], variable: "--font-sans", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const title = "Sanjana Karfa — Human Resources Professional";
const description =
  "Human Capital Operations at PwC AC with an MBA in Human Resources (University of Burdwan). HRIS administration, onboarding data audits, RCSA, talent operations and stakeholder partnership.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjanakarfa.com"),
  title: {
    default: title,
    template: "%s — Sanjana Karfa",
  },
  description,
  applicationName: "Sanjana Karfa Portfolio",
  authors: [{ name: "Sanjana Karfa" }],
  creator: "Sanjana Karfa",
  keywords: [
    "Sanjana Karfa",
    "Human Resources",
    "HR Professional",
    "PwC",
    "HRIS",
    "Talent Acquisition",
    "People Operations",
    "MBA HR",
    "RCSA",
    "Workforce Analytics",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: "Sanjana Karfa",
    images: [
      {
        url: "/Sanjana.jpg",
        width: 1466,
        height: 1466,
        alt: "Sanjana Karfa — Human Resources Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Sanjana.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanjana Karfa",
  jobTitle: "Human Capital Operations — Administrative",
  worksFor: { "@type": "Organization", name: "PwC AC" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "The University of Burdwan" },
    { "@type": "CollegeOrUniversity", name: "St. Xavier's College, Kolkata" },
  ],
  sameAs: ["https://www.linkedin.com/in/sanjana-karfa/"],
  email: "mailto:karfasanjana@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burdwan",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
