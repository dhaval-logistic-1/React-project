import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList';


export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");


  useEffect(() => {
    console.log("API CALL");
    
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
      console.log("Filtering running...")
      
    )
    .filter((p) =>
      category ? p.category === category : true
    );

    

  return (
    <div>
      <h2>Product Store with out Usememo</h2>

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
