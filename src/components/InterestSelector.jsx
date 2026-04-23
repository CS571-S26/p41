import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'

const OPTIONS = [
  { value: 'concerts', label: 'Concerts' },
  { value: 'sports', label: 'Sports' },
  { value: 'festivals', label: 'Festivals' },
]

export default function InterestSelector() {
  const { interests, setInterests } = usePreferences()

  return (
    <div className="interest-selector">
      <div className="section-heading interest-selector__head">
        <h3 className="interest-selector__title">What do you like?</h3>
        <p>
          Pick a few so we can tune recommendations and make browsing feel more personal. Your choices
          are saved in this browser.
        </p>
      </div>
      <ToggleButtonGroup
        type="checkbox"
        value={interests}
        onChange={setInterests}
        className="interest-selector__toggles d-flex flex-wrap"
      >
        {OPTIONS.map((opt) => (
          <ToggleButton
            key={opt.value}
            id={`interest-${opt.value}`}
            value={opt.value}
            type="checkbox"
            variant="outline-primary"
            className="interest-selector__toggle"
          >
            {opt.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}
