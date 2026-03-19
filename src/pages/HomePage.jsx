export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-section__content">
          <span className="eyebrow">Live events made simple</span>
          <h1>Find your next night out in minutes.</h1>
          <p>
            TicketFind is a simple homepage for exploring concerts, sports, and shows without the clutter.
            Start browsing what is happening near you and get to the good part faster.
          </p>

          <div className="hero-section__actions">
            <a href="#categories" className="button-link button-link--primary">
              Browse categories
            </a>
            <a href="#how-it-works" className="button-link button-link--secondary">
              How it works
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}