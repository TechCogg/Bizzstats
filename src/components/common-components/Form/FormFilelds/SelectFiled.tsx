import { Field } from 'formik';
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-sm">{label}</Label>
    <Field name={name} as={Select}>
      <SelectTrigger>
        <SelectValue placeholder="Please Select" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Field>
  </div>
);

