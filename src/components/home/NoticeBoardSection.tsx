import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  FileText,
  Calendar,
  Download,
  Search,
  Pin,
  Flame,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { NoticeCategory } from '../../types';

export const NoticeBoardSection: React.FC = () => {
  const { notices, setSelectedNotice, setCurrentView } = useCollege();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Examinations', 'Admission', 'Scholarship', 'Academic', 'Tender', 'General'];

  const filteredNotices = notices.filter(n => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.refNo && n.refNo.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <Flame className="h-3.5 w-3.5 text-rose-600" />
              Official Circulars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-cinzel">
              College Notice Board
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Live updates from the Principal's Office, Academic Council, and Bodoland University Examination Cell.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search circulars by keyword or ref..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs focus:border-blue-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-700"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="space-y-3">
          {filteredNotices.length > 0 ? (
            filteredNotices.slice(0, 6).map(notice => (
              <div
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className={`group cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  notice.isUrgent
                    ? 'border-rose-300 bg-rose-50/40 hover:bg-rose-50/80'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    notice.isUrgent ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-800'
                  }`}>
                    <FileText className="h-5 w-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 border border-slate-200">
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="rounded bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white uppercase tracking-wider animate-pulse">
                          Urgent
                        </span>
                      )}
                      {notice.isPinned && (
                        <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                          <Pin className="h-2.5 w-2.5" /> Pinned
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500 font-mono">
                        Ref: {notice.refNo || 'BC/GEN/2025'}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 leading-snug">
                      {notice.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-1">
                      {notice.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {notice.date}
                  </span>

                  <button className="inline-flex items-center gap-1 rounded-lg bg-blue-50 group-hover:bg-blue-900 group-hover:text-white px-3 py-1.5 text-xs font-semibold text-blue-900 transition-colors">
                    <span>View / PDF</span>
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 text-sm">
              No circulars found matching the filter "{searchQuery || selectedCategory}".
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing <span className="font-bold text-slate-800">{Math.min(6, filteredNotices.length)}</span> of <span className="font-bold text-slate-800">{notices.length}</span> notices
          </p>
          <button
            onClick={() => setCurrentView('notices')}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700"
          >
            <span>View Complete Archives & Tenders</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
