import React from 'react';
import {
  BookOpen,
  FlaskConical,
  Trophy,
  Shield,
  Home,
  Trees,
  Utensils,
  Wifi,
  HeartPulse,
} from 'lucide-react';

export const CampusPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <Trees className="h-3.5 w-3.5" />
              CAMPUS INFRASTRUCTURE & AMENITIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Campus Life & Facilities
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Sprawled over 32+ bighas of verdant greenery in Barama, Baksa (BTR), offering modern libraries, labs, hostels, and sports grounds.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Detail blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Library */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
              alt="Central Library"
              referrerPolicy="no-referrer"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-900" />
                <h3 className="text-xl font-bold font-cinzel text-slate-900">
                  Central Library & Digital Reading Room
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Barama College Library is fully automated using KOHA open-source ILMS software. It houses more than 35,000 text and reference volumes, including a dedicated Bodo and Assamese language literature corner, rare manuscripts, and research journals. It provides INFLIBNET N-LIST e-consortium access giving students free access to 6,000+ e-journals and 1,99,500+ e-books.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-slate-700">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">KOHA Web OPAC</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">N-LIST INFLIBNET</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Reprography Facility</span>
              </div>
            </div>
          </div>

          {/* Science Labs */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
              alt="Science Laboratories"
              referrerPolicy="no-referrer"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-emerald-700" />
                <h3 className="text-xl font-bold font-cinzel text-slate-900">
                  Science & Computing Laboratories
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Well-equipped practical laboratories for Physics, Chemistry, Botany, Zoology, and Computer Applications (BCA). The Botany department maintains an active herbarium and botanical garden, Zoology houses a specimen museum, and the BCA lab features 40 networked high-speed workstations with gigabit fiber internet connectivity.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-slate-700">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">BCA Networked Lab</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Microscopy & Specimen Labs</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Spectrophotometers</span>
              </div>
            </div>
          </div>

          {/* Hostels */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
              alt="Campus Hostels"
              referrerPolicy="no-referrer"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-amber-700" />
                <h3 className="text-xl font-bold font-cinzel text-slate-900">
                  Residential Hostels (Boys & Girls)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Separate on-campus residential hostel facilities with resident warden supervision and CCTV surveillance. Providing clean dining mess facilities, hygienic RO water filtration, daily newspapers, recreational common rooms, and uninterrupted power backup.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-slate-700">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Girls' Hostel (80 Seats)</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Boys' Hostel (60 Seats)</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Mess & RO Water</span>
              </div>
            </div>
          </div>

          {/* Sports & Gymnasium */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
              alt="Sports Infrastructure"
              referrerPolicy="no-referrer"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-indigo-700" />
                <h3 className="text-xl font-bold font-cinzel text-slate-900">
                  Sports Complex & Gymnasium
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extensive playground for football and cricket, alongside dedicated courts for volleyball, kabaddi, badminton, and archery. A modern fitness gymnasium equipped with resistance machines and weights fosters physical well-being. Barama College athletes regularly represent Bodoland University at all-India inter-university meets.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-slate-700">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Athletic Playground</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Student Fitness Gym</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Inter-College Champions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
