import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section6 from "@/components/Section6";

export default function Home() {
  return (
      <main className='w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <Header/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section6 />
      <Footer />
      </main>
  );
}
