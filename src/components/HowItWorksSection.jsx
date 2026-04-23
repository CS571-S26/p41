import { Card } from 'react-bootstrap'

const steps = [
  {
    number: '1',
    title: 'Browse local options',
    description: 'Start with events happening in Madison instead of searching across unrelated websites.',
  },
  {
    number: '2',
    title: 'Get better suggestions',
    description: 'See picks shaped by interests, previous browsing, and the kinds of events you attend most.',
  },
  {
    number: '3',
    title: 'Choose perks if needed',
    description: 'Upgrade for Fast Lane access, earlier ticket windows, and deals meant for subscribers.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="home-section">
      <div className="section-heading">
        <h2>How TicketFinder fits into a real night out</h2>
        <p>
          Browsing, recommendations, and optional perks are connected so the path from &ldquo;I want to do
          something&rdquo; to &ldquo;I have a plan&rdquo; is shorter in one place.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <Card key={step.number} className="step-card h-100 border-0">
            <Card.Body>
              <span className="step-number">{step.number}</span>
              <Card.Title as="h3" className="h6 text-primary">
                {step.title}
              </Card.Title>
              <Card.Text className="mb-0">{step.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}
