'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

const mealPlans = [
  { name: 'Muscle Builder', calories: 3200, protein: '220g', carbs: '380g', fat: '80g', meals: 5, goal: 'Muscle Gain', color: 'border-red-500' },
  { name: 'Lean & Shred', calories: 2000, protein: '180g', carbs: '180g', fat: '60g', meals: 4, goal: 'Fat Loss', color: 'border-blue-500' },
  { name: 'Athletic Performance', calories: 2800, protein: '170g', carbs: '320g', fat: '70g', meals: 5, goal: 'Performance', color: 'border-green-500' },
  { name: 'Recovery & Maintenance', calories: 2400, protein: '150g', carbs: '250g', fat: '75g', meals: 4, goal: 'Maintenance', color: 'border-yellow-500' },
];

export default function NutritionPage() {
  const [weight, setWeight] = useState(80);
  const [goal, setGoal] = useState<'gain' | 'lose' | 'maintain'>('gain');

  const tdee = Math.round(weight * 30 + (goal === 'gain' ? 500 : goal === 'lose' ? -500 : 0));
  const protein = Math.round(weight * 2.2);
  const carbs = Math.round((tdee * 0.45) / 4);
  const fat = Math.round((tdee * 0.25) / 9);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-500/10 px-4 py-2 rounded-full">SPORTS NUTRITION</span>
          <h1 className="text-5xl font-black mt-4 mb-4 uppercase">Fuel Your <span className="text-red-500">Performance</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Precision nutrition plans crafted by certified sports dietitians — tailored to your body composition goals.</p>
        </div>

        {/* Macro Calculator */}
        <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-black mb-6 uppercase tracking-wide">🔢 Macro Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-xs text-gray-400 font-bold block mb-2">BODYWEIGHT (kg): <span className="text-red-500">{weight} kg</span></label>
                <input type="range" min={50} max={150} value={weight} onChange={e => setWeight(Number(e.target.value))}
                  className="w-full accent-red-500" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-bold block mb-2">PRIMARY GOAL</label>
                <div className="flex gap-3">
                  {(['gain', 'lose', 'maintain'] as const).map(g => (
                    <button key={g} onClick={() => setGoal(g)}
                      className={`flex-1 py-2 rounded-xl text-sm font-bold uppercase transition-colors ${goal === g ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                      {g === 'gain' ? '💪 Gain' : g === 'lose' ? '🔥 Lose' : '⚖️ Maintain'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-6">
              <div className="text-xs text-gray-400 mb-3 font-bold">YOUR DAILY TARGETS</div>
              <div className="text-4xl font-black text-red-500 mb-4">{tdee} <span className="text-lg text-gray-400">kcal/day</span></div>
              <div className="grid grid-cols-3 gap-3">
                {[{ label: 'Protein', val: `${protein}g`, color: 'text-red-400' }, { label: 'Carbs', val: `${carbs}g`, color: 'text-yellow-400' }, { label: 'Fat', val: `${fat}g`, color: 'text-blue-400' }].map((m, i) => (
                  <div key={i} className="text-center bg-gray-900 rounded-xl p-3">
                    <div className={`text-xl font-black ${m.color}`}>{m.val}</div>
                    <div className="text-xs text-gray-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meal Plans */}
        <h2 className="text-2xl font-black mb-6 uppercase tracking-wide">🍽️ Expert Meal Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mealPlans.map((plan, i) => (
            <div key={i} className={`bg-[#141414] border-2 ${plan.color} rounded-2xl p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black uppercase">{plan.name}</h3>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{plan.goal}</span>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[{ l: 'Calories', v: plan.calories }, { l: 'Protein', v: plan.protein }, { l: 'Carbs', v: plan.carbs }, { l: 'Fat', v: plan.fat }].map((m, j) => (
                  <div key={j} className="text-center bg-black rounded-xl p-3">
                    <div className="text-lg font-black text-white">{m.v}</div>
                    <div className="text-xs text-gray-500">{m.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{plan.meals} meals/day · Prepared by certified sports dietitians</p>
              <button className="mt-4 w-full py-2.5 rounded-xl border border-gray-700 text-white text-sm font-bold hover:bg-white/5 transition-colors uppercase">View Full Plan</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
