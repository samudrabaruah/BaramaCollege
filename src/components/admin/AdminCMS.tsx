import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  Lock,
  PlusCircle,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  Calendar,
  Users,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  RefreshCw,
  Eye,
  AlertTriangle,
  Flame,
  Pin,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CollegeNotice, NoticeCategory } from '../../types';

export const AdminCMS: React.FC = () => {
  const {
    userRole,
    loginAsAdmin,
    logout,
    notices,
    addNotice,
    updateNotice,
    deleteNotice,
    events,
    addEvent,
    deleteEvent,
    faculty,
    addFaculty,
    deleteFaculty,
    gallery,
    addGalleryPhoto,
    deleteGalleryPhoto,
    grievances,
    replyGrievance,
    resetToDefaults,
    setCurrentView,
  } = useCollege();

  const [activeCmsTab, setActiveCmsTab] = useState<
    'overview' | 'notices' | 'events' | 'faculty' | 'grievances' | 'gallery'
  >('overview');

  // Admin login credentials
  const [adminEmail, setAdminEmail] = useState('admin@baramacollegebarama.edu.in');
  const [adminPass, setAdminPass] = useState('admin123');

  // Notice form state
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState<NoticeCategory>('Examinations');
  const [noticeDate, setNoticeDate] = useState(new Date().toISOString().slice(0, 10));
  const [noticeRef, setNoticeRef] = useState('BC/NOT/2025/');
  const [noticeUrgent, setNoticeUrgent] = useState(false);
  const [noticePinned, setNoticePinned] = useState(false);
  const [noticeDesc, setNoticeDesc] = useState('');
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);

  // Event form state
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('10:00 AM - 03:00 PM');
  const [eventVenue, setEventVenue] = useState('College Auditorium');
  const [eventCategory, setEventCategory] = useState<'Academic' | 'Cultural' | 'Sports' | 'Celebration' | 'Workshop'>('Academic');
  const [eventOrganizer, setEventOrganizer] = useState('IQAC & Department Council');
  const [eventDesc, setEventDesc] = useState('');
  const [eventImg, setEventImg] = useState('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80');

  // Faculty form state
  const [facName, setFacName] = useState('');
  const [facDept, setFacDept] = useState('Department of Bodo (UG & PG)');
  const [facDesig, setFacDesig] = useState('Assistant Professor');
  const [facQual, setFacQual] = useState('M.A., Ph.D., NET');
  const [facEmail, setFacEmail] = useState('');
  const [facSpec, setFacSpec] = useState('');
  const [facExp, setFacExp] = useState(5);
  const [facImg, setFacImg] = useState('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80');

  // Grievance reply state
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Gallery form state
  const [galTitle, setGalTitle] = useState('');
  const [galCat, setGalCat] = useState<'Campus' | 'Academics' | 'Events' | 'Sports' | 'Infrastructure'>('Campus');
  const [galImg, setGalImg] = useState('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80');

  // Success toast
  const [toastMsg, setToastMsg] = useState('');
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  // If not admin
  if (userRole !== 'admin') {
    return (
      <div className="py-16 px-4 sm:px-6 bg-slate-100 min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
          <div className="text-center mb-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-amber-400 shadow-md">
              <Lock className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-4 font-cinzel">College CMS Portal</h2>
            <p className="text-xs text-slate-500 mt-1">
              Barama College Administrative Content Management System
            </p>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              loginAsAdmin(adminPass);
            }}
            className="space-y-4 text-sm"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Administrator Official Email
              </label>
              <input
                type="email"
                value={adminEmail}
                onChange={e => setAdminEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={adminPass}
                onChange={e => setAdminPass(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-colors"
            >
              Log In as Administrator
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 mb-3">Quick Demo Testing Access:</p>
            <button
              type="button"
              onClick={() => loginAsAdmin()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-300 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <span>1-Click Demo Login as CMS Administrator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle notice creation or update
  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle || !noticeDesc) return;

    if (editingNoticeId) {
      updateNotice({
        id: editingNoticeId,
        title: noticeTitle,
        category: noticeCategory,
        date: noticeDate,
        refNo: noticeRef,
        isUrgent: noticeUrgent,
        isPinned: noticePinned,
        description: noticeDesc,
      });
      setEditingNoticeId(null);
      showToast('Notice updated successfully!');
    } else {
      addNotice({
        title: noticeTitle,
        category: noticeCategory,
        date: noticeDate,
        refNo: noticeRef,
        isUrgent: noticeUrgent,
        isPinned: noticePinned,
        description: noticeDesc,
      });
      showToast('New notice published and synchronized with website & ticker!');
    }

    setNoticeTitle('');
    setNoticeDesc('');
  };

  const startEditNotice = (n: CollegeNotice) => {
    setEditingNoticeId(n.id);
    setNoticeTitle(n.title);
    setNoticeCategory(n.category);
    setNoticeDate(n.date);
    setNoticeRef(n.refNo || '');
    setNoticeUrgent(!!n.isUrgent);
    setNoticePinned(!!n.isPinned);
    setNoticeDesc(n.description);
  };

  // Handle Event submission
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle || !eventDate) return;
    addEvent({
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      venue: eventVenue,
      category: eventCategory,
      organizer: eventOrganizer,
      description: eventDesc,
      imageUrl: eventImg,
    });
    setEventTitle('');
    setEventDesc('');
    showToast('Event added to College Calendar!');
  };

  // Handle Faculty submission
  const handleAddFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facName || !facEmail) return;
    addFaculty({
      name: facName,
      department: facDept,
      designation: facDesig,
      qualification: facQual,
      email: facEmail,
      specialization: facSpec,
      experienceYears: Number(facExp),
      imageUrl: facImg,
    });
    setFacName('');
    setFacEmail('');
    setFacSpec('');
    showToast('Faculty profile created successfully!');
  };

  // Handle Grievance resolution
  const handleResolveGrievance = (id: string) => {
    if (!replyText) return;
    replyGrievance(id, replyText);
    setReplyingId(null);
    setReplyText('');
    showToast('Resolution sent to student portal!');
  };

  // Handle Gallery submission
  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galTitle || !galImg) return;
    addGalleryPhoto({
      title: galTitle,
      category: galCat,
      imageUrl: galImg,
      date: new Date().toISOString().slice(0, 10),
    });
    setGalTitle('');
    showToast('Photo added to College Gallery!');
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* 1. Admin Top Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold shadow-md">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-cinzel">Barama College CMS</h1>
                <span className="rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Super Admin Mode
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logged in as: <span className="text-slate-200 font-mono">admin@baramacollegebarama.edu.in</span> &bull; Real-Time Website Sync
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCurrentView('home')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
            >
              <Eye className="h-4 w-4" />
              <span>Preview Public Website</span>
            </button>
            <button
              onClick={() => resetToDefaults()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
              title="Reset all dynamic edits back to original official dataset"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              onClick={() => logout()}
              className="rounded-xl bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-rose-300 px-3 py-2 text-xs font-semibold transition-colors"
            >
              Exit Admin
            </button>
          </div>
        </div>
      </div>

      {/* Toast alert */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 rounded-xl bg-emerald-600 text-white px-4 py-3 shadow-xl flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-4 w-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 2. Admin Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto no-scrollbar space-x-1 py-1">
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: Sparkles },
            { id: 'notices', label: `Notices & Circulars (${notices.length})`, icon: FileText },
            { id: 'events', label: `Events & Calendar (${events.length})`, icon: Calendar },
            { id: 'faculty', label: `Faculty Directory (${faculty.length})`, icon: Users },
            { id: 'grievances', label: `Student Grievances (${grievances.length})`, icon: MessageSquare },
            { id: 'gallery', label: `Photo Gallery (${gallery.length})`, icon: ImageIcon },
          ].map(tab => {
            const IconC = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCmsTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold tracking-wide rounded-lg whitespace-nowrap transition-colors ${
                  activeCmsTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
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

      {/* 3. CMS Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* TAB 1: OVERVIEW */}
        {activeCmsTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                onClick={() => setActiveCmsTab('notices')}
                className="cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Published Circulars</span>
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <p className="text-3xl font-black text-slate-900">{notices.length}</p>
                <p className="text-[11px] text-blue-700 mt-1 font-semibold">Manage Circulars &rarr;</p>
              </div>

              <div
                onClick={() => setActiveCmsTab('events')}
                className="cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Calendar Events</span>
                  <Calendar className="h-4 w-4 text-indigo-700" />
                </div>
                <p className="text-3xl font-black text-slate-900">{events.length}</p>
                <p className="text-[11px] text-indigo-700 mt-1 font-semibold">Manage Events &rarr;</p>
              </div>

              <div
                onClick={() => setActiveCmsTab('faculty')}
                className="cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Faculty Profiles</span>
                  <Users className="h-4 w-4 text-emerald-700" />
                </div>
                <p className="text-3xl font-black text-slate-900">{faculty.length}</p>
                <p className="text-[11px] text-emerald-700 mt-1 font-semibold">Manage Roster &rarr;</p>
              </div>

              <div
                onClick={() => setActiveCmsTab('grievances')}
                className="cursor-pointer rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Student Tickets</span>
                  <MessageSquare className="h-4 w-4 text-rose-700" />
                </div>
                <p className="text-3xl font-black text-slate-900">
                  {grievances.filter(g => g.status === 'Pending').length} Pending
                </p>
                <p className="text-[11px] text-rose-700 mt-1 font-semibold">Review Tickets &rarr;</p>
              </div>
            </div>

            {/* Recent CMS Activity & Quick Guide */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-cinzel">
                Barama College Content Management System Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Welcome to the digital administrative backend of Barama College. Any circulars, events, or faculty members added or edited here will instantly propagate across the public website, the urgent top ticker marquee, and the integrated student portal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                  <p className="font-bold">Urgent Circular Broadcast:</p>
                  <p>Toggling a notice as "Urgent" automatically injects it into the orange top breaking news ticker across all devices.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                  <p className="font-bold">Student Grievance Redressal:</p>
                  <p>Responding to student inquiries marks the ticket as Resolved and sends your official response to the student's personal portal.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <p className="font-bold">Data Persistence:</p>
                  <p>All administrative changes are persisted to browser storage. You can restore the original college catalog anytime via "Reset Defaults".</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGE NOTICES */}
        {activeCmsTab === 'notices' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Create or Edit Notice Form */}
              <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 font-cinzel">
                    {editingNoticeId ? 'Edit Existing Circular' : 'Publish New Notice'}
                  </h3>
                  {editingNoticeId && (
                    <button
                      onClick={() => {
                        setEditingNoticeId(null);
                        setNoticeTitle('');
                        setNoticeDesc('');
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveNotice} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Notice Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Schedule for FYUGP 4th Semester Practical Exams"
                      value={noticeTitle}
                      onChange={e => setNoticeTitle(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category *</label>
                      <select
                        value={noticeCategory}
                        onChange={e => setNoticeCategory(e.target.value as any)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      >
                        <option>Examinations</option>
                        <option>Admission</option>
                        <option>Scholarship</option>
                        <option>Academic</option>
                        <option>Tender</option>
                        <option>General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Publish Date *</label>
                      <input
                        type="date"
                        required
                        value={noticeDate}
                        onChange={e => setNoticeDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Official Reference Number</label>
                    <input
                      type="text"
                      placeholder="e.g. BC/EXAM/2025/115"
                      value={noticeRef}
                      onChange={e => setNoticeRef(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div className="flex items-center gap-6 py-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={noticeUrgent}
                        onChange={e => setNoticeUrgent(e.target.checked)}
                      />
                      <span className="font-semibold text-rose-700 flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5" /> Mark Urgent (Ticker)
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={noticePinned}
                        onChange={e => setNoticePinned(e.target.checked)}
                      />
                      <span className="font-semibold text-amber-800 flex items-center gap-1">
                        <Pin className="h-3.5 w-3.5" /> Pin to Top
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Notice Description / Text *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Full details of circular, dates, eligibility or instructions..."
                      value={noticeDesc}
                      onChange={e => setNoticeDesc(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-900 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    <Save className="h-4 w-4" />
                    <span>{editingNoticeId ? 'Save Notice Edits' : 'Publish Circular'}</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Existing Notices List */}
              <div className="lg:col-span-7 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">
                  Active Published Notices ({notices.length})
                </h3>

                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  {notices.map(notice => (
                    <div
                      key={notice.id}
                      className="rounded-xl border border-slate-200 p-4 text-xs space-y-2 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                              {notice.category}
                            </span>
                            {notice.isUrgent && (
                              <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.2 text-[10px] font-bold">
                                Urgent
                              </span>
                            )}
                            <span className="text-slate-400 font-mono text-[10px]">
                              {notice.date}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm leading-snug">{notice.title}</h4>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => startEditNotice(notice)}
                            className="p-1.5 rounded-lg text-blue-700 hover:bg-blue-50"
                            title="Edit Notice"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this circular?')) {
                                deleteNotice(notice.id);
                                showToast('Notice deleted.');
                              }
                            }}
                            className="p-1.5 rounded-lg text-rose-700 hover:bg-rose-50"
                            title="Delete Notice"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <p className="text-slate-600 line-clamp-2">{notice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MANAGE EVENTS */}
        {activeCmsTab === 'events' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Form */}
              <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Add New Event to Calendar</h3>
                <form onSubmit={handleAddEvent} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Event Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. National Seminar on Bodoland Biodiversity"
                      value={eventTitle}
                      onChange={e => setEventTitle(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date *</label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Time</label>
                      <input
                        type="text"
                        value={eventTime}
                        onChange={e => setEventTime(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Venue</label>
                    <input
                      type="text"
                      value={eventVenue}
                      onChange={e => setEventVenue(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category</label>
                      <select
                        value={eventCategory}
                        onChange={e => setEventCategory(e.target.value as any)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      >
                        <option>Academic</option>
                        <option>Cultural</option>
                        <option>Sports</option>
                        <option>Celebration</option>
                        <option>Workshop</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Organizer</label>
                      <input
                        type="text"
                        value={eventOrganizer}
                        onChange={e => setEventOrganizer(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={eventDesc}
                      onChange={e => setEventDesc(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-900 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    Add Event
                  </button>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-7 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Current Scheduled Events</h3>
                <div className="space-y-3">
                  {events.map(ev => (
                    <div key={ev.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 text-xs">
                      <div>
                        <span className="rounded bg-indigo-50 text-indigo-800 font-bold px-2 py-0.5 text-[10px]">
                          {ev.category}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">{ev.title}</h4>
                        <p className="text-slate-500">{ev.date} &bull; {ev.venue}</p>
                      </div>
                      <button
                        onClick={() => deleteEvent(ev.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE FACULTY */}
        {activeCmsTab === 'faculty' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Form */}
              <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Add Faculty Member</h3>
                <form onSubmit={handleAddFaculty} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sanghamitra Brahma"
                      value={facName}
                      onChange={e => setFacName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Department *</label>
                    <select
                      value={facDept}
                      onChange={e => setFacDept(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option>Department of Bodo (UG & PG)</option>
                      <option>Department of Assamese</option>
                      <option>Department of English</option>
                      <option>Department of Geography (UG & PG)</option>
                      <option>Department of Botany</option>
                      <option>Department of Zoology</option>
                      <option>Department of Chemistry</option>
                      <option>Department of Physics</option>
                      <option>Department of Mathematics</option>
                      <option>Department of Computer Applications (BCA)</option>
                      <option>Administration</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Designation</label>
                      <input
                        type="text"
                        value={facDesig}
                        onChange={e => setFacDesig(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Experience (Years)</label>
                      <input
                        type="number"
                        value={facExp}
                        onChange={e => setFacExp(Number(e.target.value))}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Qualification *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M.Sc., Ph.D., CSIR-NET"
                      value={facQual}
                      onChange={e => setFacQual(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="faculty@baramacollegebarama.edu.in"
                      value={facEmail}
                      onChange={e => setFacEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Research Specialization</label>
                    <input
                      type="text"
                      placeholder="e.g. Ethnobotany & Plant Physiology"
                      value={facSpec}
                      onChange={e => setFacSpec(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-900 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    Add Faculty Member
                  </button>
                </form>
              </div>

              {/* Roster list */}
              <div className="lg:col-span-7 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Current Faculty Directory</h3>
                <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
                  {faculty.map(f => (
                    <div key={f.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center gap-3">
                        <img
                          src={f.imageUrl}
                          alt={f.name}
                          referrerPolicy="no-referrer"
                          className="h-10 w-10 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900">{f.name}</h4>
                          <p className="text-slate-500">{f.designation} &bull; {f.department}</p>
                          <p className="text-[11px] text-blue-700">{f.qualification}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteFaculty(f.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STUDENT GRIEVANCES */}
        {activeCmsTab === 'grievances' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-cinzel">
                Student Grievance Redressal Tickets ({grievances.length})
              </h3>

              <div className="space-y-4">
                {grievances.map(g => (
                  <div key={g.id} className="rounded-xl bg-slate-50 p-5 border border-slate-200 text-xs space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="rounded bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5">
                            {g.category}
                          </span>
                          <span className="font-mono text-slate-500 text-[11px]">
                            Roll: <span className="font-bold text-slate-800">{g.studentRoll}</span> ({g.studentName})
                          </span>
                          <span className="text-slate-400 text-[10px]">&bull; {g.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{g.subject}</h4>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          g.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {g.status}
                      </span>
                    </div>

                    <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
                      {g.message}
                    </p>

                    {g.response ? (
                      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-emerald-900">
                        <span className="font-bold text-[11px]">Official Response Provided:</span>
                        <p className="mt-0.5">{g.response}</p>
                      </div>
                    ) : (
                      <div className="pt-2">
                        {replyingId === g.id ? (
                          <div className="space-y-2">
                            <textarea
                              rows={2}
                              placeholder="Type administrative resolution to send to student..."
                              value={replyText}
                              onChange={e => setReplyText(e.target.value)}
                              className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleResolveGrievance(g.id)}
                                className="rounded-lg bg-emerald-600 px-3 py-1.5 font-bold text-white hover:bg-emerald-700"
                              >
                                Submit Resolution
                              </button>
                              <button
                                onClick={() => setReplyingId(null)}
                                className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setReplyingId(g.id);
                              setReplyText('');
                            }}
                            className="rounded-lg bg-blue-900 px-3 py-1.5 text-white font-semibold hover:bg-blue-800"
                          >
                            Resolve / Post Official Reply
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: MANAGE GALLERY */}
        {activeCmsTab === 'gallery' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Add Photo to Gallery</h3>
                <form onSubmit={handleAddGallery} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Image Caption / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Annual Sports Football Tournament Opening"
                      value={galTitle}
                      onChange={e => setGalTitle(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={galCat}
                      onChange={e => setGalCat(e.target.value as any)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option>Campus</option>
                      <option>Academics</option>
                      <option>Events</option>
                      <option>Sports</option>
                      <option>Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Image URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://..."
                      value={galImg}
                      onChange={e => setGalImg(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-900 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    Upload / Add to Gallery
                  </button>
                </form>
              </div>

              <div className="lg:col-span-7 rounded-2xl bg-white p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-cinzel">Current Gallery Media</h3>
                <div className="grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto">
                  {gallery.map(g => (
                    <div key={g.id} className="relative rounded-xl overflow-hidden group border border-slate-200">
                      <img
                        src={g.imageUrl}
                        alt={g.title}
                        referrerPolicy="no-referrer"
                        className="h-32 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 text-white text-[11px]">
                        <p className="line-clamp-2 font-medium">{g.title}</p>
                        <button
                          onClick={() => deleteGalleryPhoto(g.id)}
                          className="self-end p-1 bg-rose-600 rounded text-white hover:bg-rose-700"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
