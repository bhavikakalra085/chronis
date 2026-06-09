import { X, Lightbulb } from 'lucide-react'
import { useState } from 'react'

function ContextualNudge({ nudge, onDismiss }) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 bg-white border border-blue-200 rounded-lg shadow-xl p-4 max-w-sm animate-slideUp">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Lightbulb size={18} className="text-blue-600" />
          <p className="font-semibold text-slate-900 text-sm">Smart Nudge</p>
        </div>
        <button onClick={() => setDismissed(true)} className="text-slate-400 hover:text-slate-600">
          <X size={16} />
        </button>
      </div>
      <p className="text-sm text-slate-700 mb-4">{nudge.message}</p>
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 transition font-medium">Act Now</button>
        <button onClick={() => setDismissed(true)} className="flex-1 text-slate-600 py-2 rounded text-sm hover:bg-slate-100 transition">Later</button>
      </div>
    </div>
  )
}

export default ContextualNudge