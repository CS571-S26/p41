import { Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { usePreferences } from '../context/PreferencesContext.jsx'

export default function SubscriptionHighlight() {
  const { plan } = usePreferences()
  const isPlus = plan === 'plus'

  return (
    <section className="subscription-highlight">
      <div className="subscription-highlight__content">
        <span className="eyebrow">Premium option</span>
        <h2>Fast Lane and early access for people who are out a lot in Madison</h2>
        <p>
          Plus members get smoother entry when it is crowded, earlier ticket windows, and more value in the demo. Try
          switching your plan to see the difference in deals and ticket checkout.
        </p>
        {isPlus && (
          <p className="text-white-50 small mb-0">You are using the Plus demo. Explore perks below or compare plans.</p>
        )}
      </div>

      <Stack className="subscription-highlight__actions" gap={2}>
        <Button
          as={Link}
          to="/subscription"
          className="subscription-highlight__button"
        >
          {isPlus ? 'View subscription page' : 'Explore subscriber perks'}
        </Button>
      </Stack>
    </section>
  )
}
