
import React, { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, Lock, RefreshCcw } from 'lucide-react';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleReset = () => {
    setRevealed(false);
  };

  return (
    <div className={`relative min-h-screen bg-black transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
      {/* Animated Professional Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-orange-900 to-black animate-gradient opacity-60"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-red-600/10 blur-[150px] rounded-full animate-pulse [animation-delay:3s]"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
        {!revealed ? (
          <div className="max-w-3xl w-full text-center space-y-12 fade-in-blur">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-orange-500">
                <ShieldAlert size={48} className="animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
                Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Protocol</span>
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl font-light tracking-widest uppercase">
                Encrypted Visual Authorization Required
              </p>
            </div>

            <div className="flex justify-center pt-10">
              <button
                onClick={handleReveal}
                className="group relative px-12 py-6 bg-white text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500 uppercase tracking-widest">
                  <Fingerprint size={24} />
                  Initiate Reveal
                </span>
              </button>
            </div>

            <div className="pt-20 grid grid-cols-3 gap-8 opacity-30 grayscale pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                    <Lock size={20} className="text-white" />
                    <span className="text-[10px] text-white uppercase tracking-widest">AES-256</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ShieldAlert size={20} className="text-white" />
                    <span className="text-[10px] text-white uppercase tracking-widest">Quantum Link</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Fingerprint size={20} className="text-white" />
                    <span className="text-[10px] text-white uppercase tracking-widest">Biometric</span>
                </div>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black fade-in-blur">
             <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-transparent"></div>
             
             <div className="relative group max-w-lg w-full">
                {/* The "Fun" Image Reveal */}
                <div className="relative overflow-hidden rounded-[40px] border-4 border-orange-500/30 shadow-[0_0_100px_rgba(249,115,22,0.2)] transform animate-[bounce_2s_infinite]">
                    <img 
                        src="data:image/jpeg;base64,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" 
                        alt="Mystery Reveal" 
                        className="w-full h-auto grayscale-0 group-hover:scale-105 transition-transform duration-700"
                        onLoad={() => {
                            // Using the direct visual reference intended: a Gorilla with attitude.
                            // In a real environment, this would be the provided base64 or local asset.
                        }}
                    />
                    {/* Fallback/Overlay for the joke */}
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                         <div className="text-white/10 text-9xl font-black">?</div>
                    </div>
                </div>

                <div className="mt-12 text-center space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase animate-pulse">
                        Access <span className="text-orange-500 underline decoration-red-600">Denied</span>
                    </h2>
                    <p className="text-neutral-400 text-sm tracking-[0.5em] uppercase font-bold">
                        Reason: Attitude Too Great
                    </p>
                    
                    <button 
                        onClick={handleReset}
                        className="mt-8 flex items-center gap-2 mx-auto text-orange-500/60 hover:text-orange-500 transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                        <RefreshCcw size={16} />
                        Restart Authorization
                    </button>
                </div>
             </div>
          </div>
        )}
      </main>

      <footer className="fixed bottom-8 left-0 right-0 text-center opacity-20 transition-opacity hover:opacity-100">
        <p className="text-white text-[10px] tracking-[1em] uppercase font-light">
          Authorized Personnel Only // Session ID: {Math.random().toString(36).substring(7).toUpperCase()}
        </p>
      </footer>
    </div>
  );
};

export default App;
