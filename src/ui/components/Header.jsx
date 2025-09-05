import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
export function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <header className="header">
      <Link to="/" className="nav-link">My shop</Link>
      <nav className="nav">
        <Link to="/cart" className="nav-link">Giỏ hàng ({cartCount})</Link>
      </nav>
    </header>
  );
}
