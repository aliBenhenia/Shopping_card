import {useContext} from 'react'
import {CartContext} from "./ProviderCart"
import {Avatar, List} from 'antd';
export default function Cart() {
    const { cartItems,removeFromCart } = useContext(CartContext);
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    return (
      <div>
        <h2>Cart</h2>
        
        <ul className='list-group'>
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              ({item.title}) 
              
              <button className='btn btn-danger ml-3' onClick={() =>removeFromCart(item)}>remove</button>
              <button className='btn btn-success ml-3'>Buy</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }