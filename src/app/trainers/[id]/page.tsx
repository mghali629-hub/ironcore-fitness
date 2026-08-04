'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function TrainerDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/trainers" className="text-xs text-red-500 font-bold hover:underline mb-4 block">← Back to Coaching Staff</Link>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-48 h-48 bg-cover bg-center rounded-2xl shrink-0 border border-gray-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80')" }} />
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">HEAD POWERLIFTING COACH</span>
              <span className="text-xs text-gray-500">12+ Years Elite Coaching Experience</span>
            </div>
            <h1 className="text-3xl font-black uppercase text-white">Coach Marcus Vance</h1>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
              Marcus is IronCore&apos;s Head Powerlifting Coach, responsible for preparing elite athletes for USAPL, IPF, and WRPF international competitions. He specializes in velocity-based training (VBT), biomechanical movement screening, and advanced periodization programming.
            </p>
            <div className="text-xs text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-2 border-t border-gray-800 pt-4">
              <div>💪 Personal Records: 585 lb Deadlift / 495 lb Back Squat</div>
              <div>🏆 Certifications: CSCS (NSCA), USAPL Senior Coach</div>
              <div>📍 Languages: English, Spanish</div>
              <div>📅 Roster: 3 New Client Slots Open — Fall 2026</div>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8 space-y-4">
          <h2 className="text-xl font-black uppercase text-white">Coaching Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['IPF/USAPL Competition Peaking Programs','Velocity-Based Training (VBT) with GymAware','Biomechanical Bar Path Video Analysis','Olympic Weightlifting (Snatch & Clean & Jerk)','Strength & Hypertrophy Concurrent Periodization','Powerbuilding & Physique Competition Prep'].map((spec,i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                <span className="text-red-500 font-bold">✓</span>{spec}
              </div>
            ))}
          </div>
          <div className="pt-4">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-colors">
              BOOK 1-ON-1 COACHING CONSULTATION
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
