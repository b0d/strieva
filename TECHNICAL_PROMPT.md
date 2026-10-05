# Технічний промпт для створення ідентичного сайту EcoHouse Strieva

## Загальний опис проєкту

Створити багатомовний лендінг-сайт для оренди A-frame будинку з закарпатським чаном. Сайт має бути статичним, оптимізованим для SEO, з підтримкою трьох мов (українська, англійська, російська) та інтеграціями з Google Maps та Telegram.

## Технологічний стек

### Основні технології:
- **Next.js 15.0.3** (App Router)
- **React 18.3.1**
- **React DOM 18.3.1**
- **Bootstrap 5.3.3** (для grid системи та утиліт)
- **Material-UI Icons** (@mui/icons-material ^6.1.9)
- **Swiper 11.1.15** (для галереї зображень)
- **Google Maps API** (@react-google-maps/api ^2.20.5)
- **Emotion** (@emotion/react, @emotion/styled ^11.13.5) - для стилізації іконок
- **Next.js Third Parties** (@next/third-parties ^15.0.3) - для Google Analytics

### Особливості конфігурації:
- **Static Export** (`output: "export"`) - для деплою на статичний хостинг
- **Trailing Slash** - всі URL закінчуються на `/`
- **Base Path Support** - підтримка деплою в підпапці через `NEXT_BASE_PATH`
- **Unoptimized Images** - зображення не оптимізуються (для static export)

## Структура проєкту

```
project-root/
├── app/
│   ├── [locale]/              # Динамічні маршрути для локалізації
│   │   ├── layout.js          # Layout для локалізованих сторінок
│   │   ├── page.js            # Сторінка для /en та /ru
│   │   └── global.css          # Глобальні стилі
│   ├── components/            # React компоненти
│   │   ├── Accordion/         # FAQ секція (accordion)
│   │   ├── ContentBlock/      # Блок з описом та відео
│   │   ├── Footer/            # Підвал сайту
│   │   ├── Form/              # Форма бронювання (client component)
│   │   ├── Header/            # Шапка сайту
│   │   ├── LanguageSwitcher/ # Перемикач мов
│   │   ├── LocalePageContent.jsx # Головний компонент сторінки
│   │   ├── MainFirstScreen/   # Перший екран з H1 та формою
│   │   ├── Map/               # Google Maps компонент (client)
│   │   ├── MyGallery/         # Галерея фото (Swiper)
│   │   ├── StructuredData/    # Schema.org JSON-LD дані
│   │   ├── Svg/               # Кастомні SVG іконки (TikTok, Viber)
│   │   ├── TopMenu/           # Навігаційне меню
│   │   └── WhatWeHave/        # Секція зручностей
│   ├── layout.js              # Кореневий layout
│   ├── page.js                # Головна сторінка (uk)
│   ├── page.module.css        # Стилі головної сторінки
│   └── globals.css            # Глобальні стилі
├── lib/
│   └── constants.js           # Константи (SUPPORTED_LOCALES, SITE_URL, etc.)
├── locales/                   # Файли локалізації
│   ├── uk.json                # Українська мова (default)
│   ├── en.json                # Англійська мова
│   └── ru.json                # Російська мова
├── public/                    # Статичні файли
│   ├── imgs/                  # Зображення (WebP формат)
│   │   └── Gallery/           # Галерея (19 зображень)
│   ├── fonts/                 # Шрифти (Comfortaa, Mulish)
│   ├── video/                 # Відео файли
│   ├── favicon.ico            # Favicon
│   ├── robots.txt             # Robots.txt
│   └── sitemap.xml            # Sitemap
├── serverless/
│   └── sendTelegram.js        # Serverless функція для Telegram
├── next.config.mjs            # Конфігурація Next.js
├── jsconfig.json              # Конфігурація JS (path aliases)
└── package.json               # Залежності
```

## Детальний опис компонентів

### 1. Root Layout (`app/layout.js`)
- Експортує `metadata` з повною SEO інформацією
- Встановлює `metadataBase`, `title`, `description`
- Налаштовує `alternates.languages` для hreflang
- Додає Open Graph та Twitter Card метадані з зображеннями
- Встановлює favicon та icons
- Додає preconnect для Google Tag Manager та Google Maps
- HTML тег має `lang='uk'` (для української версії)

### 2. Locale Layout (`app/[locale]/layout.js`)
- Генерує статичні параметри для `/en` та `/ru`
- Валідує locale через `SUPPORTED_LOCALES`
- Генерує metadata з canonical URL та languages alternates
- Додає Google Analytics компонент
- Повертає `notFound()` для невалідних локалей

### 3. Locale Page (`app/[locale]/page.js`)
- Завантажує відповідні JSON файли локалізації
- Генерує metadata з title, description, OG та Twitter
- Рендерить `LocalePageContent` з відповідними messages

### 4. Root Page (`app/page.js`)
- Головна сторінка для української мови (`/`)
- Генерує metadata
- Рендерить `LocalePageContent` з `locale='uk'`

### 5. LocalePageContent (`app/components/LocalePageContent.jsx`)
Головний компонент, який організовує всю структуру сторінки:
- Рендерить `StructuredData` компонент
- Рендерить `Header`
- Рендерить `MainFirstScreen` (H1 + форма)
- Створює секцію з таблицею цін (id="price")
- Рендерить `MyGallery` (id="photos")
- Рендерить `Map` та `Form` (id="howtofind")
- Рендерить `Accordion` з FAQ
- Рендерить `Footer`

### 6. StructuredData (`app/components/StructuredData/index.jsx`)
Генерує JSON-LD структуровані дані:
- **LodgingBusiness Schema**: повна інформація про бізнес (адреса, координати, ціни, зручності, check-in/out час)
- **FAQPage Schema**: всі питання та відповіді з локалізації
- **BreadcrumbList Schema**: навігаційні хлібні крихти

### 7. Header (`app/components/Header/index.jsx`)
- Логотип (Next.js Image з priority)
- `TopMenu` компонент
- `LanguageSwitcher` компонент
- Контактна інформація:
  - Адреса (посилання на Google Maps)
  - Телефон (tel: link)
  - WhatsApp, Telegram, Viber посилання
- Використовує Material-UI іконки
- Responsive дизайн (Bootstrap grid)

### 8. MainFirstScreen (`app/components/MainFirstScreen/index.jsx`)
- H1 заголовок з локалізованим текстом
- `Form` компонент для бронювання

### 9. ContentBlock (`app/components/ContentBlock/index.jsx`)
- H2 заголовок
- 4 параграфи з описом
- HTML5 `<video>` елемент:
  - Poster: `/imgs/IMG_6550.webp`
  - Source: `/video/Eco-house-Strieva.MOV`
  - Controls, preload='none'
  - ARIA label

### 10. WhatWeHave (`app/components/WhatWeHave/index.jsx`)
- H3 заголовок
- 5 карток з іконками (Material-UI) та описом
- Зображення будинку (Next.js Image)
- Список зручностей (ul/li)
- Зображення відгуків
- Друга форма для бронювання

### 11. MyGallery (`app/components/MyGallery/index.jsx`)
**Client Component** з Swiper:
- Автоплей (delay: 3000ms)
- Navigation та Pagination
- FreeMode
- Responsive breakpoints:
  - Mobile: 2 slides
  - Tablet (768px+): 3 slides
- Використовує Next.js Image компонент
- ARIA label для accessibility

### 12. Form (`app/components/Form/index.jsx`)
**Client Component** з React hooks:
- Валідація телефону (regex pattern, мінімум 10 символів)
- Стани: `tel`, `status`, `isSubmitting`
- Відправка на serverless endpoint через fetch
- Обробка помилок та успішних відповідей
- ARIA атрибути для accessibility
- Disabled стан під час відправки
- Локалізовані повідомлення

### 13. Map (`app/components/Map/index.jsx`)
**Client Component** з Google Maps:
- Використовує `@react-google-maps/api`
- `LoadScript` з lazy loading
- Координати: lat: 50.5198398, lng: 27.6271339
- Zoom: 14
- Marker з title
- API key з `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### 14. Accordion (`app/components/Accordion/index.jsx`)
- Radio button accordion (CSS-based)
- Рендерить масив Q&A
- ARIA атрибути для accessibility
- Кожен елемент має унікальний ID

### 15. Footer (`app/components/Footer/index.jsx`)
- Контактна інформація (адреса, телефон)
- Посилання на соцмережі:
  - WhatsApp
  - Telegram
  - Viber
  - TikTok (кастомний SVG)
  - YouTube
  - Instagram
- Material-UI іконки

### 16. LanguageSwitcher (`app/components/LanguageSwitcher/index.jsx`)
- Перемикач між трьома мовами
- Генерує посилання: `/`, `/en`, `/ru`
- Відображає поточну активну мову

### 17. TopMenu (`app/components/TopMenu/index.jsx`)
- Навігаційне меню з якорними посиланнями:
  - #price
  - #whatwehave
  - #photos
  - #howtofind
  - FAQ секція
- Локалізовані назви пунктів меню

## Локалізація

### Структура JSON файлів:
```json
{
  "HomePage": {
    "title": "...",
    "description": "...",
    "h1": "...",
    "h2": "...",
    "h2p1": "...",
    "h2p2": "...",
    "h2p3": "...",
    "h2p4": "...",
    "h3": "...",
    "h3p1": "...",
    // ... інші поля
    "tableRow1": "...",
    "tableRow1price": "...",
    "tableRow1note": "...",
    // ... інші рядки таблиці
    "address": "...",
    "address2": "..."
  },
  "form": {
    "placeholder": "...",
    "button": "...",
    "buttonPending": "...",
    "success": "...",
    "error": "...",
    "validation": "...",
    "endpointMissing": "..."
  },
  "imgs": {
    "imgs0src": "/imgs/Gallery/0.webp",
    "imgs0alt": "...",
    // ... до imgs18
  },
  "questions": {
    "q0": "...",
    "a0": "...",
    // ... до q9, a9
  }
}
```

### Підтримувані мови:
- `uk` - українська (default, `/`)
- `en` - англійська (`/en`)
- `ru` - російська (`/ru`)

## SEO оптимізація

### 1. Метадані:
- Унікальні title та description для кожної мови
- Open Graph теги з зображеннями (1200x630)
- Twitter Card з зображенням
- Canonical URLs
- Hreflang теги (через metadata alternates.languages)

### 2. Структуровані дані (Schema.org):
- LodgingBusiness (повна інформація про бізнес)
- FAQPage (всі питання та відповіді)
- BreadcrumbList

### 3. Технічні аспекти:
- Семантична HTML розмітка (header, main, section, footer, nav)
- ARIA атрибути для accessibility
- Alt тексти для всіх зображень
- Правильна ієрархія заголовків (H1, H2, H3)
- Meta robots через robots.txt

### 4. Performance:
- Next.js Image оптимізація
- Lazy loading для Google Maps
- Preconnect для зовнішніх ресурсів
- Static export для швидкого завантаження

## Конфігурація

### next.config.mjs:
```javascript
export default {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NEXT_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_BASE_PATH ? `${process.env.NEXT_BASE_PATH}/` : undefined,
  images: {
    unoptimized: true,
  },
};
```

### Змінні оточення:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - ключ Google Maps API
- `NEXT_PUBLIC_TELEGRAM_FUNCTION_URL` - URL serverless функції для Telegram
- `NEXT_BASE_PATH` - базовий шлях (опціонально, для деплою в підпапці)

### Serverless функція (sendTelegram.js):
- Приймає POST запити з `{ tel: string }`
- Валідує телефон
- Відправляє повідомлення в Telegram через Bot API
- Використовує `TELEGRAM_BOT_TOKEN` та `TELEGRAM_CHAT_ID`
- Повертає JSON відповіді з `success` статусом

## Стилізація

### Підхід:
- **Bootstrap 5.3.3** для grid системи та утилітних класів
- **CSS модулі** для компонентів (index.css в кожній папці)
- **Глобальні стилі** в `app/[locale]/global.css` та `app/globals.css`
- **Кастомні шрифти**: Comfortaa та Mulish (з public/fonts)

### Responsive breakpoints:
- Mobile-first підхід
- Bootstrap grid: col-12, col-md-*, col-lg-*, col-xl-*

## Інтеграції

### 1. Google Maps:
- Використовує `@react-google-maps/api`
- Lazy loading через LoadScript
- Marker на координатах бізнесу

### 2. Google Analytics:
- Google Analytics ID: `G-LQWCGN68EM`
- Через `@next/third-parties/google`

### 3. Telegram:
- Serverless функція для відправки заявок
- Валідація та санітизація телефону
- Обробка помилок

## Особливості реалізації

### 1. Static Export:
- Всі сторінки генеруються статично під час build
- `generateStaticParams` для динамічних маршрутів
- Немає server-side рендерингу

### 2. Client Components:
- `Form` - використовує React hooks
- `Map` - використовує Google Maps API
- `MyGallery` - використовує Swiper

### 3. Image Optimization:
- Next.js Image компонент
- WebP формат для всіх зображень
- Priority для логотипу
- Responsive sizes

### 4. Accessibility:
- ARIA labels та roles
- Semantic HTML
- Keyboard navigation
- Screen reader support

## Структура даних

### Таблиця цін:
- Динамічно генерується з локалізації
- 6 рядків (tableRow1-6)
- Включає послуги, ціни та примітки

### Галерея:
- 19 зображень (imgs0-imgs18)
- Шляхи та alt тексти з локалізації

### FAQ:
- 10 питань та відповідей (q0-a0 до q9-a9)
- Динамічно генерується з локалізації

## Деплой

### Підготовка:
1. Встановити залежності: `npm install`
2. Налаштувати `.env.local` з необхідними змінними
3. Збудувати проєкт: `npm run build`
4. Статичні файли в папці `out/`

### Serverless функція:
- Розмістити `serverless/sendTelegram.js` на Netlify/AWS Lambda/Vercel
- Налаштувати змінні оточення на сервері
- Оновити `NEXT_PUBLIC_TELEGRAM_FUNCTION_URL`

### Хостинг:
- Може бути розміщений на будь-якому статичному хостингу
- Підтримка basePath для деплою в підпапці
- Sitemap та robots.txt в public/

## Критичні деталі для відтворення

1. **Точна структура локалізації** - всі ключі мають відповідати
2. **Компонент StructuredData** - обов'язково додати для SEO
3. **Open Graph зображення** - мають бути в metadata
4. **Hreflang через alternates.languages** - для багатомовності
5. **Static export конфігурація** - обов'язково `output: "export"`
6. **Client Components** - правильно позначити "use client"
7. **ARIA атрибути** - для accessibility
8. **Responsive дизайн** - Bootstrap grid система
9. **Image optimization** - Next.js Image з правильними розмірами
10. **Serverless функція** - правильна обробка помилок та валідація

## Додаткові вимоги

- Всі зображення в WebP форматі
- Шрифти в різних форматах (woff2, woff, ttf)
- Відео файли в public/video/
- Favicon та всі розміри іконок
- robots.txt та sitemap.xml в public/
- Правильні path aliases (@/*) в jsconfig.json

---

**Примітка**: Цей промпт містить всю необхідну інформацію для створення технічно ідентичного сайту. Всі компоненти, структура, конфігурація та особливості реалізації детально описані.

