
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GNB from '@/components/GNB';

import { projects } from '@/data/portfolio';
import useWishlist from '@/hooks/useWishlist';

export default function ProjectDetail() {
  const { t } = useTranslation();
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  const { wishlist, toggleWishlist } = useWishlist();

  const swiperRef = useRef<SwiperInstance | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header
          search=""
          onSearchChange={() => {}}
          wishlistCount={wishlist.length}
        />

        <main className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-5">
          <p className="mb-3 text-5xl">🔍</p>

          <h1 className="text-xl font-bold">
            {t('projectDetail.notFound')}
          </h1>

          <Link
            to="/"
            className="mt-5 text-sm font-semibold text-[#346AFF]"
          >
            {t('projectDetail.goHome')}
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const isWishlisted = wishlist.includes(project.id);
  const images = project.images ?? [];

  return (
    <div className="min-h-screen bg-white">
      <Header
        search=""
        onSearchChange={() => {}}
        wishlistCount={wishlist.length}
      />

      <main className="mx-auto max-w-[1000px] px-5 py-5">
        <GNB title={t(project.title)} />

        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">

          {/* 프로젝트 이미지 갤러리 */}
          <div className="relative w-full overflow-hidden bg-gray-100">
            {images.length > 0 ? (
              <>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={images.length > 1 ? { clickable: true } : false}
                    loop={images.length > 1}
                    onSwiper={(swiper) => {swiperRef.current = swiper;}}
                    className="h-[900px] w-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={`${project.id}-${index}`}>
                            <div className="h-[900px] w-full overflow-y-auto bg-gray-100">
                                <div className="flex min-h-full w-full justify-center">
                                    <img
                                        src={image}
                                        alt={`${project.title} 이미지 ${index + 1}`}
                                        className={`block h-auto w-full object-contain ${
                                            project.id === 1 ? 'max-w-[400px]' : 'max-w-none'
                                        }`}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 이전 / 다음 버튼 */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slidePrev()}
                      aria-label="이전 이미지"
                      className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition-all duration-200 hover:scale-110 hover:border-[#346AFF] hover:bg-[#346AFF] hover:text-white"
                    >
                      <ChevronLeft size={22} strokeWidth={2.5} />
                    </button>

                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slideNext()}
                      aria-label="다음 이미지"
                      className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition-all duration-200 hover:scale-110 hover:border-[#346AFF] hover:bg-[#346AFF] hover:text-white"
                    >
                      <ChevronRight size={22} strokeWidth={2.5} />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-400">
                {t('projectDetail.noImage')}
              </div>
            )}

            {/* 프로젝트 배지 */}
            {project.badge && (
              <span className="absolute left-5 top-5 z-10 rounded-md bg-[#346AFF] px-3 py-1.5 text-xs font-bold text-white">
                {t(project.badge)}
              </span>
            )}
          </div>

          {/* 프로젝트 상세 정보 */}
          <div className="p-6 sm:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                <span>{t(project.role)}</span>
                <span>·</span>
                <span>{t(`category.${project.category}`)}</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                {t(project.title)}
              </h1>

              {/* 찜하기 */}
              <button
                type="button"
                onClick={() => toggleWishlist(project.id)}
                aria-label={isWishlisted ? '찜 해제' : '찜하기'}
                aria-pressed={isWishlisted}
                className="flex shrink-0 items-center gap-2  px-3 py-2 text-sm"
              >
                <Heart
                  size={18}
                  strokeWidth={2}
                  className={`transition-colors ${ isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />

                <span
                  className={
                    isWishlisted
                      ? 'font-semibold text-red-500'
                      : 'text-gray-600'
                  }
                >
                  {isWishlisted}
                </span>
              </button>
            </div>

            <p className="mt-4 leading-7 text-gray-600">
              {t(project.overview)}
            </p>

            <div className="my-8 border-t border-gray-100" />

            {/* 사용 기술 */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                {t('projectDetail.techStack')}
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-[#346AFF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 주요 구현 기능 */}
            <section className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                {t('projectDetail.responsibilities')}
              </h2>

              <ul className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                  >
                    <span className="mt-0.5 font-bold text-[#346AFF]">
                      ✓
                    </span>

                     {t(responsibility)}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        {/* 다른 프로젝트 보기 */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-[#346AFF] px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {t('projectDetail.otherProjects')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
