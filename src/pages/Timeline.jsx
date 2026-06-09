import useBehaviorStore from '../store/behaviorStore'
import { format } from 'date-fns'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

function Timeline() {
  const { events } = useBehaviorStore()
  const [filter, setFilter] = useState('all')

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter)

  const categoryIcons = {
    focus: '🎯',
    sleep: '😴',
    social: '👥',
    mood: '🎭'
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Narrative Timeline</h2>
        <p className="text-slate-600">Your behavioral history as a sequence of meaningful events</p>
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

      <div className="relative max-w-2xl">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200"></div>
        <div className="space-y-8 pl-24">
          {filteredEvents.map((event) => (
            <div key={event.id} className="relative">
              <div className="absolute -left-20 top-1 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-lg">
                {categoryIcons[event.category]}
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{event.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{format(new Date(event.date), 'MMMM d, yyyy')}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-green-50 text-green-700">{event.confidence}%</span>
                </div>
                <p className="text-sm text-slate-700"><span className="font-medium text-slate-900">{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span> event</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline