import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setPhase("done");
        setTimeout(() => {
          setPhase("fading");
          setTimeout(onComplete, 700);
        }, 900);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#0a0a0a] text-gray-100 flex flex-col items-center justify-center transition-opacity duration-700 ${phase === 'fading' ? 'opacity-0' : 'opacity-100'}`}>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7">
        <div className="text-4xl md:text-5xl font-mono font-bold">
          <span
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #06b6d4, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {text}
          </span>
          <span className={`ml-1 text-blue-400 animate-blink ${phase !== 'typing' ? 'opacity-0' : ''}`}>|</span>
        </div>

        <div className="w-52 h-[2px] bg-white/5 rounded-full relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.8)] animate-loading-bar" />
        </div>

        <p className="text-gray-600 text-xs font-mono tracking-[0.3em] uppercase">initializing...</p>
      </div>
    </div>
  );
}