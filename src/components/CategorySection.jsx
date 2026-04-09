const categories = [
  {
    title: 'Concerts',
    description: 'Track touring artists, local bands, and live shows happening around Madison venues.',
  },
  {
    title: 'Badgers Sports',
    description: 'Stay on top of game days, student energy, and local sports events across the city.',
  },
  {
    title: 'Festivals',
    description: 'Find food festivals, art fairs, and seasonal events that bring the community together.',
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="home-section">
      <div className="section-heading">
        <h2>Browse the kinds of events people actually look for</h2>
        <p>
          Ticketfinder works best when event discovery feels organized. These categories show how users can
          move quickly from general interest to something they would realistically attend.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.title} className="category-card">
            <strong>{category.title}</strong>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
