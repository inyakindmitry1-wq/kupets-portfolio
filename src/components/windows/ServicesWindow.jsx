import Window from '../Window';
import { ArrowRight, MessageSquare, Send } from 'lucide-react';

export default function ServicesWindow({ isOpen, onClose, onOpenContact, onOpenPortfolio }) {
  const steps = [
    {
      num: '01',
      title: 'Брифинг',
      desc: 'Обсуждаем бизнес, аудиторию, задачи и ограничения.',
    },
    {
      num: '02',
      title: 'Структура',
      desc: 'Выстраиваю понятный путь от первого экрана до заявки или покупки.',
    },
    {
      num: '03',
      title: 'Концепция',
      desc: 'Предлагаю визуальное направление и ключевые интерактивы.',
    },
    {
      num: '04',
      title: 'Разработка',
      desc: 'Адаптив, анимации, код, каталог, формы и интеграции.',
    },
    {
      num: '05',
      title: 'Запуск',
      desc: 'Тестирование, подключение домена и поддержка после сдачи.',
    },
  ];

  const pricing = [
    { name: 'Мелкие правки, дизайн или код', price: 'от 2 000 ₽' },
    { name: 'Одностраничный сайт', price: 'от 5 000 ₽' },
    { name: 'Многостраничный сайт', price: 'от 10 000 ₽' },
    { name: 'Интернет-магазин', price: 'от 15 000 ₽' },
    { name: 'Сложный авторский проект', price: 'рассчитывается индивидуально' },
  ];

  return (
    <Window title="Услуги и прайс" isOpen={isOpen} onClose={onClose} width="w-full max-w-5xl lg:max-w-6xl">
      <div className="space-y-6 sm:space-y-8 py-1 sm:py-2 px-0 sm:px-2">
        {/* Main Title & Description */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            От идеи до запуска.
          </h1>
          <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed max-w-3xl font-normal">
            Я веду проект целиком: помогаю сформулировать задачу, собираю структуру, создаю визуальную концепцию, разрабатываю сайт, подключаю нужные сервисы и проверяю всё перед публикацией.
          </p>
        </div>

        {/* 5 Process Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-gray-50/70 hover:bg-gray-50/90 border border-gray-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between space-y-2 sm:space-y-3 transition-colors shadow-2xs"
            >
              <div className="space-y-1.5 sm:space-y-2">
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 font-semibold block">{step.num}</span>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900">{step.title}</h3>
                <p className="text-[10px] sm:text-[11px] leading-relaxed text-gray-500 font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Ориентировочная стоимость */}
        <div className="space-y-2 pt-1 sm:pt-2">
          <h2 className="text-sm sm:text-lg font-bold text-gray-900 tracking-tight mb-2 sm:mb-3">
            Ориентировочная стоимость
          </h2>

          <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
            {pricing.map((item, index) => (
              <div 
                key={index} 
                className="py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm hover:bg-gray-50/50 px-1 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className={`font-semibold ${item.price.includes('индивидуально') ? 'text-gray-500 font-normal text-[11px] sm:text-xs' : 'text-gray-700 font-mono text-xs sm:text-sm'}`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/79316117082"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] sm:text-xs font-semibold border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/kupetsnovgorodny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold border border-blue-200 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onOpenPortfolio && (
              <button
                onClick={() => {
                  onClose();
                  onOpenPortfolio();
                }}
                className="flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all border border-indigo-200 cursor-pointer"
              >
                Портфолио
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                if (onOpenContact) onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gray-950 hover:bg-black text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Обсудить</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
}
