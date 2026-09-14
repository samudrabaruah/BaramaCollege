import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Layers,
  CheckCircle2,
  Download,
  Users,
  Award,
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const { departments, setSelectedDepartment } = useCollege();

  const academicCalendar = [
    { month: 'June - July', event: 'Admission into FYUGP 1st Sem & Semester Classes Commencement' },
    { month: 'August', event: 'Orientation Program, College Foundation Day (16th Aug) & Freshers Social' },
    { month: 'September', event: '1st Sessional Examination & Student Union (BCSU) Elections' },
    { month: 'October - Nov', event: 'Durga Puja / Autumn Break, 2nd Sessional Exam & Internal Assessment' },
    { month: 'December', event: 'Bodoland University Odd-Semester End-Semester Examinations (1st, 3rd, 5th)' },
    { month: 'January', event: 'Even Semester Classes Commence & Annual College Sports and Cultural Week' },
    { month: 'February - March', event: 'Field Study Tours, Seminars & 1st Sessional Even Semester Exams' },
    { month: 'May - June', event: 'Bodoland University Even-Semester End-Semester Examinations (2nd, 4th, 6th)' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      {/* Title banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <GraduationCap className="h-3.5 w-3.5" />
              NEP 2020 MULTIDISCIPLINARY FRAMEWORK
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Academics & Curricula
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Curricula designed under Bodoland University NEP FYUGP guidelines, offering choice-based majors, minors, research dissertations, and vocational skill certifications.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* NEP 2020 Degree Architecture */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold font-cinzel text-slate-900 flex items-center gap-2">
            <Layers className="h-6 w-6 text-blue-900" />
            Four-Year Undergraduate Program (FYUGP) NEP Structure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Students enrolled in Barama College can pursue flexible multi-entry and multi-exit credit pathways under Bodoland University:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="rounded bg-blue-100 text-blue-900 px-2 py-0.5 text-[10px] font-bold">
                Exit Option 1 (1 Year)
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Undergraduate Certificate</h4>
              <p className="text-xs text-slate-600">Completion of Semesters 1 & 2 (Minimum 44 Credits + 4 Credit Internship/Vocational course).</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="rounded bg-indigo-100 text-indigo-900 px-2 py-0.5 text-[10px] font-bold">
                Exit Option 2 (2 Years)
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Undergraduate Diploma</h4>
              <p className="text-xs text-slate-600">Completion of Semesters 1 to 4 (Minimum 88 Credits + 4 Credit Internship in Major Discipline).</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="rounded bg-emerald-100 text-emerald-900 px-2 py-0.5 text-[10px] font-bold">
                Exit Option 3 (3 Years)
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Bachelor's Degree</h4>
              <p className="text-xs text-slate-600">Completion of Semesters 1 to 6 (Minimum 132 Credits) in Arts (B.A.), Science (B.Sc.), or BCA.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="rounded bg-amber-100 text-amber-900 px-2 py-0.5 text-[10px] font-bold">
                Full Degree (4 Years)
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Bachelor's Degree (Honours / Research)</h4>
              <p className="text-xs text-slate-600">Completion of Semesters 1 to 8 (Minimum 176 Credits) with dedicated Research Dissertation.</p>
            </div>
          </div>
        </div>

        {/* Departments Directory */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold font-cinzel text-slate-900">
                Academic Departments & Course Papers
              </h2>
              <p className="text-xs text-slate-500">
                Click on any department to view paper details, faculty list, intake capacity, and career avenues.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(dept => (
              <div
                key={dept.id}
                onClick={() => setSelectedDepartment(dept)}
                className="group cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                      Stream: {dept.stream}
                    </span>
                    <span className="rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold px-2 py-0.5">
                      {dept.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-playfair">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>HOD: <strong className="text-slate-800">{dept.hod}</strong></span>
                  <span className="font-bold text-blue-900 group-hover:underline">View Syllabus &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl font-bold font-cinzel text-slate-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-900" />
                Institutional Academic Calendar (Session 2025-26)
              </h2>
              <p className="text-xs text-slate-500">
                Approved by the Academic Council & Bodoland University Controller of Examinations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {academicCalendar.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="shrink-0 font-mono font-bold text-blue-900 bg-white px-2 py-1 rounded border border-slate-200">
                  {item.month}
                </span>
                <span className="pt-0.5 text-slate-700 leading-snug">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
