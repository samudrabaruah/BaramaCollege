import React from 'react';
import { UrgentNoticeMarquee } from './UrgentNoticeMarquee';
import { HeroSlider } from './HeroSlider';
import { QuickServices } from './QuickServices';
import { AboutSection } from './AboutSection';
import { DepartmentsShowcase } from './DepartmentsShowcase';
import { NoticeBoardSection } from './NoticeBoardSection';
import { CampusLifeSection } from './CampusLifeSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <UrgentNoticeMarquee />
      <HeroSlider />
      <QuickServices />
      <AboutSection />
      <DepartmentsShowcase />
      <NoticeBoardSection />
      <CampusLifeSection />
    </div>
  );
};
