import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Lock,
  User,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, loginAsAdmin, loginAsStudent } = useCollege();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-amber-500 text-xs">
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: College Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-black shadow-md">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  BARAMA COLLEGE
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-amber-400">
                  Estd. 1971 &bull; NAAC B+
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              A premier provincialized multidisciplinary institution of higher education under Bodoland University, nurturing students of BTR, Assam with academic excellence, ethical grounding, and cultural vitality.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Barama, Baksa (BTR), Assam - 781346</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>+91 3624 281249 / +91 94350 18412</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>principal@baramacollegebarama.edu.in</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation & Academics
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Genesis, History & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('academics')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Academic Departments & Curricula
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('admissions')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Admissions & Samarth Enrolment
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('notices')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Official Notices & Circulars
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('campus')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Campus Facilities & Hostels
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('gallery')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Photo & Events Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  &rarr; Contact & Travel Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Cells & Mandatory Disclosures */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Mandatory Cells & Disclosures
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#iqac" onClick={e => { e.preventDefault(); setCurrentView('about'); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Internal Quality Assurance Cell (IQAC)</span>
                </a>
              </li>
              <li>
                <a href="#antiragging" onClick={e => { e.preventDefault(); alert('Barama College operates a zero-tolerance Anti-Ragging policy. National Anti-Ragging Helpline: 1800-180-5522.'); }} className="hover:text-amber-300 transition-colors">
                  &bull; Anti-Ragging Committee & Squad
                </a>
              </li>
              <li>
                <a href="#icc" onClick={e => { e.preventDefault(); alert('Internal Complaints Committee (ICC) for prevention of sexual harassment at workplace is constituted under statutory guidelines.'); }} className="hover:text-amber-300 transition-colors">
                  &bull; Internal Complaints Committee (ICC)
                </a>
              </li>
              <li>
                <a href="#rti" onClick={e => { e.preventDefault(); alert('RTI Public Information Officer: Vice Principal, Barama College.'); }} className="hover:text-amber-300 transition-colors">
                  &bull; Right to Information (RTI Act 2005)
                </a>
              </li>
              <li>
                <a href="#scst" onClick={e => { e.preventDefault(); setCurrentView('about'); }} className="hover:text-amber-300 transition-colors">
                  &bull; SC / ST / OBC / Minority Cell
                </a>
              </li>
              <li>
                <a href="#grievance" onClick={e => { e.preventDefault(); setCurrentView('portal'); }} className="hover:text-amber-300 transition-colors">
                  &bull; Online Grievance Redressal Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: External Portals & Portal Logins */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Portals & University Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://bodolanduniversity.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Bodoland University Portal</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://assamadmission.samarth.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Assam Samarth Admission Portal</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://dheassam.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Directorate of Higher Education (DHE)</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setCurrentView('portal');
                  loginAsStudent();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-900/60 hover:bg-blue-900 border border-blue-700/50 py-2 text-xs font-bold text-white transition-colors"
              >
                <User className="h-3.5 w-3.5 text-amber-400" />
                <span>Student ERP Portal</span>
              </button>

              <button
                onClick={() => {
                  setCurrentView('admin');
                  loginAsAdmin();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                <Lock className="h-3.5 w-3.5 text-amber-400" />
                <span>College CMS Admin Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-slate-900/90 border-t border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} Barama College, Barama (Baksa, BTR, Assam). All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Affiliated to Bodoland University &bull; Approved by UGC &bull; NAAC Re-Accredited</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
