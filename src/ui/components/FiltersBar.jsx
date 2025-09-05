
export function FiltersBar({ q, onChangeQ, categories = [], selectedCategory, onChangeCategory, maxPrice, onChangeMaxPrice }) {
    
  
  return (
    <section className="filters">
      <input className="input" placeholder="Tìm kiếm..." value={q} onChange={(e)=>onChangeQ(e.target.value)} />
      <select className="select" value={selectedCategory} onChange={(e)=>onChangeCategory(e.target.value)}>
        {categories.map((c)=>(<option key={c} value={c}>{c}</option>))}
      </select>
      <input type="number" className="input" placeholder="Giá tối đa (VND)" value={maxPrice} onChange={(e)=>onChangeMaxPrice(Number(e.target.value)||0)} />
    </section>
  );
}