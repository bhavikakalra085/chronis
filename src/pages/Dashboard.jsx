import useBehaviorStore from '../store/behaviorStore'
import InsightCard from '../components/InsightCard'
import ContextualNudge from '../components/ContextualNudge'
import { useState } from 'react'

function Dashboard() {
  const { insights } = useBehaviorStore()
  const [filter, setFilter] = useState('all')
  const [showNudge, setShowNudge] = useState(true)

  const filteredInsights = filter === 'all' ? insights : insights.filter(i => i.category === filter)

  const contextualNudge = {
    title: 'Time for social connection',
    message: 'Your social energy usually peaks after a quiet day. You had one yesterday.'
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Your Behavioral Insights</h2>
        <p className="text-slate-600">Data-driven patterns grounded in epistemic honesty</p>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {['all', 'focus', 'sleep', 'social', 'mood'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded font-medium transition ${
              filter === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInsights.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>

      {showNudge && <ContextualNudge nudge={contextualNudge} onDismiss={() => setShowNudge(false)} />}
    </div>
  )
}

export default Dashboard