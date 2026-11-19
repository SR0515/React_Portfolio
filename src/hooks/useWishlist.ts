
import { useEffect, useState } from 'react';

const WISHLIST_KEY = 'surin-portfolio-wishlist';

export default function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (projectId: number) => {
    setWishlist((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const isWishlisted = (projectId: number) => {
    return wishlist.includes(projectId);
  };

  return {
    wishlist,
    toggleWishlist,
    isWishlisted,
  };
}
