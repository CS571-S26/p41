import CategorySection from '../components/CategorySection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import HowItWorksSection from '../components/HowItWorksSection.jsx'
import RecommendationSection from '../components/RecommendationSection.jsx'
import SubscriptionHighlight from '../components/SubscriptionHighlight.jsx'

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Home page sections are stacked in the order users would explore them */}
      <HeroSection />
      <CategorySection />
      <RecommendationSection />
      <HowItWorksSection />
      <SubscriptionHighlight />
    </div>
  )
}
