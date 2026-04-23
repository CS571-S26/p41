import { NavLink, Outlet } from 'react-router-dom'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'
import '../App.css'

export default function Layout() {
  const { savedEventIds } = usePreferences()
  const nSaved = savedEventIds.length

  return (
    <div className="site-shell">
      {/* Main site navigation */}
      <Navbar expand="lg" className="site-header" sticky="top">
        <Container className="site-header__inner">
          <Navbar.Brand as={NavLink} to="/" className="site-brand">
            <span className="site-brand__name">TicketFinder</span>
            <span className="site-brand__tag">Madison events, deals, and subscriber perks in one place</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav" className="justify-content-end">
            <Nav className="site-nav" aria-label="Primary">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/events" className="d-flex align-items-center gap-2">
                Events
                {nSaved > 0 && (
                  <Badge bg="primary" pill>
                    {nSaved} saved
                  </Badge>
                )}
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
        <p>TicketFinder helps Madison residents discover local events, promotions, and optional Plus perks in this demo.</p>
      </footer>
    </div>
  )
}
