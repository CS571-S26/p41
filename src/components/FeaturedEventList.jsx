import { Badge, Card } from 'react-bootstrap'

// Sample featured listings to make the events page feel realistic
const featuredEvents = [
  {
    title: 'Terrace Sunset Concert',
    category: 'Concert',
    venue: 'Memorial Union Terrace',
    date: 'Friday, 7:30 PM',
    price: '$18',
    description: 'A lakeside evening show featuring local openers and a regional headliner.',
  },
  {
    title: 'Badgers Home Matchup',
    category: 'Sports',
    venue: 'Camp Randall Stadium',
    date: 'Saturday, 2:00 PM',
    price: '$42',
    description: 'A high-energy game day experience with student sections, tailgates, and citywide buzz.',
  },
  {
    title: 'Capitol Square Food Festival',
    category: 'Festival',
    venue: 'Downtown Madison',
    date: 'Sunday, 12:00 PM',
    price: 'Free entry',
    description: 'Explore local vendors, live performances, and family-friendly community activities.',
  },
]

export default function FeaturedEventList() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>Featured events users might click on first</h2>
        <p>
          These examples make the platform feel more like an actual event finder. They also show how listings
          can include the details people care about right away.
        </p>
      </div>

      <div className="event-list">
        {featuredEvents.map((event) => (
          <Card key={event.title} className="featured-event-card">
            <Card.Body>
              <div className="featured-event-card__top">
                <Badge bg="info-subtle" text="dark" className="featured-event-card__badge">
                  {event.category}
                </Badge>
                <span className="featured-event-card__price">{event.price}</span>
              </div>
              <Card.Title as="h3">{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <div className="featured-event-card__meta">
                <span>{event.venue}</span>
                <span>{event.date}</span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}
