import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  BookOpen,
  FlaskConical,
  Trophy,
  Shield,
  Home,
  Trees,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const CampusLifeSection: React.FC = () => {
  const { setCurrentView } = useCollege();

  const facilities = [
    {
      title: 'KOHA Automated Central Library',
      desc: 'Over 35,000 books, rare regional manuscripts, INFLIBNET N-LIST e-journal subscriptions, and quiet reading halls.',
      icon: BookOpen,
      tag: 'Academic Core',
      stats: '35,000+ Books',
      imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Advanced Science & Computing Labs',
      desc: 'Modern instrumentation including digital spectrophotometers, optical benches, herbarium, zoological museum, and high-speed BCA labs.',
      icon: FlaskConical,
      tag: 'Practical Learning',
      stats: '6 Dedicated Labs',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sports Complex & Athletic Grounds',
      desc: 'Full-size football ground, cricket pitch, volleyball court, badminton arena, and collegiate fitness gymnasium.',
      icon: Trophy,
      tag: 'Fitness & Athletics',
      stats: 'Zonal Champions',
      imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'NCC Army Wing & NSS Unit',
      desc: 'Active 7 Assam Bn NCC troop training cadets for ' + 'B' + ' and ' + 'C' + ' certificates, alongside NSS community social work and disaster camps.',
      icon: Shield,
      tag: 'National Service',
      stats: '200+ Cadets',
      imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Campus Hostels for Girls & Boys',
      desc: 'Safe, affordable residential hostel accommodations with purified drinking water, mess dining halls, and resident warden supervision.',
      icon: Home,
      tag: 'Residential Life',
      stats: '150+ Capacity',
      imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Eco-Park & Medicinal Botanical Garden',
      desc: 'Green campus initiative preserving indigenous flora of BTR, medicinal plant taxonomy, and rainwater harvesting units.',
      icon: Trees,
      tag: 'Eco-Campus',
      stats: '120+ Plant Species',
      imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Campus Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-cinzel">
            World-Class Campus Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Providing state-of-the-art academic amenities, sports infrastructure, and residential support for comprehensive student growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const IconComp = fac.icon;
            return (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-blue-900/90 text-white text-[10px] font-bold px-2 py-0.5 backdrop-blur-xs">
                      {fac.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-md bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5">
                      {fac.stats}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {fac.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-playfair text-amber-300">
              Need hostel accommodation or library membership?
            </h3>
            <p className="text-xs text-slate-300">
              Students can apply for hostel seat allotment and digital OPAC library card through the Student ERP portal.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('campus')}
            className="shrink-0 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-sm"
          >
            Explore Campus Life Details
          </button>
        </div>
      </div>
    </section>
  );
};
