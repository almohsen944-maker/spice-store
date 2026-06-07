import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Clock, Shield } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/atoms/Button';
import { Badge } from '../components/ui/atoms/Badge';
import { Skeleton } from '../components/ui/atoms/Skeleton';
import { ProductGallery } from '../components/features/ProductGallery';
import { CountdownTimer } from '../components/ui/molecules/CountdownTimer';
import { StickyAddToCart } from '../components/ui/molecules/StickyAddToCart';
import { BundleOffer } from '../components/features/BundleOffer';
import { SpecsTable } from '../components/features/SpecsTable';
import type { Spec } from '../components/features/SpecsTable';
import { ReviewsSection } from '../components/features/ReviewsSection';
import type { Review } from '../components/features/ReviewsSection';
import { useCart } from '../hooks/useCart';
import { useLocale } from '../hooks/useLocale';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { mockApi } from '../services/mockApi';
import { fadeIn, fadeInUp, staggerContainer } from '../utils/animations';
import type { Product } from '../components/features/ProductCard';

const OFFER_EXPIRY = new Date(Date.now() + 86400000 * 3);

const PRODUCT_SPECS: Spec[] = [
  { label: { en: 'Origin', ar: 'المنشأ' }, value: { en: 'India', ar: 'الهند' } },
  { label: { en: 'Aroma', ar: 'الرائحة' }, value: { en: 'Earthy, Warm', ar: 'ترابية، دافئة' } },
  { label: { en: 'Intensity', ar: 'الشدة' }, value: { en: 'Medium', ar: 'متوسطة' } },
  { label: { en: 'Shelf Life', ar: 'مدة الصلاحية' }, value: { en: '24 months', ar: '٢٤ شهراً' } },
  { label: { en: 'Storage', ar: 'التخزين' }, value: { en: 'Cool, dry place', ar: 'مكان بارد وجاف' } },
];

const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Aisha Al Mazroui',
    rating: 5,
    date: '2026-05-28',
    content: 'Exceptional quality! The aroma is incredibly rich and authentic. Reminds me of the spices my grandmother used.',
  },
  {
    id: 'r2',
    author: 'Omar Hassan',
    rating: 4,
    date: '2026-05-15',
    content: 'Very good quality and fast shipping. The packaging is beautiful and keeps the spice fresh. Would recommend.',
  },
  {
    id: 'r3',
    author: 'Layla Khan',
    rating: 5,
    date: '2026-04-30',
    content: 'Worth every dirham. I use it daily in my cooking and the flavor is unmatched. Will definitely order again.',
  },
];

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();
  const { language } = useLocale();
  const { addRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    if (!slug) return;
    mockApi.getProductBySlug(slug).then((data) => {
      setProduct(data ?? null);
      if (data) {
        addRecentlyViewed(data.id);
      }
      setLoading(false);
    });
  }, [slug, addRecentlyViewed]);

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          <Skeleton className="h-6 w-32" />
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="aspect-square rounded-luxury" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif text-brand-brown mb-4">Product Not Found</h1>
          <p className="text-brand-brown/70 mb-8">The spice you're looking for has vanished from our shelf.</p>
          <Link to="/products">
            <Button variant="gold">Browse All Products</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const name = product.name[language as 'en' | 'ar'];
  const description = product.description[language as 'en' | 'ar'];
  const inStock = product.stock > 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <MainLayout>
      <StickyAddToCart price={product.price} onAddToCart={handleAddToCart} />
      <motion.div
        className="max-w-7xl mx-auto px-4 py-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-brown/60 hover:text-brand-brown transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <motion.div variants={fadeIn}>
            <ProductGallery images={product.images} productName={name} />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <div>
              {product.isBestSeller && (
                <Badge variant="gold" className="mb-3">Best Seller</Badge>
              )}
              <h1 className="text-fluid-h2 font-serif text-brand-brown mb-2">{name}</h1>
              <div className="flex items-center gap-4 text-sm text-brand-brown/70">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-brand-gold fill-brand-gold" />
                  <span>{product.rating}</span>
                  <span>({product.reviewsCount} reviews)</span>
                </div>
                {product.isFeatured && (
                  <Badge variant="new">Featured</Badge>
                )}
              </div>
            </div>

            <div className="text-3xl font-serif text-brand-brown font-bold">
              {product.price} {product.currency}
            </div>

            <p className="text-brand-brown/80 leading-relaxed">{description}</p>

            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-sm ${inStock ? 'text-green-700' : 'text-red-600'}`}>
                <Shield size={16} />
                <span>{inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
              {product.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={handleAddToCart}
                disabled={!inStock}
                className="flex items-center gap-2"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </Button>
            </div>

            <div className="border-t border-brand-brown/10 pt-6 mt-2">
              <div className="flex items-center gap-8 text-sm text-brand-brown/60">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Free shipping on orders over 200 AED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-brown/5 p-6 rounded-luxury border border-brand-brown/10">
            <h2 className="text-xl font-serif text-brand-brown mb-4">Description</h2>
            <p className="text-brand-brown/80 leading-relaxed">{description}</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-brand-brown mb-4">Product Details</h2>
            <SpecsTable specs={PRODUCT_SPECS} />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-brand-brown/5 p-6 rounded-luxury border border-brand-brown/10">
            <h2 className="text-xl font-serif text-brand-brown mb-4">Limited Time Offer</h2>
            <CountdownTimer expiryDate={OFFER_EXPIRY} />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <BundleOffer
            products={[
              { name: `${product.name['en']} (Premium)`, price: product.price },
              { name: 'Complementary Spice Blend', price: Math.round(product.price * 0.6) },
            ]}
            discount={15}
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12">
          <ReviewsSection reviews={SAMPLE_REVIEWS} />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};
