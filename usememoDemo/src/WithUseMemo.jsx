import React, { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";

export default function WithUseMemo() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      console.log("API CALL");

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering running...");

    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category ? p.category === category : true));
  }, [products, search, category]);

  return (
    <div>
      <h2>Product Store with UseMemo</h2>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
      </select>

      <ProductList products={filteredProducts} />

      <input
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
