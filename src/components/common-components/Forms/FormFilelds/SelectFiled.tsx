"use client";

import { useField } from 'formik';
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm">{label}</Label>
      <Select 
        onValueChange={(value) => helpers.setValue(value)}
        value={field.value}
        name={name}
      >
        <SelectTrigger className={meta.touched && meta.error ? "border-red-500" : ""}>
          <SelectValue placeholder="Please Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

