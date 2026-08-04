'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ShopProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/shop" className="text-xs text-red-500 font-bold hover:underline mb-4 block">← Back to Athlete Store</Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#141414] border border-gray-800 rounded-3xl p-8">
          <div className="w-64 h-64 bg-cover bg-center rounded-2xl shrink-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80')" }} />
          <div className="space-y-4">
            <span className="text-xs text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
              OFFICIAL HEAVY DUTY GEAR
            </span>
            <h1 className="text-3xl font-black uppercase text-white">IronCore Lever Lifting Belt</h1>
            <div className="text-2xl font-black text-red-500">$89.99</div>
            <p className="text-gray-400 text-xs leading-relaxed">
              10mm genuine vegetable-tanned leather belt with heavy-duty stainless steel lever buckle. IPF approved width and thickness for maximum intra-abdominal pressure during heavy squats and deadlifts.
            </p>
            <div className="text-xs text-gray-500 space-y-1 border-t border-gray-800 pt-3">
              <div>✓ Material: 100% Genuine Sole Leather & Stainless Steel</div>
              <div>✓ Compliance: USAPL & IPF Powerlifting Approved</div>
              <div>✓ Warranty: Lifetime Steel Lever Mechanism Replacement</div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <button className="bg-red-500 hover:bg-red-600 text-white font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-colors">
                ADD TO ATHLETE BAG
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
