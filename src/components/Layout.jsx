import { NavLink, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../App.css'

export default function Layout() {
  return (
    <div className="site-shell">
      {/* Main site navigation */}
      <Navbar expand="lg" className="site-header" sticky="top">
        <Container className="site-header__inner">
          <Navbar.Brand as={NavLink} to="/" className="site-brand">
            <span className="site-brand__name">Ticketfinder</span>
            <span className="site-brand__tag">Madison events, deals, and subscriber perks in one place</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav" className="justify-content-end">
            <Nav className="site-nav" aria-label="Primary">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/events">
                Events
              </Nav.Link>
              <Nav.Link as={NavLink} to="/subscription">
                Subscription
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routed page content renders here */}
      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Ticketfinder helps Madison residents discover local events, promotions, and premium ticket perks.</p>
      </footer>
    </div>
  )
}
