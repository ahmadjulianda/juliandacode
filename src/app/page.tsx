import { HeroSection } from "@/components/home/HeroSection";
import { SkillsCloud } from "@/components/home/SkillsCloud";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestBlog } from "@/components/home/LatestBlog";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsCloud />
      <FeaturedProjects />
      <LatestBlog />
      <CTASection />
    </>
  );
}
