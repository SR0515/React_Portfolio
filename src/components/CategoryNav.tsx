
import { LayoutGrid, Monitor, Server, Palette,} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CategoryNavProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  { id: 'all', icon: LayoutGrid },
  { id: 'frontend', icon: Monitor },
  { id: 'fullstack', icon: Server },
  { id: 'design', icon: Palette },
];

export default function CategoryNav({
  selected,
  onSelect,
}: CategoryNavProps) {
  const { t } = useTranslation();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-300 items-center gap-2 overflow-x-auto px-5 py-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selected === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
                isSelected
                  ? 'bg-[#346AFF] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#346AFF]'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              {t(`categoryNav.${category.id}`)}
            </button>
          );
        })}

        {/* 개발 블로그 */}
        {/* <a
          href="#journal"
          className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-[#346AFF]"
        >
          <BookOpen size={16} strokeWidth={2} />
          {t('categoryNav.blog')}
        </a> */}
      </div>
    </nav>
  );
}
