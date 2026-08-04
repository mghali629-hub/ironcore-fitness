'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

interface EventItem { id: number; title: string; date: string; description: string; category: string; }

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([
    { id: 1, title: 'IronCore Summer Powerlifting Open 2026', date: 'August 22, 2026', category: 'COMPETITION', description: 'Sanctioned 3-lift competition with Eleiko calibrated equipment. Cash prizes for highest Wilks score across open divisions.' },
    { id: 2, title: 'Olympic Lifting Masterclass with Ilya Ilyin', date: 'September 10, 2026', category: 'SEMINAR', description: '4-hour intensive snatch and clean & jerk biomechanics seminar with hands-on video analysis.' },
  ]);
  useEffect(() => { fetch('/api/events').then(r => r.json()).then(d => Array.isArray(d) && d.length && setEvents(d)).catch(() => {}); }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
            ATHLETE CALENDAR
          </span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">IronCore <span className="text-red-500">Events & Competitions</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Sanctioned meets, guest coaching seminars, and strongman showcases.</p>
        </div>

        <div className="space-y-6">
          {events.map(e => (
            <div key={e.id} className="bg-[#141414] border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-red-500/40 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-red-500 bg-red-950 px-2.5 py-0.5 rounded uppercase">{e.category}</span>
                  <span className="text-xs text-gray-400">📅 {e.date}</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{e.title}</h3>
                <p className="text-gray-400 text-xs max-w-2xl leading-relaxed">{e.description}</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest transition-colors shrink-0">
                Register Athlete
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
