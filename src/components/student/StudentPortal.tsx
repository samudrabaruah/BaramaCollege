import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  User,
  GraduationCap,
  FileText,
  CreditCard,
  Award,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  QrCode,
  Download,
  Printer,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Send,
  Building,
  ArrowRight,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { ReceiptModal } from '../modals/ReceiptModal';
import { FeeRecord } from '../../types';

export const StudentPortal: React.FC = () => {
  const {
    student,
    userRole,
    loginAsStudent,
    logout,
    payFee,
    submitGrievance,
    grievances,
    libraryBooks,
    reserveBook,
  } = useCollege();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'admit' | 'fees' | 'grades' | 'attendance' | 'library' | 'grievance'
  >('overview');

  // Login form state (if not logged in)
  const [loginRoll, setLoginRoll] = useState('BC/2023/UG/0142');
  const [loginPass, setLoginPass] = useState('student123');

  // Fee modal state
  const [payingFee, setPayingFee] = useState<FeeRecord | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('UPI / QR Code');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [viewingReceipt, setViewingReceipt] = useState<FeeRecord | null>(null);

  // Grievance form state
  const [grvSubject, setGrvSubject] = useState('');
  const [grvCategory, setGrvCategory] = useState<
    'Admissions' | 'Examinations' | 'Fees & Accounts' | 'Library' | 'Hostel' | 'Other'
  >('Examinations');
  const [grvMessage, setGrvMessage] = useState('');
  const [grvSuccess, setGrvSuccess] = useState(false);

  // Library search state
  const [libraryQuery, setLibraryQuery] = useState('');

  // If user is not student
  if (userRole !== 'student') {
    return (
      <div className="py-16 px-4 sm:px-6 bg-slate-100 min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
          <div className="text-center mb-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-amber-400 shadow-md">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-4 font-cinzel">Student ERP Portal</h2>
            <p className="text-xs text-slate-500 mt-1">
              Barama College &bull; Bodoland University Samarth Portal
            </p>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              loginAsStudent(loginRoll);
            }}
            className="space-y-4 text-sm"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                College Roll No / Enrolment ID
              </label>
              <input
                type="text"
                value={loginRoll}
                onChange={e => setLoginRoll(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Password / DOB (DDMMYYYY)
              </label>
              <input
                type="password"
                value={loginPass}
                onChange={e => setLoginPass(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-900 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-800 transition-colors"
            >
              Sign In to Student Dashboard
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 mb-3">Quick Demo Testing Access:</p>
            <button
              type="button"
              onClick={() => loginAsStudent()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-50 border border-amber-300 py-2.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors"
            >
              <span>1-Click Demo Login as Priyanjali Brahma (4th Sem)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate student statistics
  const totalClasses = student.attendance.reduce((sum, item) => sum + item.total, 0);
  const attendedClasses = student.attendance.reduce((sum, item) => sum + item.attended, 0);
  const overallAttendancePercent = totalClasses > 0 ? ((attendedClasses / totalClasses) * 100).toFixed(1) : '0';
  const pendingFees = student.fees.filter(f => f.status === 'Pending');
  const latestResult = student.results[student.results.length - 1];

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!payingFee) return;
    setIsProcessingPayment(true);
    setTimeout(() => {
      payFee(payingFee.id, paymentMethod);
      setIsProcessingPayment(false);
      const updatedFee = { ...payingFee, status: 'Paid' as const, paidDate: new Date().toISOString().slice(0, 10) };
      setPayingFee(null);
      setViewingReceipt(updatedFee);
    }, 1200);
  };

  const handleGrievanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!grvSubject || !grvMessage) return;
    submitGrievance(grvSubject, grvCategory, grvMessage);
    setGrvSubject('');
    setGrvMessage('');
    setGrvSuccess(true);
    setTimeout(() => setGrvSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* 1. Student Identity Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white border-b border-blue-900 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={student.photoUrl}
              alt={student.name}
              referrerPolicy="no-referrer"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-playfair">{student.name}</h1>
                <span className="rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Enrolled Regular
                </span>
              </div>
              <p className="text-xs text-blue-200 mt-0.5">
                Roll No: <span className="font-mono font-bold text-white">{student.rollNo}</span> &bull; Reg: <span className="font-mono text-slate-300">{student.registrationNo}</span>
              </p>
              <p className="text-xs text-slate-300 mt-1">
                {student.program} &bull; <span className="text-amber-300 font-semibold">{student.majorSubject}</span> ({student.semester})
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('admit')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-xs"
            >
              <FileText className="h-4 w-4" />
              <span>Download Admit Card</span>
            </button>
            <button
              onClick={() => logout()}
              className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors"
            >
              Exit Portal
            </button>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto no-scrollbar space-x-1 py-1">
          {[
            { id: 'overview', label: 'Dashboard & ID Card', icon: User },
            { id: 'admit', label: 'Admit Card', icon: FileText },
            { id: 'fees', label: `Fees & Ledger ${pendingFees.length > 0 ? `(${pendingFees.length})` : ''}`, icon: CreditCard },
            { id: 'grades', label: 'Results & Grades', icon: Award },
            { id: 'attendance', label: `Attendance (${overallAttendancePercent}%)`, icon: CalendarCheck },
            { id: 'library', label: 'Central Library', icon: BookOpen },
            { id: 'grievance', label: 'Grievance Desk', icon: MessageSquare },
          ].map(tab => {
            const IconC = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold tracking-wide rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <IconC className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Dashboard Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* TAB 1: OVERVIEW & DIGITAL ID CARD */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Overall Attendance</span>
                  <CalendarCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <p className="text-2xl font-black text-slate-900">{overallAttendancePercent}%</p>
                <span className="inline-block mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Eligible for Exams (&ge; 75%)
                </span>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Cumulative CGPA</span>
                  <Award className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-2xl font-black text-slate-900">{latestResult?.cgpa || '8.62'}</p>
                <span className="inline-block mt-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  First Class with Distinction
                </span>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Pending Dues</span>
                  <CreditCard className="h-4 w-4 text-amber-600" />
                </div>
                <p className="text-2xl font-black text-slate-900">
                  {pendingFees.length > 0 ? `₹${pendingFees.reduce((a, b) => a + b.amount, 0)}` : 'Nil'}
                </p>
                {pendingFees.length > 0 ? (
                  <button
                    onClick={() => setActiveTab('fees')}
                    className="inline-block mt-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded hover:underline"
                  >
                    Pay Pending Fee &rarr;
                  </button>
                ) : (
                  <span className="inline-block mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    All Dues Cleared
                  </span>
                )}
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Library Books Issued</span>
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-2xl font-black text-slate-900">{student.issuedBooks.length}</p>
                <span className="inline-block mt-1 text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Max Limit: 4 Books
                </span>
              </div>
            </div>

            {/* Profile Grid & Printable College ID Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Official Digital ID Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-blue-800" />
                      Digital College ID Card
                    </h3>
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Printer className="h-3.5 w-3.5" />
                      Print Card
                    </button>
                  </div>

                  {/* The Physical Card Template */}
                  <div className="rounded-2xl overflow-hidden border-2 border-blue-900 shadow-lg bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 text-white">
                    <div className="p-4 border-b border-white/10 text-center">
                      <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                        BTR &bull; Bodoland University
                      </p>
                      <h4 className="text-lg font-black font-cinzel text-white">BARAMA COLLEGE</h4>
                      <p className="text-[10px] text-blue-200">Barama, Baksa (Assam) - 781346 &bull; NAAC B+</p>
                    </div>

                    <div className="p-5 flex flex-col items-center text-center">
                      <img
                        src={student.photoUrl}
                        alt={student.name}
                        referrerPolicy="no-referrer"
                        className="h-24 w-24 rounded-xl object-cover border-2 border-amber-400 shadow-md mb-3"
                      />
                      <h5 className="text-base font-bold font-playfair uppercase text-amber-300">
                        {student.name}
                      </h5>
                      <p className="text-xs font-semibold text-slate-200">{student.program}</p>
                      <p className="text-xs text-blue-300 font-mono mt-0.5">
                        Roll: <span className="font-bold text-white">{student.rollNo}</span>
                      </p>

                      <div className="mt-4 w-full grid grid-cols-2 gap-2 text-left bg-white/5 rounded-xl p-3 border border-white/10 text-[11px]">
                        <div>
                          <span className="text-slate-400">Reg No:</span>
                          <p className="font-mono font-medium">{student.registrationNo}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Major Subject:</span>
                          <p className="font-medium text-amber-200">{student.majorSubject}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Blood Group:</span>
                          <p className="font-medium">{student.bloodGroup}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Valid Session:</span>
                          <p className="font-medium text-emerald-300">2023 - 2027</p>
                        </div>
                      </div>

                      {/* Barcode & Signature */}
                      <div className="mt-4 w-full flex items-center justify-between border-t border-white/10 pt-3">
                        <div className="flex items-center gap-1.5">
                          <QrCode className="h-8 w-8 text-amber-400" />
                          <span className="text-[9px] text-slate-400 font-mono">Scan for verification</span>
                        </div>
                        <div className="text-right">
                          <span className="font-playfair italic text-xs text-amber-200">Tapan Dutta</span>
                          <p className="text-[9px] text-slate-400 uppercase tracking-wider">Principal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Academic Particulars */}
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-blue-800" />
                    Enrolled Course Particulars (FYUGP NEP 2020)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Degree Program:</span>
                      <p className="font-bold text-slate-900 text-sm mt-0.5">{student.program}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Current Semester:</span>
                      <p className="font-bold text-slate-900 text-sm mt-0.5">{student.semester} ({student.academicYear})</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Major Subject (Core):</span>
                      <p className="font-bold text-blue-900 text-sm mt-0.5">{student.majorSubject}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Minor Subjects:</span>
                      <p className="font-bold text-slate-900 text-sm mt-0.5">{student.minorSubject}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Guardian Name:</span>
                      <p className="font-semibold text-slate-900 mt-0.5">{student.guardianName}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Mobile & Email:</span>
                      <p className="font-semibold text-slate-900 mt-0.5">{student.phone}</p>
                      <p className="text-[11px] text-slate-500 truncate">{student.email}</p>
                    </div>
                    <div className="sm:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-500">Permanent Address:</span>
                      <p className="font-semibold text-slate-900 mt-0.5">{student.address}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Notice for Student */}
                <div className="rounded-2xl bg-amber-50 p-5 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-amber-900">
                        Exam Form Fill-Up & Fee Clearance
                      </h4>
                      <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                        Bodoland University FYUGP 4th Semester examination forms are open. Please ensure pending examination dues are cleared to prevent hall ticket withholding.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => setActiveTab('fees')}
                          className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-700 transition-colors"
                        >
                          Clear Exam Fee (₹1,450)
                        </button>
                        <button
                          onClick={() => setActiveTab('admit')}
                          className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 border border-amber-300 hover:bg-amber-100 transition-colors"
                        >
                          View Admit Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADMIT CARD GENERATOR */}
        {activeTab === 'admit' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-cinzel">
                  Official End-Semester Admit Card
                </h3>
                <p className="text-xs text-slate-500">
                  Bodoland University &bull; Barama College Examination Centre (Code: 042)
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-900 px-4 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
              >
                <Printer className="h-4 w-4" />
                Print / Download Admit Card (PDF)
              </button>
            </div>

            {/* Printable Admit Card Document Sheet */}
            <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-10 shadow-lg text-slate-900 space-y-6">
              {/* Document Header */}
              <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  BODOLAND UNIVERSITY &bull; DEBARGAON, KOKRAJHAR
                </p>
                <h2 className="text-2xl font-black font-cinzel text-slate-950">
                  ADMIT CARD
                </h2>
                <p className="text-sm font-bold text-blue-900">
                  {student.admitCard.examName}
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  Examination Session: {student.admitCard.session}
                </p>
              </div>

              {/* Candidate Info Grid */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs w-full">
                  <div>
                    <span className="text-slate-500">Candidate Name:</span>
                    <p className="font-bold text-sm text-slate-900 uppercase font-playfair">{student.admitCard.candidateName}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Roll Number:</span>
                    <p className="font-bold font-mono text-sm text-blue-900">{student.admitCard.rollNo}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Registration Number:</span>
                    <p className="font-bold font-mono text-slate-900">{student.admitCard.regNo}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Examination Centre:</span>
                    <p className="font-semibold text-slate-800">{student.admitCard.centre}</p>
                  </div>
                </div>

                <div className="shrink-0 text-center">
                  <img
                    src={student.photoUrl}
                    alt={student.name}
                    referrerPolicy="no-referrer"
                    className="h-24 w-20 rounded-lg object-cover border-2 border-slate-400 shadow-xs"
                  />
                  <span className="text-[10px] text-slate-500 block mt-1">Verified Photo</span>
                </div>
              </div>

              {/* Schedule Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Paper Timetable & Subject Schedule:
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">Time</th>
                        <th className="p-3">Paper Code</th>
                        <th className="p-3">Paper Title</th>
                        <th className="p-3 text-center">Invigilator Sign</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {student.admitCard.schedule.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-900">{item.date}</td>
                          <td className="p-3 text-slate-600">{item.time}</td>
                          <td className="p-3 font-mono font-bold text-blue-900">{item.paperCode}</td>
                          <td className="p-3 font-medium">{item.paperTitle}</td>
                          <td className="p-3 text-center border-l border-slate-200 font-mono text-slate-300">
                            [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rules & Signatures */}
              <div className="pt-4 border-t border-slate-200 space-y-4 text-[11px] text-slate-600">
                <p className="font-bold text-slate-800">Important Candidate Guidelines:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Candidates must bring this original Admit Card and College Identity Card to every examination session.</li>
                  <li>Entry into the examination hall is prohibited after 15 minutes of paper commencement.</li>
                  <li>Mobile phones, programmable calculators, and smart watches are strictly prohibited inside the hall.</li>
                </ol>

                <div className="pt-8 flex items-center justify-between">
                  <div className="text-center">
                    <p className="font-playfair italic font-bold text-slate-800 text-sm">Priyanjali Brahma</p>
                    <p className="text-[10px] text-slate-500 border-t border-slate-300 pt-1">Candidate's Signature</p>
                  </div>
                  <div className="text-center">
                    <p className="font-playfair italic font-bold text-blue-950 text-sm">Prof. B.R. Daimary</p>
                    <p className="text-[10px] text-slate-500 border-t border-slate-300 pt-1">Controller of Examinations, BU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FEES & ONLINE PAYMENT */}
        {activeTab === 'fees' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Student Fee Ledger & E-Receipts</h3>
                <p className="text-xs text-slate-500">
                  Track tuition fees, examination clearances, and download stamped digital vouchers.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-700 border border-emerald-200">
                  Online Gateway Active (SBI e-Pay)
                </span>
              </div>
            </div>

            {/* Fee Items Table */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-4">Fee Description</th>
                      <th className="p-4">Due Date</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Receipt / Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {student.fees.map(fee => (
                      <tr key={fee.id} className="hover:bg-slate-50/80">
                        <td className="p-4">
                          <p className="font-bold text-slate-900 text-sm">{fee.title}</p>
                          {fee.receiptNo && (
                            <p className="text-[11px] text-slate-400 font-mono">Receipt: {fee.receiptNo}</p>
                          )}
                        </td>
                        <td className="p-4 font-mono text-slate-600">{fee.dueDate}</td>
                        <td className="p-4 font-mono font-bold text-slate-900 text-sm">₹{fee.amount.toLocaleString()}</td>
                        <td className="p-4">
                          {fee.status === 'Paid' ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Paid ({fee.paidDate})
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                              <Clock className="h-3.5 w-3.5" />
                              Pending Payment
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          {fee.status === 'Paid' ? (
                            <button
                              onClick={() => setViewingReceipt(fee)}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 hover:bg-slate-50 transition-colors"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              <span>View Receipt</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setPayingFee(fee)}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-xs"
                            >
                              <CreditCard className="h-3.5 w-3.5" />
                              <span>Pay Now (₹{fee.amount})</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RESULTS & GRADES */}
        {activeTab === 'grades' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-cinzel">
                  Academic Grade Card & Results
                </h3>
                <p className="text-xs text-slate-500">
                  Bodoland University FYUGP 4-Year Undergraduate Program (CBCS / NEP)
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 px-4 py-2 border border-blue-200 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-500">Cumulative CGPA</span>
                <p className="text-xl font-black text-blue-950">{latestResult?.cgpa || '8.62'}</p>
              </div>
            </div>

            {/* Loop through each semester result */}
            <div className="space-y-6">
              {student.results.map((sem, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden">
                  <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold font-cinzel text-amber-300">
                        {sem.semester} &bull; {sem.session}
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        Status: <span className="font-semibold text-emerald-400">{sem.result}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="text-slate-400">SGPA:</span>{' '}
                        <span className="font-bold text-white text-sm">{sem.sgpa}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">CGPA:</span>{' '}
                        <span className="font-bold text-amber-300 text-sm">{sem.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Paper Code</th>
                          <th className="p-3">Subject / Course Title</th>
                          <th className="p-3 text-center">Credits</th>
                          <th className="p-3 text-center">Grade</th>
                          <th className="p-3 text-center">Grade Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {sem.subjects.map((sub, sIdx) => (
                          <tr key={sIdx} className="hover:bg-slate-50">
                            <td className="p-3 font-mono font-semibold text-blue-900">{sub.code}</td>
                            <td className="p-3 font-medium">{sub.name}</td>
                            <td className="p-3 text-center font-mono">{sub.credits}</td>
                            <td className="p-3 text-center">
                              <span className="rounded bg-blue-100 text-blue-900 px-2 py-0.5 text-xs font-bold font-mono">
                                {sub.grade}
                              </span>
                            </td>
                            <td className="p-3 text-center font-mono font-bold text-slate-900">{sub.gradePoints}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: ATTENDANCE TRACKER */}
        {activeTab === 'attendance' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-cinzel">
                    Subject-Wise Class Attendance Ledger
                  </h3>
                  <p className="text-xs text-slate-500">
                    Mandatory 75% class attendance rule enforced under Bodoland University academic regulations.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Aggregate Percentage:</span>
                  <p className="text-2xl font-black text-emerald-600">{overallAttendancePercent}%</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {student.attendance.map((att, idx) => {
                const percent = ((att.attended / att.total) * 100).toFixed(1);
                const isSafe = Number(percent) >= 75;

                return (
                  <div key={idx} className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-700">
                          {att.code}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">{att.name}</h4>
                        <p className="text-xs text-slate-500">Faculty: {att.teacher}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        isSafe ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {percent}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isSafe ? 'bg-emerald-500' : 'bg-rose-500'}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>Attended: {att.attended} classes</span>
                        <span>Total Delivered: {att.total} classes</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 6: CENTRAL LIBRARY SERVICES */}
        {activeTab === 'library' && (
          <div className="space-y-6">
            {/* Currently issued books */}
            <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 font-cinzel mb-4 flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-blue-900" />
                Books Currently Issued to Your Account
              </h3>

              {student.issuedBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {student.issuedBooks.map(book => (
                    <div key={book.id} className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{book.title}</p>
                          <p className="text-slate-600">Author: {book.author}</p>
                          <p className="text-[11px] text-slate-400 font-mono mt-0.5">Acc: {book.accessionNo}</p>
                        </div>
                        <span className="rounded bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">
                          {book.returnStatus}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex justify-between text-[11px] text-slate-500">
                        <span>Issued: {book.issueDate}</span>
                        <span className="font-semibold text-rose-700">Due: {book.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">No books currently borrowed from the central library.</p>
              )}
            </div>

            {/* Online OPAC Catalog search & reserve */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-cinzel">
                    Central Library OPAC Catalog Search & Online Reserve
                  </h3>
                  <p className="text-xs text-slate-500">
                    Search over 35,000 academic titles and reserve for direct checkout at the circulation desk.
                  </p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by title, author, topic..."
                    value={libraryQuery}
                    onChange={e => setLibraryQuery(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {libraryBooks
                  .filter(
                    b =>
                      b.title.toLowerCase().includes(libraryQuery.toLowerCase()) ||
                      b.author.toLowerCase().includes(libraryQuery.toLowerCase()) ||
                      b.category.toLowerCase().includes(libraryQuery.toLowerCase())
                  )
                  .map(b => (
                    <div key={b.id} className="rounded-xl border border-slate-200 p-4 flex flex-col justify-between text-xs hover:border-blue-300 transition-colors">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="rounded bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                            {b.category}
                          </span>
                          <span className={`text-[10px] font-bold ${b.available ? 'text-emerald-700' : 'text-slate-400'}`}>
                            {b.available ? 'Available on Shelf' : 'Currently Borrowed'}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{b.title}</h4>
                        <p className="text-slate-600 mt-0.5">By {b.author}</p>
                        <p className="text-[11px] text-slate-400 font-mono mt-2">Location: {b.shelfLocation}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="font-mono text-[11px] text-slate-500">{b.accessionNo}</span>
                        {b.available ? (
                          <button
                            onClick={() => {
                              reserveBook(b.id);
                              alert(`Successfully reserved "${b.title}"! It has been linked to your student profile.`);
                            }}
                            className="rounded-lg bg-blue-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
                          >
                            Reserve Book
                          </button>
                        ) : (
                          <span className="text-slate-400 text-xs italic">Reserved</span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: GRIEVANCE REDRESSAL DESK */}
        {activeTab === 'grievance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Form */}
              <div className="lg:col-span-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 font-cinzel mb-2">
                  Submit Academic / Campus Grievance
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Complaints, Samarth portal corrections, hostel requests, and marksheet discrepancies are reviewed directly by the College Grievance Cell.
                </p>

                {grvSuccess && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-emerald-800 text-xs mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Your ticket has been logged and forwarded to the Grievance Officer.</span>
                  </div>
                )}

                <form onSubmit={handleGrievanceSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category *</label>
                    <select
                      value={grvCategory}
                      onChange={e => setGrvCategory(e.target.value as any)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option>Examinations</option>
                      <option>Admissions</option>
                      <option>Fees & Accounts</option>
                      <option>Library</option>
                      <option>Hostel</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Subject / Summary *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Discrepancy in internal marksheet submission"
                      value={grvSubject}
                      onChange={e => setGrvSubject(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Detailed Description *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide all relevant paper codes, dates, and background..."
                      value={grvMessage}
                      onChange={e => setGrvMessage(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Grievance to Cell</span>
                  </button>
                </form>
              </div>

              {/* History */}
              <div className="lg:col-span-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">
                  Your Grievance History & Status
                </h3>

                <div className="space-y-3">
                  {grievances
                    .filter(g => g.studentRoll === student.rollNo)
                    .map(g => (
                      <div key={g.id} className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="rounded bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                              {g.category}
                            </span>
                            <h4 className="font-bold text-slate-900 text-sm mt-1">{g.subject}</h4>
                            <p className="text-[11px] text-slate-500">Date: {g.date}</p>
                          </div>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              g.status === 'Resolved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {g.status}
                          </span>
                        </div>

                        <p className="text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 leading-relaxed">
                          {g.message}
                        </p>

                        {g.response && (
                          <div className="rounded-lg bg-emerald-50/80 p-3 border border-emerald-200 text-emerald-900 space-y-1">
                            <p className="font-bold text-[11px] text-emerald-800">
                              Official Resolution Response ({g.resolvedDate}):
                            </p>
                            <p>{g.response}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Gateway Modal Simulation */}
      {payingFee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900 font-cinzel">SBI e-Pay Portal</h3>
              <button onClick={() => setPayingFee(null)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
              <p className="text-slate-500">Beneficiary:</p>
              <p className="font-bold text-slate-900">Principal, Barama College (Examination Fund)</p>
              <p className="text-slate-500 mt-2">Particulars:</p>
              <p className="font-semibold text-slate-800">{payingFee.title}</p>
              <div className="mt-3 pt-2 border-t border-slate-200 flex justify-between font-bold text-sm">
                <span>Payable Amount:</span>
                <span className="text-blue-900 font-mono">₹{payingFee.amount.toLocaleString()}.00</span>
              </div>
            </div>

            <form onSubmit={handlePaySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Select Payment Mode</label>
                <div className="space-y-2">
                  {['UPI / QR Code (GPay, PhonePe, Paytm)', 'NetBanking (SBI & All Nationalized Banks)', 'Debit / Credit Card'].map(m => (
                    <label key={m} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="pm"
                        checked={paymentMethod === m}
                        onChange={() => setPaymentMethod(m)}
                      />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setPayingFee(null)}
                  className="flex-1 rounded-xl border border-slate-300 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessingPayment}
                  className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50"
                >
                  {isProcessingPayment ? 'Processing...' : `Pay ₹${payingFee.amount}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Receipt Viewer Modal */}
      {viewingReceipt && (
        <ReceiptModal
          fee={viewingReceipt}
          student={student}
          onClose={() => setViewingReceipt(null)}
        />
      )}
    </div>
  );
};
