import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import SubscriptionPage from './pages/SubscriptionPage.jsx'
import Layout from './components/Layout.jsx'

// Layout wraps every route: header, <Outlet />, footer.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Route>
    </Routes>
  )
}

export default App
