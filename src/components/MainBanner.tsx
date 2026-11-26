
import profileImage from '@/assets/profile/profile.jpeg';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function MainBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#252B36] via-[#303846] to-[#202733]">
      <div className="relative mx-auto flex min-h-105 max-w-360 items-center justify-between gap-10 px-6 py-14 sm:px-10 lg:min-h-120 lg:px-16">
        {/* 왼쪽 소개 영역 */}
        <div className="relative z-10 max-w-162.5 flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-300 shadow-sm backdrop-blur">
            <Code2 size={15} />
            {t('mainBanner.badge')}
          </div>

          <h1 className="text-[28px] font-extrabold leading-[1.4] tracking-tight text-white sm:text-4xl sm:leading-[1.3] lg:text-[48px]">
            <span className="block sm:inline">
              {t('mainBanner.titleLine1')}
            </span>
            <br className="hidden sm:block" />
            <span className="text-[#5B91FF]">
              {t('mainBanner.titleHighlight')}
            </span>
            <span className="block sm:inline">
              {' '}{t('mainBanner.titleLine2')}
            </span>
          </h1>

          <p className="mt-6 max-w-140 text-sm leading-8 text-gray-300 sm:text-base">
            {t('mainBanner.greeting')}{' '}
            <strong className="font-bold text-white">김수린</strong>
            {t('mainBanner.nameSuffix')}
            <br />
            {t('mainBanner.descriptionLine1')}
            <br />
            {t('mainBanner.descriptionLine2')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#346AFF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {t('mainBanner.button')}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-2 text-xs font-medium text-gray-400">
            <Sparkles size={15} className="text-[#5B91FF]" />
            <span>{t('mainBanner.keywords')}</span>
          </div>
        </div>

        {/* 오른쪽 프로필 영역 */}
        <div className="relative hidden shrink-0 items-center justify-center md:flex">
          <div className="relative rotate-2 rounded-[28px] border-8 border-white/90 bg-white p-2 shadow-2xl shadow-black/30 transition duration-500 hover:rotate-0">
            <img
              src={profileImage}
              alt="김수린 프로필"
              className="h-77.5 w-58.75 rounded-[20px] object-cover"
            />
          </div>

          {/* 프로필 장식 카드 */}
          <div className="absolute -bottom-4 -left-12 rounded-xl border border-white/10 bg-[#394354]/95 px-5 py-3 shadow-lg backdrop-blur">
            <p className="text-xs font-medium text-gray-400">DEVELOPER</p>
            <p className="mt-1 text-sm font-extrabold text-[#5B91FF]">
              SURIN PORTFOLIO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
