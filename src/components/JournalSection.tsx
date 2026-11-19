
import { journals } from '@/data/portfolio';

export default function JournalSection() {
  return (
    <section id="journal" className="mt-16 scroll-mt-28">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-widest text-[#346AFF]">
          DEVELOPER JOURNAL
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-gray-900">
          최근 개발 기록
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          개발하면서 경험한 내용과 문제 해결 과정을 기록합니다.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {journals.map((journal, index) => (
          <article
            key={journal.id}
            className={`flex items-center gap-4 p-5 transition hover:bg-blue-50/50 ${
              index !== journals.length - 1
                ? 'border-b border-gray-100'
                : ''
            }`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">
              {journal.emoji}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold tracking-wider text-[#346AFF]">
                {journal.category} · {journal.date}
              </p>

              <h3 className="mt-1 truncate text-sm font-bold text-gray-800">
                {journal.title}
              </h3>

              <p className="mt-1 truncate text-xs text-gray-500">
                {journal.description}
              </p>
            </div>

            <span className="text-lg text-gray-300">›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
