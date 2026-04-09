import { Card } from 'react-bootstrap'

export default function BenefitCard({ title, description }) {
  return (
    <Card className="info-card h-100">
      <Card.Body>
        <Card.Title as="h2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
