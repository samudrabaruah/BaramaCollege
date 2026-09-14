import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  GraduationCap,
  FileSpreadsheet,
  BookOpen,
  CalendarCheck,
  ShieldAlert,
  Award,
  CreditCard,
  Building2,
  ArrowUpRight,
} from 'lucide-react';

interface QuickServicesProps {
  onOpenAdmission: () => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onOpenAdmission }) => {
  const { setCurrentView, loginAsStudent, loginAsAdmin } = useCollege();

  const services = [
    {
      title: 'Online Admission 2025',
      desc: 'FYUGP B.A., B.Sc., B.C.A & M.A. Samarth Portal application',
      icon: GraduationCap,
      color: 'bg-amber-500 text-slate-950',
      action: () => onOpenAdmission(),
      badge: 'Active Now',
    },
    {
      title: 'Integrated Student Portal',
      desc: 'Download Admit Cards, Grade Sheets, Pay Fees & Track Attendance',
      icon: CreditCard,
      color: 'bg-blue-600 text-white',
      action: () => loginAsStudent(),
      badge: 'Direct ERP',
    },
    {
      title: 'Notice Board & Circulars',
      desc: 'Official Bodoland University notifications, exam routines & tenders',
      icon: FileSpreadsheet,
      color: 'bg-indigo-600 text-white',
      action: () => setCurrentView('notices'),
      badge: 'Updated Daily',
    },
    {
      title: 'Central Library & KOHA',
      desc: 'Browse 35,000+ books, e-journals, N-LIST catalog & reserve online',
      icon: BookOpen,
      color: 'bg-emerald-600 text-white',
      action: () => setCurrentView('campus'),
    },
    {
      title: 'Academic Calendar & Routine',
      desc: 'Semester timetable, lecture schedules & holiday lists',
      icon: CalendarCheck,
      color: 'bg-sky-600 text-white',
      action: () => setCurrentView('academics'),
    },
    {
      title: 'Govt. Scholarships Desk',
      desc: 'Pragyan Bharati fee waiver, Ishan Uday & Post-Matric ST/SC/OBC',
      icon: Award,
      color: 'bg-violet-600 text-white',
      action: () => setCurrentView('notices'),
    },
    {
      title: 'Anti-Ragging & Women Cell',
      desc: 'Zero tolerance policy, ICC helpline & student grievance redressal',
      icon: ShieldAlert,
      color: 'bg-rose-600 text-white',
      action: () => setCurrentView('about'),
    },
    {
      title: 'College CMS / Admin',
      desc: 'Manage circulars, faculty roster, event calendars & gallery media',
      icon: Building2,
      color: 'bg-slate-800 text-white',
      action: () => loginAsAdmin(),
      badge: 'Staff Access',
    },
  ];

  return (
    <section className="py-12 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Student & Academic Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-cinzel">
              Quick Access Hub
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Direct gateways for students, prospective applicants, alumni, and faculty members to access digital college utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={idx}
                onClick={svc.action}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-5 shadow-xs border border-slate-200 hover:shadow-lg hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-xs ${svc.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {svc.badge && (
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 border border-slate-200">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-blue-700">
                  <span>Open Portal</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
