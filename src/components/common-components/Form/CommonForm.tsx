"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { TextField } from "./FormFilelds/TextFiled";
import { SelectField } from "./FormFilelds/SelectFiled";
import { FileField } from "./FormFilelds/FileField";
import { FormSection } from "./FormSection";

export interface ProductFormData {
  productName: string;
  itemCode: string;
  barcodeType: string;
  unit: string;
  brand: string;
  category: string;
  subCategory: string;
  businessLocation: string;
  alertQuantity: number;
  productType: string;
  productImage: File | null;
}

export interface CommonFormProps {
  initialValues: ProductFormData;
  onSubmit: (values: ProductFormData) => void;
}

const validationSchema = Yup.object({
  productName: Yup.string().required("Product Name is required"),
  itemCode: Yup.string().required("Item Code is required"),
  barcodeType: Yup.string().required("Barcode Type is required"),
  unit: Yup.string().required("Unit is required"),
  brand: Yup.string(),
  category: Yup.string(),
  subCategory: Yup.string(),
  businessLocation: Yup.string(),
  alertQuantity: Yup.number().min(0, "Must be 0 or greater"),
  productType: Yup.string(),
  productImage: Yup.mixed<File>()
    .nullable()
    .test("fileSize", "File too large", (value) => {
      if (!value) return true; // No file uploaded
      return (value as File).size <= 5000000; // Explicit cast
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      if (!value) return true; // No file uploaded
      return ["image/jpeg", "image/png", "image/jpg"].includes(
        (value as File).type
      ); // Explicit cast
    }),
});

const barcodeOptions = [
  { value: "code128", label: "Code 128 (C128)" },
  { value: "ean13", label: "EAN 13" },
  { value: "upc", label: "UPC" },
];

const unitOptions = [
  { value: "pieces", label: "Pieces" },
  { value: "kg", label: "Kilograms" },
  { value: "liters", label: "Liters" },
];

const brandOptions = [
  { value: "brand1", label: "Brand 1" },
  { value: "brand2", label: "Brand 2" },
  { value: "brand3", label: "Brand 3" },
];

const categoryOptions = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
];

const subCategoryOptions = [
  { value: "sub1", label: "Sub Category 1" },
  { value: "sub2", label: "Sub Category 2" },
  { value: "sub3", label: "Sub Category 3" },
];

const productTypeOptions = [
  { value: "single", label: "Single" },
  { value: "variable", label: "Variable" },
  { value: "combo", label: "Combo" },
];

export const CommonForm: React.FC<CommonFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-6">
          <FormSection>
            <TextField
              name="productName"
              label="Product Name*"
              placeholder="Product Name"
            />
            <div className="space-y-2">
              <TextField
                name="itemCode"
                label="Item Code:"
                placeholder="Item Code"
              />
            </div>
            <SelectField
              name="barcodeType"
              label="Barcode Type*"
              options={barcodeOptions}
            />
          </FormSection>

          <FormSection>
            <SelectField name="unit" label="Unit*" options={unitOptions} />
            <SelectField name="brand" label="Brand:" options={brandOptions} />
            <SelectField
              name="category"
              label="Category:"
              options={categoryOptions}
            />
          </FormSection>

          <FormSection>
            <SelectField
              name="subCategory"
              label="Sub Category:"
              options={subCategoryOptions}
            />
            <div className="space-y-2">
              <TextField name="businessLocation" label="Business Location:" />
            </div>
            <div className="space-y-2">
              <TextField
                name="alertQuantity"
                label="Alert Quantity"
                placeholder="Alert quantity"
                type="number"
              />
            </div>
          </FormSection>

          <FormSection>
            <SelectField
              name="productType"
              label="Product Type:"
              options={productTypeOptions}
            />
            <FileField
              name="productImage"
              label="Product Image:"
              accept="image/*"
            />
          </FormSection>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
