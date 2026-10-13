import { X, Minus, Maximize2 } from 'lucide-react';
import { useEffect } from 'react';

export default function Window({ title, onClose, children, isOpen, width = 'w-full max-w-4xl lg:max-w-5xl' }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200 cursor-default"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`${width} bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92dvh] sm:max-h-[88vh] animate-in zoom-in-95 duration-200 cursor-auto`}
      >
        {/* macOS Window Header */}
        <div className="bg-white/80 border-b border-black/5 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between select-none shrink-0">
          {/* Window Controls */}
          <div className="flex items-center gap-2 w-16 sm:w-20">
            <button 
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:bg-[#ff4f47] active:scale-90 flex items-center justify-center group cursor-pointer"
              title="Закрыть (Esc)"
            >
              <X className="w-2.5 h-2.5 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border border-[#d3a123] hover:bg-[#feb31e] active:scale-90 flex items-center justify-center group cursor-pointer"
              title="Свернуть"
            >
              <Minus className="w-2.5 h-2.5 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              className="w-3.5 h-3.5 rounded-full bg-[#28c840] border border-[#1ea231] hover:bg-[#22b737] active:scale-90 flex items-center justify-center group cursor-pointer"
              title="Развернуть"
            >
              <Maximize2 className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Window Title */}
          <div className="text-[11px] sm:text-xs font-semibold text-gray-700 tracking-wide truncate max-w-[60%] sm:max-w-[50%] text-center">
            {title}
          </div>

          {/* Spacer to align center */}
          <div className="w-16 sm:w-20 flex justify-end">
            <button 
              onClick={onClose} 
              className="sm:hidden text-gray-400 hover:text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-3.5 sm:p-6 md:p-8 overflow-y-auto flex-1 text-gray-800 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );
}
