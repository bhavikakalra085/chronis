function InsightCard({ insight }) {
  const categoryColors = {
    focus: 'bg-blue-50 border-blue-200 text-blue-900',
    sleep: 'bg-purple-50 border-purple-200 text-purple-900',
    social: 'bg-green-50 border-green-200 text-green-900',
    mood: 'bg-amber-50 border-amber-200 text-amber-900'
  }

  const confidenceColor = insight.confidence >= 80 ? 'text-green-700 bg-green-50' : insight.confidence >= 70 ? 'text-amber-700 bg-amber-50' : 'text-orange-700 bg-orange-50'

  return (
    <div className={`border rounded-lg p-4 ${categoryColors[insight.category]}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-sm">{insight.title}</h3>
        <span className={`text-xs font-bold px-2 py-1 rounded ${confidenceColor}`}>{insight.confidence}%</span>
      </div>
      <p className="text-sm opacity-90 mb-3">{insight.description}</p>
      <div className="flex justify-between text-xs opacity-75">
        <span>{insight.dataPoints} data points</span>
        <span className="font-medium">Confidence: {insight.confidence > 80 ? 'High' : insight.confidence > 70 ? 'Medium' : 'Low'}</span>
      </div>
    </div>
  )
}

export default InsightCard