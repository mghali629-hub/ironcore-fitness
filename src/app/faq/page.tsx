'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'What hours is IronCore Fitness open?', a: 'IronCore VIP members enjoy 24/7 keycard access 365 days a year. Staffed coaching hours are 6:00 AM – 10:00 PM daily.' },
  { q: 'Do you offer single day passes or guest drop-ins?', a: 'Yes, single day passes are available for $35. Day passes include full access to the powerlifting platforms, turf track, infrared saunas, and locker rooms.' },
  { q: 'Are personal training sessions included in membership?', a: 'All new memberships include 2 complimentary 1-on-1 personal training and movement screening sessions with a senior coach.' },
  { q: 'What equipment brand is used on the strength floors?', a: 'We exclusively use Eleiko calibrated competition plates, Rogue Monster power racks, and specialized specialty bars (Safety Squat, Trap Bar, Swiss Bar).' },
  { q: 'Is there a contract or cancellation fee?', a: 'Our month-to-month memberships have zero long-term contracts. You may cancel anytime with 14 days notice before your next billing cycle.' },
];

export default function IronCoreFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
            ATHLETE HELP CENTER
          </span>
          <h1 className="text-4xl font-black uppercase mt-4 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-xs">Everything you need to know about keycard access, day passes, and strength gear.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-white flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-red-500 font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 text-xs leading-relaxed border-t border-gray-800/60 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Have Questions About Coaching?</h3>
          <p className="text-gray-400 text-xs">Our coaching staff is available at the front desk 6:00 AM – 10:00 PM.</p>
          <Link href="/contact" className="inline-block text-red-500 font-bold text-xs hover:underline uppercase tracking-wider">
            Contact Head Coach →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
