import { Link, Outlet } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-brand">
            <span className="site-brand__name">TicketFind</span>
            <span className="site-brand__tag">Find plans worth leaving the house for</span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            <Link to="/">Home</Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>TicketFind helps fans discover concerts, sports, theater, and live events in one place.</p>
      </footer>
    </div>
  )
}
