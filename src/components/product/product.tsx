import { useState } from "react";

// Types for Product and the props
type Product = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  };
  
  type ProductCategoryRowProps = {
    category: string;
  };
  
  type ProductRowProps = {
    product: Product;
  };
  
  type ProductTableProps = {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
  };
  
  type FilterableProductTableProps = {
    products: Product[];
  };
  
  type SearchBarProps = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (text: string) => void;
    onInStockOnlyChange: (inStock: boolean) => void;
  };
  
  function ProductCategoryRow({ category }: ProductCategoryRowProps) {
    return (
      <tr>
        <th colSpan={2} className="text-left text-xl font-bold py-2">{category}</th>
      </tr>
    );
  }
  
  function ProductRow({ product }: ProductRowProps) {
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="text-red-500">{product.name}</span>
    );
  
    return (
      <tr className="border-t">
        <td className="py-2">{name}</td>
        <td className="py-2">{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;
    
    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1){
            return
        }
        if (inStockOnly && !product.stocked){
            return;
        }
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={product.category} />
            )
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        );
        lastCategory = product.category;
    });
  
    return (
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}: SearchBarProps) {
    return (
      <form className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          className="border p-2 rounded-lg mb-2 w-full"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          Only show products in stock
        </label>
      </form>
    );
  }
  
  function FilterableProductTable({ products }: FilterableProductTableProps) {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
      <div className="max-w-4xl mx-auto p-4">
        <SearchBar inStockOnly={inStockOnly} filterText={filterText} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }
  
  const PRODUCTS: Product[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];
  
  export default function ProductApp() {
    return <FilterableProductTable products={PRODUCTS} />;
  }
  