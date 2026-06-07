import products from '../mock/products.json';
import categories from '../mock/categories.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  getProducts: async () => {
    await delay(500);
    return products;
  },
  getProductBySlug: async (slug: string) => {
    await delay(500);
    return products.find((p) => p.slug === slug);
  },
  getCategories: async () => {
    await delay(500);
    return categories;
  },
};
