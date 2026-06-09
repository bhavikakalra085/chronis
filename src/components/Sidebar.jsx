import { Link } from 'react-router-dom'
import { Home, Calendar, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">⏱️ Chronis</h1>
      <nav className="space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-100 transition">
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/timeline" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-100 transition">
          <Calendar size={20} /> Timeline
        </Link>
      </nav>
      <div className="mt-auto pt-4 border-t border-slate-200">
        <button className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-100 transition w-full text-left">
          <Settings size={20} /> Settings
        </button>
      </div>
    </aside>
  )
}

export default Sidebar