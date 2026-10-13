import Window from '../Window';
import { 
  FileText, 
  CheckCircle, 
  Code2, 
  Sparkles, 
  Search, 
  Pin, 
  Clock, 
  Tag, 
  Folder, 
  Check, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { useState, useMemo } from 'react';

const NOTES = [
  {
    id: 'clean-code',
    title: 'Чистый код — основа стабильности',
    category: 'Архитектура',
    categoryId: 'arch',
    tag: '#react19',
    priority: 'Главный принцип',
    pinned: true,
    readTime: '1 мин',
    date: 'Сегодня, 14:20',
    icon: Code2,
    color: 'bg-blue-50/70 border-blue-200/80 text-blue-950',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
    content: 'Код пишется для людей, а выполняется машинами. Понятная модульная структура, типизация и отсутствие оверинжиниринга сокращают время дальнейшей поддержки в разы.',
    points: [
      'Изоляция логики в кастомные хуки и сервисы',
      'Отсутствие дублирования и "магических чисел"',
      'Строгая типизация и 0 ошибок линтера в проде',
    ],
  },
  {
    id: 'results-focus',
    title: 'Работа на бизнес-результат',
    category: 'Процессы',
    categoryId: 'process',
    tag: '#delivery',
    priority: 'Фокус',
    pinned: true,
    readTime: '1 мин',
    date: 'Вчера, 18:45',
    icon: CheckCircle,
    color: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    content: 'Красивый интерфейс без четко работающей конверсии не приносит пользы заказчику. Задача каждого проекта — решать конкретные бизнес-цели и привлекать клиентов.',
    points: [
      'Понятная навигация и быстрый путь к заявке',
      'Интеграция прямого заказа в Telegram и CRM',
      'Четкое соблюдение оговоренных дедлайнов',
    ],
  },
  {
    id: 'refactor-perf',
    title: 'Производительность и Speed Index',
    category: 'Оптимизация',
    categoryId: 'perf',
    tag: '#performance',
    priority: 'Стандарт',
    pinned: false,
    readTime: '2 мин',
    date: '15 авг, 11:15',
    icon: Cpu,
    color: 'bg-purple-50/70 border-purple-200/80 text-purple-950',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    content: 'Оптимизация бандла, сжатие медиа-ресурсов и использование современных веб-технологий обеспечивают мгновенную загрузку страниц на мобильных и десктопах.',
    points: [
      'Сборка на Vite с быстрым HMR и минификацией',
      'Lighthouse Score 95+ (Performance, SEO)',
      'Ленивая загрузка тяжелых компонентов и картинок',
    ],
  },
  {
    id: 'details-ux',
    title: 'Внимание к деталям и микро-UX',
    category: 'Дизайн',
    categoryId: 'design',
    tag: '#ui_ux',
    priority: 'Эстетика',
    pinned: false,
    readTime: '1 мин',
    date: '12 авг, 09:30',
    icon: Sparkles,
    color: 'bg-amber-50/70 border-amber-200/80 text-amber-950',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    content: 'Плавные анимации, тактильный отклик кнопок, микро-взаимодействия и выверенная типографика формируют доверие пользователя с первой секунды.',
    points: [
      'Адаптивность под экраны от 360px до 4K',
      'Гармоничная цветовая палитра и контрастность',
      'Естественные переходы без подергиваний',
    ],
  },
  {
    id: 'security-reliability',
    title: 'Надежность и прозрачность',
    category: 'Процессы',
    categoryId: 'process',
    tag: '#guarantee',
    priority: 'Договор',
    pinned: false,
    readTime: '1 мин',
    date: '08 авг, 16:00',
    icon: ShieldCheck,
    color: 'bg-slate-50 border-slate-200/90 text-slate-900',
    badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
    content: 'Официальная работа по договору самозанятого, поэтапное согласование, прозрачная отчетность и гарантийная поддержка проекта после запуска.',
    points: [
      'Договор оферты и электронные чеки',
      'Поэтапная демонстрация промежуточных версий',
      'Бесплатное исправление багов после сдачи',
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Все записи', count: NOTES.length },
  { id: 'arch', label: 'Архитектура', count: NOTES.filter(n => n.categoryId === 'arch').length },
  { id: 'process', label: 'Процессы', count: NOTES.filter(n => n.categoryId === 'process').length },
  { id: 'perf', label: 'Оптимизация', count: NOTES.filter(n => n.categoryId === 'perf').length },
  { id: 'design', label: 'Дизайн & UX', count: NOTES.filter(n => n.categoryId === 'design').length },
];

export default function NotesWindow({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNotes = useMemo(() => {
    return NOTES.filter((note) => {
      const matchesCategory = selectedCategory === 'all' || note.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q || 
        note.title.toLowerCase().includes(q) || 
        note.content.toLowerCase().includes(q) || 
        note.tag.toLowerCase().includes(q) ||
        note.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Window title="Заметки" isOpen={isOpen} onClose={onClose} width="w-full max-w-4xl lg:max-w-5xl">
      <div className="space-y-5">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Заметки и Стандарты</h2>
              <p className="text-xs text-gray-500">Принципы построения качественных веб-приложений</p>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по заметкам и тегам..."
              className="w-full pl-8.5 pr-3 py-1.5 bg-gray-100 hover:bg-gray-150 focus:bg-white text-xs text-gray-800 rounded-lg border border-gray-200 focus:border-amber-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-gray-950 shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.id ? 'bg-amber-500 text-black' : 'bg-gray-200 text-gray-600'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-xs">
            Заметок по запросу «{searchQuery}» не найдено.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNotes.map((note) => {
              const Icon = note.icon;
              return (
                <div 
                  key={note.id} 
                  className={`p-5 rounded-2xl border transition-all duration-200 hover:shadow-md flex flex-col justify-between space-y-3.5 shadow-2xs ${note.color}`}
                >
                  <div className="space-y-2.5">
                    {/* Top Metadata Row */}
                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <div className="flex items-center gap-1.5">
                        {note.pinned && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-200/80 text-amber-900 font-bold">
                            <Pin className="w-3 h-3" />
                            <span>Закреплено</span>
                          </span>
                        )}
                        <span className={`font-bold px-2 py-0.5 rounded-md border ${note.badgeBg}`}>
                          {note.priority}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          {note.readTime}
                        </span>
                        <span>•</span>
                        <span>{note.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold tracking-tight text-gray-900 flex items-center gap-2">
                      <Icon className="w-4.5 h-4.5 shrink-0 opacity-80" />
                      <span>{note.title}</span>
                    </h3>

                    {/* Content */}
                    <p className="text-xs leading-relaxed text-gray-700 font-normal">
                      {note.content}
                    </p>

                    {/* Key points checklist */}
                    <div className="pt-2 border-t border-black/5 space-y-1.5">
                      {note.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tags / Category Footer */}
                  <div className="pt-1.5 flex items-center justify-between text-[10px] text-gray-500 border-t border-black/5">
                    <span className="flex items-center gap-1 font-medium">
                      <Folder className="w-3 h-3 text-gray-400" />
                      {note.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono font-semibold text-gray-600 bg-white/60 px-2 py-0.5 rounded-md border border-black/5">
                      <Tag className="w-2.5 h-2.5" />
                      {note.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Window>
  );
}
