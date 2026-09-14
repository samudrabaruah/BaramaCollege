import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  Bell,
  Search,
  Download,
  Calendar,
  Eye,
  Flame,
  Pin,
  FileText,
  Filter,
} from 'lucide-react';
import { NoticeCategory } from '../../types';

export const NoticesPage: React.FC = () => {
  const { notices, setSelectedNotice } = useCollege();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | NoticeCategory>('All');

  const categories: ('All' | NoticeCategory)[] = [
    'All',
    'Examinations',
    'Admission',
    'Scholarship',
    'Academic',
    'Tender',
    'General',
  ];

  const filteredNotices = notices.filter(n => {
    const matchCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchQuery =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.description.toLowerCase().includes(search.toLowerCase()) ||
      (n.refNo && n.refNo.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <Bell className="h-3.5 w-3.5" />
              OFFICIAL CIRCULARS & NOTIFICATIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Notices & Announcements
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Official archive of administrative orders, examination routines, scholarship notices, and tenders issued by Barama College.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Search & Filter Bar */}
        <div className="rounded-2xl bg-white p-4 sm:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
            />
          </div>
        </div>

        {/* Notices list */}
        <div className="space-y-3">
          {filteredNotices.length > 0 ? (
            filteredNotices.map(notice => (
              <div
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="group cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex flex-col items-center justify-center h-14 w-14 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 shrink-0">
                    <span className="text-xs font-bold uppercase">{notice.date.slice(5, 7)}</span>
                    <span className="text-base font-black">{notice.date.slice(8, 10)}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="rounded bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 flex items-center gap-1">
                          <Flame className="h-3 w-3" /> Urgent
                        </span>
                      )}
                      {notice.isPinned && (
                        <span className="rounded bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 flex items-center gap-1">
                          <Pin className="h-3 w-3" /> Pinned
                        </span>
                      )}
                      {notice.refNo && (
                        <span className="font-mono text-[10px] text-slate-400">
                          Ref: {notice.refNo}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-playfair">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedNotice(notice);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5 text-slate-500" />
                    <span>View Notice</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-white p-12 text-center text-slate-500 border border-slate-200">
              <FileText className="h-8 w-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium">No circulars match your search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
