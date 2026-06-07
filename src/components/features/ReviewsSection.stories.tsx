import type { Meta, StoryObj } from '@storybook/react';
import { ReviewsSection } from './ReviewsSection';

const meta: Meta<typeof ReviewsSection> = {
  title: 'Features/ReviewsSection',
  component: ReviewsSection,
};

export default meta;
type Story = StoryObj<typeof ReviewsSection>;

export const Default: Story = {
  args: {
    reviews: [
      { id: '1', author: 'Aisha Al Mazroui', rating: 5, date: '2026-05-28', content: 'Exceptional quality! The aroma is incredibly rich and authentic.' },
      { id: '2', author: 'Omar Hassan', rating: 4, date: '2026-05-15', content: 'Very good quality and fast shipping. The packaging is beautiful.' },
      { id: '3', author: 'Layla Khan', rating: 5, date: '2026-04-30', content: 'Worth every dirham. I use it daily in my cooking.' },
    ],
  },
};

export const Empty: Story = {
  args: {
    reviews: [],
  },
};
