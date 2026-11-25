
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="about" className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-[#346AFF]">
              SURIN<span className="text-gray-800">SHOP</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
              {t('footer.description')}
              <br />
              {t('footer.descriptionSub')}
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-gray-900">
              {t('footer.contact')}
            </h3>

            <a
              href="mailto:rur9090@naver.com"
              className="mt-4 inline-block text-sm text-[#346AFF] hover:underline"
            >
              rur9090@naver.com
            </a>

            <p className="mt-2 text-sm text-gray-500">
              010-2716-9091
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
