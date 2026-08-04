'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface FitnessClass { id: number; title: string; category: string; intensity: string; duration: string; instructor: string; }

export default function ClassesPage() {
  const [classes, setClasses] = useState<FitnessClass[]>([
    { id: 1, title: 'Hyper Powerlifting 101', category: 'Strength', intensity: 'HIGH', duration: '60 mins', instructor: 'Marcus Vance' },
    { id: 2, title: 'Metabolic Conditioning (MetCon)', category: 'HIIT', intensity: 'EXTREME', duration: '45 mins', instructor: 'Elena Rostova' },
    { id: 3, title: 'Olympic Weightlifting Technique', category: 'Barbell', intensity: 'MEDIUM', duration: '75 mins', instructor: 'David Kim' },
  ]);

  useEffect(() => { fetch('/api/classes').then(r => r.json()).then(d => Array.isArray(d) && d.length && setClasses(d)).catch(() => {}); }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">HIGH-INTENSITY PROGRAMMING</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Fitness <span className="text-red-500">Classes</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Science-backed group training sessions engineered for strength, power, and athletic endurance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map(c => (
            <div key={c.id} className="bg-[#141414] border border-gray-800 rounded-3xl p-6 space-y-4 hover:border-red-500/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs text-red-500 font-bold uppercase tracking-widest">{c.category}</span>
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded">{c.intensity}</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-white">{c.title}</h3>
              <p className="text-gray-400 text-xs">Instructor: {c.instructor} · Duration: {c.duration}</p>
              <Link href={`/classes/${c.id}`} className="block text-center w-full bg-red-500 hover:bg-red-600 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-colors">
                Book Class Spot
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
