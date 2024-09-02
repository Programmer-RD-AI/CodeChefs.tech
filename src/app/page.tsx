import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="CodeChefs Highlights" title="Why join CodeChefs?">
        CodeChefs excels in three key areas: handling client projects, competing
        in tech events, and sharing valuable tech content. Join us to experience
        innovation, competition, and a wealth of resources!
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Explore Our Offerings"
        title="Discover How We Can Help You"
      >
        This section highlights our key services and expertise. We help you with
        client projects, participate in tech competitions, and provide valuable
        content to keep you informed and engaged. Don't miss out on what we
        offer—explore more below!
      </SectionTitle>

      <Video videoId={"null"} />
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials are a great way to build trust and showcase the impact of
        our services. Hear directly from our valued clients about their
        experiences with CodeChefs.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
