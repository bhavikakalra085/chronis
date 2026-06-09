import { create } from 'zustand'

const useBehaviorStore = create((set) => ({
  insights: [
    {
      id: 1,
      category: 'focus',
      title: 'Deep work peaks between 9–11 am',
      confidence: 87,
      description: 'Your focus coefficient is highest in early morning. Schedule critical tasks then.',
      dataPoints: 12,
      trend: 'up'
    },
    {
      id: 2,
      category: 'social',
      title: 'Social energy peaks after quiet days',
      confidence: 63,
      description: 'You engage more after low-interaction periods. Plan social activities strategically.',
      dataPoints: 8,
      trend: 'stable'
    },
    {
      id: 3,
      category: 'sleep',
      title: 'Sleep quality improves with evening walks',
      confidence: 71,
      description: 'Your rest score is 23% higher on nights after 20+ min walks.',
      dataPoints: 9,
      trend: 'up'
    }
  ],
  events: [
    { id: 1, date: '2026-06-09', category: 'focus', title: 'Deep work session', duration: 2, confidence: 92 },
    { id: 2, date: '2026-06-08', category: 'social', title: 'Social gathering', type: 'event', confidence: 85 },
    { id: 3, date: '2026-06-07', category: 'sleep', title: 'Excellent sleep night', hours: 8.5, confidence: 88 }
  ],
  addInsight: (insight) => set((state) => ({ insights: [...state.insights, insight] })),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] }))
}))

export default useBehaviorStore