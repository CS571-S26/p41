import EventCard from './EventCard.jsx'

const recommendations = [
  {
    title: 'Student Picks',
    description: 'A quick mix of concerts, campus traditions, and low-cost events popular with UW students.',
    meta: 'Good for last-minute plans',
  },
  {
    title: 'Weekend With Friends',
    description: 'Group-friendly options like comedy shows, food festivals, and evening sporting events.',
    meta: 'Built for social plans',
  },
  {
    title: 'Family Friendly',
    description: 'Daytime community events, local festivals, and easy outings for a wider age range.',
    meta: 'Great for afternoon plans',
  },
]

export default function RecommendationSection() {
  return (
    <section id="recommendations" className="home-section">
      <div className="section-heading">
        <h2>Recommendations that fit the way you go out</h2>
        <p>
          A big part of the Ticketfinder idea is helping users discover events they might have missed, not
          just listing everything in one long feed.
        </p>
      </div>

      <div className="info-grid info-grid--triple">
        {recommendations.map((recommendation) => (
          <EventCard key={recommendation.title} {...recommendation} />
        ))}
      </div>
    </section>
  )
}
