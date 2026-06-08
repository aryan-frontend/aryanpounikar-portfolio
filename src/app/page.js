import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <SkillSection/>
      <ContactSection/>
    </div>

  );
}
