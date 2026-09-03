import { Hero, Room, Convergence, Ledger, Wall, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Room id="brand" />
      <Room id="digital" />
      <Room id="marketing" />
      <Convergence />
      <Wall />
      <Ledger />
      <Contact />
    </>
  );
}
