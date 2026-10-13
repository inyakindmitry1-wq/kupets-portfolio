import Window from '../Window';
import { Search, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function BrowserWindow({ isOpen, onClose, onOpenContact }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setHasSearched(true);
    const textQuery = query.toLowerCase();

    let responseText = "Kupets Dev нашёл ответ: разработка работает по плану. Все системы функционируют штатно, проекты сдаются в срок!";
    let category = "Общий поиск";

    if (textQuery.includes('как дела') || textQuery.includes('привет') || textQuery.includes('статус')) {
      responseText = "Kupets Dev отвечает: Отлично! Нахожусь в процессе разработки новых веб-приложений. Готов обсудить ваш проект.";
      category = "Статус разработки";
    } else if (textQuery.includes('цена') || textQuery.includes('прайс') || textQuery.includes('стоимость')) {
      responseText = "Kupets Dev предлагает: Мелкие правки от 2 000 ₽, Одностраничные сайты от 5 000 ₽, Многостраничные от 10 000 ₽, Интернет-магазины от 15 000 ₽. Сложные проекты рассчитываются индивидуально!";
      category = "Цены и Услуги";
    } else if (textQuery.includes('контакт') || textQuery.includes('связь') || textQuery.includes('написать')) {
      responseText = "Связаться напрямую можно в Telegram: @kupetsnovgorodny или по email: inyakindmitry1@gmail.com";
      category = "Контакты";
    }

    setSearchResult({
      title: `Результат поиска по запросу «${query}»`,
      url: `https://kupets.studio/search?q=${encodeURIComponent(query)}`,
      snippet: responseText,
      category,
    });
  };

  return (
    <Window title="Поиск" isOpen={isOpen} onClose={onClose} width="w-full max-w-4xl lg:max-w-5xl">
      <div className="space-y-6">
        {/* Browser Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-gray-100 p-2 sm:p-2.5 rounded-xl border border-gray-200">
          <div className="flex items-center gap-1.5 text-gray-400 px-1">
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
            <span className="text-xs font-bold text-gray-800">KUPETS.SEARCH</span>
          </div>

          <form onSubmit={handleSearch} className="flex-1 flex items-center bg-white border border-gray-300 rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-xs focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mr-1.5 sm:mr-2 shrink-0" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск (напр. 'стоимость' или 'как дела')..."
              className="w-full text-[11px] sm:text-xs font-medium text-gray-800 focus:outline-none bg-transparent"
            />
            <button 
              type="submit"
              className="ml-1.5 sm:ml-2 px-2.5 sm:px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-semibold rounded-md transition-colors shrink-0 cursor-pointer"
            >
              Найти
            </button>
          </form>
        </div>

        {/* Dynamic Search Results Section */}
        {hasSearched && searchResult ? (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="text-xs text-gray-400 font-medium">
              Найдено результатов: 1 (0.04 сек)
            </div>

            {/* Main Result Card */}
            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span className="truncate">{searchResult.url}</span>
                <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  {searchResult.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                {searchResult.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                {searchResult.snippet}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Kupets Dev Answer</span>
                </div>
                <button 
                  onClick={onOpenContact}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Связаться с автором</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Initial Landing State inside Browser */
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900">Добро пожаловать в KUPETS.SEARCH</h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Интерактивная поисковая система. Введите интересующий вас вопрос в строку поиска выше.
              </p>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['Как дела?', 'Стоимость разработки', 'Формат работы', 'Контакты'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setQuery(tag);
                    setTimeout(() => handleSearch(), 10);
                  }}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors border border-gray-200/60 cursor-pointer"
                >
                  «{tag}»
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Window>
  );
}
