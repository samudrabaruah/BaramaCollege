import React, { useState, useEffect } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Building,
} from 'lucide-react';

interface HeroSliderProps {
  onOpenAdmission: () => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
  primaryActionText: string;
  primaryActionView: string;
  secondaryActionText: string;
  secondaryActionView: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: '54 Years of Academic Excellence in Bodoland',
    subtitle: 'Nurturing generations of thinkers, innovators, and leaders since 1971 in Baksa District, Assam. Affiliated with Bodoland University & NAAC B+ Accredited.',
    badge: 'ESTABLISHED 1971 &bull; NAAC B+ ACCREDITED',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80',
    primaryActionText: 'Apply for Admission 2025-26',
    primaryActionView: 'admissions',
    secondaryActionText: 'Explore Departments',
    secondaryActionView: 'academics',
  },
  {
    id: 2,
    title: 'FYUGP 4-Year Degree Programs under NEP 2020',
    subtitle: 'Comprehensive Multidisciplinary Curriculum across Arts, Science & Computer Applications with Major/Minor pathways, research credits, and skill enhancements.',
    badge: 'NEW EDUCATION POLICY (NEP 2020)',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    primaryActionText: 'View Course Syllabi',
    primaryActionView: 'academics',
    secondaryActionText: 'Download Prospectus',
    secondaryActionView: 'admissions',
  },
  {
    id: 3,
    title: 'Fully Automated Central Library & Advanced Laboratories',
    subtitle: 'KOHA automated library housing 35,000+ volumes, N-LIST digital e-resources, modern physics, chemistry, botany, zoology & BCA computer research facilities.',
    badge: 'WORLD-CLASS RESEARCH & LEARNING',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80',
    primaryActionText: 'Campus Facilities',
    primaryActionView: 'campus',
    secondaryActionText: 'Student Portal',
    secondaryActionView: 'student-portal',
  },
  {
    id: 4,
    title: 'Vibrant Campus Life: NCC, NSS, Sports & BTR Culture',
    subtitle: 'Fostering holistic youth development through national cadet drills, social outreach, competitive athletic tournaments, and rich cultural carnivals.',
    badge: 'SPORTS & COMMUNITY ENGAGEMENT',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    primaryActionText: 'View Campus Gallery',
    primaryActionView: 'gallery',
    secondaryActionText: 'College Notices',
    secondaryActionView: 'notices',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenAdmission }) => {
  const { setCurrentView, loginAsStudent } = useCollege();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  const handleAction = (actionView: string) => {
    if (actionView === 'admissions') {
      onOpenAdmission();
    } else if (actionView === 'student-portal') {
      loginAsStudent();
    } else {
      setCurrentView(actionView);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Image Carousel with Overlay */}
      <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full">
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.imageUrl}
              alt={s.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            {/* Deep Collegiate Gradient overlay for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-slate-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-center">
          <div className="max-w-2xl text-white space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/40 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-playfair leading-tight text-white drop-shadow-sm">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleAction(slide.primaryActionView)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-all hover:translate-x-0.5 active:scale-95"
              >
                <span>{slide.primaryActionText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => handleAction(slide.secondaryActionView)}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-3 text-xs sm:text-sm font-semibold text-white border border-white/20 backdrop-blur-xs transition-all"
              >
                <span>{slide.secondaryActionText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2.5 text-white/80 hover:bg-black/70 hover:text-white backdrop-blur-xs transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2.5 text-white/80 hover:bg-black/70 hover:text-white backdrop-blur-xs transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all rounded-full ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Collegiate Key Statistics Banner */}
      <div className="relative z-20 bg-blue-900 border-t border-blue-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Award className="h-5 w-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black font-cinzel text-white">54+ Years</p>
            <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">Educational Heritage (1971)</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black font-cinzel text-white">2,800+</p>
            <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">Active UG & PG Students</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Building className="h-5 w-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black font-cinzel text-white">15+ Depts</p>
            <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">Arts, Science, BCA & PG</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black font-cinzel text-white">35,000+</p>
            <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">Central Library Volumes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
