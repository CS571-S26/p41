import { useState } from 'react'
import { Alert, Button, Card, ListGroup, Stack } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'

const planDefs = [
  {
    name: 'Free',
    id: 'free',
    price: '$0',
    description: 'For casual use: browse Madison events, get recommendations, and use checkout when you pick an event.',
    perks: ['Browse featured events and filters', 'Personalized recommendation order', 'Save events you like'],
    emphasis: false,
  },
  {
    name: 'TicketFinder Plus',
    id: 'plus',
    price: '$8/mo',
    description: 'For frequent goers: earlier access, convenience at the door, and more value on repeat trips.',
    perks: ['Fast Lane entry', 'Early access and priority windows', 'Subscriber discounts and checkout fee perks'],
    emphasis: true,
  },
]

export default function PlanComparison() {
  const { plan, setPlan } = usePreferences()
  const [notice, setNotice] = useState(null)

  return (
    <section className="content-section" aria-label="Plan comparison">
      {notice != null && (
        <Alert variant="success" dismissible onClose={() => setNotice(null)} className="mb-3">
          {notice}
        </Alert>
      )}

      <div className="section-heading">
        <h2>Pick the plan that fits how often you go out</h2>
        <p>Your choice is stored locally. It unlocks Plus benefits when you browse deals and complete checkout.</p>
      </div>

      <div className="plan-grid">
        {planDefs.map((def) => {
          const active = plan === def.id
          return (
            <Card
              key={def.name}
              className={`plan-card${def.emphasis ? ' plan-card--featured' : ''} ${active ? 'plan-card--active' : ''}`}
            >
              <Card.Body>
                <div className="plan-card__price-row">
                  <div>
                    <Card.Title as="h3">{def.name}</Card.Title>
                    <p className="plan-card__price">{def.price}</p>
                  </div>
                  {def.emphasis ? <span className="plan-card__label">Full perks</span> : null}
                  {active && (
                    <span className="badge text-bg-primary align-self-start">Current</span>
                  )}
                </div>
                <Card.Text>{def.description}</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                {def.perks.map((p) => (
                  <ListGroup.Item key={p}>{p}</ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Body>
                {def.id === 'free' ? (
                  <Button
                    variant="outline-dark"
                    className="plan-card__button"
                    onClick={() => {
                      setPlan('free')
                      setNotice('You are on the free plan. Preferences stay on this device.')
                    }}
                    disabled={active}
                  >
                    {active ? 'Using free' : 'Use free plan'}
                  </Button>
                ) : (
                  <Button
                    variant="dark"
                    className="plan-card__button"
                    onClick={() => {
                      setPlan('plus')
                      setNotice('You are on TicketFinder Plus. Checkout fee perks are enabled.')
                    }}
                    disabled={active}
                  >
                    {active ? 'Subscribed' : 'Choose Plus'}
                  </Button>
                )}
              </Card.Body>
            </Card>
          )
        })}
      </div>

      <Stack className="mt-3" gap={1}>
        <p className="text-muted small mb-0">
          Current: <strong>{plan === 'plus' ? 'TicketFinder Plus' : 'Free'}</strong>. Mock billing only; stored on
          this device.
        </p>
      </Stack>
    </section>
  )
}
