import { useState } from 'react'
import { Button, Form, ListGroup, Modal, Stack } from 'react-bootstrap'

const FREE_LABELS = new Set(['free entry', 'free', 'free with student id'])

export default function TicketPurchaseModal({ event, isPlus, show, onHide, onConfirm }) {
  const [quantity, setQuantity] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const free =
    !event || event.priceAmount === 0 || (typeof event.price === 'string' && FREE_LABELS.has(event.price.toLowerCase()))

  const subtotal = event && !free ? event.priceAmount * Math.max(1, quantity) : 0
  // Mock convenience fee; Plus waives it in the UI.
  const lineFee = isPlus && subtotal > 0 ? 0 : subtotal > 0 ? 2.5 * quantity : 0
  const total = subtotal + lineFee

  function handleOpenChange() {
    setQuantity(1)
    setSubmitted(false)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      onExited={handleOpenChange}
      centered
      aria-labelledby="ticket-modal-title"
    >
      {event ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="ticket-modal-title">Tickets</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {submitted ? (
              <Stack gap={2}>
                <p className="mb-0">
                  You&rsquo;re in. This is a <strong>demo</strong> confirmation: no real payment
                  is processed. Thanks for trying TicketFinder.
                </p>
                {isPlus && subtotal > 0 && (
                  <p className="text-muted small mb-0">Plus membership hid the convenience fee in this example.</p>
                )}
              </Stack>
            ) : (
              <Stack gap={3}>
                <div>
                  <h2 className="h5 mb-1">{event.title}</h2>
                  <p className="text-muted small mb-0">
                    {event.venue}, {event.date}
                  </p>
                </div>
                {free ? (
                  <p className="mb-0">This listing is free to attend. Confirming adds it to your plans for the demo.</p>
                ) : (
                  <Form>
                    <Form.Group controlId="ticket-quantity">
                      <Form.Label>Number of tickets</Form.Label>
                      <Form.Select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        aria-label="Number of tickets"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Form>
                )}

                <ListGroup variant="flush" className="border rounded-3">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <span>Event price (each)</span>
                    <span>{event.price}</span>
                  </ListGroup.Item>
                  {!free && (
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </ListGroup.Item>
                  )}
                  {!free && lineFee > 0 && (
                    <ListGroup.Item className="d-flex justify-content-between align-items-center text-muted small">
                      <span>Demo convenience fee</span>
                      <span>${lineFee.toFixed(2)}</span>
                    </ListGroup.Item>
                  )}
                  {isPlus && subtotal > 0 && !free && (
                    <ListGroup.Item className="d-flex justify-content-between align-items-center text-success small">
                      <span>Plus perk</span>
                      <span>Convenience fee waived</span>
                    </ListGroup.Item>
                  )}
                  {!free && (
                    <ListGroup.Item className="d-flex justify-content-between align-items-center fw-semibold">
                      <span>Demo total</span>
                      <span>${total.toFixed(2)}</span>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Stack>
            )}
          </Modal.Body>
          <Modal.Footer>
            {submitted ? (
              <Button variant="primary" onClick={onHide} className="w-100">
                Close
              </Button>
            ) : (
              <Stack direction="horizontal" gap={2} className="w-100 flex-wrap">
                <Button variant="light" onClick={onHide} className="me-auto">
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSubmitted(true)
                    onConfirm?.()
                  }}
                >
                  {free ? 'Confirm' : 'Confirm for demo'}
                </Button>
              </Stack>
            )}
          </Modal.Footer>
        </>
      ) : null}
    </Modal>
  )
}
