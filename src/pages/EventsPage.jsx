// Events page: intro, static category cards, then interactive featured list.
import EventCard from '../components/EventCard.jsx'
import FeaturedEventList from '../components/FeaturedEventList.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

// Sample event categories for the browsing overview
const eventGroups = [
  {
    title: 'Concerts and Live Music',
    description:
      'Browse performances from touring artists, local bands, and campus venues around Madison.',
    meta: 'From local venues to major tours',
  },
  {
    title: 'Sports and School Spirit',
    description:
      'Keep up with Badgers games, club sports, and community matchups happening across the city.',
    meta: 'Game day plans in one place',
  },
  {
    title: 'Festivals and Community Events',
    description:
      'Discover seasonal festivals, food events, neighborhood gatherings, and cultural celebrations.',
    meta: 'Easy options for weekends',
  },
]

export default function EventsPage() {
  return (
    <section className="content-page">
      <SectionIntro
        eyebrow="Events in Madison"
        title="Explore what is happening around the city."
        description="TicketFinder is meant to bring Madison events into one place so students, families, and visitors can compare options without jumping between different sites."
      />

      <div className="info-grid">
        {eventGroups.map((group) => (
          <EventCard key={group.title} {...group} />
        ))}
      </div>

      <FeaturedEventList />
    </section>
  )
}
