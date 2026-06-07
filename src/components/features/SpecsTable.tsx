import React from 'react';
import { useLocale } from '../../hooks/useLocale';

interface Spec {
  label: { en: string; ar: string };
  value: { en: string; ar: string };
}

interface SpecsTableProps {
  specs: Spec[];
}

export const SpecsTable: React.FC<SpecsTableProps> = ({ specs }) => {
  const { language } = useLocale();

  return (
    <div className="bg-brand-brown/5 rounded-luxury border border-brand-brown/10 overflow-hidden">
      <table className="w-full">
        <tbody className="divide-y divide-brand-brown/10">
          {specs.map((spec, index) => (
            <tr key={index} className="even:bg-brand-brown/[0.02]">
              <td className="px-6 py-4 text-sm font-medium text-brand-brown w-1/3">
                {spec.label[language as 'en' | 'ar']}
              </td>
              <td className="px-6 py-4 text-sm text-brand-brown/80">
                {spec.value[language as 'en' | 'ar']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export type { Spec };
