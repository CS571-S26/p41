const deals = [
  'Student discount for select weekday events',
  'Bundle offer when buying tickets for a group',
  'Limited-time festival promo codes',
]

export default function DealsSection() {
  return (
    <section className="content-section deals-panel">
      <div className="section-heading">
        <h2>Promotions are another reason users would keep checking the app</h2>
        <p>
          Your proposal mentions deals and limited-time offers, so this section helps show that Ticketfinder
          is not just about listing events. It also gives people a reason to come back regularly.
        </p>
      </div>

      <div className="deals-list">
        {deals.map((deal) => (
          <div key={deal} className="deal-chip">
            {deal}
          </div>
        ))}
      </div>
    </section>
  )
}
