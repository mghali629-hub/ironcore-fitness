'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ClassDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/classes" className="text-xs text-red-500 font-bold hover:underline mb-4 block">← Back to Class Schedule</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
              STRENGTH & HYPERTROPHY
            </span>
            <span className="text-xs text-gray-500">Duration: 60 mins · Max 12 Athletes</span>
          </div>
          <h1 className="text-4xl font-black uppercase mt-3 mb-2">Hyper Powerlifting 101</h1>
          <p className="text-gray-400 text-sm">Head Coach: Marcus Vance · Location: Platform 1-4</p>
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-black uppercase text-white">Class Overview & Objectives</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Master the big three lifts (Squat, Bench Press, Deadlift) using competition Eleiko equipment. Focus on bar path mechanics, neural activation, and progressive overload protocols designed to build maximum strength safely.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-6 text-center">
            <div><span className="text-xs text-gray-500 block">Equipment Used</span><strong className="text-white text-sm">Eleiko Racks & Calibrated Plates</strong></div>
            <div><span className="text-xs text-gray-500 block">Calorie Burn</span><strong className="text-red-500 text-sm">550-700 kcal</strong></div>
            <div><span className="text-xs text-gray-500 block">Skill Level</span><strong className="text-white text-sm">Intermediate to Advanced</strong></div>
          </div>

          <div className="pt-2">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-colors">
              CONFIRM CLASS RESERVATION
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
