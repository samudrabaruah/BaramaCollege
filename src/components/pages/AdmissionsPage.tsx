import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  FileCheck2,
  HelpCircle,
  Award,
  CheckCircle,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { setIsAdmissionModalOpen } = useCollege();

  const programs = [
    {
      name: 'Four-Year Undergraduate B.A. (Honours/Regular)',
      duration: '4 Years (8 Semesters)',
      intake: '450 Seats',
      eligibility: 'Higher Secondary (10+2) passed from AHSEC / CBSE / ICSE or recognized equivalent board with minimum 45% aggregate (40% for SC/ST/PWD).',
      subjects: 'Bodo, Assamese, English, Economics, Education, History, Philosophy, Political Science, Geography.',
    },
    {
      name: 'Four-Year Undergraduate B.Sc. (Honours/Regular)',
      duration: '4 Years (8 Semesters)',
      intake: '250 Seats',
      eligibility: 'Higher Secondary (10+2) Science passed with Physics, Chemistry, and Mathematics/Biology with minimum 50% marks in science subjects.',
      subjects: 'Botany, Zoology, Chemistry, Physics, Mathematics.',
    },
    {
      name: 'Bachelor of Computer Applications (BCA)',
      duration: '3/4 Years',
      intake: '40 Seats',
      eligibility: '10+2 with Mathematics or Computer Science / Informatics Practices as one of the subjects with minimum 50% aggregate.',
      subjects: 'C++, Java, Data Structures, Web Development, Cloud Computing, Database Management Systems.',
    },
    {
      name: 'Postgraduate M.A. in Bodo',
      duration: '2 Years (4 Semesters)',
      intake: '30 Seats',
      eligibility: 'B.A. with Major/Honours in Bodo or relevant language discipline from Bodoland University, Gauhati University, or recognized university with at least 50% marks.',
      subjects: 'Advanced Bodo Linguistics, Folklore, Comparative Literature, Literary Criticism.',
    },
    {
      name: 'Postgraduate M.A. / M.Sc. in Geography',
      duration: '2 Years (4 Semesters)',
      intake: '25 Seats',
      eligibility: 'B.A. or B.Sc. with Major in Geography with minimum 50% aggregate.',
      subjects: 'Geomorphology, Remote Sensing & GIS, Climatology, Regional Planning of NE India.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <FileCheck2 className="h-3.5 w-3.5" />
              ADMISSIONS SESSION 2025-26 OPEN
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Admissions & Enrolment
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Admissions into all FYUGP degree courses are processed transparently via the Assam Higher Education Samarth Portal in accordance with Bodoland University regulations.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-colors shadow-md"
              >
                <span>Online Admission Enrolment Form</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://assamadmission.samarth.ac.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>Govt. Samarth Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Pragyan Bharati Govt Fee Waiver Highlight */}
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-amber-700" />
            <h3 className="text-lg font-bold font-cinzel text-amber-950">
              Assam Government "Pragyan Bharati" Free Admission Scheme
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Students whose parental annual income is less than ₹2.00 Lakhs from all sources are eligible for 100% tuition fee waiver under the Government of Assam scheme. Candidates must produce an official Income Certificate issued by the Circle Officer / Deputy Commissioner alongside an affidavit and a geotagged tree plantation photograph at the time of physical document verification.
          </p>
        </div>

        {/* Programs & Criteria */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-cinzel text-slate-900">
            Programs Offered & Eligibility Criteria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base font-bold text-slate-900 font-playfair">{prog.name}</h3>
                    <span className="rounded bg-blue-100 text-blue-900 text-[10px] font-bold px-2 py-0.5 whitespace-nowrap">
                      {prog.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Intake Capacity: <strong>{prog.intake}</strong></p>
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-slate-900">Minimum Eligibility: </span>
                      <span>{prog.eligibility}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Key Subjects / Specializations: </span>
                      <span>{prog.subjects}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="w-full rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white py-2 text-xs font-bold text-slate-800 transition-colors"
                  >
                    Apply for this Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Procedure Step-by-Step */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h3 className="text-xl font-bold font-cinzel text-slate-900">
            Step-by-Step Enrolment Procedure
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold font-mono">1</span>
              <h4 className="font-bold text-slate-900 text-sm">Samarth Registration</h4>
              <p className="text-xs text-slate-600">Register on assamadmission.samarth.ac.in and select Barama College as your preferred institution.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold font-mono">2</span>
              <h4 className="font-bold text-slate-900 text-sm">Merit List Publication</h4>
              <p className="text-xs text-slate-600">Merit lists are prepared based on best-of-four marks in 10+2 examination and uploaded to the notice board.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold font-mono">3</span>
              <h4 className="font-bold text-slate-900 text-sm">Document Verification</h4>
              <p className="text-xs text-slate-600">Shortlisted candidates report to the College Auditorium with original marksheets, caste certificates, and photos.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold font-mono">4</span>
              <h4 className="font-bold text-slate-900 text-sm">Seat Allotment & ID Card</h4>
              <p className="text-xs text-slate-600">Roll numbers are allocated and digital student credentials generated on the Barama College portal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
