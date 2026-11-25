
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <section id="projects" className="mt-5 scroll-mt-28">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs font-bold tracking-widest text-[#346AFF]">
            MY PORTFOLIO
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {search
              ? t('projectSection.titleSearch')
              : t('projectSection.titleRecommend')}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {t('projectSection.description')}
          </p>
        </div>

        <span className="text-sm text-gray-400">
          {t('projectSection.total')}{' '}
          {projects.length}
          {t('projectSection.countUnit')}
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
            {t('projectSection.emptyTitle')}
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {t('projectSection.emptyDescription')}
          </p>
        </div>
      )}
    </section>
  );
}
