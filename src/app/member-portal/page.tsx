'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function MemberPortalPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase">ATHLETE CONSOLE</span>
            <h1 className="text-3xl font-black uppercase text-white mt-1">Member Portal</h1>
          </div>
          <Link href="/member-portal/progress" className="bg-red-500 hover:bg-red-600 text-white font-black text-xs px-5 py-2.5 rounded-xl uppercase tracking-widest transition-colors">
            📈 Track Body Comp Progress
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141414] border border-gray-800 rounded-3xl p-6">
            <span className="text-xs text-gray-500 uppercase font-bold">MEMBERSHIP TIER</span>
            <div className="text-2xl font-black text-red-500 mt-1">IronCore All-Access VIP</div>
            <p className="text-xs text-gray-400 mt-2">Active until Jan 15, 2027</p>
          </div>
          <div className="bg-[#141414] border border-gray-800 rounded-3xl p-6">
            <span className="text-xs text-gray-500 uppercase font-bold">WORKOUTS THIS MONTH</span>
            <div className="text-2xl font-black text-white mt-1">18 Sessions</div>
            <p className="text-xs text-emerald-400 mt-2">🔥 4-day streak active</p>
          </div>
          <div className="bg-[#141414] border border-gray-800 rounded-3xl p-6">
            <span className="text-xs text-gray-500 uppercase font-bold">BENCH PRESS PR</span>
            <div className="text-2xl font-black text-white mt-1">315 lbs</div>
            <p className="text-xs text-red-500 mt-2">+15 lbs since June</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
