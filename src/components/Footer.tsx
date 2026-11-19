
export default function Footer() {
  return (
    <footer id="about" className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-[#346AFF]">
              SURIN.ZIP
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
              디자인과 개발을 연결하며 더 나은 사용자 경험을
              만들어가는 프론트엔드 개발자 김수린입니다.
              <br />
              이 공간은 저의 프로젝트와 개발 경험을 기록하는 아카이브입니다.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-gray-900">
              CONTACT
            </h3>

            <a
              href="mailto:rur9090@naver.com"
              className="mt-4 inline-block text-sm text-[#346AFF] hover:underline"
            >
              rur9090@naver.com
            </a>

            <p className="mt-2 text-sm text-gray-500">
              010-2716-9091
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 KIM SURIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
