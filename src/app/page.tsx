import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
export default function Home() {
  return (
      <main className='w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <Section1 />
      <Section2 />
      <Section3 />
      </main>
  );
}
