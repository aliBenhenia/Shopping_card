import {useContext} from 'react'
import {CartContext} from "./ProviderCart"
export default function Cart() {
    const { cartItems,removeFromCart } = useContext(CartContext);
  
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} ({item.title}) {item.md}
              <button onClick={() =>removeFromCart(item)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }