import { useState, useCallback } from 'react';

const STORAGE_KEY = 'recentlyViewedProductIds';
const MAX_ITEMS = 10;

const loadIds = (): string[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveIds = (ids: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Storage full or unavailable - silently ignore
  }
};

export const useRecentlyViewed = () => {
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(loadIds);

  const addRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewedIds((prev) => {
      const next = [productId, ...prev.filter((id) => id !== productId)].slice(0, MAX_ITEMS);
      saveIds(next);
      return next;
    });
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewedIds([]);
    saveIds([]);
  }, []);

  return { recentlyViewedIds, addRecentlyViewed, clearRecentlyViewed };
};
