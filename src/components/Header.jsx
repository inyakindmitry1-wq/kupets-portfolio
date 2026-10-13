import { useState, useEffect } from 'react';

export default function Header({ onOpenWindow }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md text-black px-3 sm:px-4 py-1 flex justify-between items-center text-xs font-medium shadow-xs border-b border-black/5 select-none h-[36px] sm:h-[38px]">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Functional Logo */}
        <div 
          onClick={() => onOpenWindow && onOpenWindow('about')}
          className="font-bold text-xs flex items-center gap-1.5 sm:gap-2 tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-black"></span>
          <span>Kupets</span>
        </div>

        {/* Desktop-only Menu Items */}
        <div className="hidden md:flex items-center gap-4 text-black/70 font-normal text-xs cursor-default">
          <span>Файл</span>
          <span>Правка</span>
          <span>Вид работы</span>
          <span>Контакт</span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        {/* Availability Badge */}
        <div className="flex items-center gap-1.5 bg-emerald-50 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-full border border-emerald-200/60 sm:border-0">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
          <span className="text-black/80 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
            <span className="hidden xs:inline">Доступен </span>для проектов
          </span>
        </div>

        {/* Live Clock */}
        <div className="font-sans text-xs font-semibold tracking-tight text-gray-800">
          {formattedTime}
        </div>
      </div>
    </header>
  );
}
