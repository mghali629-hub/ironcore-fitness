'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';

interface ClassSession {
  id: number;
  time: string;
  name: string;
  coach: string;
  category: string;
}

export default function SchedulePage() {
  const [classes, setClasses] = useState<ClassSession[]>([]);

  useEffect(() => {
    fetch('/api/classes')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setClasses(data.classes);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase text-white mb-2">Weekly Class Timetable</h1>
          <p className="text-slate-400 text-sm">Reserve your spot in high-intensity group sessions.</p>
        </div>

        <div className="space-y-4">
          {classes.map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-rose-500 text-xs font-mono font-bold block">{item.time}</span>
                <h3 className="text-lg font-bold text-white mt-1">{item.name}</h3>
                <span className="text-slate-400 text-xs">Coach: {item.coach}</span>
              </div>
              <button onClick={() => alert(`Spot booked for ${item.name}`)} className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-white text-xs font-bold uppercase">
                Book Spot
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
