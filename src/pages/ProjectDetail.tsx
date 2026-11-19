
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/portfolio';
import useWishlist from '@/hooks/useWishlist';
import GNB from '@/components/GNB';
import { Heart } from 'lucide-react';


export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  const { wishlist, toggleWishlist } = useWishlist();

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header search="" onSearchChange={() => {}} wishlistCount={wishlist.length} />

        <main className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-5">
          <p className="mb-3 text-5xl">🔍</p>
          <h1 className="text-xl font-bold">프로젝트를 찾을 수 없습니다.</h1>
          <Link to="/" className="mt-5 text-sm font-semibold text-[#346AFF]">
            메인으로 돌아가기 →
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const isWishlisted = wishlist.includes(project.id);

  return (
    <div className="min-h-screen">
      <Header
        search=""
        onSearchChange={() => {}}
        wishlistCount={wishlist.length}
      />

      <main className="mx-auto max-w-[1000px] px-5 py-5">
        <GNB title={project.title} />

        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-video">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}

            {project.badge && (
              <span className="absolute left-5 top-5 rounded-md bg-[#346AFF] px-3 py-1.5 text-xs font-bold text-white">
                {project.badge}
              </span>
            )}
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span>{project.role}</span>
              <span>·</span>
              <span>{project.period}</span>
              <span>·</span>
              <span>{project.category}</span>
            </div>

            <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                    {project.title}
                </h1>

                <button
                    type="button"
                    onClick={() => toggleWishlist(project.id)}
                    aria-label={isWishlisted ? '찜 해제' : '찜하기'}
                    aria-pressed={isWishlisted}
                    className="flex shrink-0 items-center text-sm transition hover:border-red-200 hover:bg-red-50"
                >
                    <Heart
                        size={18}
                        strokeWidth={2}
                        className={`transition-colors ${
                            isWishlisted
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                    />

                    <span className={isWishlisted ? 'font-semibold text-red-500' : 'text-gray-600'}>
                        {isWishlisted}
                    </span>
                </button>
            </div>

            <p className="mt-4 leading-7 text-gray-600">
              {project.overview}
            </p>

            <div className="my-8 border-t border-gray-100" />

            <section>
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                사용 기술
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

            <section className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                주요 구현 기능
              </h2>

              <ul className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                    >
                        <span className="mt-0.5 font-bold text-[#346AFF]">✓</span>
                        {responsibility}
                    </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-[#346AFF] px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            다른 프로젝트 둘러보기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
