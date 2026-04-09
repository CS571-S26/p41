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
    description: 'Upgrade for Fast Lane access, earlier ticket windows, and subscriber-only deals.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="home-section">
      <div className="section-heading">
        <h2>How the platform is supposed to help users</h2>
        <p>
          This project is not just about showing events. It is about reducing the time and friction between
          wanting to go out and deciding where to go.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article key={step.number} className="step-card">
            <span className="step-number">{step.number}</span>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
