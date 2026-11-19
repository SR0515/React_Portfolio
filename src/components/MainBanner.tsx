
import profileImage from '@/assets/profile/profile.jpeg';

export default function MainBanner() {
  return (
    <section className="mt-6 overflow-hidden rounded-xl bg-[#EDF4FF]">
      <div className="grid items-center gap-6 px-7 py-10 sm:px-12 md:grid-cols-[1fr_240px] md:py-12">
        <div>
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-[#346AFF]">
            FRONTEND DEVELOPER
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            안녕하세요!
            <br />
            <span className="text-[#346AFF]">김수린</span>의
            <br />
            개발 아카이브입니다.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
            웹디자인 경험을 바탕으로 사용자 경험을 고민하고,
            디자인을 실제 서비스로 구현하는 프론트엔드 개발자입니다.
            <br />
            다양한 기술과 프로젝트를 이곳에서 소개합니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#346AFF] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              프로젝트 둘러보기 →
            </a>

            <a
              href="#about"
              className="rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-[#346AFF] transition hover:bg-blue-50"
            >
              개발자 소개
            </a>
          </div>
        </div>

        <div className="hidden justify-center md:flex">
          <div className="relative">
            <div className="absolute -inset-3 rotate-6 rounded-2xl bg-white/70" />
            <img
              src={profileImage}
              alt="김수린 프로필"
              className="relative h-64 w-48 rounded-2xl border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
