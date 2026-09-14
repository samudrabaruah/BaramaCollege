import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <MapPin className="h-3.5 w-3.5" />
              CONNECT WITH US
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Contact Barama College
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We welcome prospective students, guardians, scholars, and visitors. Reach out to our administrative offices or visit our campus.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-xl font-bold font-cinzel text-slate-900 border-b border-slate-200 pb-3">
                Institutional Contact Info
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Postal Campus Address:</strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      Barama College, P.O. Barama,<br />
                      District: Baksa, BTR (Bodoland Territorial Region),<br />
                      Assam, India - PIN: 781346
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Office Telephones:</strong>
                    <p className="text-slate-600 mt-0.5 font-mono">
                      +91 3624 281249 (Principal's Desk)<br />
                      +91 94350 18412 (Academic Enquiries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Official Email Addresses:</strong>
                    <p className="text-slate-600 mt-0.5">
                      principal@baramacollegebarama.edu.in<br />
                      baramacollege@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Administrative Working Hours:</strong>
                    <p className="text-slate-600 mt-0.5">
                      Monday to Saturday: 09:30 AM &ndash; 04:30 PM<br />
                      (Closed on Sundays and State Gazetted Holidays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Directions card */}
            <div className="rounded-2xl bg-blue-950 text-white p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Navigation className="h-5 w-5" />
                <h4 className="font-bold text-sm font-cinzel">How to Reach the College</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Barama College is situated approximately 1.5 km south of NH-27 (East-West Corridor) at Barama Chariali. Regular bus and auto-rickshaw services are available from Guwahati (75 km), Rangiya (35 km), and Nalbari (20 km).
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xl font-bold font-cinzel text-slate-900">
              Send an Official Enquiry
            </h3>
            <p className="text-xs text-slate-500">
              Your inquiry will be directly routed to the appropriate college administrative department.
            </p>

            {sent && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your enquiry has been received. Our administrative team will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Contact Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Enquiry Topic / Department</label>
                  <input
                    type="text"
                    placeholder="e.g. Admission / Verification / Transcript"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Message Description *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Please describe your query in detail..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                <Send className="h-4 w-4" />
                <span>Transmit Official Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
