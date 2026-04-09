import BenefitCard from '../components/BenefitCard.jsx'
import DealsSection from '../components/DealsSection.jsx'
import PlanComparison from '../components/PlanComparison.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

// Core perks highlighted in the subscription pitch
const benefits = [
  {
    title: 'Fast Lane entry for high-demand events',
    description:
      'Subscribers can skip long lines and move through entry faster when major concerts, games, or festivals draw big crowds.',
  },
  {
    title: 'Early access to select ticket releases',
    description:
      'Members get a better shot at popular events by seeing some releases before the general public.',
  },
  {
    title: 'Priority purchasing windows before general sale',
    description:
      'The subscription feels valuable because users are not waiting until the busiest ticket window opens.',
  },
  {
    title: 'Subscriber-only discounts and promotions',
    description:
      'Deals add another incentive for frequent eventgoers who want to save money across multiple outings.',
  },
]

export default function SubscriptionPage() {
  return (
    <section className="content-page">
      <SectionIntro
        eyebrow="Ticketfinder Plus"
        title="Premium perks for people who go out often."
        description="The subscription plan supports one of the most important ideas in your proposal: giving frequent event attendees a faster and more convenient experience when popular events are in high demand."
      />

      <div className="info-grid">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>

      <PlanComparison />
      <DealsSection />
    </section>
  )
}
