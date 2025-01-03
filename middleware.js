import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['uk'],
    defaultLocale: 'uk',
    localePrefix: 'as-needed', // Префікс тільки для неосновних локалей , 'en', 'ru'
});

export const config = {
    // Вказуємо, що Middleware не повинен обробляти системні маршрути
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};