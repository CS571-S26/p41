import { Card } from 'react-bootstrap'

export default function EventCard({ title, description, meta }) {
  return (
    <Card className="info-card h-100">
      <Card.Body>
        <Card.Title as="h2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {meta ? <Card.Footer className="info-card__footer">{meta}</Card.Footer> : null}
    </Card>
  )
}
