import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { X, BookOpen, Users, Award, Briefcase, GraduationCap } from 'lucide-react';

export const DepartmentModal: React.FC = () => {
  const { selectedDepartment, setSelectedDepartment, faculty, setCurrentView } = useCollege();

  if (!selectedDepartment) return null;

  const deptFaculty = faculty.filter(
    f => f.department.toLowerCase().includes(selectedDepartment.code.toLowerCase()) ||
         f.department.toLowerCase().includes(selectedDepartment.name.toLowerCase()) ||
         selectedDepartment.name.toLowerCase().includes(f.department.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-6 text-white">
          <button
            onClick={() => setSelectedDepartment(null)}
            className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-md bg-amber-400/20 px-2.5 py-0.5 text-xs font-semibold text-amber-300 border border-amber-400/30">
              Stream: {selectedDepartment.stream}
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs text-blue-200">
              Dept Code: {selectedDepartment.code}
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs text-blue-200">
              Estd: {selectedDepartment.established}
            </span>
          </div>
          <h2 className="text-2xl font-bold font-playfair">{selectedDepartment.name}</h2>
          <p className="text-xs text-blue-200 mt-1">
            Head of Department: <span className="font-semibold text-white">{selectedDepartment.hod}</span> &bull; Intake: {selectedDepartment.intakeCapacity} seats
          </p>
        </div>

        {/* Content */}
        <div className="max-h-[72vh] overflow-y-auto p-6 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-blue-700" />
              Department Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {selectedDepartment.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Key Papers & Curriculum */}
            <div className="rounded-xl border border-slate-200 p-4 bg-white shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-indigo-700" />
                Key Course Papers (NEP FYUGP)
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedDepartment.papers.map((paper, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-700 border border-indigo-200">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{paper}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career & Research Prospects */}
            <div className="rounded-xl border border-slate-200 p-4 bg-white shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-emerald-700" />
                Career & Academic Pathways
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedDepartment.careerProspects.map((career, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Department Faculty Members */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-blue-700" />
              Faculty Members
            </h4>
            {deptFaculty.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deptFaculty.map(member => (
                  <div key={member.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 bg-slate-50">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-full object-cover border border-slate-300 shadow-xs"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900 truncate">{member.name}</p>
                      <p className="text-xs text-blue-800 font-medium truncate">{member.designation}</p>
                      <p className="text-[11px] text-slate-500 truncate">{member.qualification}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-slate-50 p-4 text-xs text-slate-600 border border-slate-200">
                Faculty profiles are being digitally updated in the college portal. Current HOD: <span className="font-semibold text-slate-900">{selectedDepartment.hod}</span>.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
          <button
            onClick={() => setSelectedDepartment(null)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              setSelectedDepartment(null);
              setCurrentView('admissions');
            }}
            className="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 transition-colors"
          >
            Apply for {selectedDepartment.code} (Samarth Portal)
          </button>
        </div>
      </div>
    </div>
  );
};
