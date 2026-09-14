import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  Phone,
  Mail,
  GraduationCap,
  Lock,
  UserCheck,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Sparkles,
  BookOpen,
  Calendar,
  Building,
  FileText,
  ShieldCheck,
  MapPin
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmission: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmission }) => {
  const { currentView, setCurrentView, userRole, student, logout, loginAsStudent, loginAsAdmin } = useCollege();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics & Depts' },
    { id: 'admissions', label: 'Admissions 2025' },
    { id: 'notices', label: 'Notices & Circulars' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-40">
      {/* 1. Top Utility Notification Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-slate-200 text-xs px-4 py-1.5 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5" />
              NAAC Accredited B+ Grade &bull; Estd: 1971
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="h-3 w-3 text-rose-400" />
              Baksa, Bodoland Territorial Region (BTR), Assam
            </span>
            <span className="hidden lg:inline-flex text-blue-200">
              Affiliated to Bodoland University &bull; AISHE: C-17362
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="tel:+913624281449"
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>+91 3624 281449</span>
            </a>
            <a
              href="mailto:principalbaramacollege@gmail.com"
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-sky-400" />
              <span>principalbaramacollege@gmail.com</span>
            </a>
            <a
              href="https://assamadmission.samarth.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded bg-amber-500/20 px-2 py-0.5 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-900 transition-colors font-medium"
            >
              <span>Samarth Assam eGov</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Collegiate Logo & Branding Header */}
      <div className="border-b border-slate-200 bg-white py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & College Crest */}
          <div
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* Seal / Crest */}
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-900 text-amber-400 shadow-md border-2 border-amber-400/80 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-8 w-8 sm:h-9 sm:w-9 text-amber-400 drop-shadow" />
              <div className="absolute -bottom-1.5 -right-1.5 rounded-full bg-amber-500 text-[9px] font-bold text-slate-950 px-1.5 py-0.2 shadow-xs border border-white">
                1971
              </div>
            </div>

            {/* Typography */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-blue-950 font-cinzel leading-none">
                  BARAMA COLLEGE
                </h1>
                <span className="hidden sm:inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-300">
                  NAAC B+
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                বৰমা মহাবিদ্যালয় &bull; बाBoxा कलेज &bull; BARAMA, BAKSA
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Premier Higher Education Institution in BTR &bull; Motto: <span className="italic text-blue-900 font-playfair font-bold">Knowledge is Power</span>
              </p>
            </div>
          </div>

          {/* Action Quick Access Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Apply online button */}
            <button
              onClick={onOpenAdmission}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-950 shadow-sm hover:from-amber-400 hover:to-amber-500 transition-all active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-slate-950 animate-pulse" />
              <span>Online Admission 2025</span>
            </button>

            {/* Student Portal Button */}
            <button
              onClick={() => {
                if (userRole === 'student') {
                  setCurrentView('student-portal');
                } else {
                  loginAsStudent();
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold shadow-xs transition-all ${
                currentView === 'student-portal'
                  ? 'bg-blue-900 text-white ring-2 ring-blue-500'
                  : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              <UserCheck className="h-4 w-4 text-blue-700" />
              <span>{userRole === 'student' ? student.name.split(' ')[0] + ' (Portal)' : 'Student Portal'}</span>
            </button>

            {/* Admin CMS Button */}
            <button
              onClick={() => {
                if (userRole === 'admin') {
                  setCurrentView('admin-cms');
                } else {
                  loginAsAdmin();
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-all ${
                currentView === 'admin-cms'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              <Lock className="h-3.5 w-3.5 text-slate-600" />
              <span>CMS Admin</span>
            </button>

            {/* Logout if authenticated */}
            {(userRole === 'student' || userRole === 'admin') && (
              <button
                onClick={logout}
                className="rounded-lg px-2.5 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200"
                title="Log out back to public website"
              >
                Log Out
              </button>
            )}

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Primary Desktop Navbar */}
      <nav className="hidden md:block bg-blue-950 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <ul className="flex items-center space-x-1 py-1 text-sm font-medium">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setCurrentView(item.id);
                  }}
                  className={`px-3.5 py-2.5 rounded-md transition-colors text-xs font-semibold tracking-wide uppercase ${
                    currentView === item.id
                      ? 'bg-blue-800 text-amber-300 font-bold border-b-2 border-amber-400'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 py-1">
            <span className="text-xs text-amber-300 font-medium">Helpline:</span>
            <span className="text-xs font-mono font-bold text-white bg-blue-900/60 px-2 py-1 rounded border border-blue-800">
              03624-281449
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-slate-900 text-white px-4 py-4 space-y-2 animate-in slide-in-from-top-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Navigation Menu
          </p>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide ${
                  currentView === item.id
                    ? 'bg-blue-800 text-amber-300'
                    : 'bg-slate-800/60 text-slate-200 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAdmission();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-slate-950"
            >
              Apply Online (Admissions 2025-26)
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  loginAsStudent();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 rounded-lg bg-blue-900 py-2 text-center text-xs font-semibold text-white border border-blue-700"
              >
                Student Portal
              </button>
              <button
                onClick={() => {
                  loginAsAdmin();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 rounded-lg bg-slate-800 py-2 text-center text-xs font-semibold text-slate-200 border border-slate-700"
              >
                CMS Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
