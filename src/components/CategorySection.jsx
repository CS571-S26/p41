import { Card } from 'react-bootstrap'
import InterestSelector from './InterestSelector.jsx'

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
          TicketFinder groups discovery so you can move from a broad interest to a specific night out
          without jumping between sites and tabs.
        </p>
      </div>

      <InterestSelector />

      <div className="category-grid">
        {categories.map((category) => (
          <Card key={category.title} className="category-card h-100 border-0">
            <Card.Body>
              <Card.Title as="h3" className="h6 mb-2 text-primary">
                {category.title}
              </Card.Title>
              <Card.Text className="mb-0">{category.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}
