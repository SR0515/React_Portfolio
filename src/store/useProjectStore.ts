import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type SortOrder = 'oldest' | 'latest' | 'name';

interface ProjectState {
  searchKeyword: string;
  selectedCategory: string;
  selectedTech: string;
  sortOrder: SortOrder;

  setSearchKeyword: (keyword: string) => void;
  setCategory: (category: string) => void;
  setTech: (tech: string) => void;
  setSortOrder: (order: SortOrder) => void;
  resetFilters: () => void;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      searchKeyword: '',
      selectedCategory: 'all',
      selectedTech: 'all',
      sortOrder: 'oldest',

      setSearchKeyword: (keyword) =>
        set({ searchKeyword: keyword }),

      setCategory: (category) =>
        set({ selectedCategory: category }),

      setTech: (tech) =>
        set({ selectedTech: tech }),

      setSortOrder: (order) =>
        set({ sortOrder: order }),

      resetFilters: () =>
        set({
          searchKeyword: '',
          selectedCategory: 'all',
          selectedTech: 'all',
          sortOrder: 'oldest',
        }),
    }),
    {
      name: 'project-session',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);