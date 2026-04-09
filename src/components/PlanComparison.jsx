import { Button, Card, ListGroup } from 'react-bootstrap'

// Simple free vs premium plan comparison
const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    description: 'Good for casual users who mainly want to browse local events and buy tickets when needed.',
    perks: ['Browse Madison events', 'View recommendations', 'Buy standard tickets'],
    emphasis: false,
  },
  {
    name: 'Ticketfinder Plus',
    price: '$8/mo',
    description:
      'Built for people who go out often and want earlier access, better convenience, and extra value.',
    perks: ['Fast Lane entry', 'Early access windows', 'Subscriber-only discounts'],
    emphasis: true,
  },
]

export default function PlanComparison() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>Why the subscription feels worth offering</h2>
        <p>
          A simple plan comparison helps explain the business idea behind Ticketfinder and makes the premium
          option feel intentional rather than tacked on.
        </p>
      </div>

      <div className="plan-grid">
        {plans.map((plan) => (
          <Card key={plan.name} className={`plan-card${plan.emphasis ? ' plan-card--featured' : ''}`}>
            <Card.Body>
              <div className="plan-card__price-row">
                <div>
                  <Card.Title as="h3">{plan.name}</Card.Title>
                  <p className="plan-card__price">{plan.price}</p>
                </div>
                {plan.emphasis ? <span className="plan-card__label">Most useful</span> : null}
              </div>
              <Card.Text>{plan.description}</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              {plan.perks.map((perk) => (
                <ListGroup.Item key={perk}>{perk}</ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Body>
              <Button variant={plan.emphasis ? 'dark' : 'outline-dark'} className="plan-card__button">
                {plan.emphasis ? 'Choose Plus' : 'Stay Free'}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}
