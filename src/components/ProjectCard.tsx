
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';

import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

export default function ProjectCard({
  project,
  isWishlisted,
  onToggleWishlist,
}: ProjectCardProps) {
  const { t } = useTranslation();

  const images = project.images ?? [];

  const handleWishlist = () => {
    onToggleWishlist(project.id);

    if (isWishlisted) {
      toast(t('common.wishlistRemoved'));
    } else {
      toast.success(t('common.wishlistAdded'));
    }
  };

  // 현재 프로젝트 카드의 Swiper 인스턴스
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-blue-200 hover:shadow-lg">

      {/* 프로젝트 이미지 슬라이드 */}
      <div className="project-card-swiper relative aspect-[4/3] overflow-hidden bg-gray-100">
        {images.length > 0 ? (
          <>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              pagination={
                images.length > 1
                  ? { clickable: true }
                  : false
              }
              loop={images.length > 1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="h-full w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${project.id}-${index}`}>
                  <img
                    src={image}
                    alt={t('projectCard.imageAlt', {
                      title: project.title,
                      index: index + 1,
                    })}
                    className="h-full w-full object-cover transition duration-500"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label={t('projectCard.previousImage')}
                  className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition-all duration-200 hover:scale-110 hover:border-[#346AFF] hover:bg-[#346AFF] hover:text-white"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label={t('projectCard.nextImage')}
                  className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition-all duration-200 hover:scale-110 hover:border-[#346AFF] hover:bg-[#346AFF] hover:text-white"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </>
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            {t('projectCard.imagePreparing')}
          </div>
        )}

        {/* 프로젝트 배지 */}
        {project.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-[#346AFF] px-2.5 py-1 text-xs font-bold text-white">
            {project.badge && t(project.badge)}
          </span>
        )}

        {/* 찜하기 버튼 */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={
            isWishlisted
              ? t('projectCard.removeWishlist')
              : t('projectCard.addWishlist')
          }
          aria-pressed={isWishlisted}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center"
        >
          <Heart
            size={20}
            strokeWidth={2}
            className={`transition ${
              isWishlisted
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400 hover:text-red-400'
            }`}
          />
        </button>
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
          <span>{t(project.role)}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-gray-900">
          {t(project.title)}
        </h3>

        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {t(project.description)}
        </p>

        {/* 기술 스택 */}
        <div className="mb-4 flex min-h-[54px] flex-wrap items-start gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-[#346AFF]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 상세 페이지 이동 */}
        <Link
          to={`/projects/${project.id}`}
          className="group/link flex w-full items-center justify-center gap-2 rounded-lg border border-[#346AFF] py-2.5 text-sm font-semibold text-[#346AFF] transition hover:bg-[#346AFF] hover:text-white"
        >
          {t('projectCard.detailButton')}
        </Link>
      </div>
    </article>
  );
}
