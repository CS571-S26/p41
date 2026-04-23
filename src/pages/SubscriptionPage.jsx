import BenefitCard from '../components/BenefitCard.jsx'
import DealsSection from '../components/DealsSection.jsx'
import PlanComparison from '../components/PlanComparison.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

// Core perks highlighted in the subscription pitch
const benefits = [
  {
    title: 'Fast Lane entry when events draw huge crowds',
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
    title: 'Discounts and promotions for subscribers',
    description:
      'Deals add another incentive for frequent eventgoers who want to save money across multiple outings.',
  },
]

export default function SubscriptionPage() {
  return (
    <section className="content-page">
      <SectionIntro
        eyebrow="TicketFinder Plus"
        title="Premium perks for people who go out often."
        description="Members get a more convenient experience for busy nights in Madison: Fast Lane, earlier windows, and more value, modeled in this app with a working local plan state you can try below."
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
