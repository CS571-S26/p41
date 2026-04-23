import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// Client preferences: interests, subscription tier (free vs plus), saved event IDs. Persisted in localStorage.
const STORAGE_KEY = 'ticketfind-preferences-v1'

const defaultState = {
  interests: [],
  plan: 'free',
  savedEventIds: [],
}

function loadState() {
  if (typeof window === 'undefined') return { ...defaultState }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultState }
    const parsed = JSON.parse(raw)
    return {
      ...defaultState,
      ...parsed,
      interests: Array.isArray(parsed.interests) ? parsed.interests : defaultState.interests,
      plan: parsed.plan === 'plus' || parsed.plan === 'free' ? parsed.plan : defaultState.plan,
      savedEventIds: Array.isArray(parsed.savedEventIds) ? parsed.savedEventIds : defaultState.savedEventIds,
    }
  } catch {
    return { ...defaultState }
  }
}

const PreferencesContext = createContext(null)

export function PreferencesProvider({ children }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore quota / private mode
    }
  }, [state])

  const setInterests = useCallback((interests) => {
    setState((s) => ({ ...s, interests: [...interests] }))
  }, [])

  const setPlan = useCallback((plan) => {
    setState((s) => ({ ...s, plan: plan === 'plus' || plan === 'free' ? plan : s.plan }))
  }, [])

  const toggleSaved = useCallback((eventId) => {
    setState((s) => {
      const has = s.savedEventIds.includes(eventId)
      return {
        ...s,
        savedEventIds: has
          ? s.savedEventIds.filter((id) => id !== eventId)
          : [...s.savedEventIds, eventId],
      }
    })
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      setInterests,
      setPlan,
      toggleSaved,
    }),
    [setInterests, setPlan, toggleSaved, state],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) {
    throw new Error('usePreferences must be used within PreferencesProvider')
  }
  return ctx
}
