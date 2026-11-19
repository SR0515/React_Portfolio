
import { skills } from '@/data/portfolio';

export default function TechSection() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-widest text-[#346AFF]">
          TECH COLLECTION
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-gray-900">
          개발 기술 모음
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          프로젝트에 활용한 기술들을 소개합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
          >
            <h3 className="mb-4 text-sm font-bold text-[#346AFF]">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
