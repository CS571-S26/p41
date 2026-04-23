import { useMemo, useState } from 'react'
import { Badge, Button, Card, Col, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'
import { featuredEvents } from '../data/events.js'
import TicketPurchaseModal from './TicketPurchaseModal.jsx'

function eventMatchesInterests(event, interests) {
  if (interests.length === 0) return true
  // Interest chip values align with tag strings on each event.
  const interestToTag = { concerts: 'concerts', sports: 'sports', festivals: 'festivals' }
  return interests.some((i) => {
    const t = interestToTag[i]
    return t && event.tags.includes(t)
  })
}

export default function FeaturedEventList() {
  const { interests, savedEventIds, toggleSaved, plan } = usePreferences()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [savedOnly, setSavedOnly] = useState(false)
  const [modalEvent, setModalEvent] = useState(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    // Non-empty query searches all rows; otherwise category, saved-only, and interest filters apply.
    return featuredEvents.filter((ev) => {
      if (savedOnly && !savedEventIds.includes(ev.id)) return false
      if (category !== 'all' && ev.category !== category) return false
      if (q) {
        const blob = [ev.title, ev.description, ev.venue, ev.category, ev.date, ...ev.tags]
          .join(' ')
          .toLowerCase()
        if (!blob.includes(q)) return false
        return true
      }
      if (interests.length > 0 && !eventMatchesInterests(ev, interests)) return false
      return true
    })
  }, [category, interests, search, savedEventIds, savedOnly])

  const isPlus = plan === 'plus'

  return (
    <section id="event-catalog" className="content-section event-catalog">
      <div className="section-heading">
        <h2>Explore events in Madison</h2>
        <p>
          Search, filter, save listings, and try a demo ticket flow. Your saved events and plan choice
          persist in this browser.
        </p>
      </div>

      <Stack gap={3} className="event-catalog__controls">
        <Form>
          <Row className="g-2 g-md-3">
            <Col md={5}>
              <Form.Label className="small text-muted mb-1">Search</Form.Label>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search by name, venue, or keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search events"
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">Category</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Filter by category"
              >
                <option value="all">All categories</option>
                <option value="Concert">Concerts</option>
                <option value="Sports">Sports</option>
                <option value="Festival">Festivals</option>
              </Form.Select>
            </Col>
            <Col md={4} className="d-flex align-items-end">
              <Form.Check
                type="switch"
                id="saved-only"
                label="Show only saved events"
                checked={savedOnly}
                onChange={(e) => setSavedOnly(e.target.checked)}
              />
            </Col>
          </Row>
        </Form>
        {interests.length > 0 && !savedOnly && (
          <p className="text-muted small mb-0">
            When your interests are set, the list defaults to events that match them unless you search
            (search looks across all matching rows).
          </p>
        )}
      </Stack>

      {filtered.length === 0 ? (
        <p className="text-muted">No events match your filters. Try clearing search or turning off the saved filter.</p>
      ) : (
        <div className="event-list">
          {filtered.map((event) => {
            const saved = savedEventIds.includes(event.id)
            return (
              <Card key={event.id} className="featured-event-card">
                <Card.Body>
                  <div className="featured-event-card__top">
                    <Badge bg="info-subtle" text="dark" className="featured-event-card__badge">
                      {event.category}
                    </Badge>
                    <span className="featured-event-card__price">{event.price}</span>
                  </div>
                  <Card.Title as="h3">{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <div className="featured-event-card__meta">
                    <span>{event.venue}</span>
                    <span>{event.date}</span>
                  </div>
                  <Stack direction="horizontal" gap={2} className="mt-3 flex-wrap">
                    <Button
                      type="button"
                      variant="outline-primary"
                      size="sm"
                      onClick={() => toggleSaved(event.id)}
                      active={saved}
                    >
                      {saved ? 'Saved' : 'Save'}
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={() => setModalEvent(event)}
                    >
                      {event.priceAmount === 0 || /free/i.test(event.price) ? 'Get tickets' : 'Try ticket demo'}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      )}

      <TicketPurchaseModal
        event={modalEvent}
        isPlus={isPlus}
        show={modalEvent != null}
        onHide={() => setModalEvent(null)}
      />
    </section>
  )
}
