'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'hypertrophy-RIR-guide-2026', title: 'RIR (Reps in Reserve) vs. Failure Training for Maximum Muscle Growth', date: 'July 29, 2026', author: 'Coach Marcus Vance', category: 'HYPERTROPHY', excerpt: 'How managing RIR between 1-3 prevents central nervous system fatigue while maximizing mechanical tension.' },
  { slug: 'creatine-monohydrate-dosing', title: 'Creatine Monohydrate Timing, Dosing, and Cognitive Benefits', date: 'July 11, 2026', author: 'Elena Rostova', category: 'NUTRITION', excerpt: 'Dispelling myths about loading phases, fluid retention, and cellular ATP replenishment for strength athletes.' },
];

export default function IronCoreBlogPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
            TRAINING SCIENCE
          </span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">IronCore <span className="text-red-500">Journal</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Evidence-based articles on powerlifting periodization, hypertrophy biomechanics, and sports nutrition.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-[#141414] border border-gray-800 rounded-3xl p-8 space-y-3 hover:border-red-500/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{p.category}</span>
                <span className="text-xs text-gray-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-black uppercase text-white">{p.title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-red-500 font-black text-xs uppercase tracking-widest hover:underline">
                  Read Science Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
