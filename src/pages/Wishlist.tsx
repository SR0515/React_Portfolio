
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/data/portfolio';
import useWishlist from '@/hooks/useWishlist';

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  const savedProjects = projects.filter((project) =>
    wishlist.includes(project.id)
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        search=""
        onSearchChange={() => {}}
        wishlistCount={wishlist.length}
      />

      <main className="mx-auto min-h-[65vh] max-w-[1200px] px-5 py-12">
        <div className="mb-8">
          <p className="mb-1 text-xs font-bold tracking-widest text-[#346AFF]">
            MY WISHLIST
          </p>
          <h1 className="text-2xl font-bold text-gray-900">
            관심 프로젝트
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            관심 있는 프로젝트를 모아볼 수 있어요.
          </p>
        </div>

        {savedProjects.length > 0 ? (
          <>
            <div className="mb-5 text-sm text-gray-500">
              총 <strong className="text-[#346AFF]">{savedProjects.length}개</strong>의 프로젝트를 찜했어요.
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {savedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isWishlisted={true}
                  onToggleWishlist={toggleWishlist}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-20 text-center">
            <div className="mb-4 text-5xl text-gray-300">♡</div>
            <h2 className="text-lg font-bold text-gray-800">
              아직 찜한 프로젝트가 없습니다.
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              관심 있는 프로젝트의 하트 버튼을 눌러보세요.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-lg bg-[#346AFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              프로젝트 둘러보기
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
