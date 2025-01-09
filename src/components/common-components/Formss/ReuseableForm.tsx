import { FieldValues, Path, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { InfoIcon } from 'lucide-react';
import { ZodType } from 'zod';

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: 'text' | 'email' | 'number' | 'password' | 'select' | 'checkbox' | 'file';
  placeholder?: string;
  required?: boolean;
  hasInfoIcon?: boolean;
  options?: string[];
  helperText?: string;
}

interface ReusableFormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;
  fields: FormFieldProps<T>[];
  schema: ZodType<T>;
}

export function ReusableForm<T extends FieldValues>({
  onSubmit,
  fields,
  schema,
}: ReusableFormProps<T>) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const renderField = (field: FormFieldProps<T>) => {
    const error = errors[field.name]?.message;

    return (
      <div key={field.name} className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </Label>
          {field.hasInfoIcon && <InfoIcon className="h-4 w-4 text-blue-500" />}
        </div>

        {field.type === 'select' ? (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} value={value}>
                <SelectTrigger className="w-full bg-gray-50">
                  <SelectValue placeholder={field.placeholder || 'Please Select'} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        ) : field.type === 'checkbox' ? (
          <div className="flex items-start space-x-2">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox id={field.name} checked={value} onCheckedChange={onChange} />
              )}
            />
            {field.helperText && (
              <Label htmlFor={field.name} className="text-sm text-gray-500">
                {field.helperText}
              </Label>
            )}
          </div>
        ) : field.type === 'file' ? (
          <div className="space-y-2">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Input
                  id={field.name}
                  type="file"
                  onChange={(e) => onChange(e.target.files)}
                  {...rest}
                />
              )}
            />
            {field.helperText && (
              <span className="text-sm text-gray-500">{field.helperText}</span>
            )}
          </div>
        ) : (
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full"
            {...register(field.name)}
          />
        )}

        {error && <p className="text-sm text-red-500">{error as string}</p>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fields.map(renderField)}
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}

