import React, { useState } from 'react';
import { X, CheckCircle2, FileDown, School, AlertCircle } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'FYUGP Bachelor of Arts (B.A.)',
    streamMajor: 'Bodo',
    lastExamPercent: '',
    category: 'General',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <School className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-playfair">Online Admission Enquiry & Guidance</h3>
                <p className="text-xs text-blue-200">Session 2025-26 &bull; Barama College, Baksa</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm max-h-[75vh] overflow-y-auto">
            <div className="rounded-xl bg-blue-50 p-3.5 border border-blue-200 text-blue-900 text-xs leading-relaxed flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-blue-700 mt-0.5" />
              <span>
                Note: Final admissions into undergraduate courses (B.A., B.Sc., B.C.A) are mandated via Assam Higher Education Samarth eGov Portal. This desk provides direct counselling, fee waiver verification, and subject assistance.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Applicant Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Priyanjali Brahma"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="applicant@email.com"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Program of Interest *</label>
                <select
                  value={formData.program}
                  onChange={e => setFormData({ ...formData, program: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option>FYUGP Bachelor of Arts (B.A.)</option>
                  <option>FYUGP Bachelor of Science (B.Sc.)</option>
                  <option>Bachelor of Computer Applications (B.C.A)</option>
                  <option>M.A. in Bodo (Bodoland University)</option>
                  <option>M.A. / M.Sc. in Geography</option>
                  <option>Higher Secondary (HS Arts / Science)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">12th (HS / Equivalent) Percentage *</label>
                <input
                  type="text"
                  required
                  value={formData.lastExamPercent}
                  onChange={e => setFormData({ ...formData, lastExamPercent: e.target.value })}
                  placeholder="e.g. 78.4%"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Major / Core Discipline</label>
              <input
                type="text"
                value={formData.streamMajor}
                onChange={e => setFormData({ ...formData, streamMajor: e.target.value })}
                placeholder="e.g. Botany, Physics, Bodo, English, Geography, BCA"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-900 px-5 py-2 text-sm font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
              >
                Submit Enquiry & Download Prospectus
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-playfair">Enquiry Registered Successfully!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our college admission counselling cell has logged your enquiry for {formData.program}.
            </p>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1">
              <p><span className="font-semibold">Reference ID:</span> BC-ADM-2025-{Math.floor(1000 + Math.random() * 9000)}</p>
              <p><span className="font-semibold">Samarth College Code:</span> BU-BAR-042</p>
              <p><span className="font-semibold">Helpline:</span> +91 3624 281449 / admission@baramacollegebarama.edu.in</p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert('Prospectus 2025-26 PDF downloaded successfully (Simulated)');
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 transition-colors"
              >
                <FileDown className="h-4 w-4" />
                Download College Prospectus 2025-26 (PDF)
              </button>
              <button
                onClick={onClose}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
