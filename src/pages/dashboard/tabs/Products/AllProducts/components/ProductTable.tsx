import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { ItemProducts } from "@/services/hooks/products/quries/useGetProducts/interface";

interface ProductTableProps {
  currentItems: ItemProducts[]; // Using your existing ItemProducts interface
  selectedItems: string[];
  toggleSelectAll: () => void;
  toggleSelectItem: (id: string) => void;
}

export function ProductTable({
  currentItems,
  selectedItems,
  toggleSelectAll,
  toggleSelectItem,
}: ProductTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Checkbox
              checked={selectedItems.length === currentItems.length}
              onCheckedChange={toggleSelectAll}
            />
          </TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Business Location</TableHead>
          <TableHead>Unit Purchase Price</TableHead>
          <TableHead>Selling Price</TableHead>
          <TableHead>Current Stock</TableHead>
          <TableHead>Product Type</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentItems.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Checkbox
                checked={selectedItems.includes(product.id)}
                onCheckedChange={() => toggleSelectItem(product.id)}
              />
            </TableCell>
            <TableCell>
              <Image
                src={product.productImage || "/default-image.png"}
                alt={product.productName}
                width={40}
                height={40}
                className="rounded-md"
              />
            </TableCell>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.businessLocation}</TableCell>
            <TableCell>$ {product.incTax}</TableCell>
            <TableCell>$ {product.incTax}</TableCell>
            <TableCell>{product.alertQuantity}</TableCell>
            <TableCell>{product.productType}</TableCell>
            <TableCell>{product.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
