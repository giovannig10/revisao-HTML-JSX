'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
    
    // Toast de boas-vindas
    toast.success('Bem-vindo à ElectroStore! 🎉', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Toast informativo após 1.5 segundos
    setTimeout(() => {
      toast.info('Explore nossos produtos e adicione ao carrinho! 🛒', {
        position: "bottom-right",
        autoClose: 4000,
      });
    }, 1500);
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
