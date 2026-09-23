import { HeroSection } from "../../components/marketing/HeroSection.tsx";
import { TrustStrip } from "../../components/marketing/TrustStrip.tsx";
import { ProblemSection } from "../../components/marketing/ProblemSection.tsx";
import { VideoTourSection } from "../../components/marketing/VideoTourSection.tsx";
import { WorkflowSection } from "../../components/marketing/WorkflowSection.tsx";
import { FeatureStory } from "../../components/marketing/FeatureStory.tsx";
import { UsageRightsSection } from "../../components/marketing/UsageRightsSection.tsx";
import { HumanCreatorSection } from "../../components/marketing/HumanCreatorSection.tsx";
import { PainInsightsSection } from "../../components/marketing/PainInsightsSection.tsx";
import { FinalCTASection } from "../../components/marketing/FinalCTASection.tsx";
import { FEATURE_STORIES } from "../../data/marketing.ts";

export default function MarketingRootPage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <VideoTourSection />
      <WorkflowSection />
      
      <div id="product">
        {FEATURE_STORIES.map((story, index) => (
          <FeatureStory 
            key={story.id}
            eyebrow={story.eyebrow}
            headline={story.headline}
            description={story.description}
            outcome={story.outcome}
            visualType={story.visualType}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
      
      <UsageRightsSection />
      <HumanCreatorSection />
      <PainInsightsSection />
      <FinalCTASection />
    </>
  );
}
