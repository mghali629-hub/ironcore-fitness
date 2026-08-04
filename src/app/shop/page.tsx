'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function IronCoreShopPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'IronCore Heavy Lifting Belt', price: 89.99, category: 'Equipment', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80' },
    { id: 2, name: 'Pro Wrist Wraps (Pair)', price: 29.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80' },
    { id: 3, name: 'IronCore Whey Isolate 2kg', price: 64.99, category: 'Supplements', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&q=80' },
  ]);

  useEffect(() => {
    fetch('/api/shop-products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProducts(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">OFFICIAL ATHLETIC GEAR</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase tracking-tight">IronCore <span className="text-red-500">Shop</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">High-performance gear, apparel, and pharmaceutical-grade supplements engineered for hardcore training.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-[#141414] border border-gray-800 rounded-3xl overflow-hidden group hover:border-red-500/50 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
              <div className="p-6">
                <span className="text-xs text-red-500 font-bold uppercase tracking-widest">{p.category}</span>
                <h3 className="text-xl font-black uppercase text-white mt-1 mb-3">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-500">${p.price.toFixed(2)}</span>
                  <Link href={`/shop/${p.id}`} className="bg-red-500 hover:bg-red-600 text-white font-black px-6 py-2.5 rounded-xl text-xs tracking-widest uppercase transition-colors">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
