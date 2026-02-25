'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { RefreshCw, Wifi, Clock, MapPin, Trophy } from 'lucide-react'

interface TeamInfo {
  name: string
  shortName: string
  score: string
  overs: string
  flag: string
}

interface CricketMatch {
  id: string
  status: string
  statusText: string
  team1: TeamInfo
  team2: TeamInfo
  format: string
  venue: string
  result: string
  seriesName: string
}

export default function CricketScoreBoard() {
  const [matches, setMatches] = useState<CricketMatch[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState('')
  const [filter, setFilter] = useState<'all' | 'live' | 'completed' | 'upcoming'>('all')

  const fetchScores = useCallback(async () => {
    try {
      const res = await fetch('/api/cricket')
      if (res.ok) {
        const json = await res.json()
        if (json.matches) {
          setMatches(json.matches)
          setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        }
      }
    } catch {
      // Keep existing data
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchScores()
    const interval = setInterval(fetchScores, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [fetchScores])

  const filteredMatches = matches.filter((m) => {
    if (filter === 'all') return true
    return m.status === filter
  })

  const liveCount = matches.filter((m) => m.status === 'live').length

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Live Cricket Score</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <span className="text-3xl">🏏</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Live Cricket Score</h1>
              <p className="text-slate-700 flex items-center gap-2">
                {liveCount > 0 && (
                  <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                    <Wifi className="w-4 h-4" />
                    {liveCount} Live {liveCount === 1 ? 'Match' : 'Matches'}
                  </span>
                )}
                <span className="text-slate-400">•</span>
                Auto-refreshing every 30s
                {lastUpdated && <span className="text-slate-400">• Last: {lastUpdated}</span>}
              </p>
            </div>
          </div>

          <button
            onClick={fetchScores}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Scores
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {(['all', 'live', 'completed', 'upcoming'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f === 'all' ? `All Matches (${matches.length})` : 
               f === 'live' ? `🔴 Live (${matches.filter(m => m.status === 'live').length})` :
               f === 'completed' ? `✅ Completed` : '🕐 Upcoming'}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && matches.length === 0 && (
          <div className="text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">Fetching live scores...</p>
          </div>
        )}

        {/* No matches */}
        {!loading && filteredMatches.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <span className="text-5xl mb-4 block">🏏</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No {filter !== 'all' ? filter : ''} matches right now</h3>
            <p className="text-slate-600">Check back soon for live cricket updates!</p>
          </div>
        )}

        {/* Match Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Live Cricket Score — Free Ball-by-Ball Updates</h2>
          <p className="text-slate-700 mb-4">
            Get real-time live cricket scores for all international matches, IPL 2026, T20 World Cup, 
            ODI series, and Test matches. Our live scorecard updates every 30 seconds with ball-by-ball commentary,
            team scores, wickets, and match status.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Upcoming Cricket Series 2026</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
            <li><strong>IPL 2026</strong> — India Premier League (March - May 2026)</li>
            <li><strong>IND vs AUS</strong> — India tour of Australia ODI & T20 Series</li>
            <li><strong>T20 World Cup 2026</strong> — ICC T20 World Cup (to be announced)</li>
            <li><strong>ENG vs SA</strong> — England vs South Africa Test Series</li>
            <li><strong>Asia Cup 2026</strong> — Asia Cup ODI/T20</li>
          </ul>
          <h3 className="text-xl font-bold text-slate-900 mb-3">IPL 2026 Teams</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {[
              { name: 'CSK', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
              { name: 'MI', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { name: 'RCB', color: 'bg-red-50 text-red-700 border-red-200' },
              { name: 'KKR', color: 'bg-purple-50 text-purple-700 border-purple-200' },
              { name: 'DC', color: 'bg-sky-50 text-sky-700 border-sky-200' },
              { name: 'SRH', color: 'bg-orange-50 text-orange-700 border-orange-200' },
              { name: 'RR', color: 'bg-pink-50 text-pink-700 border-pink-200' },
              { name: 'PBKS', color: 'bg-red-50 text-red-600 border-red-200' },
              { name: 'GT', color: 'bg-teal-50 text-teal-700 border-teal-200' },
              { name: 'LSG', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
            ].map((team) => (
              <div key={team.name} className={`text-center py-2 px-3 rounded-lg border font-bold ${team.color}`}>
                {team.name}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/nifty-live" className="text-blue-600 hover:underline text-sm bg-blue-50 px-3 py-1 rounded-full">📈 Nifty Live</Link>
            <Link href="/gold-price-india" className="text-yellow-700 hover:underline text-sm bg-yellow-50 px-3 py-1 rounded-full">🥇 Gold Price</Link>
            <Link href="/stock-market-strategy" className="text-indigo-600 hover:underline text-sm bg-indigo-50 px-3 py-1 rounded-full">📖 Trading Strategy</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

function MatchCard({ match }: { match: CricketMatch }) {
  const isLive = match.status === 'live'
  const isCompleted = match.status === 'completed'

  return (
    <div className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-all hover:shadow-xl ${
      isLive ? 'border-green-300 ring-2 ring-green-100' : 'border-slate-200'
    }`}>
      {/* Header */}
      <div className={`px-5 py-3 flex items-center justify-between ${
        isLive ? 'bg-green-50' : isCompleted ? 'bg-slate-50' : 'bg-blue-50'
      }`}>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700 truncate max-w-[200px]">{match.seriesName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
            match.format === 'T20' ? 'bg-purple-100 text-purple-700' :
            match.format === 'ODI' ? 'bg-blue-100 text-blue-700' :
            'bg-orange-100 text-orange-700'
          }`}>
            {match.format}
          </span>
          {isLive && (
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              LIVE
            </span>
          )}
          {isCompleted && (
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">COMPLETED</span>
          )}
        </div>
      </div>

      {/* Teams */}
      <div className="px-5 py-4 space-y-4">
        {/* Team 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{match.team1.flag}</span>
            <div>
              <div className="font-bold text-slate-900">{match.team1.shortName}</div>
              <div className="text-xs text-slate-700">{match.team1.name}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-slate-900">{match.team1.score}</div>
            {match.team1.overs && <div className="text-xs text-slate-500">{match.team1.overs}</div>}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-slate-200"></div>

        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{match.team2.flag}</span>
            <div>
              <div className="font-bold text-slate-900">{match.team2.shortName}</div>
              <div className="text-xs text-slate-700">{match.team2.name}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-slate-900">{match.team2.score}</div>
            {match.team2.overs && <div className="text-xs text-slate-500">{match.team2.overs}</div>}
          </div>
        </div>
      </div>

      {/* Result / Status */}
      <div className={`px-5 py-3 border-t ${
        isLive ? 'bg-green-50 border-green-100' : 'bg-slate-50 border-slate-100'
      }`}>
        <p className={`text-sm font-medium ${isLive ? 'text-green-700' : 'text-slate-700'}`}>
          {match.result || match.statusText}
        </p>
        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
          <MapPin className="w-3 h-3" />
          {match.venue}
        </div>
      </div>
    </div>
  )
}
