import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SubscriptionHighlight() {
  return (
    <section className="subscription-highlight">
      <div className="subscription-highlight__content">
        <span className="eyebrow">Premium option</span>
        <h2>Fast Lane gives frequent eventgoers a reason to stay with Ticketfinder.</h2>
        <p>
          The subscription feature is one of the strongest parts of your proposal because it gives the
          platform something more unique than a basic event listing page.
        </p>
      </div>

      <Button as={Link} to="/subscription" className="subscription-highlight__button">
        Explore subscriber perks
      </Button>
    </section>
  )
}
