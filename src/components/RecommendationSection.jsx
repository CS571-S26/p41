// Reorders static recommendation cards by overlap with selected interests.
import { useMemo } from 'react'
import { Alert } from 'react-bootstrap'
import { usePreferences } from '../context/PreferencesContext.jsx'
import EventCard from './EventCard.jsx'

const interestTagMap = {
  concerts: 'concerts',
  sports: 'sports',
  festivals: 'festivals',
}

const recommendations = [
  {
    title: 'Student Picks',
    description:
      'A quick mix of concerts, campus traditions, and affordable events popular with UW Madison students.',
    meta: 'Good for spontaneous plans',
    matchTags: ['concerts', 'sports', 'student', 'campus'],
  },
  {
    title: 'Weekend With Friends',
    description:
      'Options that work well with a group: food festivals, evening games, and downtown nights out in Madison.',
    meta: 'Built for social plans',
    matchTags: ['festivals', 'sports', 'food', 'outdoor'],
  },
  {
    title: 'Family friendly',
    description: 'Daytime community events, neighborhood festivals, and easy outings for a wide age range.',
    meta: 'Great for afternoon plans',
    matchTags: ['festivals', 'outdoor', 'food', 'family'],
  },
]

function scoreItem(interests, item) {
  // Prefer cards whose tags overlap the selected interests on the home page.
  if (interests.length === 0) return 0
  let score = 0
  for (const id of interests) {
    const tag = interestTagMap[id]
    if (tag && item.matchTags?.includes(tag)) score += 2
  }
  for (const t of item.matchTags ?? []) {
    if (interests.includes('concerts') && t === 'music') score += 1
  }
  return score
}

export default function RecommendationSection() {
  const { interests } = usePreferences()

  const ordered = useMemo(() => {
    const withScore = recommendations.map((rec) => ({
      ...rec,
      _sort: scoreItem(interests, rec),
    }))
    withScore.sort((a, b) => b._sort - a._sort)
    return withScore.map((row) => {
      const { _sort, ...rec } = row
      return rec
    })
  }, [interests])

  return (
    <section id="recommendations" className="home-section">
      <div className="section-heading">
        <h2>Recommendations that match your interests</h2>
        <p>
          Picks on top lines up with what you selected in categories (concerts, sports, festivals). Changing
          interests reorders these cards.
        </p>
      </div>

      {interests.length > 0 ? (
        <Alert variant="info" className="recommendation-alert py-2">
          Showing personalized order based on {interests.length} interest{interests.length > 1 ? 's' : ''}.
        </Alert>
      ) : null}

      <div className="info-grid info-grid--triple">
        {ordered.map((recommendation) => (
          <EventCard
            key={recommendation.title}
            titleAs="h3"
            title={recommendation.title}
            description={recommendation.description}
            meta={recommendation.meta}
          />
        ))}
      </div>
    </section>
  )
}
