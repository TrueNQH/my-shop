import React from "react";
export function CartTable({ items = [], total = 0, onQtyChange, onRemove, onClear }) {
  return (
    <section className="cart-wrap">
      {items.length===0 ? (<div><p className="muted">Giỏ hàng trống.</p></div>) : (<>
        <table className="cart">
          <thead><tr><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tạm tính</th><th></th></tr></thead>
          <tbody>{items.map((it)=>(
            <tr key={it.id}>
              <td className="cart-prod"><img src={it.image} alt={it.title}/><span>{it.title}</span></td>
              <td>{it.price} đ</td>
              <td><input type="number" min="1" className="qty" value={it.qty} onChange={(e)=>onQtyChange(it.id,Number(e.target.value))} /></td>
              <td>{it.lineTotal} đ</td>
              <td><button className="btn danger" onClick={()=>onRemove(it.id)}>Xóa</button></td>
            </tr>))}</tbody>
        </table>
        <div className="checkout"><div>Tổng cộng: <b>{total} đ</b></div>
          <div className="row"><button className="btn danger" onClick={onClear}>Xoá giỏ</button></div>
        </div>
      </>) }
    </section>
  );
}