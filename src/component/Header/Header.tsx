import { ShoppingCart } from "lucide-react";
import "./header.css";

type HeaderProps = {
  cartCount: number;
};

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">My Shop</div>
          <div className="cart-icon">
            <ShoppingCart strokeWidth={1} size={24} />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
