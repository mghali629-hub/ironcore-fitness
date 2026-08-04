'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  Trophy,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  ChevronRight,
  Star,
  Zap,
} from 'lucide-react';
import { Header, Footer } from '@/components/Header';

interface ClassSession {
  id: number;
  time: string;
  name: string;
  coach: string;
  category: string;
}

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  pr: string;
  bio: string;
  image: string;
}

export default function IronCoreHomePage() {
  const [classes, setClasses] = useState<ClassSession[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    fetch('/api/classes')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setClasses(data.classes);
      });

    fetch('/api/trainers')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTrainers(data.trainers);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/register-pass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, planName: 'Athletic Pro Pass' }),
      });
      const data = await res.json();
      if (data.success) setRegistered(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-sans selection:bg-rose-600 selection:text-white flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-rose-600/40 backdrop-blur-md text-rose-500 text-xs font-mono font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4 text-rose-500" /> High-Performance Strength Sanctuary
            </div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase text-white tracking-tight leading-none">
              Forge Your Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-700">Peak Strength</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              World-record coaching staff, Olympic powerlifting platforms, infrared recovery saunas, and custom sports nutrition.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#pass"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-rose-600/30 hover:brightness-110 transition-all text-center"
              >
                Claim Free Day Pass
              </a>
              <Link
                href="/classes"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center"
              >
                Explore Class Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center font-mono">
            <div className="space-y-1">
              <span className="text-3xl font-black text-white">45,000 sqft</span>
              <span className="text-xs text-slate-500 block uppercase font-sans font-semibold">Training Facility</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-black text-rose-500">12+</span>
              <span className="text-xs text-slate-500 block uppercase font-sans font-semibold">World PR Coaches</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-black text-white">100%</span>
              <span className="text-xs text-slate-500 block uppercase font-sans font-semibold">Eleiko Equipment</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-black text-rose-500">2,400+</span>
              <span className="text-xs text-slate-500 block uppercase font-sans font-semibold">Active Athletes</span>
            </div>
          </div>
        </section>

        {/* Classes Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-widest block">Daily Schedule</span>
              <h2 className="text-3xl font-black uppercase text-white font-sans">High-Intensity Class Roster</h2>
            </div>
            <Link href="/classes" className="text-xs font-bold text-rose-500 hover:underline uppercase flex items-center gap-1">
              View All Classes <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div key={cls.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-rose-600/40 transition-all space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-rose-500 font-bold flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {cls.time}</span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold">{cls.category}</span>
                </div>
                <h3 className="text-lg font-black uppercase text-white font-sans">{cls.name}</h3>
                <div className="text-xs text-slate-400 font-sans">Head Coach: {cls.coach}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Claim Pass Form */}
        <section id="pass" className="max-w-3xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-rose-600/40 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-widest">Complimentary Access</span>
              <h2 className="text-3xl font-black uppercase text-white font-sans">Claim Your Athletic Day Pass</h2>
              <p className="text-slate-400 text-xs font-sans">Experience IronCore facility & group training with zero commitment.</p>
            </div>

            {!registered ? (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block font-mono">Athlete Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Marcus Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-rose-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block font-mono">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@ironcore.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-rose-600 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-rose-600/30 hover:brightness-110 transition-all"
                >
                  Generate Digital VIP Pass via API
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-rose-600 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-12 h-12 text-rose-500 mx-auto" />
                <h3 className="text-xl font-bold uppercase text-white font-sans">Pass Issued & Saved in Database</h3>
                <p className="text-slate-300 text-xs font-sans">Welcome, {name}! Present your email confirmation at the front desk desk.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
