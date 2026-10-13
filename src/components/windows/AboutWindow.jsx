import Window from '../Window';
import { Code2, CheckCircle2, ArrowRight, Sparkles, Terminal, Rocket, Layers } from 'lucide-react';

export default function AboutWindow({ isOpen, onClose, onOpenContact, onOpenServices, onOpenPortfolio }) {
  const stack = [
    { name: 'Frontend', items: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'TypeScript', 'Redux / Zustand'] },
    { name: 'Backend & API', items: ['Node.js', 'Express', 'REST API', 'WebSockets', 'PostgreSQL', 'Telegram API'] },
    { name: 'Инструменты & UX', items: ['Figma', 'Git', 'Vercel / VPS', 'CI/CD', 'Responsive Design', 'SEO'] },
  ];

  return (
    <Window title="Обо мне" isOpen={isOpen} onClose={onClose} width="w-full max-w-4xl lg:max-w-5xl">
      <div className="space-y-4 sm:space-y-6">
        {/* Main Card Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-200/80">
          {/* Profile Picture Frame */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-gray-100 shrink-0 relative group">
            <img 
              src="./avatar.png?v=3" 
              alt="Инякин Дмитрий" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "./me.jpg";
              }}
            />
          </div>

          <div className="space-y-1.5 sm:space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Инякин Дмитрий</h2>
              <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">Kupets Studio</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold border border-blue-100">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Full-Stack Web Developer & UI Designer</span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="bg-gray-50/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-gray-200/70 divide-y divide-gray-200/60 shadow-2xs">
          <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 text-xs sm:text-sm">
            <span className="font-semibold text-gray-500 sm:w-44 shrink-0">Специализация:</span>
            <span className="font-medium text-gray-900 flex-1">Веб-разработка, интерактивные веб-сервисы, лендинги и веб-приложения.</span>
          </div>

          <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 text-xs sm:text-sm">
            <span className="font-semibold text-gray-500 sm:w-44 shrink-0">Формат работы:</span>
            <span className="font-medium text-gray-900 flex-1">Разработка под ключ: от идеи и дизайн-концепта до развертывания на сервере.</span>
          </div>

          <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 text-xs sm:text-sm">
            <span className="font-semibold text-gray-500 sm:w-44 shrink-0">Статус занятости:</span>
            <span className="font-semibold text-emerald-600 flex items-center gap-1.5 flex-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Доступен для новых проектов
            </span>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Стек технологий</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
            {stack.map((group, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs space-y-1.5 sm:space-y-2">
                <div className="text-xs font-bold text-gray-900">{group.name}</div>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item, i) => (
                    <span key={i} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-gray-100 font-medium text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Paragraph */}
        <div className="bg-gradient-to-br from-purple-50/50 to-blue-50/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-purple-100/80 shadow-2xs space-y-1.5">
          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Философия и подход</span>
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal">
            Создаю быстрые, отзывчивые и продуманные до мелочей сайты и сервисы. Делаю упор на надежную архитектуру, чистый код без лишних зависимостей и внимание к деталям UX/UI.
          </p>
        </div>

        {/* Quick Actions Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Чистый код • Сдача в срок • Договор оферты</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                if (onOpenPortfolio) onOpenPortfolio();
              }}
              className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Портфолио</span>
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenServices) onOpenServices();
              }}
              className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Услуги</span>
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenContact) onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Контакты</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
}
