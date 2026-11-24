
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Search,
  Heart,
  UserRound,
  Languages,
  ChevronDown,
  Check,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'ko', label: '한국어', native: '한국어' },
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ja', label: '日本語', native: '日本語' },
    { code: 'zh', label: '中文', native: '中文' },
  ];

  const currentLanguage =
  (i18n.resolvedLanguage || i18n.language || 'ko').split('-')[0];

  const selectedLanguage =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  // 언어변경
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('appLanguage', lang);
    setIsLanguageOpen(false);
  };

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
                placeholder={t('header.searchPlaceholder')}
                className="h-full min-w-0 flex-1 px-4 text-sm outline-none"
              />

              <button
                type="button"
                aria-label={t('header.search')}
                className="flex w-14 shrink-0 items-center justify-center bg-white text-[#346AFF] transition hover:bg-blue-50"
              >
                <Search size={21} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="ml-auto flex shrink-0 items-center gap-4">
          {/* 언어 선택 */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              className={`flex h-10 items-center gap-2 rounded-xl border px-3 transition ${
                isLanguageOpen
                  ? 'border-[#346AFF] bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-[#346AFF] hover:bg-blue-50/50'
              }`}
              aria-label={t('header.language')}
              aria-expanded={isLanguageOpen}
            >
              <Languages size={17} className="text-[#346AFF]" />

              <span className="text-sm font-semibold text-gray-700">
                {selectedLanguage.label}
              </span>

              <ChevronDown
                size={15}
                className={`text-gray-400 transition-transform ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <ul className="flex flex-col gap-0.5">
                  {languages.map((lang) => {
                    const isSelected = currentLanguage === lang.code;

                    return (
                      <li key={lang.code}>
                        <button
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                            isSelected
                              ? 'bg-blue-50 font-bold text-[#346AFF]'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <span>{lang.native}</span>

                          {isSelected && (
                            <Check size={15} className="text-[#346AFF]" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* 위시리스트 */}
          <Link
            to="/wishlist"
            aria-label={t('header.wishlist')}
            className="relative flex items-center text-gray-600 transition hover:text-[#346AFF]"
          >
            <Heart size={23} strokeWidth={1.8} />

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* 마이페이지 */}
          <Link
            to="/mypage"
            aria-label={t('header.myPage')}
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
            placeholder={t('header.searchPlaceholder')}
            className="w-full bg-transparent px-4 text-sm outline-none"
          />

          <button
            type="button"
            aria-label={t('header.search')}
            className="flex w-12 shrink-0 items-center justify-center text-gray-500 transition hover:text-[#346AFF]"
          >
            <Search size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}
