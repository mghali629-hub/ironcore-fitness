'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/membership', label: 'Memberships' },
    { href: '/trainers', label: 'Coaches' },
    { href: '/classes', label: 'Classes' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/pricing', label: 'Day Pass' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/nutrition', label: 'Nutrition' },
    { href: '/transformations', label: 'Results Wall' },
    { href: '/shop', label: 'Store' },
    { href: '/member-portal', label: 'Member Portal' },
    { href: '/member-portal/progress', label: 'PR Log' },
    { href: '/corporate-wellness', label: 'Corporate' },
    { href: '/events', label: 'Competitions' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'Rules & FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-rose-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-rose-600/30">
            <Dumbbell className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white block uppercase">IRONCORE</span>
            <span className="text-[9px] tracking-[0.25em] text-rose-500 font-extrabold uppercase block -mt-1">Athletic Center</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-orange-400 border-b-2 border-orange-400 font-bold' : 'text-zinc-100 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1.5 text-zinc-100 hover:text-white font-semibold text-sm transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-black border border-zinc-700 rounded-2xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-100 hover:bg-zinc-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/pricing"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg shadow-rose-600/30 transition-all shrink-0"
        >
          Day Pass
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-rose-900/30 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-black text-base uppercase">
            <Dumbbell className="w-5 h-5 text-rose-500" /> IRONCORE ATHLETIC
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Competition Eleiko barbells, 24/7 athletic training, and master powerlifting coaches.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Programs</h4>
          <ul className="space-y-2">
            <li><Link href="/classes" className="hover:text-rose-500">HIIT Conditioning</Link></li>
            <li><Link href="/classes" className="hover:text-rose-500">Heavy Barbell Powerlifting</Link></li>
            <li><Link href="/nutrition" className="hover:text-rose-500">Macro Nutrition Plans</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Member Access</h4>
          <ul className="space-y-2">
            <li><Link href="/member-portal" className="hover:text-rose-500">Member Portal Login</Link></li>
            <li><Link href="/member-portal/progress" className="hover:text-rose-500">Personal Record Log</Link></li>
            <li><Link href="/shop" className="hover:text-rose-500">Apparel & Supplements</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Strength Front Desk</h4>
          <p className="text-slate-400">24/7 Gym Floor Line:</p>
          <p className="text-rose-500 font-bold mt-1 text-sm">+1 (800) IRON-FIT</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-orange-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
