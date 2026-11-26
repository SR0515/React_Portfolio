
import { useMemo } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import MainBanner from '@/components/MainBanner';
import ProjectSection from '@/components/ProjectSection';
import ProjectFilter from '@/components/ProjectFilter';
import TechSection from '@/components/TechSection';
import Footer from '@/components/Footer';
import { projects } from '@/data/portfolio';
import useWishlist from '@/hooks/useWishlist';
import { useProjectStore } from '@/store/useProjectStore';

export default function Main() {
  const {
    searchKeyword,
    selectedCategory,
    selectedTech,
    sortOrder,
    setSearchKeyword,
    setCategory,
    setTech,
    setSortOrder,
  } = useProjectStore();

  const { wishlist, toggleWishlist } = useWishlist();

  const techOptions = useMemo(
    () => [...new Set(projects.flatMap((project) => project.stack))].sort(),
    []
  );

  const filteredProjects = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

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
      if (sortOrder === 'latest') {
        return b.id - a.id;
      }

      if (sortOrder === 'oldest') {
        return a.id - b.id;
      }

      if (sortOrder === 'name') {
        return a.title.localeCompare(b.title, 'ko');
      }

      return 0;
    });
  }, [searchKeyword, selectedCategory, selectedTech, sortOrder]);

  return (
    <div className="min-h-screen bg-white">
      <Header
        search={searchKeyword}
        onSearchChange={setSearchKeyword}
        wishlistCount={wishlist.length}
      />

      <CategoryNav
        selected={selectedCategory}
        onSelect={setCategory}
      />

      <main className="mx-auto">
        {selectedCategory === 'all' && <MainBanner />}

        <div className="mx-auto max-w-300 px-5">
          <div className="mt-5 w-full sm:ml-auto sm:w-[30%]">
            <ProjectFilter
              sort={sortOrder}
              onSortChange={setSortOrder}
              selectedTech={selectedTech}
              onTechChange={setTech}
              techOptions={techOptions}
              resultCount={filteredProjects.length}
            />
          </div>

          <ProjectSection
            projects={filteredProjects}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            search={searchKeyword}
          />

          <TechSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
