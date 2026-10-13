import { useState } from 'react';
import Header from './components/Header';
import Dock from './components/Dock';
import { Folder } from 'lucide-react';
import AboutWindow from './components/windows/AboutWindow';
import PortfolioWindow from './components/windows/PortfolioWindow';
import ServicesWindow from './components/windows/ServicesWindow';
import ContactsWindow from './components/windows/ContactsWindow';
import PrivacyWindow from './components/windows/PrivacyWindow';
import OfferWindow from './components/windows/OfferWindow';
import NotesWindow from './components/windows/NotesWindow';
import MusicWindow from './components/windows/MusicWindow';
import BrowserWindow from './components/windows/BrowserWindow';

function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (windowId) => {
    setActiveWindow(windowId);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  const desktopFolders = [
    { id: 'about', name: 'ОБО МНЕ', notification: null, action: () => openWindow('about') },
    { id: 'portfolio', name: 'ПОРТФОЛИО', notification: '3', action: () => openWindow('portfolio') },
    { id: 'services', name: 'ПРАЙС И УСЛУГИ', notification: null, action: () => openWindow('services') },
    { id: 'notes', name: 'ЗАМЕТКИ', notification: '5', action: () => openWindow('notes') },
    { id: 'contacts', name: 'КОНТАКТЫ', notification: null, action: () => openWindow('contacts') },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden relative select-none font-sans">
      {/* Desktop Background Wallpaper */}
      <img 
        src="./wallpaper.png" 
        alt="Desktop Wallpaper" 
        className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Mobile 9:16 Background Wallpaper */}
      <img 
        src="./wallpaper-mobile.webp" 
        alt="Mobile Wallpaper" 
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none"
      />

      {/* Top Status Bar */}
      <Header onOpenWindow={openWindow} />

      {/* Main Desktop Area */}
      <main className="pt-[40px] sm:pt-[44px] pb-20 sm:pb-24 px-3 sm:px-6 h-[100dvh] w-full relative flex flex-col justify-between items-center">
        
        {/* Top Section: Policies & Mobile Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 pt-2 sm:pt-4 z-10">
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
            <button 
              onClick={() => openWindow('privacy')}
              className="bg-white/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-black text-[10px] sm:text-xs font-medium hover:bg-white transition-colors shadow-xs cursor-pointer"
            >
              Конфиденциальность
            </button>
            <button 
              onClick={() => openWindow('offer')}
              className="bg-white/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-black text-[10px] sm:text-xs font-medium hover:bg-white transition-colors shadow-xs cursor-pointer"
            >
              Договор-оферта
            </button>
          </div>

          {/* Mobile Studio Badge (visible only on small screens) */}
          <div className="md:hidden flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-white/40">
            <span className="text-xs font-bold text-black tracking-tight">KUPETS.STUDIO</span>
            <span className="w-1.5 h-1.5 bg-[#ff477e] rounded-full"></span>
          </div>
        </div>

        {/* Floating Left Banner (Desktop only) */}
        <div className="hidden md:block absolute top-[45%] -translate-y-1/2 left-6 lg:left-8 bg-gradient-to-r from-white/90 via-white/70 to-transparent backdrop-blur-md border-l border-t border-white/50 pl-6 lg:pl-7 pr-10 lg:pr-12 py-5 lg:py-6 rounded-[1.75rem] shadow-xl z-10 w-[340px] lg:w-[380px] overflow-hidden pointer-events-none">
          <h1 className="text-[1.9rem] lg:text-[2.2rem] leading-none font-medium tracking-tight text-black flex items-end gap-1.5 mb-1">
            KUPETS.STUDIO<span className="w-2.5 h-2.5 bg-[#ff477e] rounded-full mb-2"></span>
          </h1>
          <p className="text-black/50 text-[9px] lg:text-[10px] font-semibold tracking-[0.2em] uppercase mt-2">
            Веб-дизайнер и разработчик сайтов
          </p>
        </div>

        {/* Desktop / Mobile Folders (Adaptive Grid for Mobile, Centered Flex for Desktop) */}
        <div className="my-auto flex flex-wrap justify-center items-center gap-4 sm:gap-7 lg:gap-9 z-20 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2 py-4">
          {desktopFolders.map((folder) => (
            <div 
              key={folder.id} 
              onClick={folder.action} 
              className="flex flex-col items-center gap-1 sm:gap-1.5 group cursor-pointer w-[76px] sm:w-24 lg:w-26 transition-transform duration-200 hover:-translate-y-1 active:scale-95"
            >
              <div className="relative">
                {/* Folder Icon (Adaptive size ~58px on mobile, 70px on desktop) */}
                <Folder 
                  className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] text-[#3b82f6] fill-[#60a5fa] drop-shadow-md sm:drop-shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  strokeWidth={1} 
                />
                
                {/* Notification Badge */}
                {folder.notification && (
                  <div className="absolute -top-1 -right-1 bg-[#ff477e] text-white text-[9px] sm:text-[10px] font-bold w-4.5 h-4.5 sm:w-5 sm:h-5 flex items-center justify-center rounded-full shadow-md border border-white/60">
                    {folder.notification}
                  </div>
                )}
              </div>
              <span className="text-white text-[10px] sm:text-[11px] font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] text-center break-words px-0.5 line-clamp-2">
                {folder.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Spacer for Dock */}
        <div className="h-4 sm:h-2" />
      </main>

      {/* Interactive macOS Windows */}
      <AboutWindow 
        isOpen={activeWindow === 'about'} 
        onClose={closeWindow} 
        onOpenContact={() => openWindow('contacts')} 
        onOpenServices={() => openWindow('services')}
        onOpenPortfolio={() => openWindow('portfolio')}
      />
      <PortfolioWindow 
        isOpen={activeWindow === 'portfolio'} 
        onClose={closeWindow} 
        onOpenContact={() => openWindow('contacts')} 
        onOpenServices={() => openWindow('services')} 
      />
      <ServicesWindow 
        isOpen={activeWindow === 'services'} 
        onClose={closeWindow} 
        onOpenContact={() => openWindow('contacts')} 
        onOpenPortfolio={() => openWindow('portfolio')}
      />
      <NotesWindow isOpen={activeWindow === 'notes'} onClose={closeWindow} />
      <MusicWindow isOpen={activeWindow === 'music'} onClose={closeWindow} />
      <BrowserWindow isOpen={activeWindow === 'browser'} onClose={closeWindow} onOpenContact={() => openWindow('contacts')} />
      <ContactsWindow isOpen={activeWindow === 'contacts'} onClose={closeWindow} />
      <PrivacyWindow isOpen={activeWindow === 'privacy'} onClose={closeWindow} />
      <OfferWindow isOpen={activeWindow === 'offer'} onClose={closeWindow} />

      {/* Bottom macOS Dock */}
      <Dock onOpenWindow={openWindow} isWindowOpen={!!activeWindow} />
    </div>
  );
}

export default App;
