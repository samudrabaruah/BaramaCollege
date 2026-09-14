import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { FileText, Calendar, X, Download, Printer, Tag, Building2, CheckCircle2 } from 'lucide-react';

export const NoticeModal: React.FC = () => {
  const { selectedNotice, setSelectedNotice } = useCollege();

  if (!selectedNotice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header with College Emblem Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-5 text-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Office of the Principal &bull; Barama College
                </p>
                <p className="text-xs text-blue-200">Ref: {selectedNotice.refNo || 'BC/OFFICE/NOT/2025'}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedNotice(null)}
              className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800 border border-blue-200">
              <Tag className="h-3 w-3" />
              {selectedNotice.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              Date: {selectedNotice.date}
            </span>
            {selectedNotice.isUrgent && (
              <span className="rounded-md bg-rose-100 px-2.5 py-1 text-xs font-bold text-rose-700">
                URGENT
              </span>
            )}
            {selectedNotice.fileSize && (
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                File Size: {selectedNotice.fileSize}
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-slate-900 leading-snug font-playfair">
            {selectedNotice.title}
          </h2>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-3">
            <p className="font-medium text-slate-900">Official Notice Abstract:</p>
            <p>{selectedNotice.description}</p>
            {selectedNotice.pdfContent && (
              <div className="mt-3 rounded-lg bg-white p-3.5 border border-slate-200 font-mono text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                {selectedNotice.pdfContent}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Digitally Verified Notice &bull; Barama College Examination Cell
            </div>
            <p className="font-medium text-slate-700">By Order, Principal</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
          <button
            onClick={() => setSelectedNotice(null)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-100 transition-colors"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              onClick={() => {
                alert(`Downloaded circular: "${selectedNotice.title}" (PDF simulation)`);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-blue-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download PDF ({selectedNotice.fileSize || '520 KB'})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
