import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { Blogs } from "../components/Blogs";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-transparent size-full relative">
      <Header />
      <Hero />
      <Timeline />
      <Blogs />
      <Projects />
      <Footer />
    </div>
  );
}
