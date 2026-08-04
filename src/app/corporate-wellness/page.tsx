'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function CorporateWellnessPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">ENTERPRISE WELLNESS</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Corporate Wellness<br /><span className="text-red-500">Programs</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Reduce absenteeism, boost team morale, and increase productivity with IronCore's custom corporate fitness & wellness solutions.</p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { name: 'STARTER', price: '$1,200/mo', employees: 'Up to 25 employees', features: ['Gym access (off-peak)', '2 Group classes/week', 'Wellness assessment', 'Monthly report'], color: 'border-gray-700' },
            { name: 'GROWTH', price: '$3,500/mo', employees: 'Up to 100 employees', features: ['Unlimited gym access', '5 Group classes/week', 'Personal coaching sessions', 'Nutrition consultation', 'Quarterly health screening', 'Dedicated account manager'], color: 'border-red-500', badge: 'MOST POPULAR' },
            { name: 'ELITE', price: 'Custom', employees: '100+ employees', features: ['On-site gym setup option', 'Unlimited everything', 'Dedicated wellness coach', 'Executive health suites', 'Annual retreat planning', 'Full HR integration'], color: 'border-gray-700' },
          ].map((pkg, i) => (
            <div key={i} className={`bg-[#141414] border-2 ${pkg.color} rounded-2xl p-8 relative`}>
              {pkg.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">{pkg.badge}</span>}
              <h3 className="text-lg font-black text-red-500 tracking-widest mb-2">{pkg.name}</h3>
              <div className="text-3xl font-black text-white mb-1">{pkg.price}</div>
              <div className="text-sm text-gray-400 mb-6">{pkg.employees}</div>
              <ul className="space-y-2 mb-8">
                {pkg.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-red-500">✓</span>{f}</li>)}
              </ul>
              <button className={`w-full py-3 rounded-xl font-black text-sm tracking-widest ${i === 1 ? 'bg-red-500 text-white hover:bg-red-600' : 'border border-gray-700 text-white hover:bg-white/5'} transition-colors`}>GET STARTED</button>
            </div>
          ))}
        </div>

        {/* ROI Stats */}
        <div className="bg-[#141414] border border-gray-800 rounded-3xl p-10 mb-12">
          <h2 className="text-3xl font-black text-center mb-8 uppercase">Proven ROI for Your Business</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '28%', desc: 'Reduction in sick days' },
              { stat: '19%', desc: 'Increase in productivity' },
              { stat: '3.4×', desc: 'Return on wellness investment' },
              { stat: '41%', desc: 'Lower employee turnover' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-red-500 mb-1">{s.stat}</div>
                <div className="text-gray-400 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4 uppercase">Ready to Build a Stronger Team?</h2>
          <p className="text-gray-400 mb-6">Book a free 30-minute consultation with our corporate wellness advisors.</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-black px-12 py-4 rounded-xl text-lg tracking-widest transition-colors uppercase">Book Free Consultation</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
