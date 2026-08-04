'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="text-6xl font-black text-red-500 mb-4 tracking-tighter">404</div>
        <h1 className="text-3xl font-black uppercase mb-2">PAGE OUT OF BOUNDS</h1>
        <p className="text-gray-400 text-xs max-w-md mb-8">
          The fitness session, trainer bio, or equipment spec page you requested could not be located in IronCore registry.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-colors"
          >
            Gym Homepage
          </Link>
          <Link
            href="/classes"
            className="px-6 py-3 bg-[#141414] hover:bg-[#222] text-red-500 font-black rounded-xl text-xs uppercase tracking-widest border border-gray-800 transition-colors"
          >
            Class Schedule
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
