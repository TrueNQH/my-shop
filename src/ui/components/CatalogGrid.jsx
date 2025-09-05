import { useState } from "react";
import React from "react";
import { ProductCard } from "./ProductCard";

export function CatalogGrid({ products = [], onAdd }) {
  const [page, setPage] = useState(1);
  let totalPages =  products.length / 6
  return (
    <>
      <section className="grid">
      {products.length === 0 && <p className="muted">Không có sản phẩm phù hợp.</p>}
      {products.map((p,i)=>(i >= (page - 1) * 6 && i < page * 6 ?<ProductCard key={p.id} product={p} onAdd={onAdd}/> : null))}
    </section>
    <section className="pagination">
      <button className="btn" disabled={page<=1} onClick={()=>setPage(page - 1)}>Trước</button>
      <span>Trang {page}/{Math.round(totalPages)}</span> 
      <button className="btn" disabled={page>=totalPages} onClick={() => setPage(page + 1)}>Sau</button>
    </section>    
    </>
    
  );
}