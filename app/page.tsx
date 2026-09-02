import { projects } from "@/lib/data";
import { WorkIndex } from "@/components/work-index";
import { SectionHead, ArrowLink } from "@/components/bits";
import {
  Hero,
  Positioning,
  Capabilities,
  Experience,
  AboutBlock,
  Contact,
  TravelerNote,
  Brands,
} from "@/components/sections";

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <Hero />
      <Positioning />

      <section className="section" id="work">
        <div className="shell">
          <SectionHead
            num="02"
            title="Selected Work"
            right={<ArrowLink href="/work">All {projects.length} projects</ArrowLink>}
          />
          <WorkIndex projects={featured} />
        </div>
      </section>

      <TravelerNote />
      <Brands />
      <Capabilities />
      <Experience />
      <AboutBlock />
      <Contact />
    </>
  );
}
