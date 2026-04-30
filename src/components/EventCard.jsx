// Generic info card; titleAs varies by section so headings stay nested correctly.
import { Card } from 'react-bootstrap'

export default function EventCard({ title, description, meta, titleAs = 'h2' }) {
  return (
    <Card className="info-card h-100">
      <Card.Body>
        <Card.Title as={titleAs}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {meta ? <Card.Footer className="info-card__footer">{meta}</Card.Footer> : null}
    </Card>
  )
}
