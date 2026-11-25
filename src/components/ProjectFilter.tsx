
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectFilterProps {
  sort: string;
  onSortChange: (value: string) => void;
  selectedTech: string;
  onTechChange: (value: string) => void;
  techOptions: string[];
  resultCount: number;
}

export default function ProjectFilter({
  selectedTech,
  onTechChange,
  techOptions,
  resultCount,
}: ProjectFilterProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
      <div className="text-sm text-gray-500">
        {t('projectFilter.result')}{' '}
        <strong className="text-[#346AFF]">
          {resultCount}{t('projectFilter.countUnit')}
        </strong>
      </div>

      <div className="w-full sm:w-[50%] sm:flex-none">
        <div className="relative w-full">
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-10 text-sm outline-none transition focus:border-[#346AFF] focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">
              {t('projectFilter.allTech')}
            </option>

            {techOptions.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
