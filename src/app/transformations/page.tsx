'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';

const transformations = [
  { name: 'Alex M.', duration: '16 Weeks', weightLost: '34 lbs', muscleGained: '+8 lbs', story: 'Transformed body composition while maintaining full strength for powerlifting.', before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
  { name: 'Sarah K.', duration: '12 Weeks', weightLost: '22 lbs', muscleGained: '+5 lbs', story: 'Reduced body fat percentage from 28% to 16% through tailored hyper conditioning.', before: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
  { name: 'David R.', duration: '24 Weeks', weightLost: '45 lbs', muscleGained: '+14 lbs', story: 'Full lifestyle rebuild under 1-on-1 coaching with custom sports nutrition.', before: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80', after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80' },
];

export default function TransformationsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">REAL RESULTS</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Member <span className="text-red-500">Transformations</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Proof that hard work, science-backed nutrition, and relentless coaching produce extraordinary physical changes.</p>
        </div>

        <div className="space-y-12">
          {transformations.map((t, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                <div className="text-center">
                  <div className="h-48 bg-cover bg-center rounded-2xl border border-red-900/40 mb-2" style={{ backgroundImage: `url('${t.before}')` }} />
                  <span className="text-xs text-gray-500 font-bold uppercase">BEFORE</span>
                </div>
                <div className="text-center">
                  <div className="h-48 bg-cover bg-center rounded-2xl border border-red-500 mb-2" style={{ backgroundImage: `url('${t.after}')` }} />
                  <span className="text-xs text-red-500 font-bold uppercase">AFTER</span>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">{t.name}</h3>
                    <span className="text-xs text-gray-400 font-bold">TIMELINE: {t.duration}</span>
                  </div>
                  <span className="bg-red-500/10 text-red-500 text-xs font-black px-4 py-2 rounded-full uppercase">VERIFIED RESULT</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-black/60 rounded-2xl p-4 border border-gray-800">
                    <div className="text-xs text-gray-400 font-bold">FAT LOST</div>
                    <div className="text-2xl font-black text-red-500">{t.weightLost}</div>
                  </div>
                  <div className="bg-black/60 rounded-2xl p-4 border border-gray-800">
                    <div className="text-xs text-gray-400 font-bold">MUSCLE GAINED</div>
                    <div className="text-2xl font-black text-emerald-400">{t.muscleGained}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{t.story}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
