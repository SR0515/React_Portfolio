
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/data/portfolio';

interface ProjectSectionProps {
  projects: Project[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  search: string;
}

export default function ProjectSection({
  projects,
  wishlist,
  onToggleWishlist,
  search,
}: ProjectSectionProps) {
  return (
    <section id="projects" className="mt-5 scroll-mt-28">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs font-bold tracking-widest text-[#346AFF]">
            MY PORTFOLIO
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            {search ? '검색 결과' : '추천 프로젝트'}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            포트폴리오 프로젝트를 소개합니다.
          </p>
        </div>

        <span className="text-sm text-gray-400">
          총 {projects.length}개
        </span>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isWishlisted={wishlist.includes(project.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white py-20 text-center">
          <p className="mb-2 text-3xl">🔍</p>
          <p className="font-semibold text-gray-700">
            검색 결과가 없습니다.
          </p>
          <p className="mt-1 text-sm text-gray-400">
            검색어나 필터 조건을 변경해 보세요.
          </p>
        </div>
      )}
    </section>
  );
}
