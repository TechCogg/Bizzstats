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
  currentItems: ItemProducts[];
  selectedItems: string[];
  toggleSelectAll: () => void;
  toggleSelectItem: (id: string) => void;
  businessLocations: { id: string; locations: string | string[] }[];
}

export function ProductTable({
  currentItems,
  selectedItems,
  toggleSelectAll,
  toggleSelectItem,
  businessLocations,
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
        {currentItems.map((product) => {
          const productLocations = businessLocations.find(bl => bl.id === product.id)?.locations;
          const formattedLocations = Array.isArray(productLocations) 
            ? productLocations.join(', ') 
            : productLocations || 'N/A';

          return (
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
              <TableCell>{formattedLocations}</TableCell>
              <TableCell>$ {product.incTax}</TableCell>
              <TableCell>$ {product.incTax}</TableCell>
              <TableCell>{product.alertQuantity}</TableCell>
              <TableCell>{product.productType}</TableCell>
              <TableCell>{product.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

