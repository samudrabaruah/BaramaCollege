import React from 'react';
import { FeeRecord, StudentProfile } from '../../types';
import { X, Printer, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';

interface ReceiptModalProps {
  fee: FeeRecord | null;
  student: StudentProfile;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ fee, student, onClose }) => {
  if (!fee) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Action bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            Verified Digital Payment Receipt
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <Printer className="h-3.5 w-3.5" />
              Print Receipt
            </button>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Paper */}
        <div className="p-8 space-y-6 text-slate-800 bg-white">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Government of Assam &bull; Bodoland Territorial Region
            </p>
            <h2 className="text-2xl font-black text-slate-900 font-cinzel">BARAMA COLLEGE, BARAMA</h2>
            <p className="text-xs text-slate-600 font-medium">
              P.O. Barama, Dist: Baksa (BTR), Assam - 781346 &bull; NAAC Accredited B+
            </p>
            <p className="text-xs font-semibold text-blue-900 mt-1 uppercase tracking-wide">
              Official Fee Payment E-Receipt
            </p>
          </div>

          {/* Receipt Info Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs rounded-xl bg-slate-50 p-4 border border-slate-200">
            <div>
              <p className="text-slate-500">Receipt No:</p>
              <p className="font-bold font-mono text-slate-900">{fee.receiptNo || 'BC/REC/2025/1049'}</p>
            </div>
            <div>
              <p className="text-slate-500">Payment Date:</p>
              <p className="font-bold text-slate-900">{fee.paidDate || new Date().toISOString().slice(0, 10)}</p>
            </div>
            <div>
              <p className="text-slate-500">Student Roll No:</p>
              <p className="font-bold font-mono text-slate-900">{student.rollNo}</p>
            </div>
            <div>
              <p className="text-slate-500">Registration No:</p>
              <p className="font-bold font-mono text-slate-900">{student.registrationNo}</p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Student Name:</p>
              <p className="font-bold text-sm text-slate-900 uppercase">{student.name}</p>
            </div>
            <div>
              <p className="text-slate-500">Program & Semester:</p>
              <p className="font-semibold text-slate-800">{student.program} &bull; {student.semester}</p>
            </div>
            <div>
              <p className="text-slate-500">Major / Minor:</p>
              <p className="font-semibold text-slate-800">{student.majorSubject} ({student.minorSubject})</p>
            </div>
          </div>

          {/* Table of Charges */}
          <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Fee Particulars</th>
                  <th className="p-3 text-right">Amount (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-mono">1</td>
                  <td className="p-3 font-medium">{fee.title}</td>
                  <td className="p-3 text-right font-mono font-semibold">₹{fee.amount.toLocaleString()}</td>
                </tr>
                <tr className="bg-slate-50 font-bold text-slate-900 text-sm">
                  <td className="p-3" colSpan={2}>Total Amount Paid</td>
                  <td className="p-3 text-right font-mono text-blue-900">₹{fee.amount.toLocaleString()}.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Transaction Metadata */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-4">
            <div className="space-y-1">
              <p><span className="font-medium text-slate-700">Transaction Ref:</span> {fee.transactionId || 'SBI_EPAY_99182746102'}</p>
              <p><span className="font-medium text-slate-700">Payment Mode:</span> {fee.paymentMethod || 'Online Gateway (SBI e-Pay)'}</p>
              <p className="flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                Valid for Bodoland University Examination Clearance
              </p>
            </div>
            <div className="text-right mt-2 sm:mt-0">
              <div className="inline-block border border-dashed border-slate-300 rounded p-2 text-[10px] text-slate-400 mb-1">
                [Digital Stamp &bull; Barama College Accounts Section]
              </div>
              <p className="font-bold text-slate-800">Accounts Officer</p>
              <p className="text-[11px] text-slate-500">Barama College, Barama</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 px-6 py-3 text-center text-xs text-slate-500 border-t border-slate-200">
          This is a computer-generated official receipt and does not require physical signature.
        </div>
      </div>
    </div>
  );
};
