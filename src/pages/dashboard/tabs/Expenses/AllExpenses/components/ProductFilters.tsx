import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterProps {
  filters: {
    name: string;
    category: string;
    unit: string;
    tax: string;
    brand: string;
    location: string;
    notForSelling: boolean;
  };
  handleFilterChange: (key: string, value: string | boolean) => void;
  products: any[];
  allCategories: string[];
  allLocations: string[];
}

export function ProductFilters({ filters, handleFilterChange, products, allCategories, allLocations }: FilterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Product Name Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Product Name:</label>
        <Select
          value={filters.name}
          onValueChange={(value) => handleFilterChange("name", value)}
        >
          <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            <SelectItem value="All" className="hover:bg-gray-100 p-2 rounded">All</SelectItem>
            {products.map((p) => (
              <SelectItem key={p.id} value={p.name} className="hover:bg-gray-100 p-2 rounded">
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Category Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Category:</label>
        <Select
          value={filters.category}
          onValueChange={(value) => handleFilterChange("category", value)}
        >
          <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            {allCategories.map((category) => (
              <SelectItem key={category} value={category} className="hover:bg-gray-100 p-2 rounded">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
       {/* Unit Dropdown */}
       <div className="space-y-2">
                <label className="text-sm font-medium">Unit:</label>
                <Select
                  value={filters.unit}
                  onValueChange={(value) => handleFilterChange("unit", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tax Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Tax:</label>
                <Select
                  value={filters.tax}
                  onValueChange={(value) => handleFilterChange("tax", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Brand Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Brand:</label>
                <Select
                  value={filters.brand}
                  onValueChange={(value) => handleFilterChange("brand", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business Location Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Business Location:
                </label>
                <Select
                  value={filters.location}
                  onValueChange={(value) =>
                    handleFilterChange("location", value)
                  }
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    {allLocations.map((location) => (
                      <SelectItem
                        key={location}
                        value={location}
                        className="hover:bg-gray-100 p-2 rounded"
                      >
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


      {/* ... (other filter dropdowns) ... */}

      {/* Not For Selling Checkbox */}
      <div className="flex items-center space-x-2 pt-8">
        <Checkbox
          id="not-selling"
          checked={filters.notForSelling}
          onCheckedChange={(checked) => handleFilterChange("notForSelling", checked as boolean)}
        />
        <label htmlFor="not-selling" className="text-sm font-medium">
          Not For Selling
        </label>
      </div>
    </div>
  );
}

