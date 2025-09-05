
import { useParams } from "react-router-dom";

export function ProductDetailView({ product, onAdd }) {
  const {id} = useParams()
  if (!product) return null;
  return (
    <section className="detail">
      {
       (product).map((p => {
          if (p.id == id) {
             return (
            <>
            <img src={p.image} alt={p.title} className="detail-img" />
      <div className="detail-info">
        <h2>{p.title}</h2>
        <p className="price big">{p.price} đ</p>
        <p>Danh mục: <b>{p.category}</b></p>
        <div className="row">
          <button className="btn" onClick={()=>onAdd(p.id)}>Thêm vào giỏ</button>
         
        </div>
      </div>
            </>
          )
          }
         
        }))
      }
      
    </section>
  );
}