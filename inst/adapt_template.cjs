const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);

let p1 = fs.readFileSync(path.join(dir, 'TEMPLATE PART 1-3 (2).txt'), 'utf8');
let p2 = fs.readFileSync(path.join(dir, 'TEMPLATE PART 2-3 (2).txt'), 'utf8');
let p3 = fs.readFileSync(path.join(dir, 'TEMPLATE PART 3-3 (2).txt'), 'utf8');

// macOS Folder SVG Data URI (clean modern blue folder)
const FOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80' width='100' height='80'%3E%3Cpath d='M8 12C8 7.58 11.58 4 16 4H36C39.5 4 42.6 6.3 43.6 9.6L46 16H84C88.42 16 92 19.58 92 24V68C92 72.42 88.42 76 84 76H16C11.58 76 8 72.42 8 68V12Z' fill='%235aa7ff'/%3E%3Cpath d='M8 26C8 21.58 11.58 18 16 18H84C88.42 18 92 21.58 92 26V68C92 72.42 88.42 76 84 76H16C11.58 76 8 72.42 8 68V26Z' fill='%233b82f6'/%3E%3Cpath d='M8 32H92V68C92 72.42 88.42 76 84 76H16C11.58 76 8 72.42 8 68V32Z' fill='%232563eb' fill-opacity='0.25'/%3E%3C/svg%3E";

// Telegram Icon SVG Data URI
const TELEGRAM_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%2329b6f6'/%3E%3Cpath d='M48 16L12 30.5L24 35.5L42 23L27.5 38.5L27 48L34 41.5L43 47.5L48 16Z' fill='%23ffffff'/%3E%3C/svg%3E";

// WhatsApp Icon SVG Data URI
const WHATSAPP_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%2325d366'/%3E%3Cpath d='M32 14C22.06 14 14 22.06 14 32C14 35.43 14.97 38.64 16.65 41.38L14.5 49.5L22.88 47.38C25.52 48.97 28.65 49.9 32 49.9C41.94 49.9 50 41.84 50 31.9C50 21.96 41.94 14 32 14ZM39.84 38.7C39.42 39.88 37.69 40.85 36.63 40.99C35.91 41.08 34.98 41.14 31.84 39.83C27.83 38.16 25.24 34.08 25.04 33.81C24.85 33.55 23.42 31.65 23.42 29.68C23.42 27.71 24.42 26.75 24.82 26.34C25.15 26.01 25.69 25.86 26.21 25.86C26.38 25.86 26.53 25.87 26.66 25.88C27.06 25.89 27.26 25.92 27.52 26.54C27.85 27.33 28.65 29.28 28.75 29.48C28.85 29.68 28.95 29.95 28.81 30.22C28.68 30.49 28.57 30.61 28.37 30.84C28.17 31.08 27.97 31.25 27.77 31.49C27.59 31.69 27.38 31.9 27.61 32.3C27.84 32.69 28.64 34 29.82 35.05C31.35 36.41 32.59 36.85 33.03 37.03C33.36 37.17 33.75 37.13 33.99 36.88C34.29 36.55 34.66 36.03 35.04 35.5C35.31 35.12 35.65 35.07 36 35.2C36.36 35.33 38.29 36.28 38.69 36.48C39.09 36.68 39.35 36.78 39.45 36.95C39.55 37.12 39.55 37.98 39.84 38.7Z' fill='%23ffffff'/%3E%3C/svg%3E";

// Notes Icon SVG Data URI
const NOTES_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%23fbbf24'/%3E%3Crect x='18' y='16' width='28' height='32' rx='4' fill='%23ffffff'/%3E%3Cpath d='M24 24H40M24 30H40M24 36H34' stroke='%23d97706' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E";

// Music Icon SVG Data URI
const MUSIC_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%23fb7185'/%3E%3Ccircle cx='26' cy='42' r='6' fill='%23ffffff'/%3E%3Ccircle cx='42' cy='36' r='6' fill='%23ffffff'/%3E%3Cpath d='M32 42V20L48 14V36' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

// Safari Icon SVG Data URI
const SAFARI_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%233b82f6'/%3E%3Ccircle cx='32' cy='32' r='20' fill='%23ffffff'/%3E%3Cpath d='M32 14L37 27L50 32L37 37L32 50L27 37L14 32L27 27Z' fill='%23ef4444'/%3E%3Cpath d='M32 14L37 27L50 32L37 37L32 32Z' fill='%23dc2626'/%3E%3C/svg%3E";

// Trash Icon SVG Data URI
const TRASH_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%2364748b'/%3E%3Cpath d='M22 24H42M26 24V42C26 43.1 26.9 44 28 44H36C37.1 44 38 43.1 38 42V24M28 24V20C28 18.9 28.9 18 30 18H34C35.1 18 36 18.9 36 20V24' stroke='%23ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

// Portfolio Briefcase SVG Data URI
const PORTFOLIO_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%234f46e5'/%3E%3Crect x='16' y='24' width='32' height='24' rx='4' fill='%23ffffff'/%3E%3Cpath d='M24 24V20C24 18.9 24.9 18 26 18H38C39.1 18 40 18.9 40 20V24' stroke='%23ffffff' stroke-width='3' fill='none'/%3E%3C/svg%3E";

// Services FolderKanban SVG Data URI
const SERVICES_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Crect width='64' height='64' rx='16' fill='%239333ea'/%3E%3Crect x='16' y='20' width='32' height='26' rx='3' fill='%23ffffff'/%3E%3Crect x='22' y='26' width='6' height='10' rx='1' fill='%239333ea'/%3E%3Crect x='32' y='26' width='6' height='14' rx='1' fill='%239333ea'/%3E%3C/svg%3E";


// ==========================================
// 1. ADAPT PART 1 (CSS)
// ==========================================
p1 = p1.replaceAll('YOUR_ABOUT_IMAGE_URL', '/avatar.png');
p1 = p1.replaceAll('YOUR_DESKTOP_BACKGROUND_URL', '/wallpaper.png');
p1 = p1.replaceAll('YOUR_MOBILE_BACKGROUND_URL', '/wallpaper-mobile.webp');

// Add nice thumbnail display for project-preview
if (!p1.includes('.project-preview img')) {
  p1 += `\n\n/* CUSTOM ENHANCEMENTS FOR KUPETS PORTFOLIO */\n.project-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n  transition: transform .45s var(--ios-ease);\n}\n.project-file:hover .project-preview img {\n  transform: scale(1.05);\n}\n`;
}


// ==========================================
// 2. ADAPT PART 2 (HTML)
// ==========================================
// Replace Brand & Identity
p2 = p2.replace('<h1 class="ilnur-identity-title">\n      YOUR.STUDIO\n    </h1>', '<h1 class="ilnur-identity-title">\n      KUPETS.STUDIO\n    </h1>');
p2 = p2.replace('<div class="ilnur-identity-sub">\n      YOUR DESCRIPTION\n    </div>', '<div class="ilnur-identity-sub">\n      ВЕБ-ДИЗАЙНЕР И РАЗРАБОТЧИК САЙТОВ\n    </div>');
p2 = p2.replaceAll('YOUR.STUDIO', 'KUPETS.STUDIO');
p2 = p2.replaceAll('YOUR STATUS', 'ДОСТУПЕН ДЛЯ ПРОЕКТОВ');

// Replace Folder triggers with Dmitry's 4 main sections
const foldersSectionOld = `<section class="ilnur-folders" aria-label="Основные разделы">

    <button class="ilnur-folder about-trigger" type="button">
      <img src="YOUR_FOLDER_ICON_URL" alt="">
      <span>ABOUT</span>
    </button>

    <button class="ilnur-folder works-trigger" type="button">
      <img src="YOUR_FOLDER_ICON_URL" alt="">
      <span>WORKS</span>
    </button>

    <button class="ilnur-folder process-trigger" type="button">
      <img src="YOUR_FOLDER_ICON_URL" alt="">
      <span>PROCESS</span>
    </button>

    <button class="ilnur-folder contact-trigger" type="button">
      <img src="YOUR_FOLDER_ICON_URL" alt="">
      <span>CONTACTS</span>
    </button>

  </section>`;

const foldersSectionNew = `<section class="ilnur-folders" aria-label="Основные разделы">

    <button class="ilnur-folder about-trigger" type="button">
      <img src="${FOLDER_SVG}" alt="Обо мне">
      <span>ОБО МНЕ</span>
    </button>

    <button class="ilnur-folder works-trigger" type="button">
      <img src="${FOLDER_SVG}" alt="Портфолио">
      <span>ПОРТФОЛИО</span>
    </button>

    <button class="ilnur-folder process-trigger" type="button">
      <img src="${FOLDER_SVG}" alt="Прайс и Услуги">
      <span>ПРАЙС И УСЛУГИ</span>
    </button>

    <button class="ilnur-folder notes-trigger" type="button">
      <img src="${FOLDER_SVG}" alt="Заметки">
      <span>ЗАМЕТКИ</span>
    </button>

  </section>`;

p2 = p2.replace(foldersSectionOld, foldersSectionNew);

// Replace Dock icons
p2 = p2.replace('src="YOUR_TELEGRAM_ICON_URL"', `src="${TELEGRAM_SVG}"`);
p2 = p2.replace('src="YOUR_INSTAGRAM_ICON_URL"', `src="${WHATSAPP_SVG}"`);
p2 = p2.replace('title="Instagram"', 'title="WhatsApp"');
p2 = p2.replace('alt="Instagram"', 'alt="WhatsApp"');
p2 = p2.replace('src="YOUR_NOTES_ICON_URL"', `src="${NOTES_SVG}"`);
p2 = p2.replace('src="YOUR_MUSIC_ICON_URL"', `src="${MUSIC_SVG}"`);
p2 = p2.replace('src="YOUR_SAFARI_ICON_URL"', `src="${SAFARI_SVG}"`);
p2 = p2.replace('src="YOUR_TRASH_ICON_URL"', `src="${TRASH_SVG}"`);

// Replace Desktop hint
p2 = p2.replace('RIGHT CLICK — SYSTEM MENU<br>\n    FOLDERS CAN BE DRAGGED', 'ПРАВЫЙ КЛИК — СИСТЕМНОЕ МЕНЮ<br>\n    ПЕРЕТАСКИВАНИЕ ПАПОК АКТИВНО');

// Replace System bar menu items
p2 = p2.replace('data-open="worksModal">\n      Works', 'data-open="worksModal">\n      Портфолио');
p2 = p2.replace('data-open="processModal">\n      Process', 'data-open="processModal">\n      Услуги и Прайс');
p2 = p2.replace('data-open="contactModal">\n      Contacts', 'data-open="contactModal">\n      Контакты');

// Replace Context menu items
p2 = p2.replace('<span>Open works</span>', '<span>Портфолио</span>');
p2 = p2.replace('<span>Open contacts</span>', '<span>Контакты</span>');
p2 = p2.replace('data-toast="YOUR CUSTOM NOTIFICATION TEXT">\n\n    <span>Custom action</span>', 'data-open="processModal">\n\n    <span>Услуги и Прайс</span>');
p2 = p2.replace('data-toast="YOUR SECOND CUSTOM NOTIFICATION">\n\n    <span>Second action</span>', 'data-open="notesModal">\n\n    <span>Заметки и принципы</span>');
p2 = p2.replace('<span>Delete...</span>', '<span>Очистить систему...</span>');

// Replace About modal
p2 = p2.replace('ABOUT\n\n    </div>', 'ОБО МНЕ — ДМИТРИЙ ИНЯКИН\n\n    </div>');
p2 = p2.replace('<h1>YOUR NAME</h1>', '<h1>Дмитрий Инякин</h1>');
p2 = p2.replace('<div class="about-role">\n            YOUR ROLE\n          </div>', '<div class="about-role">\n            Full-Stack Web Developer & UI Designer • Kupets Studio\n          </div>');

const aboutSpecsOld = `<div class="about-specs">

            <div class="about-spec">
              <span class="about-spec-name">Category 01</span>
              <span>YOUR TEXT</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Category 02</span>
              <span>YOUR TEXT</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Category 03</span>
              <span>YOUR TEXT</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Category 04</span>
              <span>YOUR TEXT</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Category 05</span>
              <span>YOUR TEXT</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Status</span>
              <span>YOUR STATUS</span>
            </div>

          </div>`;

const aboutSpecsNew = `<div class="about-specs">

            <div class="about-spec">
              <span class="about-spec-name">Специализация</span>
              <span>Веб-разработка, интерактивные веб-сервисы, лендинги, интернет-магазины</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Формат</span>
              <span>Разработка под ключ: от идеи и дизайн-концепта до запуска на сервере</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Frontend стек</span>
              <span>React 19, Next.js, Tailwind CSS, Vite, TypeScript, Lucide Icons</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Backend & API</span>
              <span>Node.js, Express, REST API, WebSockets, PostgreSQL, Telegram API</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Гарантии</span>
              <span>Чистый код, сдача в срок, официальный договор-оферта</span>
            </div>

            <div class="about-spec">
              <span class="about-spec-name">Статус</span>
              <span>🟢 Доступен для новых проектов и заказов</span>
            </div>

          </div>`;

p2 = p2.replace(aboutSpecsOld, aboutSpecsNew);

p2 = p2.replace(
  `          <div class="about-bio">\n            YOUR ABOUT TEXT. REPLACE THIS PARAGRAPH WITH YOUR OWN\n            DESCRIPTION, BIOGRAPHY OR PROJECT INFORMATION.\n          </div>`,
  `          <div class="about-bio">\n            Создаю быстрые, отзывчивые и продуманные до мелочей сайты и сервисы. Делаю упор на надежную архитектуру, чистый код без лишних зависимостей и внимание к деталям UX/UI.\n          </div>`
);

// Replace Works / Finder Modal
p2 = p2.replace('WORKS — FINDER', 'ПОРТФОЛИО — КЕЙСЫ И ПРОЕКТЫ');
p2 = p2.replace('FAVORITES', 'КАТЕГОРИИ');
p2 = p2.replace('All projects', 'Все проекты');
p2 = p2.replace('Category 01', 'Дизайн (UI/UX)');
p2 = p2.replace('Category 02', 'Верстка (Frontend)');
p2 = p2.replace('Category 03', 'Кодинг (Backend)');
p2 = p2.replace('SYSTEM', 'НАВИГАЦИЯ');
p2 = p2.replace('<span>About</span>', '<span>Обо мне</span>');
p2 = p2.replace('<span>Process</span>', '<span>Процесс и цены</span>');
p2 = p2.replace('<span>Contacts</span>', '<span>Контакты</span>');
p2 = p2.replace('<h2>Your works</h2>\n          <span>7 items</span>', '<h2>Реализованные проекты</h2>\n          <span>4 кейса</span>');

// Replace Projects Grid
const oldGridStart = p2.indexOf('<div class="finder-grid">');
const oldGridEnd = p2.indexOf('</div>\n      </main>', oldGridStart);

const newProjectsGrid = `<div class="finder-grid">

          <a class="project-file" href="https://analytics.b2b-saas.io" target="_blank" rel="noopener" data-category="design all">
            <div class="project-preview"><img src="/portfolio/saas-dashboard.webp" alt="SaaS Analytics Dashboard"></div>
            <div class="project-info">
              <div class="project-name">B2B SaaS Analytics & Revenue Dashboard</div>
              <div class="project-meta">Панель бизнес-аналитики для агрегации финансовых потоков и визуализации KPI</div>
            </div>
            <span class="project-open">↗</span>
          </a>

          <a class="project-file" href="https://monolith-audio.swiss" target="_blank" rel="noopener" data-category="design all">
            <div class="project-preview"><img src="/portfolio/monolith-audio.webp" alt="Monolith Audio"></div>
            <div class="project-info">
              <div class="project-name">Monolith Audio Landing</div>
              <div class="project-meta">Концептуальный промо-лендинг премиального звукового оборудования в строгой швейцарской типографике</div>
            </div>
            <span class="project-open">↗</span>
          </a>

          <a class="project-file" href="https://vortex.editorial-store.com" target="_blank" rel="noopener" data-category="layout all">
            <div class="project-preview"><img src="/portfolio/vortex-ecommerce.webp" alt="VORTEX E-Commerce"></div>
            <div class="project-info">
              <div class="project-name">VORTEX // Editorial E-Commerce Showcase</div>
              <div class="project-meta">Журнальный промо-интернет-магазин стритвир-одежды с многослойным Hero-блоком</div>
            </div>
            <span class="project-open">↗</span>
          </a>

          <a class="project-file" href="https://audit-core.engine.internal" target="_blank" rel="noopener" data-category="coding all">
            <div class="project-preview"><img src="/portfolio/lead-engine.webp" alt="Lead Engine"></div>
            <div class="project-info">
              <div class="project-name">B2B Lead Automation & Enrichment Engine</div>
              <div class="project-meta">Асинхронный парсер гео-сервисов и автоматизация обогащения лидов</div>
            </div>
            <span class="project-open">↗</span>
          </a>

        </div>`;

p2 = p2.slice(0, oldGridStart) + newProjectsGrid + p2.slice(oldGridEnd + 6);

// Replace Process Modal
p2 = p2.replace('PROCESS\n    </div>', 'ПРОЦЕСС И СТОИМОСТЬ\n    </div>');
p2 = p2.replace('<h2 class="ios-title">YOUR PROCESS TITLE</h2>', '<h2 class="ios-title">От идеи до запуска.</h2>');
p2 = p2.replace('<div class="process-intro">YOUR PROCESS DESCRIPTION.</div>', '<div class="process-intro">Я веду проект целиком: помогаю сформулировать задачу, собираю структуру, создаю визуальную концепцию, разрабатываю сайт, подключаю нужные сервисы и проверяю всё перед публикацией.</div>');

const processStepsOld = `<div class="process-steps">
        <div class="process-step"><div class="process-step-num">01</div><div class="process-step-name">STEP 01</div><div class="process-step-text">YOUR TEXT</div></div>
        <div class="process-step"><div class="process-step-num">02</div><div class="process-step-name">STEP 02</div><div class="process-step-text">YOUR TEXT</div></div>
        <div class="process-step"><div class="process-step-num">03</div><div class="process-step-name">STEP 03</div><div class="process-step-text">YOUR TEXT</div></div>
        <div class="process-step"><div class="process-step-num">04</div><div class="process-step-name">STEP 04</div><div class="process-step-text">YOUR TEXT</div></div>
        <div class="process-step"><div class="process-step-num">05</div><div class="process-step-name">STEP 05</div><div class="process-step-text">YOUR TEXT</div></div>
      </div>`;

const processStepsNew = `<div class="process-steps">
        <div class="process-step"><div class="process-step-num">01</div><div class="process-step-name">Брифинг</div><div class="process-step-text">Обсуждаем бизнес, аудиторию, задачи и ограничения.</div></div>
        <div class="process-step"><div class="process-step-num">02</div><div class="process-step-name">Структура</div><div class="process-step-text">Выстраиваю понятный путь от первого экрана до заявки или покупки.</div></div>
        <div class="process-step"><div class="process-step-num">03</div><div class="process-step-name">Концепция</div><div class="process-step-text">Предлагаю визуальное направление и ключевые интерактивы.</div></div>
        <div class="process-step"><div class="process-step-num">04</div><div class="process-step-name">Разработка</div><div class="process-step-text">Адаптив, анимации, код, каталог, формы и интеграции.</div></div>
        <div class="process-step"><div class="process-step-num">05</div><div class="process-step-name">Запуск</div><div class="process-step-text">Тестирование, подключение домена и поддержка после сдачи.</div></div>
      </div>`;

p2 = p2.replace(processStepsOld, processStepsNew);

p2 = p2.replace('<h3 class="price-title">YOUR PRICE TITLE</h3>', '<h3 class="price-title">Ориентировочная стоимость</h3>');

const priceListOld = `<div class="price-list">
        <div class="price-row"><span>SERVICE 01</span><span class="price-value">YOUR PRICE</span></div>
        <div class="price-row"><span>SERVICE 02</span><span class="price-value">YOUR PRICE</span></div>
        <div class="price-row"><span>SERVICE 03</span><span class="price-value">YOUR PRICE</span></div>
        <div class="price-row"><span>SERVICE 04</span><span class="price-value">YOUR PRICE</span></div>
        <div class="price-row"><span>SERVICE 05</span><span class="price-value">YOUR PRICE</span></div>
      </div>`;

const priceListNew = `<div class="price-list">
        <div class="price-row"><span>Мелкие правки, дизайн или код</span><span class="price-value">от 2 000 ₽</span></div>
        <div class="price-row"><span>Одностраничный сайт</span><span class="price-value">от 5 000 ₽</span></div>
        <div class="price-row"><span>Многостраничный сайт</span><span class="price-value">от 10 000 ₽</span></div>
        <div class="price-row"><span>Интернет-магазин</span><span class="price-value">от 15 000 ₽</span></div>
        <div class="price-row"><span>Сложный авторский проект</span><span class="price-value">индивидуально</span></div>
      </div>`;

p2 = p2.replace(priceListOld, priceListNew);

// Replace Contacts Modal
p2 = p2.replace('<h2 class="ios-title">YOUR CONTACT TITLE</h2>', '<h2 class="ios-title">Обсудим проект.</h2>');
p2 = p2.replace('<p>YOUR CONTACT DESCRIPTION.</p>', '<p>Напишите, какой сайт вам нужен, чем занимается ваш проект и есть ли примеры, которые вам нравятся. Я задам уточняющие вопросы и предложу следующий шаг.</p>');
p2 = p2.replaceAll('YOUR_USERNAME', 'kupetsnovgorodny');
p2 = p2.replace('<span class="contact-name">Instagram</span><span class="contact-value">@kupetsnovgorodny</span>', '<span class="contact-name">WhatsApp</span><span class="contact-value">+7 (931) 611-70-82</span>');
p2 = p2.replace('https://www.instagram.com/kupetsnovgorodny', 'https://wa.me/79316117082');
p2 = p2.replaceAll('YOUR_EMAIL', 'inyakindmitry1@gmail.com');
p2 = p2.replace('<div class="airdrop-user">YOU</div>', '<div class="airdrop-user">KUPETS</div>');

// Replace Notes Modal
p2 = p2.replace('NOTES\n    </div>', 'ЗАМЕТКИ И ПРИНЦИПЫ\n    </div>');
p2 = p2.replace('<h2>Notes</h2>', '<h2>Стандарты разработки</h2>');
p2 = p2.replace('Pinned</div>\n      <div class="notes-card">\n        <div class="notes-item"><strong>YOUR NOTE TITLE</strong><span>YOUR NOTE DESCRIPTION</span></div>\n        <div class="notes-item"><strong>YOUR NOTE TITLE</strong><span>YOUR NOTE DESCRIPTION</span></div>\n      </div>',
  `Закреплено</div>\n      <div class="notes-card">\n        <div class="notes-item"><strong>Чистый код — основа стабильности</strong><span>Понятная модульная структура, типизация и отсутствие оверинжиниринга.</span></div>\n        <div class="notes-item"><strong>Работа на бизнес-результат</strong><span>Красивый интерфейс без четко работающей конверсии не имеет смысла. Главное — результат.</span></div>\n      </div>`
);
p2 = p2.replace('Recent</div>\n      <div class="notes-card">\n        <div class="notes-item"><strong>YOUR NOTE 01</strong><span>YOUR TEXT</span></div>\n        <div class="notes-item"><strong>YOUR NOTE 02</strong><span>YOUR TEXT</span></div>\n        <div class="notes-item"><strong>YOUR NOTE 03</strong><span>YOUR TEXT</span></div>\n        <div class="notes-item"><strong>YOUR NOTE 04</strong><span>YOUR TEXT</span></div>\n      </div>',
  `Принципы</div>\n      <div class="notes-card">\n        <div class="notes-item"><strong>Производительность</strong><span>Оптимизация бандла, сжатие медиа и Lighthouse 95+ обеспечивают мгновенную загрузку.</span></div>\n        <div class="notes-item"><strong>Внимание к UX/UI</strong><span>Плавные анимации, тактильный отклик и выверенная типографика формируют доверие.</span></div>\n        <div class="notes-item"><strong>Надежность</strong><span>Официальная работа по договору, поэтапное согласование и гарантийная поддержка.</span></div>\n      </div>`
);

// Replace Safari Modal
p2 = p2.replace('SAFARI\n    </div>', 'KUPETS.SEARCH — БРАУЗЕР\n    </div>');
p2 = p2.replace('<h2 class="ios-title">YOUR PAGE TITLE</h2>', '<h2 class="ios-title">Kupets Studio Search</h2>');
p2 = p2.replace('<div class="ios-copy">YOUR TEXT.</div>', '<div class="ios-copy">Разработка сайтов и веб-приложений под ключ.</div>');
p2 = p2.replace('<div class="safari-card">YOUR DESCRIPTION.</div>', '<div class="safari-card">Оставьте заявку на разработку в Telegram: @kupetsnovgorodny или ознакомьтесь с кейсами в портфолио.</div>');
p2 = p2.replace('href="https://example.com"', 'href="https://t.me/kupetsnovgorodny"');
p2 = p2.replace('OPEN ↗', 'НАПИСАТЬ В TELEGRAM ↗');

// Replace Privacy and Terms
p2 = p2.replace('ADD YOUR PRIVACY POLICY HERE.', 'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта kupetsportfolio.ru.');
p2 = p2.replace('<h3>1. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>1. Общие положения</h3><p>Оператор обрабатывает персональные данные исключительно в целях обратной связи и согласования условий разработки проектов.</p>');
p2 = p2.replace('<h3>2. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>2. Перечень данных</h3><p>Имя, контактный номер телефона, адрес электронной почты, логин в Telegram, предоставленные пользователем добровольно.</p>');
p2 = p2.replace('<h3>3. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>3. Безопасность</h3><p>Данные хранятся конфиденциально и не передаются третьим лицам без законных оснований.</p>');

p2 = p2.replace('ADD YOUR TERMS OF SERVICE HERE.', 'Договор публичной оферты на оказание услуг по разработке сайтов, веб-сервисов и графического дизайна.');
p2 = p2.replace('<h3>1. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>1. Предмет договора</h3><p>Исполнитель обязуется выполнить работы по веб-разработке и веб-дизайну согласно согласованному с Заказчиком техническому заданию.</p>');
p2 = p2.replace('<h3>2. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>2. Порядок расчетов</h3><p>Оплата производится поэтапно или по факту сдачи согласованных этапов с формированием электронных чеков самозанятого.</p>');
p2 = p2.replace('<h3>3. Section</h3><p>YOUR LEGAL TEXT.</p>', '<h3>3. Гарантии</h3><p>Исполнитель гарантирует качество программного кода и устранение выявленных недочетов в гарантийный период.</p>');

// Replace Trash confirmation text
p2 = p2.replace('<h2 class="ios-title">Delete?</h2>\n      <div class="ios-copy">YOUR CONFIRMATION TEXT.</div>', '<h2 class="ios-title">Очистить систему?</h2>\n      <div class="ios-copy">Вы действительно хотите перезагрузить рабочий стол и симулировать сброс данных?</div>');
p2 = p2.replace('<button class="ios-btn ios-btn-light" data-close="trashModal" type="button">Cancel</button>', '<button class="ios-btn ios-btn-light" data-close="trashModal" type="button">Отмена</button>');
p2 = p2.replace('<button class="ios-btn ios-btn-dark" id="deleteSite" type="button">Delete</button>', '<button class="ios-btn ios-btn-dark" id="deleteSite" type="button">Сбросить</button>');

// Replace Telegram confirm modal
p2 = p2.replace('<h2 class="ios-title">Open Telegram?</h2>\n      <div class="ios-copy">The link will open in a new tab.</div>', '<h2 class="ios-title">Перейти в Telegram?</h2>\n      <div class="ios-copy">Чат @kupetsnovgorodny откроется в новой вкладке.</div>');
p2 = p2.replace('<button class="ios-btn ios-btn-light" data-close="telegramConfirm" type="button">Cancel</button>', '<button class="ios-btn ios-btn-light" data-close="telegramConfirm" type="button">Отмена</button>');
p2 = p2.replace('<button class="ios-btn ios-btn-dark" id="telegramOpen" type="button">Open</button>', '<button class="ios-btn ios-btn-dark" id="telegramOpen" type="button">Открыть</button>');

// Replace Instagram / WhatsApp confirm modal
p2 = p2.replace('OPEN INSTAGRAM', 'ОТКРЫТЬ WHATSAPP');
p2 = p2.replace('<h2 class="ios-title">Open Instagram?</h2>\n      <div class="ios-copy">The link will open in a new tab.</div>', '<h2 class="ios-title">Перейти в WhatsApp?</h2>\n      <div class="ios-copy">Диалог +7 (931) 611-70-82 откроется в новой вкладке.</div>');
p2 = p2.replace('<button class="ios-btn ios-btn-light" data-close="instagramConfirm" type="button">Cancel</button>', '<button class="ios-btn ios-btn-light" data-close="instagramConfirm" type="button">Отмена</button>');
p2 = p2.replace('<button class="ios-btn ios-btn-dark" id="instagramOpen" type="button">Open</button>', '<button class="ios-btn ios-btn-dark" id="instagramOpen" type="button">Открыть</button>');

// Replace Music
p2 = p2.replace('YOUR TRACK TITLE', 'Kupets Coding Beats');
p2 = p2.replace('YOUR ARTIST / PLAYLIST', 'Lo-Fi Chill Focus Stream');
p2 = p2.replaceAll('YOUR_AUDIO_URL', 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3');


// ==========================================
// 3. ADAPT PART 3 (JS)
// ==========================================
p3 = p3.replace('https://t.me/YOUR_USERNAME', 'https://t.me/kupetsnovgorodny');
p3 = p3.replace('https://www.instagram.com/YOUR_USERNAME', 'https://wa.me/79316117082');
p3 = p3.replace('YOUR-DOMAIN.COM', 'kupetsportfolio.ru');
p3 = p3.replace('YOUR_DESKTOP_VIDEO_URL', '');
p3 = p3.replace('YOUR_MOBILE_VIDEO_URL', '');
p3 = p3.replaceAll('YOUR_FOLDER_ICON_URL', FOLDER_SVG);

// Write output files
fs.writeFileSync(path.join(dir, 'PART_1_CSS_READY.txt'), p1, 'utf8');
fs.writeFileSync(path.join(dir, 'PART_2_HTML_READY.txt'), p2, 'utf8');
fs.writeFileSync(path.join(dir, 'PART_3_JS_READY.txt'), p3, 'utf8');

console.log('Successfully written PART_1_CSS_READY.txt, PART_2_HTML_READY.txt, PART_3_JS_READY.txt');

// Create standalone HTML combining all three for direct browser viewing / testing
const standalone = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>KUPETS.STUDIO — Дмитрий Инякин</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <style>
${p1.replace(/^<!--[\s\S]*?-->/g, '')}
  </style>
</head>
<body>
${p2.replace(/^<!--[\s\S]*?-->/g, '')}
${p3.replace(/^<!--[\s\S]*?-->/g, '')}
</body>
</html>`;

fs.writeFileSync(path.join(dir, 'standalone_preview.html'), standalone, 'utf8');
console.log('Successfully written standalone_preview.html for instant local testing!');
