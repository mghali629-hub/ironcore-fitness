'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  pr: string;
}

export default function TrainersPage() {
  const [trainers, setTrainers] = useState<Trainer[]>([
    { id: 1, name: 'Marcus Vance', specialty: 'Hypertrophy & Strength', bio: 'Former Powerlifting Champion with 12+ years experience coaching elite physique athletes.', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80', pr: '585 lb Deadlift' },
    { id: 2, name: 'Elena Rostova', specialty: 'HIIT & Conditioning', bio: 'CrossFit Games regional athlete specializing in metabolic conditioning and body recomposition.', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80', pr: '3:15 Marathon' },
    { id: 3, name: 'David Kim', specialty: 'Mobility & Rehabilitation', bio: 'Doctor of Physical Therapy and corrective exercise specialist focused on injury prevention.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80', pr: 'Overhead Squat 225 lbs' },
  ]);

  useEffect(() => {
    fetch('/api/trainers')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setTrainers(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">ELITE COACHING STAFF</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Meet Your <span className="text-red-500">Coaches</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">World-class trainers dedicated to pushing your physical limits and achieving extraordinary results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div key={t.id} className="bg-[#141414] border border-gray-800 rounded-3xl overflow-hidden group hover:border-red-500/50 transition-all duration-300">
              <div className="h-80 bg-cover bg-center relative" style={{ backgroundImage: `url('${t.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">{t.specialty}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase text-white mb-1">{t.name}</h3>
                <div className="text-xs text-red-500 font-bold mb-3">PERSONAL RECORD: {t.pr}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.bio}</p>
                <Link href={`/trainers/${t.id}`} className="block text-center w-full bg-red-500 hover:bg-red-600 text-white font-black py-3 rounded-xl tracking-widest text-xs uppercase transition-colors">
                  VIEW PROFILE & BOOK
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
