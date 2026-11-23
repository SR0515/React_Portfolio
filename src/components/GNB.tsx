import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

interface GNBProps {
  title: string;
}

export default function GNB({ title }: GNBProps) {
  return (
    <nav className="mb-6 flex h-12 items-center justify-between">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-[#346AFF]"
        >
          <ChevronLeft size={18} />
        </Link>

        <span className="text-sm font-semibold text-gray-900">
           {title}
        </span>
      </div>

      <Link
        to="/"
        aria-label="홈으로 이동"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-blue-50 hover:text-[#346AFF]"
      >
        <Home size={19} />
      </Link>
    </nav>
  );
}