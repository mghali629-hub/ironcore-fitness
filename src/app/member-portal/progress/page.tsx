'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function ProgressPage() {
  const history = [
    { date: '2026-08-01', weight: '184.2 lbs', fat: '13.8%', muscle: '148 lbs' },
    { date: '2026-07-01', weight: '188.5 lbs', fat: '15.2%', muscle: '146 lbs' },
    { date: '2026-06-01', weight: '192.0 lbs', fat: '16.9%', muscle: '144 lbs' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">BODY COMPOSITION</span>
          <h1 className="text-3xl font-black uppercase text-white mt-1">InBody Scan Progress</h1>
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-xl font-black uppercase text-white mb-4">Historical Scan Logs</h2>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-black/60 rounded-2xl border border-gray-800">
                <div>
                  <div className="font-bold text-white text-sm">{h.date}</div>
                  <div className="text-xs text-gray-500">InBody 770 Scan</div>
                </div>
                <div className="flex gap-6 text-xs text-right">
                  <div><span className="text-gray-500 block">Weight</span><strong className="text-white">{h.weight}</strong></div>
                  <div><span className="text-gray-500 block">Body Fat</span><strong className="text-red-500">{h.fat}</strong></div>
                  <div><span className="text-gray-500 block">Skeletal Muscle</span><strong className="text-emerald-400">{h.muscle}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
