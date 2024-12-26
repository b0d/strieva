import { getTranslations } from 'next-intl/server';
import { Link } from '../../i18n/routing';
import MainFirstScreen from "../components/MainFirstScreen"
import Footer from '../components/Footer'
import Header from "../components/Header";
import ContentBlock from '../components/ContentBlock'
import WhatWeHave from "../components/WhatWeHave"
import './global.css'
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale });
  return {
    title: t('HomePage.mainh1'),
    description: "ssss"
  };
}

export default async function LocalePage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale })



  let content = "content";

  return (
    <>
      <Header lng={locale} />
      <MainFirstScreen lng={locale} />


      <main>
        <ContentBlock lng={locale} content={content} />
        <WhatWeHave lng={locale} />
        <h1>{t("welcome")}</h1>
        <p>{t("hello_world")}</p>

        <p>
          <a href={locale === "ru" ? "/ru" : "/ru"}>ru</a>
        </p>
        <p>
          <a href={locale === "en" ? "/en" : "/en"}>en</a>
        </p>
        <p>
          <a href={locale === "uk" ? "/" : "/uk"}>uk</a>
        </p>
        Отзывы с гуг карт


        Чем заняться  - свидание - купель чан - важное событие - отдых на природе - рыбалка, рекчка

        Спец. предложение НОВЫЙ ГОД

        Подарочный сертификат
        Новости?
        К нам можно с  питомцами

        Карта


        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Частые вопросы
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is the first item's accordion body.
              </div>
            </div>
          </div>

        </div>




      </main>
      <Footer lng={locale} />
    </>
  );
}
