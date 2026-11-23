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
      {/* PC 헤더 */}
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center gap-6 px-5">
        {/* 왼쪽 로고 */}
        <div className="shrink-0">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-[#346AFF]"
          >
            SURIN<span className="text-gray-800">SHOP</span>
          </Link>
        </div>

        {/* 가운데 검색창 */}
        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <div className="w-full max-w-[600px]">
            <div className="flex h-11 overflow-hidden rounded-4xl border-2 border-[#346AFF] transition focus-within:ring-2 focus-within:ring-blue-100">
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="프로젝트, 기술 스택을 검색해 보세요."
                className="h-full min-w-0 flex-1 px-4 text-sm outline-none"
              />

              <button
                type="button"
                aria-label="검색"
                className="flex w-14 shrink-0 items-center justify-center bg-white text-[#346AFF] transition hover:bg-blue-50"
              >
                <Search size={21} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="ml-auto flex shrink-0 items-center gap-5">
          <Link
            to="/wishlist"
            className="relative flex items-center text-gray-600 transition hover:text-[#346AFF]"
          >
            <Heart size={23} strokeWidth={1.8} />

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            to="/mypage"
            className="flex items-center text-gray-600 transition hover:text-[#346AFF]"
          >
            <UserRound size={23} strokeWidth={1.8} />
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