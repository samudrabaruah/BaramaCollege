import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Bell, Flame, ChevronRight } from 'lucide-react';

export const UrgentNoticeMarquee: React.FC = () => {
  const { notices, setSelectedNotice, setCurrentView } = useCollege();

  const urgentList = notices.filter(n => n.isUrgent || n.isPinned);
  const displayNotices = urgentList.length > 0 ? urgentList : notices.slice(0, 4);

  return (
    <div className="w-full bg-amber-500 text-slate-950 border-b border-amber-600 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Left Badge */}
        <div className="flex shrink-0 items-center gap-1.5 bg-slate-950 text-amber-400 px-3.5 sm:px-4 py-2 text-xs font-black uppercase tracking-wider shadow-sm z-10">
          <Flame className="h-4 w-4 text-amber-400 fill-amber-400 animate-bounce" />
          <span>URGENT NOTICES:</span>
        </div>

        {/* Marquee Content */}
        <div className="relative flex-1 overflow-hidden py-1.5 px-3">
          <div className="animate-marquee flex items-center space-x-8 text-xs font-semibold">
            {displayNotices.map(notice => (
              <button
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="inline-flex items-center gap-2 text-slate-950 hover:text-white transition-colors cursor-pointer"
              >
                <span className="rounded-full bg-slate-950 text-white text-[10px] px-1.5 py-0.2 font-bold">
                  {notice.category}
                </span>
                <span className="underline decoration-slate-900/40 hover:decoration-white font-medium">
                  {notice.title} ({notice.date})
                </span>
                <span className="text-slate-900 font-bold">&bull;</span>
              </button>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={() => setCurrentView('notices')}
          className="hidden sm:inline-flex shrink-0 items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 text-xs font-bold transition-colors z-10"
        >
          <span>All Notices</span>
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
