'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="text-4xl text-red-500 font-black mb-3">SYSTEM OVERLOAD</div>
      <h2 className="text-xl font-bold uppercase mb-2">Member Portal Exception</h2>
      <p className="text-gray-400 text-xs max-w-md mb-6">
        An error occurred while synchronizing training logs or class reservations.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-black text-xs rounded-xl transition-colors uppercase tracking-widest"
      >
        Reset Training Session
      </button>
    </div>
  );
}
