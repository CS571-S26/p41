import { Badge, Stack } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'

const allDeals = [
  { text: 'Student discount for select weekday events', plusOnly: false },
  { text: 'Bundle offer when buying tickets for a group', plusOnly: false },
  { text: 'Limited time festival promo codes', plusOnly: false },
  { text: 'Plus: fee waiver on the demo ticket checkout', plusOnly: true },
  { text: 'Plus: first look at a weekly featured lineup', plusOnly: true },
]

export default function DealsSection() {
  const { plan } = usePreferences()
  const isPlus = plan === 'plus'
  const deals = isPlus ? allDeals : allDeals.filter((d) => !d.plusOnly)

  return (
    <section className="content-section deals-panel">
      <div className="section-heading">
        <h2>Promos and extras that keep the app useful</h2>
        <p>
          When you are signed up for the Plus demo, we also show extra deals for people on a paid plan. The
          same list updates instantly when you switch plans on the comparison above.
        </p>
      </div>

      <div className="deals-list">
        {deals.map((deal) => (
          <div key={deal.text} className="deal-chip">
            {isPlus && deal.plusOnly && (
              <Badge bg="primary" className="me-2" pill>
                Plus
              </Badge>
            )}
            {deal.text}
          </div>
        ))}
      </div>

      <Stack className="mt-3" gap={1}>
        <p className="text-muted small mb-0">
          Viewing: <strong>{isPlus ? 'All deals (including Plus)' : 'Public promos'}</strong>. Switch plans to compare.
        </p>
      </Stack>
    </section>
  )
}
