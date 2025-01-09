"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { TextField } from "./FormFilelds/TextFiled";
import { SelectField } from "./FormFilelds/SelectFiled";
import { FileField } from "./FormFilelds/FileField";
import { FormSection } from "./FormSection";
import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

export interface ProductFormData {
  productName?: string;
  itemCode?: string;
  barcodeType?: string;
  unit?: string;
  brand?: string;
  category?: string;
  subCategory?: string;
  businessLocation?: string;
  alertQuantity?: number;
  productType?: string;
  productImage?: File | null;
  // New fields from tax information section
  applicableTax?: string;
  sellingPriceTaxType?: string;
  exctax?: number;
  incTax?: number;
  margin?: number;
  excTax?: number;
}

export interface CommonFormProps {
  initialValues: ProductFormData;
  onSubmit: (values: ProductFormData) => void;
  includedFields: (keyof ProductFormData)[];
}

const fieldOptions = {
  barcodeType: [
    { value: "code128", label: "Code 128 (C128)" },
    { value: "ean13", label: "EAN 13" },
    { value: "upc", label: "UPC" },
  ],
  unit: [
    { value: "pieces", label: "Pieces" },
    { value: "kg", label: "Kilograms" },
    { value: "liters", label: "Liters" },
  ],
  brand: [
    { value: "brand1", label: "Brand 1" },
    { value: "brand2", label: "Brand 2" },
    { value: "brand3", label: "Brand 3" },
  ],
  category: [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ],
  subCategory: [
    { value: "sub1", label: "Sub Category 1" },
    { value: "sub2", label: "Sub Category 2" },
    { value: "sub3", label: "Sub Category 3" },
  ],
  productType: [
    { value: "single", label: "Single" },
    { value: "variable", label: "Variable" },
    { value: "combo", label: "Combo" },
  ],
  // New options for tax information fields
  applicableTax: [
    { value: "none", label: "None" },
    { value: "vat", label: "VAT" },
    { value: "gst", label: "GST" },
  ],
  sellingPriceTaxType: [
    { value: "exclusive", label: "Exclusive" },
    { value: "inclusive", label: "Inclusive" },
  ],
};

const generateValidationSchema = (includedFields: (keyof ProductFormData)[]) => {
  const schema: { [key: string]: any } = {};

  if (includedFields.includes('productName')) {
    schema.productName = Yup.string().required("Product Name is required");
  }
  if (includedFields.includes('itemCode')) {
    schema.itemCode = Yup.string().required("Item Code is required");
  }
  if (includedFields.includes('barcodeType')) {
    schema.barcodeType = Yup.string().required("Barcode Type is required");
  }
  if (includedFields.includes('unit')) {
    schema.unit = Yup.string().required("Unit is required");
  }
  if (includedFields.includes('brand')) {
    schema.brand = Yup.string();
  }
  if (includedFields.includes('category')) {
    schema.category = Yup.string();
  }
  if (includedFields.includes('subCategory')) {
    schema.subCategory = Yup.string();
  }
  if (includedFields.includes('businessLocation')) {
    schema.businessLocation = Yup.string();
  }
  if (includedFields.includes('alertQuantity')) {
    schema.alertQuantity = Yup.number().min(0, "Must be 0 or greater");
  }
  if (includedFields.includes('productType')) {
    schema.productType = Yup.string();
  }
  if (includedFields.includes('productImage')) {
    schema.productImage = Yup.mixed<File>()
      .nullable()
      .test("fileSize", "File too large", (value) => {
        if (!value) return true;
        return (value as File).size <= 5000000;
      })
      .test("fileFormat", "Unsupported Format", (value) => {
        if (!value) return true;
        return ["image/jpeg", "image/png", "image/jpg"].includes(
          (value as File).type
        );
      });
  }
  // New validation rules for tax information fields
  if (includedFields.includes('applicableTax')) {
    schema.applicableTax = Yup.string();
  }
  if (includedFields.includes('sellingPriceTaxType')) {
    schema.sellingPriceTaxType = Yup.string().required("Selling Price Tax Type is required");
  }
  if (includedFields.includes('exctax')) {
    schema.exctax = Yup.number().min(0, "Must be 0 or greater");
  }
  if (includedFields.includes('margin')) {
    schema.margin = Yup.number().min(0, "Must be 0 or greater");
  }
  if (includedFields.includes('excTax')) {
    schema.excTax = Yup.number().min(0, "Must be 0 or greater");
  }
  if (includedFields.includes('incTax')) {
    schema.incTax = Yup.number().min(0, "Must be 0 or greater");
  }

  return Yup.object(schema);
};

export const CommonForm: FC<CommonFormProps> = ({
  initialValues,
  onSubmit,
  includedFields,
}) => {
  const validationSchema = generateValidationSchema(includedFields);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-6">
          <FormSection>
            {includedFields.includes('productName') && (
              <TextField
                name="productName"
                label="Product Name*"
                placeholder="Product Name"
              />
            )}
            {includedFields.includes('itemCode') && (
              <TextField
                name="itemCode"
                label="Item Code*"
                placeholder="Item Code"
              />
            )}
            {includedFields.includes('barcodeType') && (
              <SelectField
                name="barcodeType"
                label="Barcode Type*"
                options={fieldOptions.barcodeType}
              />
            )}
      

            {includedFields.includes('unit') && (
              <SelectField name="unit" label="Unit*" options={fieldOptions.unit} />
            )}
            {includedFields.includes('brand') && (
              <SelectField name="brand" label="Brand:" options={fieldOptions.brand} />
            )}
            {includedFields.includes('category') && (
              <SelectField
                name="category"
                label="Category:"
                options={fieldOptions.category}
              />
            )}
 

       
            {includedFields.includes('subCategory') && (
              <SelectField
                name="subCategory"
                label="Sub Category:"
                options={fieldOptions.subCategory}
              />
            )}
            {includedFields.includes('businessLocation') && (
              <TextField name="businessLocation" label="Business Location:" />
            )}
            {includedFields.includes('alertQuantity') && (
              <TextField
                name="alertQuantity"
                label="Alert Quantity"
                placeholder="Alert quantity"
                type="number"
              />
            )}
    

          
            {includedFields.includes('productType') && (
              <SelectField
                name="productType"
                label="Product Type:"
                options={fieldOptions.productType}
              />
            )}
           


          {/* New sections for tax information fields */}
     
            {includedFields.includes('applicableTax') && (
              <SelectField
                name="applicableTax"
                label="Applicable Tax:"
                options={fieldOptions.applicableTax}
              />
            )}
            {includedFields.includes('sellingPriceTaxType') && (
              <SelectField
                name="sellingPriceTaxType"
                label="Selling Price Tax Type:*"
                options={fieldOptions.sellingPriceTaxType}
              />
            )}
   

        
            {includedFields.includes('exctax') && (
              <TextField
                name="exctax"
                label="Exc. tax:*"
                placeholder="0.00"
                type="number"
              />
            )}
              {includedFields.includes('incTax') && (
              <TextField
                name="incTax"
                label="Inc. Tax"
                placeholder="0.00"
                type="number"
              />
            )}
            {includedFields.includes('margin') && (
              <TextField
                name="margin"
                label="Margin (%)*"
                placeholder="0.00"
                type="number"
              />
            )}
            {includedFields.includes('excTax') && (
              <TextField
                name="excTax"
                label="Exc. Tax"
                placeholder="0.00"
                type="number"
              />
            )}
             {includedFields.includes('productImage') && (
              <FileField
                name="productImage"
                label="Product Image:"
                accept="image/*"
              />
            )}
           
          </FormSection>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

