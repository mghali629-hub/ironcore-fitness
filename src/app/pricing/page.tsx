'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function PassPricingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase text-white mb-2">Claim Free Day Pass</h1>
          <p className="text-slate-400 text-sm">Experience our Eleiko barbells and sauna recovery suite.</p>
        </div>

        {!registered ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Athlete Full Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jaxson Titan" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jaxson@iron.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-rose-600 text-white font-bold text-xs uppercase tracking-wider">
              Claim Athletic Day Pass via API
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-rose-600 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-rose-500 mx-auto" />
            <h3 className="text-2xl font-bold text-white uppercase">Pass Saved to Database</h3>
            <p className="text-slate-300 text-sm">Thank you, {name}. Confirmation code sent to {email}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
