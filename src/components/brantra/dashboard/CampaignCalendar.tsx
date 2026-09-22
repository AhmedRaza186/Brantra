import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CampaignCalendar() {
  // Static mock calendar for October 2026
  const days = [
    { day: 28, currentMonth: false }, { day: 29, currentMonth: false }, { day: 30, currentMonth: false },
    { day: 1, currentMonth: true }, { day: 2, currentMonth: true }, { day: 3, currentMonth: true }, { day: 4, currentMonth: true },
    { day: 5, currentMonth: true }, { day: 6, currentMonth: true }, { day: 7, currentMonth: true, event: 'amber' }, { day: 8, currentMonth: true },
    { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true, isToday: true, event: 'accent' },
    { day: 13, currentMonth: true }, { day: 14, currentMonth: true }, { day: 15, currentMonth: true }, { day: 16, currentMonth: true, event: 'moss' },
    { day: 17, currentMonth: true }, { day: 18, currentMonth: true }, { day: 19, currentMonth: true }, { day: 20, currentMonth: true },
    { day: 21, currentMonth: true }, { day: 22, currentMonth: true }, { day: 23, currentMonth: true, event: 'red' }, { day: 24, currentMonth: true },
    { day: 25, currentMonth: true }, { day: 26, currentMonth: true }, { day: 27, currentMonth: true }, { day: 28, currentMonth: true },
    { day: 29, currentMonth: true }, { day: 30, currentMonth: true }, { day: 31, currentMonth: true }, { day: 1, currentMonth: false }
  ];

  return (
    <div className="bg-surface border border-transparent rounded-3xl p-6 shadow-premium mb-6 animate-reveal stagger-2 hidden xl:block">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-canvas text-text-secondary transition-btn focus-visible">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-[14px] font-semibold text-ink">October 2026</h3>
        <button className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-canvas text-text-secondary transition-btn focus-visible">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="text-center text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={`
              relative aspect-square flex items-center justify-center text-[13px] font-medium rounded-lg cursor-default transition-colors
              ${d.currentMonth ? 'text-ink hover:bg-canvas' : 'text-text-secondary/50'}
              ${d.isToday ? 'border-2 border-ink font-bold' : 'border border-transparent'}
            `}
          >
            {d.day}
            
            {/* Event Markers */}
            {d.event === 'accent' && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-accent"></div>}
            {d.event === 'amber' && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-waiting"></div>}
            {d.event === 'moss' && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-completed"></div>}
            {d.event === 'red' && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-urgent"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
