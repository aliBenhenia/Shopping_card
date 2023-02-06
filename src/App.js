import {CartProvider,CartContext} from "./components/ProviderCart"
import React, { useState, useContext ,createContext, useEffect}from 'react';
import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Pagination } from 'antd';
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json.products[0].description)
        setData(json.products) })
      .catch(error => setError(error));
  }, []);
  if (!data)
     return (<div>errrrrror</div>)
  return (
    <div className = "container">
        <CartProvider >
          <Header/>
             <div className="row">
             {
              data.map((item,idx)=>{
              return(
                      <Product
                        key = {idx} 
                        title = {item.title}
                        description = {item.description}
                        imgs = {item.images}
                        />);
              })
             }
             </div>
             
          <Cart />
          <Pagination defaultCurrent={1} total={50} />
        </CartProvider>
    </div>
  );
}
export default App;

