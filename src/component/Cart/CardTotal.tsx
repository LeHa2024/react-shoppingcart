import { formatPrice } from "../../utils/Format";
import "./CardTotal.css";

type CartTotalProps = {
  total: number;
  clearCart: () => void;
};

export default function CardTotal({ total, clearCart }: CartTotalProps) {
  return (
    <div className="cart-footer">
      <div className="cart-total">
        <div className="label">Total</div>
        <div className="value">{formatPrice(total)}</div>
      </div>
      <div className="cart-action">
        <button className="clear" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
