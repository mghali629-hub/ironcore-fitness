'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const facilities = [
  { icon: '🏋️‍♂️', title: 'Powerlifting Platforms', desc: '12 Eleiko competition powerlifting platforms with calibrated steel plates and monolifts.' },
  { icon: '🏃‍♂️', title: '50m Sled & Sprint Turf Track', desc: 'Heavy sled pushing, prowler work, and sprinting lane equipped with speed timing gates.' },
  { icon: '🧖‍♂️', title: 'Infrared Saunas & Cold Plunges', desc: 'Contrast recovery suite featuring 4°C cold plunge tubs and 80°C cedar infrared saunas.' },
  { icon: '🥩', title: 'IronCore Fuel & Shake Bar', desc: 'Post-workout protein shakes, pre-workout espresso shots, and custom macro meal prep containers.' },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
            25,000 SQ FT FACILITY
          </span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Gym <span className="text-red-500">Facilities</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Tour our world-class strength floors, recovery suites, and sprinting turf.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-3xl p-6 hover:border-red-500/40 transition-colors space-y-3">
              <span className="text-4xl block">{f.icon}</span>
              <h3 className="text-xl font-black uppercase text-white">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/membership" className="inline-block bg-red-500 hover:bg-red-600 text-white font-black text-xs px-8 py-3 rounded-xl uppercase tracking-widest transition-colors">
            Book In-Person Facility Tour
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
