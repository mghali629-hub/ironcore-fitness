'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2, Flame, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  id: number;
  name: string;
  price: string;
  perks: string;
}

export default function MembershipPage() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch('/api/membership-plans')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPlans(data.plans);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2 font-mono">
          <span className="text-rose-500 text-xs font-bold uppercase tracking-widest block">Unrestricted Access</span>
          <h1 className="text-4xl font-black uppercase text-white font-sans">Athletic Membership Tiers</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((p) => (
            <div key={p.id} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase text-white">{p.name}</h3>
                <span className="text-4xl font-black text-rose-500 font-mono block">{p.price}</span>
                <p className="text-slate-300 text-xs font-mono leading-relaxed pt-4 border-t border-slate-800">{p.perks}</p>
              </div>
              <Link href="/#pass" className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-bold text-xs uppercase tracking-widest text-center block font-mono">
                Claim {p.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
