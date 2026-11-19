
import { Link } from 'react-router-dom';
import { Search, Heart, UserRound } from 'lucide-react';

interface HeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  wishlistCount: number;
}

export default function Header({
  search,
  onSearchChange,
  wishlistCount,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center gap-6 px-5">
        {/* 로고 */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-black tracking-tight text-[#346AFF]"
        >
          SURIN<span className="text-gray-800">.ZIP</span>
        </Link>

        {/* 검색창 */}
        <div className="hidden flex-1 md:block">
          <div className="flex h-11 overflow-hidden rounded-lg border-2 border-[#346AFF] transition focus-within:ring-2 focus-within:ring-blue-100">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="프로젝트, 기술 스택을 검색해 보세요."
              className="h-full flex-1 px-4 text-sm outline-none"
            />

            <button
              type="button"
              aria-label="검색"
              className="flex w-14 items-center justify-center bg-[#346AFF] text-white transition hover:bg-blue-700"
            >
              <Search size={21} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* 우측 메뉴 */}
        <div className="ml-auto flex shrink-0 items-center gap-5">
          {/* 관심 목록 */}
          <Link
            to="/wishlist"
            className="relative flex flex-col items-center gap-1 text-gray-600 transition hover:text-[#346AFF]"
          >
            <Heart
              size={23}
              strokeWidth={1.8}
            />

            <span className="text-[11px]">관심 목록</span>

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* About */}
          <Link
            to="/#about"
            className="flex flex-col items-center gap-1 text-gray-600 transition hover:text-[#346AFF]"
          >
            <UserRound
              size={23}
              strokeWidth={1.8}
            />

            <span className="text-[11px]">About</span>
          </Link>
        </div>
      </div>

      {/* 모바일 검색창 */}
      <div className="border-t border-gray-100 px-5 py-3 md:hidden">
        <div className="flex h-10 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 focus-within:border-[#346AFF]">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="프로젝트, 기술 스택 검색"
            className="w-full bg-transparent px-4 text-sm outline-none"
          />

          <button
            type="button"
            aria-label="검색"
            className="flex w-12 shrink-0 items-center justify-center text-gray-500 transition hover:text-[#346AFF]"
          >
            <Search size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}
