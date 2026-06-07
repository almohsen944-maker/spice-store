import type { Meta, StoryObj } from '@storybook/react';
import { ProductGallery } from './ProductGallery';

const meta: Meta<typeof ProductGallery> = {
  title: 'Features/ProductGallery',
  component: ProductGallery,
};

export default meta;
type Story = StoryObj<typeof ProductGallery>;

export const Default: Story = {
  args: {
    images: [
      'https://placehold.co/600x600?text=Saffron+1',
      'https://placehold.co/600x600?text=Saffron+2',
      'https://placehold.co/600x600?text=Saffron+3',
    ],
    productName: 'Premium Saffron',
  },
};

export const SingleImage: Story = {
  args: {
    images: ['https://placehold.co/600x600?text=Saffron'],
    productName: 'Premium Saffron',
  },
};
