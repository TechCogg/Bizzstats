"use client";

import { useField } from 'formik';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, placeholder, type = "text" }) => {
  const [field, meta] = useField(name);

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm">{label}</Label>
      <Input 
        {...field} 
        id={name} 
        placeholder={placeholder} 
        type={type}
        className={meta.touched && meta.error ? "border-red-500" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

