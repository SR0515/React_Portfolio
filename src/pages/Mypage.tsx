
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import useWishlist from '@/hooks/useWishlist';
import profileImage from '@/assets/profile/profile.jpeg';
import {
  Heart,
  FolderKanban,
  Code2,
  Mail,
  ExternalLink,
  ChevronRight,
  LayoutDashboard,
  Monitor,
  Server,
  Palette,
} from 'lucide-react';

import { projects } from '@/data/portfolio';

export default function MyPage() {
    const [search, setSearch] = useState('');
    const { wishlist } = useWishlist();

    const menuItems = [
        {
            title: '마이페이지',
            icon: LayoutDashboard,
            href: '#overview',
        },
        {
            title: '내 프로젝트',
            icon: FolderKanban,
            href: '#projects',
        },
        {
            title: '관심 프로젝트',
            icon: Heart,
            href: '/wishlist',
        },
        {
            title: '기술 스택',
            icon: Code2,
            href: '#skills',
        },
        {
            title: '깃허브',
            icon: Mail,
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
        title: 'Frontend',
        description: '사용자 중심의 UI 및 웹 서비스 개발',
        icon: Monitor,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        },
        {
        title: 'Full Stack',
        description: '프론트엔드부터 백엔드까지 서비스 구축',
        icon: Server,
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        },
        {
        title: 'Design',
        description: 'UI/UX 및 웹 디자인 경험',
        icon: Palette,
        color: 'text-pink-600',
        bg: 'bg-pink-50',
        },
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FA] text-[#191F28]">
            {/* 상단 헤더 */}
             <Header
                search={search}
                onSearchChange={setSearch}
                wishlistCount={wishlist.length}
            />

            <main className="mx-auto max-w-[1200px] px-5 py-8">
                {/* 페이지 타이틀 */}
                <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-[#346AFF]">
                    MY PORTFOLIO
                </p>
                <h1 className="text-2xl font-bold tracking-tight">
                    마이페이지
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    개발자 김수린의 포트폴리오와 활동 정보를 확인해 보세요.
                </p>
                </div>

                {/* 프로필 영역 */}
                <section
                    id="overview"
                    className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                <div className="bg-gradient-to-r from-[#252B36] via-[#303846] to-[#202733] px-7 py-8 text-white sm:px-9">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/80">
                            <img
                                src={profileImage}
                                alt="김수린 프로필 이미지"
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
                                사용자 경험과 서비스의 완성도를 고민하는
                                <br className="hidden sm:block" />
                                프론트엔드 중심의 웹 개발자입니다.
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
                    <p className="text-sm text-gray-500">전체 프로젝트</p>
                    <p className="mt-2 text-2xl font-bold text-[#346AFF]">
                        {projects.length}
                        <span className="ml-1 text-sm font-medium text-gray-500">개</span>
                    </p>
                    </div>

                    <div className="px-4 py-6 text-center">
                    <p className="text-sm text-gray-500">기술 스택</p>
                    <p className="mt-2 text-2xl font-bold text-[#346AFF]">
                        {skills.length}
                        <span className="ml-1 text-sm font-medium text-gray-500">개</span>
                    </p>
                    </div>

                    <div className="col-span-2 border-t border-gray-100 px-4 py-6 text-center sm:col-span-1 sm:border-t-0">
                    <p className="text-sm text-gray-500">주요 개발 분야</p>
                    <p className="mt-2 text-2xl font-bold text-[#346AFF]">3</p>
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
                        포트폴리오 메뉴
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
                            {item.title}
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
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                        <h3 className="text-lg font-bold">내 프로젝트</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            지금까지 참여한 프로젝트를 확인해 보세요.
                        </p>
                        </div>

                        <Link
                        to="/"
                        className="flex items-center gap-1 text-sm font-semibold text-[#346AFF] hover:underline"
                        >
                        전체 보기
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
                                {project.title}
                            </p>
                            <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                                {project.description}
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
                    <h3 className="text-lg font-bold">주요 개발 분야</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        다양한 경험을 바탕으로 웹 서비스를 개발합니다.
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
                            <h4 className="font-bold">{category.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-gray-500">
                                {category.description}
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
                        <h3 className="text-lg font-bold">기술 스택</h3>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                        프로젝트에서 활용한 주요 기술입니다.
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
                    <h3 className="text-lg font-bold">Contact</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        새로운 기회와 협업에 열려 있습니다.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {/* <a
                        href="mailto:"
                        className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                        >
                        <span className="flex items-center gap-3">
                            <Mail size={20} className="text-[#346AFF]" />
                            <span className="text-sm font-semibold">이메일 문의</span>
                        </span>
                        <ExternalLink size={16} className="text-gray-400" />
                        </a> */}

                        <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                        >
                        <span className="flex items-center gap-3">
                            <Code2 size={20} className="text-gray-700" />
                            <span className="text-sm font-semibold">GitHub</span>
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
