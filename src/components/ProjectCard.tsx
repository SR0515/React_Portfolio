
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
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
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}

        {project.badge && (
          <span className="absolute left-3 top-3 rounded-md bg-[#346AFF] px-2.5 py-1 text-xs font-bold text-white">
            {project.badge}
          </span>
        )}

        {/* 찜하기 버튼 */}
        <button
          type="button"
          onClick={() => onToggleWishlist(project.id)}
          aria-label={isWishlisted ? '찜 해제' : '찜하기'}
          aria-pressed={isWishlisted}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center"
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

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
          <span>{project.role}</span>
          <span>{project.period}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="mb-4 flex flex-wrap gap-1.5">
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
          프로젝트 상세 보기
          <ArrowRight
            size={16}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
