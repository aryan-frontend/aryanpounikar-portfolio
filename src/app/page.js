import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";
import SkillsSection from "@/components/ui/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <SkillSection/>
    </div>

  );
}
