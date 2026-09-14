import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { CheckCircle2, Award, BookOpen, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { setCurrentView } = useCollege();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Principal's Desk Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl border border-blue-900/60 overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Principal Dr. Tapan Dutta"
                  referrerPolicy="no-referrer"
                  className="h-20 w-20 rounded-2xl object-cover border-2 border-amber-400/80 shadow-md"
                />
                <div>
                  <span className="inline-block rounded-md bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wider mb-1">
                    From the Principal's Desk
                  </span>
                  <h3 className="text-lg font-bold font-playfair text-white">
                    Dr. Tapan Dutta
                  </h3>
                  <p className="text-xs text-blue-200">
                    Principal & Secretary, Barama College
                  </p>
                  <p className="text-[11px] text-slate-400">
                    M.Sc., Ph.D., Post-Doctoral Fellow
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
                "Barama College stands as a beacon of enlightened learning in the Bodoland Territorial Region. Since 1971, our mission has been to provide accessible, value-grounded higher education to students from all communities. Under NEP 2020, we empower our students not merely to seek jobs, but to lead social transformation, cultivate critical intellect, and cherish our indigenous cultural heritage."
              </blockquote>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <p className="font-bold text-amber-300 font-cinzel">BARAMA COLLEGE</p>
                  <p className="text-[10px] text-slate-400">P.O. Barama, Dist. Baksa (BTR)</p>
                </div>
                <div className="text-right">
                  <span className="font-playfair italic text-amber-200 text-sm">Tapan Dutta</span>
                  <p className="text-[10px] text-slate-400">Signature</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: College Overview, Vision & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-700" />
                Historic Legacy Since 1971
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-cinzel leading-tight">
                Empowering Bodoland Through Quality Higher Education
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Established on 16th August 1971 by visionary leaders and social reformers of Barama, the college is a premier multi-faculty institution affiliated with Bodoland University and recognized under 2(f) and 12(B) of the UGC Act.
              </p>
            </div>

            {/* Vision & Mission Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold text-sm">
                  <BookOpen className="h-4 w-4 text-blue-700" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To evolve as an intellectual hub of academic eminence, cultural synthesis, and ethical character building in the foothills of lower Assam.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold text-sm">
                  <Award className="h-4 w-4 text-emerald-700" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide holistic undergraduate and postgraduate education, promote scientific temper, preserve indigenous Bodo and Assamese heritage, and impart modern vocational skills.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>NAAC Re-accredited with 'B+' Institutional Grade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Affiliated to Bodoland University (Kokrajhar)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Study Centre for GU IDOL & KKHSOU Distance Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Active NCC Army Wing, NSS Units & Eco-Club</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-blue-700 group"
              >
                <span>Read more about College History, Governing Body & IQAC</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
