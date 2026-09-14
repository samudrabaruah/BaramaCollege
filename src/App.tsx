import React from 'react';
import { CollegeProvider, useCollege } from './context/CollegeContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { AcademicsPage } from './components/pages/AcademicsPage';
import { AdmissionsPage } from './components/pages/AdmissionsPage';
import { NoticesPage } from './components/pages/NoticesPage';
import { CampusPage } from './components/pages/CampusPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ContactPage } from './components/pages/ContactPage';
import { StudentPortal } from './components/student/StudentPortal';
import { AdminCMS } from './components/admin/AdminCMS';
import { NoticeModal } from './components/modals/NoticeModal';
import { DepartmentModal } from './components/modals/DepartmentModal';
import { AdmissionModal } from './components/modals/AdmissionModal';

const AppContent: React.FC = () => {
  const { currentView } = useCollege();

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'notices':
        return <NoticesPage />;
      case 'campus':
        return <CampusPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'portal':
        return <StudentPortal />;
      case 'admin':
        return <AdminCMS />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-300 selection:text-slate-900">
      <Header />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer />

      {/* Global Interactive Modals */}
      <NoticeModal />
      <DepartmentModal />
      <AdmissionModal />
    </div>
  );
};

export default function App() {
  return (
    <CollegeProvider>
      <AppContent />
    </CollegeProvider>
  );
}
