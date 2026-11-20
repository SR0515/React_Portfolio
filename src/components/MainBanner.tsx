import profileImage from '@/assets/profile/profile.jpeg';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function MainBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#252B36] via-[#303846] to-[#202733]">
      <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center justify-between gap-10 px-6 py-14 sm:px-10 lg:min-h-[480px] lg:px-16">
        {/* 왼쪽 소개 영역 */}
        <div className="relative z-10 max-w-[650px] flex-1">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-300 shadow-sm backdrop-blur">
            <Code2 size={15} />
            FRONTEND DEVELOPER PORTFOLIO
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            사용자 경험을 고민하고
            <br />
            <span className="text-[#5B91FF]">디자인을 코드로</span> 만듭니다.
          </h1>

          <p className="mt-6 max-w-[560px] text-sm leading-8 text-gray-300 sm:text-base">
            안녕하세요! <strong className="font-bold text-white">김수린</strong>입니다.
            <br />
            웹디자인 경험을 바탕으로 UI/UX를 이해하고,
            다양한 기술을 활용해 완성도 높은 웹 서비스를 구현하는
            프론트엔드 개발자입니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#346AFF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              프로젝트 둘러보기
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>         
          </div>

          <div className="mt-9 flex items-center gap-2 text-xs font-medium text-gray-400">
            <Sparkles size={15} className="text-[#5B91FF]" />
            <span>Frontend · Full Stack · UI/UX</span>
          </div>
        </div>

        {/* 오른쪽 프로필 영역 */}
        <div className="relative hidden shrink-0 items-center justify-center md:flex">
          <div className="relative rotate-2 rounded-[28px] border-[8px] border-white/90 bg-white p-2 shadow-2xl shadow-black/30 transition duration-500 hover:rotate-0">
            <img
              src={profileImage}
              alt="김수린 프로필"
              className="h-[310px] w-[235px] rounded-[20px] object-cover"
            />
          </div>

          {/* 프로필 장식 카드 */}
          <div className="absolute -bottom-4 -left-12 rounded-xl border border-white/10 bg-[#394354]/95 px-5 py-3 shadow-lg backdrop-blur">
            <p className="text-xs font-medium text-gray-400">DEVELOPER</p>
            <p className="mt-1 text-sm font-extrabold text-[#5B91FF]">SURIN PORTFOLIO</p>
          </div>
        </div>
      </div>
    </section>
  );
}