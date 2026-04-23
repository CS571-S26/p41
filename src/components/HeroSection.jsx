import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <span className="eyebrow">Made for Madison nights</span>
        <h1>Discover local events without the scavenger hunt.</h1>
        <p>
          Terrace concerts, Badgers weekends, festivals on the Square. Browse it all in one calm place so you
          spend less time clicking around and more time deciding what sounds fun.
        </p>

        <div className="hero-section__actions">
          <Button as="a" href="#categories" className="button-link button-link--primary">
            Start with categories
          </Button>
          <Button
            as="a"
            href="#recommendations"
            variant="light"
            className="button-link button-link--secondary"
          >
            See picks for you
          </Button>
          <Button as={Link} to="/events" variant="outline-primary" className="button-link button-link--secondary">
            Browse all events
          </Button>
        </div>
      </div>

      <Card as="div" className="hero-card border-0 text-white">
        <Card.Body className="hero-card__body">
          <Card.Title as="h2" className="hero-card__title h5 text-white">
            What TicketFinder helps with
          </Card.Title>
          <ul>
            <li>
              <strong>Find local events</strong>
              <span>Concerts, sports, campus activities, and festivals in Madison.</span>
            </li>
            <li>
              <strong>Compare options quickly</strong>
              <span>Fewer tabs to juggle, more time deciding what to do.</span>
            </li>
            <li>
              <strong>Optional Plus perks</strong>
              <span>Fast Lane, early access, and subscriber-only offers.</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </section>
  )
}
