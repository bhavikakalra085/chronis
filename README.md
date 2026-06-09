# Chronis

**Behavioral insights grounded in epistemic honesty**

## Core Principles

✅ **Confidence is transparent** - Every insight shows a % confidence score, not hidden  
✅ **Insights are narratives** - Plain-language summaries, not raw metrics  
✅ **Timeline is the spine** - History rendered as meaningful events  
✅ **Nudges are contextual** - Smart notifications timed to detected patterns  

## Features

- 📊 Dashboard with confidence-scored insights
- 📅 Narrative timeline of behavioral events  
- 🎯 Category filters (focus, sleep, social, mood)
- 💡 Contextual nudges based on patterns
- 📱 Responsive design

## Tech Stack

- **React 18** - UI framework
- **Vite** - Fast bundler
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first styling
- **date-fns** - Date utilities
- **lucide-react** - Icon library

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── pages/
│   ├── Dashboard.jsx    # Main insights view
│   └── Timeline.jsx     # Narrative timeline
├── components/
│   ├── Sidebar.jsx      # Navigation
│   ├── InsightCard.jsx  # Insight display
│   └── ContextualNudge.jsx # Smart notifications
├── store/
│   └── behaviorStore.js # Zustand state
└── App.jsx              # Main app

## UX Design

### 1. Confidence Everywhere
Showing uncertainty upfront prevents over-trust. Users calibrate expectations: 87% != 63%.

### 2. Narrative Copy
"Deep work peaks between 9–11 am" is more actionable than "Focus coefficient: 0.87"

### 3. Timeline as Spine
The timeline makes users the protagonist of their own change story. Every week adds to it.

### 4. Contextual Nudges
The moat: nudges grounded in personal history ("You had a quiet day yesterday") > generic notifications.
```
