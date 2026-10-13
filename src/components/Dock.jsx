import { Send, FileText, Music, Compass, Mail, FolderKanban, Briefcase } from 'lucide-react';

export default function Dock({ onOpenWindow, isWindowOpen }) {
  const dockItems = [
    { 
      label: 'Telegram', 
      icon: Send, 
      bg: 'bg-[#29b6f6]', 
      fg: 'text-white', 
      action: () => window.open('https://t.me/kupetsnovgorodny', '_blank') 
    },
    { 
      label: 'Портфолио', 
      icon: Briefcase, 
      bg: 'bg-indigo-600', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('portfolio') 
    },
    { 
      label: 'Услуги', 
      icon: FolderKanban, 
      bg: 'bg-purple-600', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('services') 
    },
    { 
      label: 'Заметки', 
      icon: FileText, 
      bg: 'bg-amber-400', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('notes') 
    },
    { 
      label: 'Музыка', 
      icon: Music, 
      bg: 'bg-[#fb7185]', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('music') 
    },
    { 
      label: 'Поиск', 
      icon: Compass, 
      bg: 'bg-blue-500', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('browser') 
    },
    { 
      label: 'Контакты', 
      icon: Mail, 
      bg: 'bg-emerald-500', 
      fg: 'text-white', 
      action: () => onOpenWindow && onOpenWindow('contacts') 
    },
  ];

  return (
    <div 
      className={`fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ease-out ${
        isWindowOpen 
          ? 'translate-y-24 opacity-0 pointer-events-none scale-95' 
          : 'translate-y-0 opacity-100 pointer-events-auto scale-100'
      }`}
    >
      <div className="bg-black/35 backdrop-blur-2xl border border-white/20 rounded-[1.5rem] sm:rounded-[1.75rem] px-2.5 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1.5 sm:gap-2.5 shadow-2xl overflow-visible">
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="group relative flex flex-col items-center shrink-0">
              {/* Tooltip (Desktop hover) */}
              <div className="hidden sm:block absolute -top-11 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <div className="bg-white/95 backdrop-blur-md text-black text-[11px] px-2.5 py-1 rounded-md border border-black/10 whitespace-nowrap shadow-md font-medium">
                  {item.label}
                </div>
              </div>
              
              {/* Icon Container with macOS magnification */}
              <button 
                onClick={item.action}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl hover:scale-120 sm:hover:scale-125 active:scale-95 sm:hover:-translate-y-2 origin-bottom transition-all duration-200 cursor-pointer shadow-md overflow-hidden relative"
                title={item.label}
              >
                <div className={`w-full h-full ${item.bg} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-xs" strokeWidth={2} />
                </div>
              </button>
              
              {/* Active Dot Indicator */}
              <div className="w-1 h-1 rounded-full bg-white/60 mt-0.5 sm:mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
