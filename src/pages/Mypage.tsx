
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import useWishlist from '@/hooks/useWishlist';
import profileImage from '@/assets/profile/profile.jpeg';

import {
  Heart,
  FolderKanban,
  Code2,
  ExternalLink,
  ChevronRight,
  LayoutDashboard,
  Monitor,
  Server,
  Palette,
} from 'lucide-react';

import { projects } from '@/data/portfolio';

export default function MyPage() {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const { wishlist } = useWishlist();

  const menuItems = [
    {
      title: 'myPage.menu.overview',
      icon: LayoutDashboard,
      href: '#overview',
    },
    {
      title: 'myPage.menu.projects',
      icon: FolderKanban,
      href: '#projects',
    },
    {
      title: 'myPage.menu.wishlist',
      icon: Heart,
      href: '/wishlist',
    },
    {
      title: 'myPage.menu.skills',
      icon: Code2,
      href: '#skills',
    },
    {
      title: 'myPage.menu.github',
      icon: Code2,
      href: '#contact',
    },
  ];

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Vite',
    'Tailwind CSS',
    'Svelte',
    'SvelteKit',
    'Node.js',
    'Express',
    'MySQL',
    'Zustand',
    'i18next',
  ];

  const categories = [
    {
      title: 'myPage.categories.frontend.title',
      description: 'myPage.categories.frontend.description',
      icon: Monitor,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'myPage.categories.fullstack.title',
      description: 'myPage.categories.fullstack.description',
      icon: Server,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
    {
      title: 'myPage.categories.design.title',
      description: 'myPage.categories.design.description',
      icon: Palette,
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#191F28]">
      {/* 상단 헤더 */}
      <Header
        search={search}
        onSearchChange={setSearch}
        wishlistCount={wishlist.length}
      />

      <main className="mx-auto max-w-300 px-5 py-8">
        {/* 페이지 타이틀 */}
        <div className="mb-6">
          <p className="mb-1 text-sm font-medium text-[#346AFF]">
            MY PORTFOLIO
          </p>

          <h1 className="text-2xl font-bold tracking-tight">
            {t('myPage.title')}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {t('myPage.subtitle')}
          </p>
        </div>

        {/* 프로필 영역 */}
        <section
          id="overview"
          className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm"
        >
          <div className="bg-linear-to-r from-[#252B36] via-[#303846] to-[#202733] px-7 py-8 text-white sm:px-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/80">
                <img
                  src={profileImage}
                  alt={t('myPage.profileImageAlt')}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold">김수린</h2>

                  <span className="rounded-full bg-[#346AFF] px-3 py-1 text-xs font-semibold">
                    Web Developer
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-gray-300">
                  {t('myPage.profileDescription')}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-gray-200">
                    Frontend
                  </span>

                  <span className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-gray-200">
                    Full Stack
                  </span>

                  <span className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-gray-200">
                    UI/UX
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 활동 통계 */}
          <div className="grid grid-cols-2 divide-x divide-gray-100 sm:grid-cols-3">
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-gray-500">
                {t('myPage.statistics.projects')}
              </p>

              <p className="mt-2 text-2xl font-bold text-[#346AFF]">
                {projects.length}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  {t('myPage.statistics.unit')}
                </span>
              </p>
            </div>

            <div className="px-4 py-6 text-center">
              <p className="text-sm text-gray-500">
                {t('myPage.statistics.skills')}
              </p>

              <p className="mt-2 text-2xl font-bold text-[#346AFF]">
                {skills.length}
                <span className="ml-1 text-sm font-medium text-gray-500">
                  {t('myPage.statistics.unit')}
                </span>
              </p>
            </div>

            <div className="col-span-2 border-t border-gray-100 px-4 py-6 text-center sm:col-span-1 sm:border-t-0">
              <p className="text-sm text-gray-500">
                {t('myPage.statistics.categories')}
              </p>

              <p className="mt-2 text-2xl font-bold text-[#346AFF]">
                {categories.length}
              </p>
            </div>
          </div>
        </section>

        {/* 본문: 사이드 메뉴 + 콘텐츠 */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          {/* 왼쪽 마이페이지 메뉴 */}
          <aside className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="border-b border-gray-100 px-5 py-4">
              <h3 className="font-bold">MY MENU</h3>

              <p className="mt-1 text-xs text-gray-400">
                {t('myPage.menuDescription')}
              </p>
            </div>

            <nav className="p-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm transition ${
                      index === 0
                        ? 'bg-blue-50 font-semibold text-[#346AFF]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#346AFF]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      {t(item.title)}
                    </span>

                    <ChevronRight size={16} />
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* 오른쪽 콘텐츠 */}
          <div className="min-w-0 space-y-6">
            {/* 프로젝트 */}
            <section
              id="projects"
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    {t('myPage.projects.title')}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {t('myPage.projects.description')}
                  </p>
                </div>

                <Link
                  to="/"
                  className="flex w-fit shrink-0 self-end items-center gap-1 text-sm font-semibold text-[#346AFF] hover:underline"
                >
                  {t('myPage.projects.viewAll')}
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="space-y-3">
                {projects.slice(0, 3).map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-gray-800 transition group-hover:text-[#346AFF]">
                        {t(project.title)}
                      </p>

                      <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                        {t(project.description)}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-gray-100 px-2 py-1 text-[11px] text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ChevronRight
                      size={18}
                      className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#346AFF]"
                    />
                  </Link>
                ))}
              </div>
            </section>

            {/* 개발 분야 */}
            <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-bold">
                {t('myPage.categories.title')}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {t('myPage.categories.description')}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.title}
                      className="rounded-xl border border-gray-100 p-4"
                    >
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${category.bg} ${category.color}`}
                      >
                        <Icon size={21} />
                      </div>

                      <h4 className="font-bold">
                        {t(category.title)}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-gray-500">
                        {t(category.description)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 기술 스택 */}
            <section
              id="skills"
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="flex items-center gap-2">
                <Code2 size={20} className="text-[#346AFF]" />

                <h3 className="text-lg font-bold">
                  {t('myPage.skills.title')}
                </h3>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                {t('myPage.skills.description')}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#346AFF] hover:bg-blue-50 hover:text-[#346AFF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* 연락하기 */}
            <section
              id="contact"
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-lg font-bold">
                Contact
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {t('myPage.contact.description')}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/SR0515/React_Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <span className="flex items-center gap-3">
                    <Code2 size={20} className="text-gray-700" />

                    <span className="text-sm font-semibold">
                      GitHub
                    </span>
                  </span>

                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
