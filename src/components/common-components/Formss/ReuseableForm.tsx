import React from "react";
import {
  useForm,
  UseFormReturn,
  Path,
  FieldValues,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoIcon } from 'lucide-react';

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "select"
    | "checkbox"
    | "file";
  placeholder?: string;
  required?: boolean;
  hasInfoIcon?: boolean;
  options?: string[];
  helperText?: string;
}

interface ReusableFormProps<T extends FieldValues> {
  fields: FormFieldProps<T>[];
  schema: ZodType<T>;
  onFormStateChange: (methods: UseFormReturn<T>) => void;
}

export function ReusableForm<T extends FieldValues>({
  fields,
  schema,
  onFormStateChange,
}: ReusableFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onChange", 
  });

  const {
    control,
    formState: { errors },
    trigger,
    register,
  } = methods;

  React.useEffect(() => {
    onFormStateChange(methods);
  }, [methods, onFormStateChange]);

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

        {field.type === "select" ? (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onValueChange={(newValue) => {
                  onChange(newValue);
                  trigger(field.name);
                }}
                value={value}
              >
                <SelectTrigger className="w-full bg-gray-50">
                  <SelectValue
                    placeholder={field.placeholder || "Please Select"}
                  />
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
        ) : field.type === "checkbox" ? (
          <div className="flex items-start space-x-2">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  id={field.name}
                  checked={value}
                  onCheckedChange={(newValue) => {
                    onChange(newValue);
                    trigger(field.name);
                  }}
                />
              )}
            />
            {field.helperText && (
              <Label htmlFor={field.name} className="text-sm text-gray-500">
                {field.helperText}
              </Label>
            )}
          </div>
        ) : field.type === "file" ? (
          <div className="space-y-2">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Input
                  id={field.name}
                  type="file"
                  onChange={(e) => {
                    onChange(e.target.files);
                    trigger(field.name);
                  }}
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
            {...register(field.name, {
              onChange: () => trigger(field.name),
            })}
          />
        )}

        {error && <p className="text-sm text-red-500">{error as string}</p>}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(renderField)}
      </div>
    </div>
  );
}
