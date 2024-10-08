import { ChevronDown, ChevronUp } from "lucide-react";
import "./CardItem.css";
import { formatPrice } from "../../utils/Format";

export type CartItemObject = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartItemProps = {
  item: CartItemObject;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};
export default function CartItem({
  item,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}: CartItemProps) {
  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <div className="product-image">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="product-info">
          <div className="product-title">{item.title}</div>
          <div className="product-price">{formatPrice(item.price)}</div>
          <button
            className="cart-item__remove"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item_quantity">
        <div className="increase" onClick={() => increaseQuantity(item.id)}>
          <ChevronUp />
        </div>
        <div className="quantity">{item.quantity}</div>
        <div className="decrease" onClick={() => decreaseQuantity(item.id)}>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
