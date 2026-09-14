import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { BookOpen, Users, ArrowRight, Layers, GraduationCap } from 'lucide-react';
import { Department } from '../../types';

export const DepartmentsShowcase: React.FC = () => {
  const { departments, setSelectedDepartment, setCurrentView } = useCollege();
  const [activeStream, setActiveStream] = useState<string>('All');

  const streams = ['All', 'Arts', 'Science', 'Computer Applications', 'Post Graduate'];

  const filteredDepts = activeStream === 'All'
    ? departments
    : departments.filter(d => {
        if (activeStream === 'Post Graduate') {
          return d.name.includes('(UG & PG)') || d.stream === 'Post Graduate';
        }
        return d.stream === activeStream;
      });

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            <GraduationCap className="h-4 w-4 text-blue-700" />
            Academic Departments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-cinzel">
            Multidisciplinary Programs
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Explore diverse undergraduate and postgraduate faculties structured under NEP 2020 FYUGP guidelines with rigorous practical labs and research mentoring.
          </p>

          {/* Stream Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {streams.map(stream => (
              <button
                key={stream}
                onClick={() => setActiveStream(stream)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  activeStream === stream
                    ? 'bg-blue-950 text-amber-300 shadow-sm ring-2 ring-blue-900'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {stream}
              </button>
            ))}
          </div>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map(dept => (
            <div
              key={dept.id}
              onClick={() => setSelectedDepartment(dept)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={dept.imageUrl}
                  alt={dept.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-md bg-blue-900/90 text-[10px] font-bold text-white px-2 py-0.5 backdrop-blur-xs">
                    {dept.stream}
                  </span>
                  <span className="rounded-md bg-amber-500 text-[10px] font-black text-slate-950 px-2 py-0.5">
                    {dept.code}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base font-bold font-playfair leading-tight drop-shadow-xs">
                    {dept.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {dept.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Users className="h-3.5 w-3.5 text-blue-700" />
                      HOD: {dept.hod}
                    </span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-600 font-mono">
                      {dept.intakeCapacity} Seats
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-700">
                    <span>View Syllabus & Faculty</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setCurrentView('academics')}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-950 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-blue-900 transition-colors"
          >
            <span>View All Programs & Syllabus Regulations</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
