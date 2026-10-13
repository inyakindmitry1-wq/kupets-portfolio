import Window from '../Window';
import { ArrowUpRight } from 'lucide-react';

export default function ContactsWindow({ isOpen, onClose }) {
  const contacts = [
    {
      label: 'TELEGRAM',
      value: '@kupetsnovgorodny',
      href: 'https://t.me/kupetsnovgorodny',
    },
    {
      label: 'WHATSAPP',
      value: '+7 (931) 611-70-82',
      href: 'https://wa.me/79316117082',
    },
    {
      label: 'EMAIL',
      value: 'inyakindmitry1@gmail.com',
      href: 'mailto:inyakindmitry1@gmail.com',
    },
  ];

  return (
    <Window title="Контакты" isOpen={isOpen} onClose={onClose} width="w-full max-w-4xl lg:max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center py-1 sm:py-2 px-1 sm:px-4">
        
        {/* Left Column: Details & Links */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              Обсудим проект.
            </h1>
            <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed font-normal">
              Напишите, какой сайт вам нужен, чем занимается ваш проект и есть ли примеры, которые вам нравятся. Я задам уточняющие вопросы и предложу следующий шаг.
            </p>
          </div>

          {/* Contact rows matching Photo 2 */}
          <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 sm:py-4.5 flex items-center justify-between group hover:bg-gray-50/50 px-1 sm:px-2 rounded-xl transition-all cursor-pointer"
              >
                <div className="w-22 sm:w-28 text-[11px] sm:text-xs font-semibold tracking-wider text-gray-700 uppercase font-mono">
                  {contact.label}
                </div>

                <div className="flex-1 text-[11px] sm:text-sm font-medium text-gray-600 font-mono group-hover:text-blue-600 transition-colors truncate pr-2">
                  {contact.value}
                </div>

                {/* Blue square button with ArrowUpRight matching Photo 2 */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-500 group-hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition-all transform group-hover:scale-105 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: AirDrop Radar Locator with KUPETS */}
        <div className="flex items-center justify-center p-3 sm:p-6 relative select-none">
          <div className="relative w-52 h-52 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Outer Concentric Radar Circles */}
            <div className="absolute inset-0 rounded-full border border-blue-200/60" />
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-blue-200/50" />
            <div className="absolute inset-12 sm:inset-16 rounded-full border border-blue-200/40" />
            <div className="absolute inset-18 sm:inset-24 rounded-full border border-blue-300/40" />

            {/* Radar Sweep Rotating Beam */}
            <div 
              className="absolute inset-2 rounded-full pointer-events-none opacity-40 animate-spin"
              style={{ 
                animationDuration: '6s', 
                background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(59, 130, 246, 0.35) 360deg)' 
              }} 
            />

            {/* Soft Ambient Radial Wave */}
            <div className="absolute inset-8 sm:inset-10 rounded-full bg-blue-500/5 animate-pulse" />

            {/* Center Black Circle Node with KUPETS text */}
            <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-black text-white flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white ring-4 sm:ring-8 ring-blue-500/15 group hover:scale-105 transition-transform">
              <div className="text-center">
                <span className="font-mono font-bold text-[11px] sm:text-sm tracking-widest block text-white">
                  KUPETS
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-400 font-medium flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  AirDrop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
