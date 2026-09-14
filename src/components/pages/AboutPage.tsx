import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Target,
  Clock,
  GraduationCap,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { faculty } = useCollege();

  const governingBody = [
    { role: 'President, Governing Body', name: 'Sri Baneshwar Brahma', affiliation: 'Eminent Educationist & Social Worker' },
    { role: 'Secretary & Principal', name: 'Dr. Tapan Dutta', affiliation: 'Principal, Barama College' },
    { role: 'University Nominee', name: 'Prof. R.C. Basumatary', affiliation: 'Bodoland University' },
    { role: 'University Nominee', name: 'Dr. P.K. Das', affiliation: 'Bodoland University' },
    { role: 'Guardian Representative', name: 'Sri Ramen Deka', affiliation: 'Barama Local Community' },
    { role: 'Teacher Representative', name: 'Dr. Binoy Kumar Brahma', affiliation: 'Associate Professor, Dept. of Bodo' },
    { role: 'Teacher Representative', name: 'Mrs. Jayashree Das', affiliation: 'Associate Professor, Dept. of Assamese' },
    { role: 'Non-Teaching Staff Rep.', name: 'Sri Hitesh Sarma', affiliation: 'Senior Assistant' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      {/* Title banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <ShieldCheck className="h-3.5 w-3.5" />
              ESTABLISHED 16TH AUGUST 1971
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              About Barama College
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fifty-four glorious years of spreading the light of higher education in the Bodoland Territorial Region (BTR) of Assam.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* College History & Genesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 rounded-2xl bg-white p-8 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold font-cinzel text-slate-900 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-900" />
              Genesis & Historical Heritage
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Barama College was established on <strong>16th August 1971</strong> through the heroic sacrifices and missionary zeal of the visionary public, educators, and social reformers of Barama and its adjacent rural areas in the present Baksa District (BTR), Assam. Situated in a scenic rural setting, the college came into existence to fulfill the long-cherished dream of providing higher education to the socio-economically marginalized youth of this multi-ethnic region.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Over the decades, from its humble beginnings with Arts stream subjects in thatch-roofed classrooms, Barama College has blossomed into a premier multidisciplinary institution offering undergraduate programs in <strong>Arts (B.A.), Science (B.Sc.), Computer Applications (B.C.A.)</strong>, as well as regular <strong>Postgraduate courses (M.A. in Bodo, M.A./M.Sc. in Geography)</strong> affiliated with <strong>Bodoland University</strong>. The college was provincialized by the Government of Assam in 2005.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-2xl font-black text-blue-950 font-cinzel">1971</p>
                <p className="text-xs text-slate-500 font-medium">Foundation Year</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-2xl font-black text-emerald-700 font-cinzel">B+ Grade</p>
                <p className="text-xs text-slate-500 font-medium">NAAC Accredited</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-2xl font-black text-amber-700 font-cinzel">2(f) & 12(B)</p>
                <p className="text-xs text-slate-500 font-medium">UGC Recognized</p>
              </div>
            </div>
          </div>

          {/* Quick Institutional Profile card */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold font-cinzel text-slate-900 border-b border-slate-200 pb-3">
              Institutional Facts
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block">Affiliation:</span>
                <span className="font-bold text-slate-800">Bodoland University (Kokrajhar)</span>
              </div>
              <div>
                <span className="text-slate-400 block">AISHE Code:</span>
                <span className="font-mono font-bold text-blue-900">C-17362</span>
              </div>
              <div>
                <span className="text-slate-400 block">Campus Area:</span>
                <span className="font-bold text-slate-800">32+ Bighas (Lush Green Campus)</span>
              </div>
              <div>
                <span className="text-slate-400 block">Location:</span>
                <span className="font-bold text-slate-800">Barama, P.O. Barama, Dist. Baksa (BTR), Assam - 781346</span>
              </div>
              <div>
                <span className="text-slate-400 block">Distance from Guwahati:</span>
                <span className="font-bold text-slate-800">Approx. 75 km via NH-27 (East-West Corridor)</span>
              </div>
              <div>
                <span className="text-slate-400 block">Nearest Railway Station:</span>
                <span className="font-bold text-slate-800">Tihu (12 km) / Rangiya Junction (35 km)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To be recognized as a premier center of transformative learning, academic discovery, and inclusive social upliftment, producing enlightened citizens committed to democratic values and intellectual rigor.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To provide affordable quality higher education across humanities, sciences, and computational technology; nurture indigenous languages; and foster ethical awareness, gender justice, and environmental harmony.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-cinzel text-slate-900">Core Values</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Academic integrity, cultural pluralism, community service through NSS & NCC, environmental sustainability, and holistic student-centric development under NEP 2020.
            </p>
          </div>
        </div>

        {/* Governing Body Table */}
        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-lg font-bold font-cinzel text-slate-900">
                Governing Body of Barama College
              </h3>
              <p className="text-xs text-slate-500">
                Constituted under Assam College Employees (Provincialisation) Rules & Bodoland University Statutes
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Designation / Role</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Portfolio / Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {governingBody.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-mono">{idx + 1}</td>
                    <td className="p-3 font-bold text-slate-900">{m.role}</td>
                    <td className="p-3 font-medium text-blue-900 text-sm">{m.name}</td>
                    <td className="p-3 text-slate-600">{m.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
