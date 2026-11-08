import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { Expertise } from "@/components/Expertise";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Interests } from "@/components/Interests";
import { Seeking } from "@/components/Seeking";
import { Contact } from "@/components/Contact";
import { certifications } from "@/data/profile";

const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Section id="about" tone="grey" title="Attention to data." subtitle="Attention to people.">
        <About />
      </Section>
      <Section id="career" title="Career." subtitle="From Bank of Baroda to Human Capital at PwC AC.">
        <Career />
      </Section>
      <Section id="expertise" tone="black" title="Six disciplines." subtitle="One standard: get it right.">
        <Expertise />
      </Section>
      <Section
        id="education"
        title="Education."
        subtitle="Literature, then communication, then HR. Each layer compounds."
      >
        <Education />
      </Section>
      <Section
        id="certifications"
        tone="deep"
        title={`${words[certifications.length] ?? certifications.length} certifications.`}
        subtitle="Proof of the habit."
      >
        <Certifications />
      </Section>
      <Section id="interests" tone="grey" title="Off the clock." subtitle="Still practising.">
        <Interests />
      </Section>
      <Section
        id="next"
        title="What’s next."
        subtitle="Full-time HR roles where data, process and people get equal airtime."
      >
        <Seeking />
      </Section>
      <Contact />
    </main>
  );
}
