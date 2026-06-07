import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Gold: Story = {
  args: {
    variant: 'gold',
    children: 'Button',
  },
};

export const Brown: Story = {
  args: {
    variant: 'brown',
    children: 'Button',
  },
};
