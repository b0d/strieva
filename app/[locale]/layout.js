import WhereAreWe from "../components/WhereAreWe"
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { getMessages } from 'next-intl/server';


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; // Отримуємо поточну локаль
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <link
        rel='icon'
        type='image/png'
        href='/favicon-96x96.png'
        sizes='96x96'
      />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <meta name='apple-mobile-web-app-title' content='Strieva.com' />
      <link rel='manifest' href='/site.webmanifest' />


      <WhereAreWe currentLanguage={locale} />
      <GoogleAnalytics gaId='G-GGGGGGGGG' />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider></body>
    </html>
  );
}
