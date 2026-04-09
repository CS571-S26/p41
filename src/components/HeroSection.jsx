import { Button } from 'react-bootstrap'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <span className="eyebrow">Madison events made simple</span>
        <h1>Discover local events and plan your next night out.</h1>
        <p>
          Ticketfinder is built to help people in Madison browse concerts, festivals, sports, campus
          activities, and community events in one place. The goal is to make finding something fun feel
          easier, faster, and more personal.
        </p>

        <div className="hero-section__actions">
          <Button href="#categories" className="button-link button-link--primary">
            Browse categories
          </Button>
          <Button href="#recommendations" variant="light" className="button-link button-link--secondary">
            See recommendations
          </Button>
        </div>
      </div>

      <div className="hero-card">
        <h2>What Ticketfinder helps with</h2>
        <ul>
          <li>
            <strong>Find local events</strong>
            <span>Concerts, sports, campus activities, and festivals in Madison.</span>
          </li>
          <li>
            <strong>Compare options quickly</strong>
            <span>See what is worth your time without bouncing between different sites.</span>
          </li>
          <li>
            <strong>Unlock premium perks</strong>
            <span>Fast Lane entry, early access, and subscriber-only deals.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
