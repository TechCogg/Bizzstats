import { Field } from 'formik';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, placeholder }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-sm">{label}</Label>
    <Field name={name} as={Input} id={name} placeholder={placeholder} />
  </div>
);

