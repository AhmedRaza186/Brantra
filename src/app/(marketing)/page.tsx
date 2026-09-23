import { HeroSection } from "../../components/marketing/HeroSection";
import { TrustStrip } from "../../components/marketing/TrustStrip";
import { ProblemSection } from "../../components/marketing/ProblemSection";
import { VideoTourSection } from "../../components/marketing/VideoTourSection";
import { WorkflowSection } from "../../components/marketing/WorkflowSection";
import { FeatureStory } from "../../components/marketing/FeatureStory";
import { UsageRightsSection } from "../../components/marketing/UsageRightsSection";
import { HumanCreatorSection } from "../../components/marketing/HumanCreatorSection";
import { PainInsightsSection } from "../../components/marketing/PainInsightsSection";
import { FinalCTASection } from "../../components/marketing/FinalCTASection";
import { WhatIsBrantra } from "../../components/marketing/WhatIsBrantra";
import { FEATURE_STORIES } from "../../data/marketing";

export default function MarketingRootPage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Brantra",
            "operatingSystem": "Web browser",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "brand": {
              "@type": "Brand",
              "name": "Brantra"
            },
            "description": "Brantra is a brand deal operations platform that helps independent creators manage brand partnerships from initial inquiry through final payment. It provides a structured workspace to track deliverables, automate follow-ups, and ensure you get paid on time."
          })
        }}
      />
      <WhatIsBrantra />
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
