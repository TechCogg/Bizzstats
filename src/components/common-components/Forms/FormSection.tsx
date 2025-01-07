import React, { FC, ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
}

export const FormSection: FC<FormSectionProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {children}
  </div>
);

