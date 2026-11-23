
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import MainBanner from '@/components/MainBanner';
import ProjectSection from '@/components/ProjectSection';
import ProjectFilter from '@/components/ProjectFilter';
import TechSection from '@/components/TechSection';
import JournalSection from '@/components/JournalSection';
import Footer from '@/components/Footer';
import { projects } from '@/data/portfolio';
import useWishlist from '@/hooks/useWishlist';

export default function Main() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sort, setSort] = useState('oldest');

  const { wishlist, toggleWishlist } = useWishlist();

  const techOptions = useMemo(
    () => [...new Set(projects.flatMap((project) => project.stack))].sort(),
    []
  );

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const result = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        project.category === selectedCategory;

      const matchesTech =
        selectedTech === 'all' ||
        project.stack.includes(selectedTech);

      const matchesSearch =
        !keyword ||
        project.title.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(keyword)
        );

      return matchesCategory && matchesTech && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sort === 'latest') {
        return b.id - a.id;
      }

      if (sort === 'oldest') {
        return a.id - b.id;
      }

      if (sort === 'name') {
        return a.title.localeCompare(b.title, 'ko');
      }

      return 0;
    });
  }, [search, selectedCategory, selectedTech, sort]);

  return (
    <div className="min-h-screen bg-white">
      <Header
        search={search}
        onSearchChange={setSearch}
        wishlistCount={wishlist.length}
      />

      <CategoryNav
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <main className="mx-auto">
        {selectedCategory === 'all' && <MainBanner />}

        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mt-5 w-full sm:ml-auto sm:w-[30%]">
            <ProjectFilter
              sort={sort}
              onSortChange={setSort}
              selectedTech={selectedTech}
              onTechChange={setSelectedTech}
              techOptions={techOptions}
              resultCount={filteredProjects.length}
            />
          </div>

          <ProjectSection
            projects={filteredProjects}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            search={search}
          />

          <TechSection />
          <JournalSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
