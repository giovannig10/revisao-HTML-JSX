'use client';

import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
  }, []);

  return (
    <div>
      <div className="header">
        <h1>🛒 Loja de Eletrônicos</h1>
        <p>Os melhores produtos com os melhores preços!</p>
        <p>📊 Total de produtos: <span>{totalProducts}</span></p>
      </div>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
