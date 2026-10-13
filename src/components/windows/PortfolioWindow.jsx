import Window from '../Window';
import { 
  Briefcase, 
  Sparkles, 
  Palette, 
  Code2, 
  Terminal, 
  Layers, 
  ArrowRight, 
  Maximize2, 
  CheckCircle2, 
  Calendar, 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  ChevronDown,
  ArrowLeft,
  Globe,
  Send
} from 'lucide-react';
import { useState, useMemo } from 'react';

const PROJECTS = [
  {
    id: 'saas-analytics-dashboard',
    title: 'B2B SaaS Analytics & Revenue Dashboard',
    category: 'design',
    categoryName: 'Дизайн',
    tagline: 'Панель бизнес-аналитики для агрегации финансовых потоков и визуализации KPI',
    image: './portfolio/saas-dashboard.webp',
    isLongPage: false,
    scrollDuration: '8s',
    url: 'analytics.b2b-saas.io',
    year: '2026',
    badge: 'UI/UX Дизайн',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Панель бизнес-аналитики для агрегации финансовых потоков, валидации транзакций и визуализации KPI сервисного бизнеса.',
    tags: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'TanStack Table', 'Lucide Icons', 'TypeScript'],
    features: [
      'Агрегация финансовых потоков и чистой маржинальности',
      'Интерактивные Smooth Area и Donut графики',
      'Валидация транзакций и фильтрация аномалий CRM',
    ],
  },
  {
    id: 'monolith-audio-landing',
    title: 'Monolith Audio Landing',
    category: 'design',
    categoryName: 'Дизайн',
    tagline: 'Концептуальный промо-лендинг премиального звукового оборудования',
    image: './portfolio/monolith-audio.webp',
    isLongPage: true,
    scrollDuration: '24s',
    url: 'monolith-audio.swiss',
    year: '2026',
    badge: 'UI/UX Дизайн',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Концептуальный промо-лендинг премиального звукового оборудования в строгой швейцарской типографике и монохроме.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Швейцарская сетка (Swiss Grid)', 'Моноширинные шрифты (JetBrains Mono)'],
    features: [
      'Строгая швейцарская сетка (Swiss Grid) и монохромная эстетика',
      'Интерактивный конфигуратор акустики (Build Your Monolith)',
      'Таблицы архитектурного сравнения и технические спецификации',
    ],
  },
  {
    id: 'vortex-ecommerce-showcase',
    title: 'VORTEX // Editorial E-Commerce Showcase',
    category: 'layout',
    categoryName: 'Верстка',
    tagline: 'Журнальный промо-интернет-магазин стритвир-одежды',
    image: './portfolio/vortex-ecommerce.webp',
    isLongPage: true,
    scrollDuration: '24s',
    url: 'vortex.editorial-store.com',
    year: '2026',
    badge: 'Frontend Верстка',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Журнальный промо-интернет-магазин стритвир-одежды с многослойным Hero-блоком (типографика за моделью) и контрастной блочной структурой.',
    tags: ['HTML5', 'CSS3', 'JavaScript / React', 'Tailwind CSS (CSS Grid, Flexbox, z-index layering)'],
    features: [
      'Многослойный Hero-блок (типографика за силуэтом модели)',
      'Контрастная блочная журнальная структура (Editorial Grid)',
      'Плавная адаптивная витрина товаров и лукбука',
    ],
  },
  {
    id: 'lead-automation-engine',
    title: 'B2B Lead Automation & Enrichment Engine',
    category: 'coding',
    categoryName: 'Кодинг',
    tagline: 'Асинхронный парсер гео-сервисов и автоматизация обогащения лидов',
    image: './portfolio/lead-engine.webp',
    isLongPage: false,
    scrollDuration: '8s',
    url: 'audit-core.engine.internal',
    year: '2026',
    badge: 'Кодинг & Автоматизация',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Асинхронный парсер гео-сервисов с отсечением компаний с готовыми сайтами, нормализацией телефонов и генерацией ссылок wa.me в Excel.',
    tags: ['Python 3.11+', 'Playwright (Async API)', 'Pandas', 'OpenPyXL', 'Pydantic v2', 'Regular Expressions (RegEx)'],
    features: [
      'Асинхронный парсинг гео-сервисов (Playwright Async API)',
      'Отсечение компаний с готовыми сайтами и валидация данных (Pydantic v2)',
      'Нормализация телефонов и генерация ссылок wa.me в Excel (Pandas / OpenPyXL)',
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Все кейсы', icon: Layers },
  { id: 'design', label: '1. Дизайн', icon: Palette, color: 'text-purple-600' },
  { id: 'layout', label: '2. Верстка', icon: Code2, color: 'text-blue-600' },
  { id: 'coding', label: '3. Кодинг', icon: Terminal, color: 'text-emerald-600' },
];

export default function PortfolioWindow({ isOpen, onClose, onOpenContact, onOpenServices }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const counts = useMemo(() => {
    return {
      all: PROJECTS.length,
      design: PROJECTS.filter((p) => p.category === 'design').length,
      layout: PROJECTS.filter((p) => p.category === 'layout').length,
      coding: PROJECTS.filter((p) => p.category === 'coding').length,
    };
  }, []);

  const windowTitle = selectedProject 
    ? selectedProject.title 
    : 'Портфолио';

  return (
    <Window title={windowTitle} isOpen={isOpen} onClose={onClose} width="w-full max-w-5xl lg:max-w-6xl">
      {/* If a project is selected, render full detail screenshot view directly inside the window */}
      {selectedProject ? (
        <div className="space-y-4 py-1 animate-in fade-in duration-200">
          
          {/* Sub-Header Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-2.5 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Все кейсы</span>
              </button>

              <div className="hidden sm:flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg text-xs font-mono text-gray-600 truncate max-w-[200px]">
                <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="truncate">https://{selectedProject.url}</span>
              </div>
            </div>

            {/* Zoom Controls & Order CTA */}
            <div className="flex items-center gap-1.5 ml-auto">
              <div className="flex items-center bg-gray-100 rounded-xl border border-gray-200 p-0.5 text-xs text-gray-700">
                <button
                  onClick={() => setZoomScale((prev) => Math.max(0.6, prev - 0.2))}
                  className="px-1.5 py-1 hover:bg-white rounded-lg cursor-pointer transition-colors"
                  title="Уменьшить"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 font-mono text-[10px] sm:text-[11px] font-semibold">{Math.round(zoomScale * 100)}%</span>
                <button
                  onClick={() => setZoomScale((prev) => Math.min(1.4, prev + 0.2))}
                  className="px-1.5 py-1 hover:bg-white rounded-lg cursor-pointer transition-colors"
                  title="Увеличить"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact();
                }}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all shadow-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Заказать</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Project Summary Strip */}
          <div className="bg-gray-50/90 rounded-xl p-3 sm:p-3.5 border border-gray-200/80 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs">
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-gray-900 text-xs sm:text-sm">{selectedProject.title}</span>
                <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md border ${selectedProject.badgeBg}`}>
                  {selectedProject.badge}
                </span>
              </div>
              <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">{selectedProject.description}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              {selectedProject.tags.slice(0, 4).map((tag, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 bg-white text-gray-700 rounded border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full High-Resolution Screenshot Canvas */}
          <div className="bg-[#07090e] rounded-xl sm:rounded-2xl border border-gray-800 p-2 sm:p-6 overflow-y-auto max-h-[52dvh] sm:max-h-[62vh] flex justify-center scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent shadow-inner">
            <div 
              className="transition-all duration-200 origin-top"
              style={{ width: `${Math.round(zoomScale * 100)}%`, maxWidth: zoomScale > 1 ? '100%' : '950px' }}
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Standard 3-Category Projects Grid View */
        <div className="space-y-6 py-2 px-1 sm:px-3">
          
          {/* Header Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-purple-600 via-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-black text-gray-950 tracking-tight flex items-center gap-2">
                  <span>Портфолио</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    {filteredProjects.length} кейс(а)
                  </span>
                </h1>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                  Реализованные проекты по направлениям: Дизайн, Верстка и Кодинг
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gray-950 hover:bg-black text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Обсудить задачу</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-gray-100/80 rounded-xl sm:rounded-2xl border border-gray-200/80">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-gray-950 shadow-sm border border-gray-200/80'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-600' : 'text-gray-400'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-purple-100 text-purple-800' : 'bg-gray-200/80 text-gray-600'
                  }`}>
                    {counts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="rounded-2xl border border-gray-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Header Mockup */}
                  <div className="bg-[#121622] px-3.5 py-2 border-b border-gray-800 flex items-center justify-between select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 truncate max-w-[170px] sm:max-w-[200px]">
                      https://{project.url}
                    </span>
                    <span className="text-[10px] text-gray-500 font-semibold">{project.year}</span>
                  </div>

                  {/* Screenshot Frame Area with Calibrated Uniform Speed on Hover */}
                  <div 
                    onMouseEnter={() => setHoveredCardId(project.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() => {
                      setSelectedProject(project);
                      setZoomScale(1);
                    }}
                    className="relative h-56 sm:h-72 bg-[#07090e] overflow-hidden cursor-pointer group/img border-b border-gray-100 select-none flex items-start justify-center"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full object-cover object-top"
                      style={{
                        transform: hoveredCardId === project.id 
                          ? 'translateY(calc(-100% + 18rem))' 
                          : 'translateY(0)',
                        transitionProperty: 'transform',
                        transitionDuration: hoveredCardId === project.id 
                          ? (project.scrollDuration || '10s') 
                          : '2s',
                        transitionTimingFunction: hoveredCardId === project.id 
                          ? 'linear' 
                          : 'ease-out',
                      }}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-end pb-4 pointer-events-none">
                      <span className="bg-white/95 backdrop-blur-md text-black text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Открыть скриншот</span>
                      </span>
                    </div>

                    {/* Badges on Top */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border shadow-xs ${project.badgeBg}`}>
                        {project.badge}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-white/95 bg-black/75 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-white/10 shadow-xs">
                        <ChevronDown className="w-3 h-3 animate-bounce" />
                        <span>Скролл</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Info Body */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-950 leading-snug group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-normal">{project.tagline}</p>
                    </div>

                    {/* Essence / Суть */}
                    <div className="bg-gray-50/90 p-3 sm:p-3.5 rounded-xl border border-gray-200/70 text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900 block mb-0.5">Суть проекта:</span>
                      {project.description}
                    </div>

                    {/* Tech stack tags */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 block uppercase tracking-wider">
                        Технологии и инструменты:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 bg-gray-100 text-gray-800 rounded-md border border-gray-200/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="pt-2 border-t border-gray-100 space-y-1">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 sm:p-5 pt-0 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setZoomScale(1);
                    }}
                    className="w-full sm:flex-1 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Смотреть</span>
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      if (onOpenContact) onOpenContact();
                    }}
                    className="w-full sm:flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span>Заказать</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gray-900 via-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5 justify-center sm:justify-start">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Индивидуальный дизайн, верстка или разработка под ключ?</span>
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400">
                Быстрая оценка сроков и стоимости, работа по договору оферты.
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {onOpenServices && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenServices();
                  }}
                  className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Услуги
                </button>
              )}
              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact();
                }}
                className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Связаться</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Window>
  );
}
