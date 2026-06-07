import type { Meta, StoryObj } from '@storybook/react';
import { SpecsTable } from './SpecsTable';
import { LocaleProvider } from '../../context/LocaleContext';

const meta: Meta<typeof SpecsTable> = {
  title: 'Features/SpecsTable',
  component: SpecsTable,
  decorators: [
    (Story) => (
      <LocaleProvider>
        <div className="max-w-md">
          <Story />
        </div>
      </LocaleProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SpecsTable>;

export const Default: Story = {
  args: {
    specs: [
      { label: { en: 'Origin', ar: 'المنشأ' }, value: { en: 'India', ar: 'الهند' } },
      { label: { en: 'Aroma', ar: 'الرائحة' }, value: { en: 'Earthy, Warm', ar: 'ترابية، دافئة' } },
      { label: { en: 'Intensity', ar: 'الشدة' }, value: { en: 'Medium', ar: 'متوسطة' } },
      { label: { en: 'Shelf Life', ar: 'مدة الصلاحية' }, value: { en: '24 months', ar: '٢٤ شهراً' } },
      { label: { en: 'Storage', ar: 'التخزين' }, value: { en: 'Cool, dry place', ar: 'مكان بارد وجاف' } },
    ],
  },
};
