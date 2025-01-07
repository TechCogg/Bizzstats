import { useField } from 'formik';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FC } from 'react';

interface FileFieldProps {
  name: string;
  label: string;
  accept?: string;
}

export const FileField: FC<FileFieldProps> = ({ name, label, accept }) => {
  const [, , helpers] = useField(name);

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm">{label}</Label>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="secondary"
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => document.getElementById(name)?.click()}
        >
          Browse...
        </Button>
        <input
          id={name}
          name={name}
          type="file"
          className="hidden"
          onChange={(event) => {
            helpers.setValue(event.currentTarget.files?.[0]);
          }}
          accept={accept}
        />
      </div>
      <div className="text-xs text-gray-500">
        <p>Max File Size : 5MB</p>
        <p>Aspect Ratio should be 1:1</p>
      </div>
    </div>
  );
};

