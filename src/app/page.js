import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
    </div>

  );
}
