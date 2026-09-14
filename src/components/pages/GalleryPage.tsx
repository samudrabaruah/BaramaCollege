import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Image as ImageIcon, X, Maximize2, Calendar } from 'lucide-react';
import { GalleryPhoto } from '../../types';

export const GalleryPage: React.FC = () => {
  const { gallery } = useCollege();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Events', 'Sports', 'Infrastructure'];

  const filteredPhotos = gallery.filter(
    p => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <ImageIcon className="h-3.5 w-3.5" />
              CAMPUS CHRONICLES & MEDIA
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white">
              Photo & Video Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Memories, student achievements, convocation celebrations, and life on the Barama College campus.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-blue-900/90 text-white text-[10px] font-bold px-2 py-0.5 backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs">
                <p className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                  {item.title}
                </p>
                <span className="text-slate-400 font-mono shrink-0 ml-2">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-full object-contain bg-black"
            />

            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="rounded bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5">
                  {activePhoto.category}
                </span>
                <h3 className="text-base font-bold font-playfair mt-1 text-white">{activePhoto.title}</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">{activePhoto.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
