import React from 'react';

interface FormSectionProps {
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {children}
  </div>
);

