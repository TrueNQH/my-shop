
import { Link } from "react-router-dom";
export function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.title} className="thumb" />
      <div className="card-body">
        <h3 className="title">{product.title}</h3>
        <p className="price">{product.price} $</p>
        <p className="muted">{product.category}</p>
        <div className="row">
          <Link className="btn link" to={`/product/${product.id}`}>Chi Tiết</Link>
         
          <button className="btn" onClick={()=>{
          if (typeof onAdd === "function") {
            onAdd(product.id);
          }
        }}>Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  );
}