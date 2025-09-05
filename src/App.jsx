import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

import { CatalogGrid } from "./ui/components/CatalogGrid";
import { ProductDetailView } from "./ui/components/ProductDetailView";
import { CartTable } from "./ui/components/CartTable";
 import { Route, Routes } from "react-router-dom";
 import { FiltersBar } from "./ui/components/FiltersBar";
const mockProducts = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Sản phẩm #${i + 1}`,
  price: 120000 + i * 10000,
  category: i % 2 ? "Áo" : "Quần",
  image: `https://picsum.photos/seed/ui${i}/300/200`,
})); //mockProducts = [{id:1,title:"Sản phẩm #1",price:120000,category:"Áo",image:"https://picsum.photos/seed/ui0/300/200"},...{id:30,...}]

export default function App() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(0);
  const { cart, addToCart, removeFromCart, clearCart, changeQty } = useCart();

useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
       
      setProducts(data.products.map((p, i) => ({
        ...p,
        image: `https://picsum.photos/seed/ui${i}/300/200`
      })));
    });
}, []);
const categories = ["All"];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
  const filteredProducts = products.filter(product => {
  let dungTuKhoa = true;
  if (q !== "") {
    dungTuKhoa = product.title.toLowerCase().includes(q.toLowerCase());
  }

  let dungDanhMuc = true;
  if (selectedCategory !== "All") {
    dungDanhMuc = product.category == selectedCategory;
  }

  let dungGia = true;
  if (maxPrice > 0) {
    dungGia = product.price <= maxPrice;
  }
  return dungTuKhoa && dungDanhMuc && dungGia;
});
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <FiltersBar
              q={q}
              onChangeQ={setQ}
              categories={categories}
              selectedCategory={selectedCategory}
              onChangeCategory={setSelectedCategory}
              maxPrice={maxPrice}
              onChangeMaxPrice={setMaxPrice}
            />
            <CatalogGrid products={filteredProducts} onAdd={(id)=>{
              const prod = products.find(p=>p.id===id);
              if (prod) addToCart(prod);
            }} />
          </>
        }
      />
      <Route path="/cart" element={
        <CartTable
          items={cart.map(item => ({
            ...item,
            lineTotal: item.price * item.qty
          }))}
          total={cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
          onQtyChange={changeQty}
          onRemove={removeFromCart}
          onClear={clearCart}
          onCheckout={()=>{}}
          onBack={()=>{}}
        />
      } />
      <Route path="/product/:id" element={
        <ProductDetailView
          product={products}
          onAdd={(id)=>{
            const prod = products.find(p=>p.id===id);
            if (prod) addToCart(prod);
          }}
          onBack={()=>{}}
        />
      } />
    </Routes>
  );
}