'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
            OUR HARDCORE GYM CULTURE
          </span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">
            Built for <span className="text-red-500">Maximum Athletic Results</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            IronCore Fitness is a 25,000 sq ft high-performance training facility engineered for powerlifters, bodybuilders, and elite athletes who demand real physical progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stat: '25,000', label: 'Sq Ft Facility' },
            { stat: '24/7/365', label: 'Keycard Access' },
            { stat: '100%', label: 'Eleiko Calibrated Gear' },
            { stat: '1,400+', label: 'Active Athletes' },
          ].map((s, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-red-500">{s.stat}</div>
              <div className="text-xs text-gray-400 mt-1 font-bold">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Competition Grade Gear', desc: 'Calibrated Eleiko plates, Rogue power racks, specialty bars, and competition platforms for serious powerlifters.' },
            { title: 'Data-Driven Coaching', desc: 'InBody 770 scanning, velocity-based training (VBT) sensors, and custom macro nutrition planning.' },
            { title: '24/7 VIP Access', desc: 'Encrypted keycard access 365 days a year for round-the-clock training with zero equipment wait times.' },
          ].map((m, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-black uppercase text-white">{m.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-red-500/30 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-black uppercase text-white">Ready to Claim Your 1-Day Trial Pass?</h2>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Experience our platforms and turf track with zero commitment.</p>
          <Link href="/membership" className="inline-block bg-red-500 hover:bg-red-600 text-white font-black text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-widest">
            Claim Free Day Pass
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
